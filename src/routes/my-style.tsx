import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/my-style")({
  component: MyStyle,
});

function MyStyle() {
  const references = [
    { id: 1, url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&auto=format&fit=crop", date: "2024-05-15" },
    { id: 2, url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=400&auto=format&fit=crop", date: "2024-05-14" },
    { id: 3, url: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=400&auto=format&fit=crop", date: "2024-05-12" },
    { id: 4, url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop", date: "2024-05-10" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">My Style Profile</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          This is what Imagina Studio has learned about your aesthetic based on your uploads.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Style Analysis Card */}
        <div className="lg:col-span-1 space-y-6">
          <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Aesthetic DNA</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Contrast</span>
                  <span>High</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-indigo-600"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Saturation</span>
                  <span>Medium</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-indigo-600"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Softness</span>
                  <span>Low</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[20%] bg-indigo-600"></div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-3">Dominant Palette</h3>
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded-lg bg-gray-900 shadow-sm"></div>
                <div className="h-10 w-10 rounded-lg bg-indigo-900 shadow-sm"></div>
                <div className="h-10 w-10 rounded-lg bg-slate-700 shadow-sm"></div>
                <div className="h-10 w-10 rounded-lg bg-indigo-300 shadow-sm"></div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-3">Detected Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Nocturnal', 'Architectural', 'Dramatic', 'Neon', 'Gritty'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 dark:border-indigo-900/30 dark:bg-indigo-900/10">
            <h2 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-2">Style Maturity</h2>
            <p className="text-sm text-indigo-800/70 dark:text-indigo-400/70 mb-4">
              Your style model is 65% trained. Upload 6 more images to reach peak consistency.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 dark:border-gray-900"></div>
                 ))}
              </div>
              <span className="text-xs font-medium text-indigo-600">+6 needed</span>
            </div>
          </section>
        </div>

        {/* Reference Gallery */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Reference Library</h2>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Add Reference
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {references.map((ref) => (
              <div key={ref.id} className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <img src={ref.url} alt="Style reference" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                   <button className="text-white text-xs font-bold hover:underline">View Analysis</button>
                   <button className="mt-2 text-red-400 text-[10px] font-bold hover:underline">Remove</button>
                </div>
              </div>
            ))}
            <button className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center hover:border-indigo-400 hover:bg-indigo-50/5 transition-all group">
              <span className="text-3xl text-gray-300 group-hover:text-indigo-400">+</span>
              <span className="text-xs text-gray-400 mt-2">New Reference</span>
            </button>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Style Evolution</h2>
            <div className="h-48 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 p-8 flex items-end justify-between">
              {[40, 60, 45, 70, 85, 65, 90].map((h, i) => (
                <div key={i} className="w-8 bg-indigo-600/20 rounded-t-lg relative group" style={{ height: `${h}%` }}>
                  <div className="absolute inset-x-0 bottom-0 bg-indigo-600 rounded-t-lg transition-all h-1/2 group-hover:h-full"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest px-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
