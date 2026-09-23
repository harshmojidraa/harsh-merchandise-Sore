import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X, RotateCcw, ChevronDown, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';
import { ProductCategory, ProductBrand, SortOption } from '../types';

export const ShopPage: React.FC = () => {
  const { selectedCategory, selectedBrand, navigateToShop } = useStore();

  // Local Filter States
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>(selectedCategory);
  const [activeBrand, setActiveBrand] = useState<ProductBrand | 'All'>(selectedBrand);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync state if context changes
  React.useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  React.useEffect(() => {
    setActiveBrand(selectedBrand);
  }, [selectedBrand]);

  const categories: (ProductCategory | 'All')[] = ['All', 'Apparel', 'Drinkware', 'Accessories', 'Collectibles'];
  const brands: (ProductBrand | 'All')[] = ['All', 'Google', 'Google Cloud', 'Android', 'YouTube', 'Gemini', 'Chrome Dino'];
  const availableColors = ['Black', 'White', 'Navy', 'Grey', 'Green', 'Red', 'Gold'];
  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  // Toggle Color
  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // Toggle Size
  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Reset Filters
  const resetFilters = () => {
    setActiveCategory('All');
    setActiveBrand('All');
    setMaxPrice(100);
    setSelectedColors([]);
    setSelectedSizes([]);
    setInStockOnly(false);
    setSortOption('featured');
    navigateToShop('All', 'All');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Brand
    if (activeBrand !== 'All') {
      result = result.filter((p) => p.brand === activeBrand);
    }

    // Max Price
    result = result.filter((p) => p.price <= maxPrice);

    // In Stock
    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // Colors
    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((col) =>
          selectedColors.some((sc) => col.name.toLowerCase().includes(sc.toLowerCase()))
        )
      );
    }

    // Sizes
    if (selectedSizes.length > 0) {
      result = result.filter(
        (p) => p.sizes && selectedSizes.some((s) => p.sizes?.includes(s))
      );
    }

    // Sorting
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      // featured
      result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return result;
  }, [activeCategory, activeBrand, maxPrice, inStockOnly, selectedColors, selectedSizes, sortOption]);

  const hasActiveFilters =
    activeCategory !== 'All' ||
    activeBrand !== 'All' ||
    maxPrice < 100 ||
    selectedColors.length > 0 ||
    selectedSizes.length > 0 ||
    inStockOnly;

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-white border-b border-gray-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Official Catalog
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mt-1">
                {activeCategory === 'All' ? 'SHOP ALL' : activeCategory.toUpperCase()}
              </h1>
              <p className="text-sm text-gray-500 mt-1.5 max-w-xl">
                Browse our complete selection of authentic Google merchandise, engineered for quality and sustainability.
              </p>
            </div>

            {/* Quick Category Tab Switchers */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setActiveCategory(c);
                    navigateToShop(c, activeBrand);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === c
                      ? 'bg-gray-900 text-white shadow-xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {c === 'All' ? 'All Items' : c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Filter bar controls & Results count */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-200/80">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden px-4 py-2 bg-white text-gray-800 text-xs font-semibold rounded-full border border-gray-300 shadow-xs inline-flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters && '•'}</span>
            </button>
            <span className="text-xs sm:text-sm text-gray-500 font-medium">
              Showing <strong className="text-gray-900">{filteredProducts.length}</strong> products
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-xs text-gray-500 font-medium">Sort by:</span>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="appearance-none bg-white border border-gray-300 text-gray-800 text-xs font-semibold rounded-full py-2 pl-3.5 pr-8 shadow-xs hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="featured">Featured Picks</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-4 pb-2">
            <span className="text-xs text-gray-500 font-medium mr-1">Active:</span>
            {activeCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                {activeCategory}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setActiveCategory('All')} />
              </span>
            )}
            {activeBrand !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full border border-gray-300">
                Brand: {activeBrand}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setActiveBrand('All')} />
              </span>
            )}
            {maxPrice < 100 && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full border border-gray-300">
                Up to ${maxPrice}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setMaxPrice(100)} />
              </span>
            )}
            {selectedColors.map((col) => (
              <span key={col} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full border border-gray-300">
                {col}
                <X className="w-3 h-3 cursor-pointer" onClick={() => toggleColor(col)} />
              </span>
            ))}
            {selectedSizes.map((s) => (
              <span key={s} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full border border-gray-300">
                Size: {s}
                <X className="w-3 h-3 cursor-pointer" onClick={() => toggleSize(s)} />
              </span>
            ))}
            {inStockOnly && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                In Stock
                <X className="w-3 h-3 cursor-pointer" onClick={() => setInStockOnly(false)} />
              </span>
            )}

            <button
              onClick={resetFilters}
              className="text-xs text-red-600 hover:text-red-700 font-semibold underline ml-2 cursor-pointer inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All</span>
            </button>
          </div>
        )}

        {/* Layout Grid (Sidebar + Products) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Desktop Filter Sidebar (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-2xs space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                  Categories
                </h3>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        navigateToShop(cat, activeBrand);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        activeCategory === cat
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span>{cat === 'All' ? 'All Products' : cat}</span>
                      {activeCategory === cat && <Check className="w-3.5 h-3.5 text-blue-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                  Brand / Theme
                </h3>
                <div className="space-y-1.5">
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => setActiveBrand(b)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        activeBrand === b
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span>{b}</span>
                      {activeBrand === b && <Check className="w-3.5 h-3.5 text-blue-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Max Price
                  </h3>
                  <span className="text-xs font-bold text-gray-900">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="100"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-medium">
                  <span>$15</span>
                  <span>$50</span>
                  <span>$100</span>
                </div>
              </div>

              {/* Color Filter */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2.5">
                  Color
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {availableColors.map((col) => {
                    const isSelected = selectedColors.includes(col);
                    return (
                      <button
                        key={col}
                        onClick={() => toggleColor(col)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-gray-900 text-white shadow-xs'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {col}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Filter */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2.5">
                  Size
                </h3>
                <div className="grid grid-cols-3 gap-1.5">
                  {availableSizes.map((s) => {
                    const isSelected = selectedSizes.includes(s);
                    return (
                      <button
                        key={s}
                        onClick={() => toggleSize(s)}
                        className={`py-1.5 rounded-lg text-xs font-semibold text-center transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="pt-4 border-t border-gray-100">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-xs font-medium text-gray-700">In Stock only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80 shadow-xs space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 mx-auto flex items-center justify-center">
                  <SlidersHorizontal className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">No matching products found</h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto">
                  Try adjusting or clearing your filters to see more merchandise from the official collection.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-full shadow-sm"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setMobileFiltersOpen(false)}
          ></div>
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-base font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 rounded-full text-gray-500 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Categories */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">Category</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium ${
                        activeCategory === cat ? 'bg-blue-50 text-blue-700 font-bold' : 'text-gray-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Max Price: ${maxPrice}
                </h3>
                <input
                  type="range"
                  min="15"
                  max="100"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              {/* Mobile Colors */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">Colors</h3>
                <div className="flex flex-wrap gap-1">
                  {availableColors.map((col) => (
                    <button
                      key={col}
                      onClick={() => toggleColor(col)}
                      className={`px-2.5 py-1 rounded-full text-xs ${
                        selectedColors.includes(col) ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-2">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-gray-900 text-white font-semibold text-xs rounded-full uppercase tracking-wider"
              >
                Apply Filters
              </button>
              <button
                onClick={resetFilters}
                className="w-full py-2 bg-gray-100 text-gray-700 font-semibold text-xs rounded-full"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
