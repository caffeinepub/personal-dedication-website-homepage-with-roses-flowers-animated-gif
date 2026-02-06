import { Heart } from 'lucide-react';
import { MemoriesGallery } from './components/MemoriesGallery';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 dark:from-rose-950 dark:via-pink-950 dark:to-amber-950">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
          <h1 className="text-2xl sm:text-3xl font-serif text-rose-900 dark:text-rose-100">
            A Love Story
          </h1>
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-rose-200 dark:border-rose-800">
            {/* Hero Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src="/assets/generated/roses-flowers-hero.dim_1200x675.gif"
                alt="Beautiful roses and flowers animation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-rose-950/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 lg:p-16 text-center space-y-8">
              {/* Name */}
              <div className="space-y-4">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-rose-600 dark:text-rose-300 tracking-tight">
                  Snehahahahaha
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300 dark:to-rose-700" />
                  <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300 dark:to-rose-700" />
                </div>
              </div>

              {/* Dating Info */}
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl text-rose-800 dark:text-rose-200 font-light">
                  Our journey began in
                </p>
                <p className="text-3xl sm:text-4xl font-serif font-semibold text-rose-700 dark:text-rose-300">
                  July 2025
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="pt-6 flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 text-rose-400 fill-rose-400 opacity-60 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>

              {/* Message */}
              <div className="pt-4">
                <p className="text-lg sm:text-xl text-rose-700 dark:text-rose-300 font-light italic max-w-2xl mx-auto leading-relaxed">
                  I love you with all my hearts, and i am proud of you who you are!!
                </p>
              </div>
            </div>
          </div>

          {/* Memories Gallery Section */}
          <div className="bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border-2 border-rose-200 dark:border-rose-800">
            <MemoriesGallery />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-rose-600 dark:text-rose-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© 2026. Built with</span>
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500 inline-block" />
            <span>using</span>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-rose-800 dark:hover:text-rose-200 transition-colors underline decoration-rose-300 dark:decoration-rose-700"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
