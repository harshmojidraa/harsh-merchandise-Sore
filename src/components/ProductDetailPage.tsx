import React, { useState } from 'react';
import {
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
  Plus,
  Minus,
  Check,
  ChevronRight,
  Share2,
  Sparkles,
  Info
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const { addToCart, navigateToHome, navigateToShop, isWishlisted, toggleWishlist, setIsCartOpen } = useStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'materials' | 'shipping' | 'returns'>('details');
  const [isCopied, setIsCopied] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const isSaved = isWishlisted(product.id);

  // 4 Related Products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    setIsCartOpen(true);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-100">
        <nav className="flex items-center text-xs font-medium text-gray-500 gap-1.5 flex-wrap">
          <button onClick={navigateToHome} className="hover:text-gray-900 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button
            onClick={() => navigateToShop(product.category)}
            className="hover:text-gray-900 transition-colors"
          >
            {product.category}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* Main PDP Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Product Image Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Main Image Frame */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#F8F9FA] border border-gray-200/80 shadow-xs">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={`${product.name} view ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-105 hover:opacity-95 cursor-pointer"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-[#4285F4] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    New Release
                  </span>
                )}
                {product.isEco && (
                  <span className="bg-[#34A853] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Certified Sustainable
                  </span>
                )}
                {product.isLimited && (
                  <span className="bg-[#EA4335] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Limited Edition
                  </span>
                )}
              </div>

              {/* Share & Wishlist quick buttons */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md backdrop-blur-xs transition-transform hover:scale-105"
                  title="Share link"
                >
                  {isCopied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2.5 rounded-full shadow-md backdrop-blur-xs transition-transform hover:scale-105 ${
                    isSaved ? 'bg-red-50 text-red-500' : 'bg-white/90 hover:bg-white text-gray-700'
                  }`}
                  title={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Gallery Thumbnails List */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden bg-gray-50 border-2 transition-all cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-sm'
                        : 'border-gray-200/80 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-105 hover:opacity-90"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Purchase Form (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header info */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                {product.brand} • {product.category}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mt-1.5 leading-snug">
                {product.name}
              </h1>

              {/* Ratings and Reviews */}
              <div className="flex items-center gap-2 mt-2.5">
                <div className="flex items-center text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-900">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 py-3 border-y border-gray-100">
              <span className="text-3xl font-extrabold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                In Stock & Ready to Ship
              </span>
            </div>

            {/* Description excerpt */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatches Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-gray-900">Color:</span>
                  <span className="text-gray-600 font-medium">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center p-0.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'ring-2 ring-blue-600 ring-offset-2 scale-105'
                            : 'hover:scale-105 opacity-85 hover:opacity-100'
                        }`}
                        title={color.name}
                      >
                        <span
                          className="w-full h-full rounded-full border border-black/15 shadow-inner flex items-center justify-center text-white"
                          style={{ backgroundColor: color.hex }}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-gray-900">Select Size:</span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-blue-600 hover:text-blue-700 font-semibold underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3 h-3" />
                    <span>Size Guide</span>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((sz) => {
                    const isSelected = selectedSize === sz;
                    return (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gray-900 text-white shadow-sm ring-1 ring-gray-900'
                            : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Guide Modal helper */}
            {showSizeGuide && (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 space-y-1.5 animate-in fade-in duration-200">
                <div className="font-bold">Unisex Apparel Sizing (Inches)</div>
                <div className="grid grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
                  <div>XS: Chest 34"</div>
                  <div>S: Chest 37"</div>
                  <div>M: Chest 40"</div>
                  <div>L: Chest 43"</div>
                  <div>XL: Chest 46"</div>
                  <div>XXL: Chest 49"</div>
                </div>
                <div className="text-[10px] text-blue-700 pt-1">
                  Tailored modern fit. If you prefer an oversized feel, order one size up.
                </div>
              </div>
            )}

            {/* Quantity and Action Buttons */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-gray-300 rounded-full px-3 py-1.5 bg-white shadow-2xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-1 text-gray-500 hover:text-gray-900 disabled:opacity-30 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-gray-500 hover:text-gray-900 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Bag • ${(product.price * quantity).toFixed(2)}</span>
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Instant Checkout
              </button>
            </div>

            {/* Value Guarantees Banner */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100 text-center">
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center">
                <Truck className="w-4 h-4 text-blue-600 mb-1" />
                <span className="text-[11px] font-bold text-gray-900">Free Shipping</span>
                <span className="text-[10px] text-gray-500">Orders over $50</span>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center">
                <RotateCcw className="w-4 h-4 text-green-600 mb-1" />
                <span className="text-[11px] font-bold text-gray-900">30-Day Returns</span>
                <span className="text-[10px] text-gray-500">Hassle-free guarantee</span>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 text-purple-600 mb-1" />
                <span className="text-[11px] font-bold text-gray-900">100% Authentic</span>
                <span className="text-[10px] text-gray-500">Official merchandise</span>
              </div>
            </div>

            {/* Accordion Tabs for Details */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2.5 px-3 text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === 'details'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Features & Specs
                </button>
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`pb-2.5 px-3 text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === 'materials'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Materials & Care
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2.5 px-3 text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === 'shipping'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Shipping & Returns
                </button>
              </div>

              <div className="pt-4 text-xs text-gray-600 leading-relaxed">
                {activeTab === 'details' && (
                  <ul className="space-y-1.5 list-disc list-inside">
                    {product.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'materials' && (
                  <div className="space-y-2">
                    <p>
                      <strong>Primary Materials:</strong> {product.materials || 'Sustainable high-grade composite'}
                    </p>
                    <p>
                      <strong>Care Instructions:</strong> Machine wash cold with like colors. Tumble dry low or air dry to preserve print longevity. Do not iron directly on graphics.
                    </p>
                  </div>
                )}
                {activeTab === 'shipping' && (
                  <div className="space-y-2">
                    <p>
                      <strong>Standard Shipping:</strong> Free for orders over $50. Otherwise $4.99 flat rate. Delivered in 3-5 business days.
                    </p>
                    <p>
                      <strong>30-Day Returns:</strong> You have 30 days from delivery to request a return or size exchange on unworn, unwashed items in original packaging.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section: "YOU MAY ALSO LIKE" */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Recommended For You
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-0.5">
                  YOU MAY ALSO LIKE
                </h2>
              </div>
              <button
                onClick={() => navigateToShop(product.category)}
                className="text-xs font-bold text-gray-700 hover:text-blue-600 underline"
              >
                View all {product.category}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
