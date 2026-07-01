import { createFileRoute } from '@tanstack/react-router';
import { STYLE_MODES } from '../../lib/styles';

export const Route = createFileRoute('/api/styles')({
  loader: async () => {
    return Object.values(STYLE_MODES);
  },
  // In TanStack Start, if this route is hit, it might try to render a component.
  // But we want it to be an API.
  component: () => null,
});
