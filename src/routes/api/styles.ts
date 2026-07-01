import { createFileRoute } from '@tanstack/react-router';

const STYLE_MODES = [
  { id: "sombrio", name: "Sombrio", description: "Dramatic shadows, dark tones", icon: "🌑" },
  { id: "realista", name: "Realista", description: "Natural lighting, photoreal", icon: "📸" },
  { id: "anime", name: "Anime", description: "Vibrant colors, cel-shaded", icon: "🌸" },
  { id: "cinematico", name: "Cinematográfico", description: "Film grain, epic lighting", icon: "🎬" },
  { id: "aquarela", name: "Aquarela", description: "Soft washes, paper texture", icon: "🎨" },
  { id: "retro", name: "Retrô", description: "Vintage film, warm tones", icon: "📼" },
  { id: "fantasia", name: "Fantasia", description: "Ethereal, magical glowing", icon: "🧚" },
  { id: "cyberpunk", name: "Cyberpunk", description: "Neon, gritty high-tech", icon: "🏙️" },
];

export const Route = createFileRoute('/api/styles')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json(STYLE_MODES);
      },
    },
  },
});
