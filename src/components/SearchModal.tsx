import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToProduct } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const popularSearches = ['Hoodie', 'Water Bottle', 'T-Shirt', 'Chrome Dino', 'Backpack', 'Android'];

  // Search matching across title, category, brand, description
  const matchingProducts: Product[] = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.materials && p.materials.toLowerCase().includes(q))
        );
      })
    : [];

  const handleSelectProduct = (prod: Product) => {
    setIsSearchOpen(false);
    navigateToProduct(prod);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative mx-auto max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search merchandise by product, category, or brand..."
            className="w-full text-base font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-700 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Popular searches suggestions */}
        {!query.trim() && (
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              <span>Popular Searches</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3.5 py-1.5 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700 text-xs font-medium rounded-full transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>

            {/* Quick Featured Items Preview */}
            <div className="pt-4 border-t border-gray-100">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Trending Essentials
              </div>
              <div className="grid grid-cols-2 gap-3">
                {PRODUCTS.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectProduct(item)}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 cursor-pointer border border-gray-100"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover bg-gray-100 flex-shrink-0"
                    />
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-gray-900 truncate">{item.name}</div>
                      <div className="text-[11px] text-gray-500">${item.price.toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search Results List */}
        {query.trim() && (
          <div className="max-h-96 overflow-y-auto divide-y divide-gray-100">
            {matchingProducts.length > 0 ? (
              matchingProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-xl bg-gray-100 border border-gray-200/70 flex-shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        {product.brand} • {product.category}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h4>
                      <div className="text-xs font-bold text-gray-700 mt-0.5">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>View Product</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500 space-y-2">
                <p className="text-sm font-medium">No merchandise matched "{query}"</p>
                <p className="text-xs text-gray-400">
                  Try searching for terms like "hoodie", "bottle", "tee", or "Dino".
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
