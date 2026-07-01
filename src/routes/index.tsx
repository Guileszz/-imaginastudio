import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              <span className="block">Your Content.</span>
              <span className="block text-indigo-600 dark:text-indigo-400">Your AI Style.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
              Imagina Studio is the next generation of AI image creation. Upload your references, and our AI learns your unique aesthetic to generate perfectly consistent visuals every time.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/studio"
                className="rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all transform hover:scale-105"
              >
                Start Creating
              </Link>
              <a
                href="#features"
                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                See How It Works <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 dark:opacity-10 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for Modern Creators</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Everything you need to scale your visual content without losing your soul.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🧠"
              title="Personalized Learning"
              description="Upload your portfolio or brand assets. Our model learns the nuances of your style, color palette, and composition."
            />
            <FeatureCard 
              icon="⚡"
              title="Instant Style Modes"
              description="Switch between Sombrio, Anime, Cinematic, and more with a single click. Professional results in seconds."
            />
            <FeatureCard 
              icon="🎨"
              title="Infinite Consistency"
              description="Generate multiple images that all share the same visual DNA. Perfect for character design or social media branding."
            />
          </div>
        </div>
      </section>

      {/* Style Gallery Preview */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Master Every Style</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">From dark cinematic moods to soft watercolor washes, Imagina Studio masters the aesthetics you need.</p>
            </div>
            <Link to="/studio" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              Explore the Studio →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StylePreview name="Sombrio" color="bg-gray-900" />
            <StylePreview name="Anime" color="bg-pink-500" />
            <StylePreview name="Cinematográfico" color="bg-blue-900" />
            <StylePreview name="Aquarela" color="bg-orange-200" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-indigo-600 px-6 py-16 text-center sm:px-16 sm:py-24 shadow-2xl overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to evolve your creative process?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-indigo-100">
                Join thousands of creators who are using personal AI to build consistent visual worlds.
              </p>
              <div className="mt-10 flex items-center justify-center">
                <Link
                  to="/studio"
                  className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors"
                >
                  Create Your Account
                </Link>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-64 h-64 border-4 border-white rounded-full"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 border-4 border-white rounded-full shadow-inner"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function StylePreview({ name, color }: { name: string; color: string }) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
      <div className={`absolute inset-0 ${color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
      <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
        <span className="text-white font-bold">{name}</span>
      </div>
    </div>
  );
}
