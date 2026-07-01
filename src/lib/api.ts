import { createServerFn } from '@tanstack/react-start';
import fs from 'fs';
import path from 'path';
import { STYLE_MODES } from './styles';
import { getStyleMemoryPrompt, updateStyleProfile } from './styleMemory';
import { generateImage as engineGenerateImage } from './imageEngine';

const UPLOADS_DIR = '/home/team/shared/images/uploads';
const GENERATED_DIR = '/home/team/shared/images/generated';

// Ensure directories exist
try { fs.mkdirSync(UPLOADS_DIR, { recursive: true }); } catch {}
try { fs.mkdirSync(GENERATED_DIR, { recursive: true }); } catch {}

export const generateImage = createServerFn({ method: 'POST' })
  .validator((data: unknown) => data as { prompt: string; styleId: string })
  .handler(async ({ data }) => {
    const { prompt, styleId } = data;

    if (!prompt || !styleId) {
      throw new Error('Prompt and styleId are required');
    }

    return await engineGenerateImage(prompt, styleId);
  });

export const uploadReference = createServerFn({ method: 'POST' })
  .validator((data: unknown) => data as { file: File })
  .handler(async ({ data }) => {
    const { file } = data;

    if (!file) {
      throw new Error('No file uploaded');
    }

    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(UPLOADS_DIR, filename);

    const arrayBuffer = await file.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

    const analysis = {
      moodKeywords: ['custom-style', 'user-content'],
      lastUpdated: new Date().toISOString(),
    };

    updateStyleProfile(analysis);

    return {
      success: true,
      filename,
      url: `/api/images/${filename}`,
    };
  });

export const getGallery = createServerFn({ method: 'GET' })
  .handler(async () => {
    const files: { filename: string; date: string }[] = [];
    
    if (fs.existsSync(GENERATED_DIR)) {
      const entries = fs.readdirSync(GENERATED_DIR);
      for (const entry of entries) {
        if (!entry.endsWith('.png') && !entry.endsWith('.jpg') && !entry.endsWith('.jpeg')) continue;
        const stat = fs.statSync(path.join(GENERATED_DIR, entry));
        files.push({ 
          filename: entry, 
          url: `/api/images/${entry}`,
          date: stat.mtime.toISOString() 
        });
      }
    }

    return { images: files.slice(-20).reverse() };
  });

export const getStyleProfileData = createServerFn({ method: 'GET' })
  .handler(async () => {
    const profile = getStyleMemoryPrompt();
    return { profile };
  });

export const getStyleModes = createServerFn({ method: 'GET' })
  .handler(async () => {
    return Object.values(STYLE_MODES).map(s => ({
      id: s.id,
      name: s.name,
      icon: s.icon,
      promptPrefix: s.promptPrefix,
    }));
  });