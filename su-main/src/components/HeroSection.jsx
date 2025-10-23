import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
  <section className="bg-gradient-to-b from-violet-50 via-white to-white pt-6 pb-4 sm:pt-8 sm:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-violet-600 font-medium text-sm">Transform Your Business</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Welcome to Your Application Hub
          </h2>

          <p className="text-base text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Subscribe to our suite of products and unlock your team's potential. Streamline workflows,
            boost productivity, and scale your business with our integrated solutions.
          </p>  
        </div>
      </div>
    </section>
  );
}
