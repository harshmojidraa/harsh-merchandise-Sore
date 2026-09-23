import React, { useState } from 'react';
import { X, Check, Star, ArrowRight, Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    navigateToProduct,
    isWishlisted,
    toggleWishlist
  } = useStore();

  if (!quickViewProduct) return null;

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(quickViewProduct.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState(quickViewProduct.sizes?.[0]);

  const isSaved = isWishlisted(quickViewProduct.id);

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedColor, selectedSize, 1);
    setQuickViewProduct(null);
  };

  const handleFullView = () => {
    setQuickViewProduct(null);
    navigateToProduct(quickViewProduct);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-10">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-gray-900 bg-white/80 hover:bg-white rounded-full shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery side */}
          <div className="p-6 bg-[#F8F9FA] flex flex-col justify-between">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200/80">
              <img
                src={quickViewProduct.images[selectedImg] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {quickViewProduct.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 pt-3">
                {quickViewProduct.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImg === i ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                {quickViewProduct.brand} • {quickViewProduct.category}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mt-1">
                {quickViewProduct.name}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-900">{quickViewProduct.rating}</span>
                <span className="text-xs text-gray-400">({quickViewProduct.reviewCount})</span>
              </div>

              <div className="text-2xl font-extrabold text-gray-900 mt-3">
                ${quickViewProduct.price.toFixed(2)}
              </div>

              <p className="text-xs text-gray-600 line-clamp-3 mt-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Color Selection */}
              {quickViewProduct.colors && (
                <div className="mt-4">
                  <div className="text-xs font-bold text-gray-900 mb-2">
                    Color: <span className="font-normal text-gray-600">{selectedColor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {quickViewProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center p-0.5 ${
                          selectedColor === c.name ? 'ring-2 ring-blue-600 ring-offset-2' : ''
                        }`}
                      >
                        <span
                          className="w-full h-full rounded-full border border-black/10"
                          style={{ backgroundColor: c.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {quickViewProduct.sizes && (
                <div className="mt-4">
                  <div className="text-xs font-bold text-gray-900 mb-2">Size:</div>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                          selectedSize === s
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-gray-100 space-y-2.5">
              <div className="flex gap-2">
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer"
                >
                  Add to Bag
                </button>
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 rounded-full border border-gray-200 transition-colors ${
                    isSaved ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  title="Save item"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleFullView}
                className="w-full text-center text-xs font-semibold text-blue-600 hover:text-blue-700 py-1 inline-flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>View Full Product Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
