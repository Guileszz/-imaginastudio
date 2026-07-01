import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Imagina Studio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/studio" 
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              activeProps={{ className: "text-indigo-600 dark:text-indigo-400" }}
            >
              Studio
            </Link>
            <Link 
              to="/my-style" 
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              activeProps={{ className: "text-indigo-600 dark:text-indigo-400" }}
            >
              My Style
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
