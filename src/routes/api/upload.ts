import { createFileRoute } from '@tanstack/react-router';
import fs from 'fs';
import path from 'path';
import { updateStyleProfile } from '../../lib/styleMemory';

export const Route = createFileRoute('/api/upload')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
          return new Response(JSON.stringify({ error: 'No file uploaded' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const filename = `${Date.now()}-${file.name}`;
        const filePath = path.join('/home/team/shared/images/uploads', filename);

        const arrayBuffer = await file.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

        const analysis = {
          moodKeywords: ['custom-style', 'user-content'],
          lastUpdated: new Date().toISOString(),
        };
        
        updateStyleProfile(analysis);

        return new Response(JSON.stringify({ 
          success: true, 
          filename,
          url: `/api/images/${filename}`
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      },
    },
  },
});
