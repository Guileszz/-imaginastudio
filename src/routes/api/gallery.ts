import { createFileRoute } from '@tanstack/react-router';
import fs from 'fs';
import path from 'path';

export const Route = createFileRoute('/api/gallery')({
  server: {
    handlers: {
      GET: async () => {
        const uploadDir = '/home/team/shared/images/uploads';
        
        if (!fs.existsSync(uploadDir)) {
          return Response.json([]);
        }

        try {
          const files = fs.readdirSync(uploadDir);
          const images = files.map(file => ({
            id: file,
            url: `/api/images/${file}`,
            name: file
          }));
          
          return Response.json(images);
        } catch (error) {
          return Response.json({ error: 'Failed to read gallery' }, { status: 500 });
        }
      },
    },
  },
});
