import React, { useState } from 'react';
import { ArrowRight, Check, Globe } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCategory, ProductBrand } from '../types';

export const Footer: React.FC = () => {
  const { navigateToShop } = useStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories: ProductCategory[] = ['Apparel', 'Drinkware', 'Accessories', 'Collectibles'];
  const brands: ProductBrand[] = ['Google', 'Google Cloud', 'Android', 'YouTube', 'Gemini', 'Chrome Dino'];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-[#202124] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1: Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-lg font-bold tracking-tight">
                Google <span className="font-normal text-gray-400">Merchandise Store</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Official Google lifestyle merchandise, organic cotton apparel, and sustainable gear designed for fans and innovators worldwide.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-gray-300 mb-2">
                Stay updated with seasonal drops & exclusive releases
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white text-xs px-3.5 py-2.5 rounded-full border border-gray-700 focus:outline-none focus:border-blue-500 flex-1 placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white hover:bg-gray-200 text-gray-900 text-xs font-bold uppercase rounded-full transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  {subscribed ? <Check className="w-4 h-4 text-green-600" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
              {subscribed && (
                <div className="text-[11px] text-green-400 font-medium mt-1.5 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Thanks for subscribing to Google Merch updates!</span>
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => navigateToShop('All')}
                  className="hover:text-white transition-colors"
                >
                  Shop All Products
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => navigateToShop(cat)}
                    className="hover:text-white transition-colors"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Collections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {brands.map((b) => (
                <li key={b}>
                  <button
                    onClick={() => navigateToShop('All', b)}
                    className="hover:text-white transition-colors"
                  >
                    {b} Collection
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Help & Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Help & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><span className="hover:text-white cursor-pointer">Shipping & Delivery Info</span></li>
              <li><span className="hover:text-white cursor-pointer">30-Day Return Policy</span></li>
              <li><span className="hover:text-white cursor-pointer">Track Your Order</span></li>
              <li><span className="hover:text-white cursor-pointer">Size Guide & Fit Tips</span></li>
              <li><span className="hover:text-white cursor-pointer">Sustainability Commitments</span></li>
              <li><span className="hover:text-white cursor-pointer">Corporate & Team Gifting</span></li>
            </ul>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© 2026 Google LLC. All rights reserved.</span>
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-300 cursor-pointer">Google Store</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <Globe className="w-3.5 h-3.5" />
            <span>United States (USD $)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
