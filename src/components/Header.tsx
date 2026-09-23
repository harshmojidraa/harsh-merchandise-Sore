import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ArrowRight, User } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCategory, ProductBrand } from '../types';

export const Header: React.FC = () => {
  const {
    activeView,
    selectedCategory,
    navigateToHome,
    navigateToShop,
    cartCount,
    cartSubtotal,
    setIsCartOpen,
    setIsSearchOpen,
    wishlist
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);

  const categories: ProductCategory[] = ['Apparel', 'Drinkware', 'Accessories', 'Collectibles'];
  const brands: ProductBrand[] = ['Google', 'Google Cloud', 'Android', 'YouTube', 'Gemini', 'Chrome Dino'];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
      {/* Top Banner */}
      <div className="bg-[#202124] text-white text-xs font-medium py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#34A853] animate-pulse"></span>
        <span>Free standard shipping on all orders over $50 | Official Google Merchandise</span>
        <button
          onClick={() => navigateToShop('All')}
          className="hidden sm:inline-flex items-center text-gray-300 hover:text-white underline ml-2 transition-colors"
        >
          Shop Now
        </button>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-gray-700 hover:text-gray-900 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo Branding */}
          <div className="flex items-center">
            <button
              onClick={navigateToHome}
              className="flex items-center gap-3 group focus:outline-none text-left"
            >
              {/* Official Google G Logo SVG */}
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24">
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
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-medium tracking-tight text-gray-900 leading-none group-hover:text-blue-600 transition-colors">
                  Google <span className="font-light text-gray-600">Merchandise Store</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-gray-500 mt-0.5">
                  Official Gear
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => navigateToShop('All')}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-all ${
                activeView === 'shop' && selectedCategory === 'All'
                  ? 'text-blue-600 bg-blue-50 font-semibold'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Shop All
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => navigateToShop(cat)}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-all ${
                  activeView === 'shop' && selectedCategory === cat
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}

            {/* Collections Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCollectionsDropdownOpen(!collectionsDropdownOpen)}
                onMouseEnter={() => setCollectionsDropdownOpen(true)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all inline-flex items-center gap-1"
              >
                Collections
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${collectionsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {collectionsDropdownOpen && (
                <div
                  onMouseLeave={() => setCollectionsDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-4 py-1.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    Shop by Brand
                  </div>
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => {
                        navigateToShop('All', brand);
                        setCollectionsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between"
                    >
                      <span>{brand}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors relative flex items-center gap-2"
              title="Search products (Ctrl+K)"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
              <span className="hidden xl:inline-block text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                Search gear...
              </span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => navigateToShop('All')}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors relative"
              title="Saved Items"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-red-500 fill-red-500' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all shadow-sm group"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-gray-900">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline-block text-xs font-semibold">
                {cartCount > 0 ? `$${cartSubtotal.toFixed(2)}` : 'Bag'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            <button
              onClick={() => {
                navigateToShop('All');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Shop All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  navigateToShop(cat);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
              Featured Brands
            </div>
            <div className="grid grid-cols-2 gap-2">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => {
                    navigateToShop('All', b);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
