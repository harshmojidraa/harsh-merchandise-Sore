import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';
import { ProductCategory } from '../types';

export const FeaturedGrid: React.FC = () => {
  const { navigateToShop } = useStore();
  const [activeTab, setActiveTab] = useState<'All' | ProductCategory>('All');

  const filteredProducts = activeTab === 'All'
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter((p) => p.category === activeTab).slice(0, 8);

  const tabs: ('All' | ProductCategory)[] = ['All', 'Apparel', 'Drinkware', 'Accessories', 'Collectibles'];

  return (
    <section className="py-14 sm:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#34A853]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Picks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-1">
              Featured Merchandise
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Engineered with sustainable fabrics, recycled metals, and authentic Google branding.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80'
                }`}
              >
                {tab === 'All' ? 'All Featured' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid: Desktop 4, Tablet 3, Mobile 2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateToShop(activeTab === 'All' ? 'All' : activeTab)}
            className="px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-900 text-sm font-semibold rounded-full border border-gray-300 shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>View All {activeTab === 'All' ? 'Merchandise' : activeTab}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
