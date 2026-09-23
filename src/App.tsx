/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { FeaturedGrid } from './components/FeaturedGrid';
import { PromoBanner } from './components/PromoBanner';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { ProductCard } from './components/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeView, selectedProduct, navigateToShop } = useStore();

  // More Products section on Homepage
  const moreProducts = PRODUCTS.slice(8, 16);

  return (
    <main className="min-h-screen">
      {activeView === 'home' && (
        <>
          {/* Hero Section */}
          <Hero />

          {/* Shop By Category */}
          <CategoryShowcase />

          {/* Featured Merchandise Grid */}
          <FeaturedGrid />

          {/* Collection / Promotional Bento Feature */}
          <PromoBanner />

          {/* More Products / Trending Arrivals */}
          <section className="py-14 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-gray-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Latest Drops</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-1">
                    More Google Merchandise
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Explore collectibles, drinkware, and accessories from Android, Gemini, and Google Cloud.
                  </p>
                </div>

                <button
                  onClick={() => navigateToShop('All')}
                  className="mt-4 sm:mt-0 text-xs font-bold text-gray-800 hover:text-blue-600 uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
                >
                  <span>Explore Entire Catalog</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {moreProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeView === 'shop' && <ShopPage />}

      {activeView === 'pdp' && selectedProduct && (
        <ProductDetailPage product={selectedProduct} />
      )}
    </main>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#202124]">
        {/* Navigation Header */}
        <Header />

        {/* Dynamic Route Content */}
        <div className="flex-1">
          <MainContent />
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Drawers & Modals */}
        <CartDrawer />
        <SearchModal />
        <QuickViewModal />
        <CheckoutModal />
        <Toast />
      </div>
    </StoreProvider>
  );
}

