import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import heroBannerImg from '../assets/images/regenerated_image_1790172025215.png';

export const Hero: React.FC = () => {
  const { navigateToShop } = useStore();

  return (
    <section className="relative overflow-hidden bg-[#F1F3F4]">
      {/* Background Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#4285F4]"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                Official 2026 Collection
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.08]">
                GOOGLE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]">
                  MERCHANDISE
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-normal max-w-lg pt-2 leading-relaxed">
                Gear made for Google fans, creators, and developers worldwide. Discover certified organic apparel, precision drinkware, and sustainable accessories.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigateToShop('All')}
                className="px-8 py-3.5 bg-gray-900 hover:bg-black text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigateToShop('Apparel')}
                className="px-7 py-3.5 bg-white hover:bg-gray-100 text-gray-900 text-sm font-semibold rounded-full border border-gray-200 shadow-xs transition-all cursor-pointer"
              >
                Explore Apparel
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80 text-gray-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#34A853] flex-shrink-0" />
                <span className="text-xs font-medium">100% Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#4285F4] flex-shrink-0" />
                <span className="text-xs font-medium">Free US Ship $50+</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FBBC05] flex-shrink-0" />
                <span className="text-xs font-medium">GOTS Certified</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Lifestyle Hero Photo */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                <img
                  src={heroBannerImg}
                  alt="Google Organic Apparel & Lifestyle"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Overlaid Pill Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white text-xs font-bold">
                    G
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Unisex Organic Fleece Hoodie</div>
                    <div className="text-[11px] text-gray-500">$64.00 • In Stock</div>
                  </div>
                  <button
                    onClick={() => navigateToShop('Apparel')}
                    className="ml-auto text-xs font-bold text-blue-600 hover:text-blue-700 underline"
                  >
                    View
                  </button>
                </div>
              </div>

              {/* Decorative Secondary Floating Card */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 items-center gap-3 animate-in fade-in zoom-in duration-500">
                <img
                  src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=200&q=80"
                  alt="Google Capri Bottle"
                  className="w-12 h-12 object-cover rounded-xl bg-gray-50"
                />
                <div className="pr-2">
                  <div className="text-[11px] font-bold text-gray-800">Google G Capri Bottle</div>
                  <div className="text-[10px] text-green-600 font-medium">Bestseller • $34.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
