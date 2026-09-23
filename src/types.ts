export type ProductCategory = 'Apparel' | 'Drinkware' | 'Accessories' | 'Collectibles';

export type ProductBrand = 'Google' | 'Google Cloud' | 'Android' | 'YouTube' | 'Gemini' | 'Chrome Dino';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: ProductBrand;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  materials?: string;
  images: string[]; // [main, secondary/back, detail, lifestyle]
  colors: ProductColor[];
  sizes?: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isLimited?: boolean;
  isEco?: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize?: string;
  quantity: number;
}

export interface FilterState {
  category: ProductCategory | 'All';
  brand: ProductBrand | 'All';
  minPrice: number;
  maxPrice: number;
  selectedColors: string[];
  selectedSizes: string[];
  inStockOnly: boolean;
}

export type SortOption = 'featured' | 'newest' | 'price-low' | 'price-high' | 'rating';
