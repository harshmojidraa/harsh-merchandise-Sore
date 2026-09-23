import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, ProductCategory, ProductBrand } from '../types';
import { PRODUCTS } from '../data/products';

interface ToastInfo {
  title: string;
  subtitle?: string;
  image?: string;
}

interface StoreContextType {
  // Navigation
  activeView: 'home' | 'shop' | 'pdp';
  selectedCategory: ProductCategory | 'All';
  selectedBrand: ProductBrand | 'All';
  selectedProduct: Product | null;
  navigateToHome: () => void;
  navigateToShop: (category?: ProductCategory | 'All', brand?: ProductBrand | 'All') => void;
  navigateToProduct: (product: Product) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, color: string, size?: string, quantity?: number) => void;
  removeFromCart: (productId: string, color: string, size?: string) => void;
  updateQuantity: (productId: string, color: string, size: string | undefined, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  appliedPromo: string | null;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  freeShippingThreshold: number;

  // Wishlist
  wishlist: string[]; // product IDs
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  // Search & Modals
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;

  // Toast
  toast: ToastInfo | null;
  showToast: (info: ToastInfo) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'google_merch_cart_v1';
const WISHLIST_STORAGE_KEY = 'google_merch_wishlist_v1';

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<'home' | 'shop' | 'pdp'>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [selectedBrand, setSelectedBrand] = useState<ProductBrand | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart state with localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastInfo | null>(null);

  const freeShippingThreshold = 50.0;

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Toast timer
  const showToast = (info: ToastInfo) => {
    setToast(info);
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Navigation handlers
  const navigateToHome = () => {
    setActiveView('home');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToShop = (category: ProductCategory | 'All' = 'All', brand: ProductBrand | 'All' = 'All') => {
    setSelectedCategory(category);
    setSelectedBrand(brand);
    setActiveView('shop');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveView('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart operations
  const addToCart = (product: Product, color: string, size?: string, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }

      return [
        ...prev,
        {
          product,
          selectedColor: color,
          selectedSize: size || product.sizes?.[0],
          quantity
        }
      ];
    });

    showToast({
      title: 'Added to your bag',
      subtitle: `${product.name} (${color}${size ? ` - ${size}` : ''})`,
      image: product.images[0]
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, color: string, size?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedColor === color && item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (productId: string, color: string, size: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, color, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && item.selectedColor === color && item.selectedSize === size) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Promo code
  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'GOOGLE10' || clean === 'SPRING26' || clean === 'MERCH10') {
      setAppliedPromo(clean);
      return { success: true, message: '10% discount applied to your order!' };
    }
    if (clean === 'FREE50' || clean === 'SHIPFREE') {
      setAppliedPromo(clean);
      return { success: true, message: 'Free express shipping promo unlocked!' };
    }
    return { success: false, message: 'Invalid promotional code. Try GOOGLE10' };
  };

  const cartDiscount = appliedPromo === 'GOOGLE10' || appliedPromo === 'SPRING26' || appliedPromo === 'MERCH10'
    ? cartSubtotal * 0.1
    : 0;

  // Wishlist
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const prod = PRODUCTS.find((p) => p.id === productId);
      if (exists) {
        showToast({
          title: 'Removed from Saved Items',
          subtitle: prod?.name
        });
        return prev.filter((id) => id !== productId);
      } else {
        showToast({
          title: 'Saved to Wishlist',
          subtitle: prod?.name,
          image: prod?.images[0]
        });
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  return (
    <StoreContext.Provider
      value={{
        activeView,
        selectedCategory,
        selectedBrand,
        selectedProduct,
        navigateToHome,
        navigateToShop,
        navigateToProduct,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        cartDiscount,
        appliedPromo,
        applyPromoCode,
        isCartOpen,
        setIsCartOpen,
        freeShippingThreshold,
        wishlist,
        toggleWishlist,
        isWishlisted,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        quickViewProduct,
        setQuickViewProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        toast,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
