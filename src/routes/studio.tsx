import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/studio")({
  component: Studio,
});

type StyleMode = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

const STYLE_MODES: StyleMode[] = [
  { id: "sombrio", name: "Sombrio", description: "Dramatic shadows, dark tones", icon: "🌑" },
  { id: "realista", name: "Realista", description: "Natural lighting, photoreal", icon: "📸" },
  { id: "anime", name: "Anime", description: "Vibrant colors, cel-shaded", icon: "🌸" },
  { id: "cinematico", name: "Cinematográfico", description: "Film grain, epic lighting", icon: "🎬" },
  { id: "aquarela", name: "Aquarela", description: "Soft washes, paper texture", icon: "🎨" },
  { id: "retro", name: "Retrô", description: "Vintage film, warm tones", icon: "📼" },
  { id: "fantasia", name: "Fantasia", description: "Ethereal, magical glowing", icon: "🧚" },
  { id: "cyberpunk", name: "Cyberpunk", description: "Neon, gritty high-tech", icon: "🏙️" },
];

function Studio() {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(STYLE_MODES[0].id);
  const [isGenerating, setIsGenerating] = useState(false);
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedImage("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop");
    }, 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setReferenceImage(url);
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar - History */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <h2 className="font-semibold">Recent History</h2>
          <span className="text-xs text-gray-500">2/100</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="aspect-square rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
          <div className="aspect-square rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
        </div>
      </aside>

      {/* Main Studio Area */}
      <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-5xl p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column - Controls */}
            <div className="space-y-8">
              <section>
                <label className="block text-sm font-semibold mb-2">1. Your Prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want to see..."
                  className="w-full h-32 rounded-xl border border-gray-200 bg-white p-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-900 dark:focus:border-indigo-400 outline-none transition-all resize-none"
                />
              </section>

              <section>
                <label className="block text-sm font-semibold mb-2">2. Reference Image (Optional)</label>
                <div 
                  className={`relative aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center p-6 transition-colors ${referenceImage ? 'border-indigo-500 bg-indigo-50/10' : 'border-gray-200 hover:border-indigo-400 dark:border-gray-800 dark:hover:border-indigo-600'}`}
                >
                  {referenceImage ? (
                    <div className="relative w-full h-full">
                      <img src={referenceImage} alt="Reference" className="w-full h-full object-cover rounded-lg" />
                      <button 
                        onClick={() => setReferenceImage(null)}
                        className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/70"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-3xl mb-2">📁</div>
                      <p className="text-xs text-gray-500 text-center">
                        Drop an image here or click to upload.<br />Our AI will learn from this style.
                      </p>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                      />
                    </>
                  )}
                </div>
              </section>

              <section>
                <label className="block text-sm font-semibold mb-4">3. Select Style Mode</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {STYLE_MODES.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setSelectedStyle(mode.id)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${selectedStyle === mode.id ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600' : 'border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700'}`}
                    >
                      <span className="text-2xl mb-1">{mode.icon}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider">{mode.name}</span>
                    </button>
                  ))}
                </div>
              </section>

              <button
                disabled={!prompt || isGenerating}
                onClick={handleGenerate}
                className={`w-full py-4 rounded-xl text-lg font-bold transition-all shadow-lg ${!prompt || isGenerating ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800' : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-indigo-500/20 active:scale-[0.98]'}`}
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </span>
                ) : 'Generate Masterpiece'}
              </button>
            </div>

            {/* Right Column - Results */}
            <div className="flex flex-col">
              <label className="block text-sm font-semibold mb-2">Result</label>
              <div className="flex-1 min-h-[400px] rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/30 flex items-center justify-center overflow-hidden relative">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-sm text-gray-500">Painting your imagination...</p>
                  </div>
                ) : generatedImage ? (
                  <div className="w-full h-full group">
                    <img src={generatedImage} alt="Generated" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-100">Download</button>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-indigo-500">Upscale</button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4 opacity-20">🎨</div>
                    <p className="text-gray-400 dark:text-gray-600 italic">"Creativity takes courage." — Henri Matisse</p>
                    <p className="mt-2 text-sm text-gray-500">Your generation will appear here</p>
                  </div>
                )}
              </div>
              {generatedImage && (
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>Prompt: {prompt.substring(0, 30)}...</span>
                  <span>Style: {STYLE_MODES.find(m => m.id === selectedStyle)?.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
