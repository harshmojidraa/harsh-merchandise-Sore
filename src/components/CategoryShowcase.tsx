import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import { useStore } from '../context/StoreContext';
import { ProductCategory } from '../types';

export const CategoryShowcase: React.FC = () => {
  const { navigateToShop } = useStore();

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Browse Catalog</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-1">
              Shop by Category
            </h2>
          </div>
          <button
            onClick={() => navigateToShop('All')}
            className="mt-3 sm:mt-0 text-sm font-semibold text-gray-700 hover:text-blue-600 inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Visual Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateToShop(cat.id as ProductCategory)}
              className="group relative bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-200/80 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold text-gray-800 shadow-xs">
                  {cat.tag}
                </div>
              </div>

              {/* Text Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-900 group-hover:text-blue-600 inline-flex items-center gap-1.5">
                    Explore {cat.title}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium">{cat.itemCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
