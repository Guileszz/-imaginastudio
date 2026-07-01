export interface StyleMode {
  id: string;
  name: string;
  icon: string;
  promptPrefix: string;
  negativePrompt: string;
}

export const STYLE_MODES: Record<string, StyleMode> = {
  sombrio: {
    id: 'sombrio',
    name: 'Sombrio',
    icon: '🌑',
    promptPrefix: 'dark, moody atmosphere, dramatic shadows, high contrast, gothic tones',
    negativePrompt: 'bright, cheerful, colorful, flat lighting',
  },
  realista: {
    id: 'realista',
    name: 'Realista',
    icon: '📷',
    promptPrefix: 'photorealistic, real-world textures, natural lighting, 8K, detailed',
    negativePrompt: 'cartoon, anime, stylized, painting',
  },
  anime: {
    id: 'anime',
    name: 'Anime',
    icon: '🎌',
    promptPrefix: 'anime style, cel-shading, vibrant colors, manga aesthetics, clean lines',
    negativePrompt: 'photorealistic, 3D render, realistic textures',
  },
  cinematografico: {
    id: 'cinematografico',
    name: 'Cinematográfico',
    icon: '🎬',
    promptPrefix: 'cinematic, widescreen, dramatic lighting, film grain, anamorphic, epic composition',
    negativePrompt: 'flat lighting, amateur, snapshot',
  },
  aquarela: {
    id: 'aquarela',
    name: 'Aquarela',
    icon: '🎨',
    promptPrefix: 'watercolor painting, soft washes, organic color bleeding, paper texture, artistic',
    negativePrompt: 'sharp edges, photorealistic, digital art',
  },
  retro: {
    id: 'retro',
    name: 'Retrô',
    icon: '📻',
    promptPrefix: 'vintage, retro style, film era, warm tones, grain texture, nostalgic',
    negativePrompt: 'modern, digital, neon, sleek',
  },
  fantasia: {
    id: 'fantasia',
    name: 'Fantasia',
    icon: '✨',
    promptPrefix: 'fantasy, ethereal, magical lighting, otherworldly, mystical, enchanted',
    negativePrompt: 'modern, realistic, mundane',
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    icon: '🤖',
    promptPrefix: 'cyberpunk, neon lights, high-tech, gritty urban, rain, reflections, futuristic',
    negativePrompt: 'nature, pastoral, historical, bright daylight',
  },
};
