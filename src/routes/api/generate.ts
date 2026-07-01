import { createFileRoute } from '@tanstack/react-router';
import { generateImage } from '../../lib/imageEngine';

export const Route = createFileRoute('/api/generate')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json();
        const { prompt, styleId } = body;

        if (!prompt || !styleId) {
          return new Response(JSON.stringify({ error: 'Prompt and styleId are required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        try {
          const generation = await generateImage(prompt, styleId);
          return Response.json(generation);
        } catch (error: any) {
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      },
    },
  },
});
