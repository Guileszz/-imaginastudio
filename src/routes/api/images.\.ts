import { createFileRoute } from '@tanstack/react-router';
import fs from 'fs';
import path from 'path';

export const Route = createFileRoute('/api/images/$filename')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { filename } = params;
        const generatedPath = path.join('/home/team/shared/images/generated', filename);
        const uploadsPath = path.join('/home/team/shared/images/uploads', filename);

        let filePath = '';
        if (fs.existsSync(generatedPath)) {
          filePath = generatedPath;
        } else if (fs.existsSync(uploadsPath)) {
          filePath = uploadsPath;
        } else {
          return new Response('Not Found', { status: 404 });
        }

        const file = fs.readFileSync(filePath);
        const ext = path.extname(filename).toLowerCase();
        let contentType = 'image/png';
        if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        if (ext === '.webp') contentType = 'image/webp';
        if (ext === '.gif') contentType = 'image/gif';

        return new Response(file, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000',
          },
        });
      },
    },
  },
});
