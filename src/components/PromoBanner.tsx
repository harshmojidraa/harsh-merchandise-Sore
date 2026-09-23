import React from 'react';
import { ArrowRight, Leaf, Shield, HeartHandshake } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const PromoBanner: React.FC = () => {
  const { navigateToShop } = useStore();

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dual Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Spotlight 1: Chrome Dino Pixel Series */}
          <div className="lg:col-span-7 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[360px] shadow-lg">
            <div className="z-10 max-w-md space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase border border-white/20">
                Collector Spotlight
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Chrome Dino <br />
                <span className="text-[#34A853]">Offline Collection</span>
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Celebrate Google’s beloved 8-bit runner with washed twill caps, hydrochromic magic umbrellas, and special edition collectibles.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateToShop('All', 'Chrome Dino')}
                  className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 text-xs font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 transition-all shadow-md group cursor-pointer"
                >
                  <span>Explore Dino Gear</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Background Graphic Asset */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-30 lg:opacity-40 pointer-events-none flex items-center justify-end overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80"
                alt="Chrome Dino Hat"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Spotlight 2: Sustainability Pledge */}
          <div className="lg:col-span-5 bg-[#E8F0FE] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#D2E3FC]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4285F4] shadow-xs">
                <Leaf className="w-6 h-6 text-[#34A853]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                Designed for the Planet
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Over 85% of our merchandise catalogue is manufactured using GOTS-certified organic ring-spun cotton and recycled post-consumer PET bottles.
              </p>

              <div className="space-y-2 pt-2 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#4285F4]" />
                  <span>Fair Wear certified ethical production</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-[#34A853]" />
                  <span>Zero single-use plastic packaging</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => navigateToShop('Apparel')}
                className="text-xs font-bold uppercase tracking-wider text-[#1A73E8] hover:text-[#174EA6] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Shop Eco-Certified Essentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
