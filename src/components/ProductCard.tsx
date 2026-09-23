import React, { useState } from 'react';
import { Heart, Eye, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { navigateToProduct, addToCart, isWishlisted, toggleWishlist, setQuickViewProduct } = useStore();
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const isSaved = isWishlisted(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultColor = product.colors[0]?.name || 'Standard';
    const defaultSize = product.sizes?.[0];
    addToCart(product, defaultColor, defaultSize, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={() => navigateToProduct(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/70 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Top Image Stage */}
      <div className="relative aspect-square w-full bg-[#F8F9FA] overflow-hidden">
        {/* Main Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover object-center transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />

        {/* Secondary Hover Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            loading="lazy"
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="bg-[#4285F4] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#202124] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
              Bestseller
            </span>
          )}
          {product.isEco && (
            <span className="bg-[#34A853] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
              Eco
            </span>
          )}
          {product.isLimited && (
            <span className="bg-[#EA4335] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
              Limited
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={handleHeartClick}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all duration-200 z-10 ${
            isSaved
              ? 'bg-red-50 text-red-500 shadow-sm'
              : 'bg-white/80 backdrop-blur-xs text-gray-600 hover:text-gray-900 hover:bg-white shadow-xs'
          }`}
          title={isSaved ? 'Remove from Saved' : 'Save Item'}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        {/* Hover Action Bar */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleQuickView}
            className="flex-1 py-2 px-3 bg-white/90 hover:bg-white text-gray-900 text-xs font-semibold rounded-xl shadow-md backdrop-blur-xs border border-gray-200/60 inline-flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02]"
          >
            <Eye className="w-3.5 h-3.5 text-gray-600" />
            <span>Quick View</span>
          </button>
          <button
            onClick={handleQuickAdd}
            className={`py-2 px-3 text-xs font-semibold rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-1 hover:scale-[1.02] ${
              justAdded
                ? 'bg-[#34A853] text-white'
                : 'bg-gray-900 hover:bg-black text-white'
            }`}
            title="Quick add to bag"
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details Bottom Card */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            {product.brand} • {product.category}
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Color Dots */}
          {product.colors && product.colors.length > 1 && (
            <div className="flex items-center -space-x-1">
              {product.colors.slice(0, 3).map((col) => (
                <span
                  key={col.name}
                  className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-2xs"
                  style={{ backgroundColor: col.hex }}
                  title={col.name}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-[10px] text-gray-400 font-medium pl-1.5">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
