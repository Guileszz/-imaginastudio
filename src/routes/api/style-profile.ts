import { createFileRoute } from '@tanstack/react-router';
import { getStyleProfile } from '../../lib/styleMemory';

export const Route = createFileRoute('/api/style-profile')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const profile = getStyleProfile();
          return Response.json(profile);
        } catch (error) {
          return Response.json({ error: 'Failed to fetch style profile' }, { status: 500 });
        }
      },
    },
  },
});
