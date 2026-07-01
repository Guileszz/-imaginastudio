import { execSync } from 'child_process';
import { STYLE_MODES } from './styles';
import { getStyleMemoryPrompt } from './styleMemory';

export async function generateImage(prompt: string, styleId: string) {
  const style = STYLE_MODES[styleId];
  if (!style) throw new Error('Invalid style ID');

  const memoryPrompt = getStyleMemoryPrompt();
  const fullPrompt = `${style.promptPrefix}, ${prompt}, ${memoryPrompt}`.trim();
  const negativePrompt = style.negativePrompt;

  const id = Math.random().toString(36).substring(2, 11);
  
  // Save to team-db
  const sql = `INSERT INTO generations (id, prompt, style_id, status) VALUES ('${id}', '${fullPrompt.replace(/'/g, "''")}', '${styleId}', 'pending')`;
  try {
    execSync(`team-db "${sql}"`);
  } catch (error) {
    console.error('Error saving to team-db:', error);
  }

  return {
    id,
    prompt: fullPrompt,
    negativePrompt,
    status: 'pending',
    created_at: new Date().toISOString(),
  };
}

export function getGeneratedImageUrl(filename: string) {
  return `/api/images/${filename}`;
}
