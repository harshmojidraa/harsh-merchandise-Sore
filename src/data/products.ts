import { Product } from '../types';
import hoodieHoverImg from '../assets/images/regenerated_image_1790172412192.png';
import apparelCategoryImg from '../assets/images/regenerated_image_1790172528960.png';
import hoodieMainImg from '../assets/images/regenerated_image_1790173374794.png';

export const PRODUCTS: Product[] = [
  // APPAREL
  {
    id: 'prod-hoodie-zip',
    name: 'Google Unisex Organic Zip Hoodie',
    category: 'Apparel',
    brand: 'Google',
    price: 64.0,
    originalPrice: 72.0,
    description:
      'Crafted from ultra-soft 100% GOTS certified organic ring-spun cotton and recycled polyester fleece. Features an embroidered subtle Google G icon on the left chest, brushed metal zipper, double-layered hood, and ribbed cuffs and hem.',
    details: [
      'Material: 85% Organic Ring-Spun Cotton, 15% Recycled Polyester (350 GSM)',
      'Subtle tonal Google G chest embroidery',
      'YKK brushed nickel zipper with custom pull tab',
      'Kangaroo pouch pockets with reinforced stitching',
      'Pre-shrunk fabric to maintain tailored unisex fit',
      'Certified Fair Wear and GOTS sustainable production'
    ],
    materials: '85% GOTS Organic Cotton / 15% Recycled Polyester',
    images: [
      hoodieMainImg,
      hoodieHoverImg,
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Heather Charcoal', hex: '#374151' },
      { name: 'Oatmeal Heather', hex: '#E5E7EB' },
      { name: 'Midnight Navy', hex: '#1E293B' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isBestSeller: true,
    isEco: true,
    rating: 4.9,
    reviewCount: 184
  },
  {
    id: 'prod-tee-organic-g',
    name: 'Google G Logo Organic Cotton Tee',
    category: 'Apparel',
    brand: 'Google',
    price: 28.0,
    description:
      'The foundational Google wardrobe staple. 100% combed organic cotton cut in a relaxed contemporary silhouette with the iconic four-color Google "G" embroidered on the left chest.',
    details: [
      '100% Combed Ring-Spun Organic Cotton (180 GSM)',
      'Precision embroidered 4-color Google G icon',
      'Set-in sleeve construction with twin needle topstitch',
      'Ribbed collar with interior herringbone neck tape',
      'Side-seamed construction for long-term shape retention'
    ],
    materials: '100% GOTS Certified Organic Cotton',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Bright White', hex: '#FFFFFF' },
      { name: 'Washed Black', hex: '#1F2937' },
      { name: 'Sage Green', hex: '#4B6358' },
      { name: 'Google Blue', hex: '#4285F4' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isNew: true,
    isEco: true,
    rating: 4.8,
    reviewCount: 310
  },
  {
    id: 'prod-hoodie-cloud',
    name: 'Google Cloud Classic Navy Pullover',
    category: 'Apparel',
    brand: 'Google Cloud',
    price: 68.0,
    description:
      'Official Google Cloud developer pullover hoodie. Heavyweight organic cotton fleece engineered for late-night coding sessions and cool mountain mornings, featuring the minimalist Cloud icon in high-density reflective print.',
    details: [
      '380 GSM heavyweight cross-grain brushed fleece',
      'High-density Google Cloud hexagonal icon at chest',
      'Tonal Google Cloud wordmark along right sleeve',
      'Spun fleece-lined 3-piece hood with drawstrings',
      'Ribbed side gussets for enhanced freedom of movement'
    ],
    materials: '80% Organic Cotton / 20% Recycled Poly Fleece',
    images: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Deep Cloud Navy', hex: '#0F172A' },
      { name: 'Carbon Grey', hex: '#334155' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 97
  },
  {
    id: 'prod-crewneck-gemini',
    name: 'Google Gemini Star Embroidered Crewneck',
    category: 'Apparel',
    brand: 'Gemini',
    price: 58.0,
    description:
      'Celebrating next-generation AI intelligence. Premium heavyweight crewneck sweatshirt decorated with the iridescent gradient Gemini starburst motif finely embroidered across the chest.',
    details: [
      '340 GSM luxury French Terry cotton interior',
      'Multicolor satin-stitch Gemini spark embroidery',
      'Drop shoulder contemporary streetwear cut',
      'Heavy-duty 2x2 ribbed collar and cuffs with spandex recovery',
      'Silicone washed for exceptional hand-feel'
    ],
    materials: '100% Combed Cotton French Terry',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Off-White Sand', hex: '#F3F4F6' },
      { name: 'Cosmic Slate', hex: '#1E293B' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 76
  },
  {
    id: 'prod-cap-dino',
    name: 'Google Chrome Dino Embroidered Baseball Cap',
    category: 'Apparel',
    brand: 'Chrome Dino',
    price: 26.0,
    description:
      'No internet connection required. Classic 6-panel unstructured dad hat crafted from washed cotton twill, featuring a crisp embroidered Chrome pixel T-Rex on the front crown.',
    details: [
      '100% washed cotton twill for broken-in comfort',
      'Detailed 8-bit pixel T-Rex embroidery',
      'Antique brass buckle tri-glide adjuster with tuck-in grommet',
      'Embroidered ventilation eyelets',
      'Curved visor with matching under-visor'
    ],
    materials: '100% Washed Cotton Twill',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Charcoal Black', hex: '#1F2937' },
      { name: 'Khaki Stone', hex: '#D1D5DB' },
      { name: 'Forest Olive', hex: '#374151' }
    ],
    sizes: ['One Size (Adjustable)'],
    inStock: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 420
  },
  {
    id: 'prod-tee-youtube',
    name: 'YouTube Classic Red Icon T-Shirt',
    category: 'Apparel',
    brand: 'YouTube',
    price: 28.0,
    description:
      'Official YouTube creator apparel. Breathable combed jersey t-shirt with the signature YouTube play button badge in vivid red and white on the chest.',
    details: [
      '100% Combed Ring-Spun Cotton',
      'High-definition soft-hand screenprint',
      'Tubular knit body for comfort',
      'Reinforced shoulder-to-shoulder taping',
      'Official YouTube sewn hem label'
    ],
    materials: '100% Cotton',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Pitch Black', hex: '#111827' },
      { name: 'Heather Grey', hex: '#9CA3AF' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    rating: 4.7,
    reviewCount: 142
  },
  {
    id: 'prod-tee-android',
    name: 'Android Classic Green Pocket Tee',
    category: 'Apparel',
    brand: 'Android',
    price: 30.0,
    description:
      'Minimalist everyday tee with a clean chest patch pocket featuring the iconic Android robot head peeking over the top edge.',
    details: [
      '100% Organic combed cotton (200 GSM)',
      'Front chest pocket with embroidered Android bugdroid detail',
      'Ribbed knit neckband',
      'Pre-shrunk fabric to minimize shrinkage',
      'Regular unisex cut'
    ],
    materials: '100% Organic Cotton',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Android White', hex: '#FFFFFF' },
      { name: 'Android Sage', hex: '#34A853' },
      { name: 'Dark Slate', hex: '#1F2937' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.8,
    reviewCount: 88
  },
  {
    id: 'prod-socks-pattern',
    name: 'Google Pattern Organic Cotton Crew Socks',
    category: 'Apparel',
    brand: 'Google',
    price: 16.0,
    description:
      'Engineered with targeted arch compression, seamless toe construction, and cushioned terry footbed. Knitted with playful Google four-color accents.',
    details: [
      '80% Combed Organic Cotton, 17% Polyamide, 3% Elastane',
      'Y-gore heel cup prevents slipping inside footwear',
      'Seamless hand-linked toe for zero friction',
      'Engineered ribbing for stay-up leg grip',
      'Includes 1 pair in custom presentation sleeve'
    ],
    materials: 'Organic Cotton / Polyamide / Elastane',
    images: [
      'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'White & Multi', hex: '#F3F4F6' },
      { name: 'Black & Multi', hex: '#111827' }
    ],
    sizes: ['M (Men 6-8.5)', 'L (Men 9-12)'],
    inStock: true,
    rating: 4.9,
    reviewCount: 204
  },

  // DRINKWARE
  {
    id: 'prod-bottle-capri',
    name: 'Google G Insulated Capri Water Bottle (24oz)',
    category: 'Drinkware',
    brand: 'Google',
    price: 34.0,
    description:
      'Double-wall vacuum insulated stainless steel bottle engineered to keep cold liquids chilled for 24 hours or piping hot for 12 hours. Powder-coated matte finish with laser-etched Google G insignia and spill-proof flip straw lid.',
    details: [
      '18/8 Pro-grade food-grade stainless steel',
      'TempLock™ Double-wall vacuum insulation',
      'Leak-proof threaded cap with integrated silicone carry loop',
      'Sweat-proof condensation-free exterior matte finish',
      'BPA-free, Phthalate-free, dishwasher safe top rack'
    ],
    materials: '18/8 Stainless Steel / Food-grade Silicone',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570824104453-508955ab713e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Matte Pure White', hex: '#FFFFFF' },
      { name: 'Midnight Charcoal', hex: '#1F2937' },
      { name: 'Brushed Steel', hex: '#9CA3AF' }
    ],
    sizes: ['24 oz (710 ml)'],
    inStock: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 382
  },
  {
    id: 'prod-stanley-iceflow',
    name: 'Stanley IceFlow Flip Straw Bottle - Google Edition',
    category: 'Drinkware',
    brand: 'Google',
    price: 45.0,
    originalPrice: 48.0,
    description:
      'The legendary Stanley IceFlow tumbler customized with subtle Google primary color accents and laser-etched branding. Double-wall vacuum insulation keeps ice frozen for up to 2 days.',
    details: [
      'Official Stanley 30oz IceFlow™ edition',
      'Recycled 18/8 stainless steel construction',
      'Built-in flip straw for easy upright sipping',
      'Ergonomic rugged folding carry handle',
      'Car cup holder compatible base (fits 99% of vehicle cup holders)'
    ],
    materials: 'Recycled Stainless Steel / BPA-Free Polymer',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570824104453-508955ab713e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Matte Frost Grey', hex: '#CBD5E1' },
      { name: 'Obsidian Black', hex: '#0F172A' }
    ],
    sizes: ['30 oz (890 ml)'],
    inStock: true,
    isLimited: true,
    rating: 5.0,
    reviewCount: 512
  },
  {
    id: 'prod-mug-ceramic',
    name: 'Google Classic Ceramic Coffee Mug',
    category: 'Drinkware',
    brand: 'Google',
    price: 18.0,
    description:
      'Heavyweight stoneware ceramic mug with a smooth matte chalk exterior, glossy glazed interior in Google Blue, and an ergonomic G-curve handle for comfortable desktop sipping.',
    details: [
      '14 oz capacity (415 ml)',
      'High-fired durable stoneware ceramic',
      'Dishwasher safe and microwave safe',
      'Subtle embossed Google lettermark at base',
      'Heat retention thermal clay body'
    ],
    materials: 'High-fire Stoneware Ceramic',
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Chalk White / Blue Interior', hex: '#F9FAFB' },
      { name: 'Slate Grey / Yellow Interior', hex: '#4B5563' }
    ],
    sizes: ['14 oz (415 ml)'],
    inStock: true,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 265
  },
  {
    id: 'prod-tumbler-youtube',
    name: 'YouTube Insulated Stainless Steel Tumbler (20oz)',
    category: 'Drinkware',
    brand: 'YouTube',
    price: 28.0,
    description:
      'Sleek tapered vacuum tumbler designed for daily hot coffee or iced tea on the go. Featuring a splash-resistant slider lid and powder-coated matte black exterior with red YouTube emblem.',
    details: [
      'Double-wall copper vacuum insulation',
      'Clear shatter-resistant Tritan slider lid',
      'Cold for 18 hours, hot for 8 hours',
      'Sweat-free design and cup holder friendly',
      'Laser-engraved play icon that never fades'
    ],
    materials: '18/8 Kitchen-Grade Stainless Steel',
    images: [
      'https://images.unsplash.com/photo-1570824104453-508955ab713e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Matte Jet Black', hex: '#111827' },
      { name: 'Brushed Steel', hex: '#9CA3AF' }
    ],
    sizes: ['20 oz (590 ml)'],
    inStock: true,
    rating: 4.8,
    reviewCount: 119
  },

  // ACCESSORIES
  {
    id: 'prod-backpack-eco',
    name: 'Google Eco Recycled Laptop Backpack (15-inch)',
    category: 'Accessories',
    brand: 'Google',
    price: 89.0,
    originalPrice: 98.0,
    description:
      'Engineered from 100% post-consumer recycled plastic bottles (RPET). Features a dedicated suspended 15-inch laptop compartment, water-resistant zippers, magnetic quick-access stash pocket, and breathable airflow back panel.',
    details: [
      'Fabric made from 24 recycled 500ml plastic bottles',
      'Padded suspended laptop sleeve (fits up to 16" MacBook Pro / Pixelbook)',
      'Water-repellent 600D recycled polyester shell with TPU coating',
      'Luggage pass-through trolley strap for seamless travel',
      'Hidden passport and security pocket at lower back',
      'Dimensions: 18.5" H x 12" W x 6.5" D (22L volume)'
    ],
    materials: '100% Certified Recycled Post-Consumer RPET',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Heather Charcoal', hex: '#374151' },
      { name: 'Pitch Black', hex: '#111827' }
    ],
    sizes: ['22 Liters (Fits 16" Laptop)'],
    inStock: true,
    isBestSeller: true,
    isEco: true,
    rating: 4.9,
    reviewCount: 440
  },
  {
    id: 'prod-tote-lucky',
    name: 'Google "I\'m Feeling Lucky" Heavyweight Canvas Tote',
    category: 'Accessories',
    brand: 'Google',
    price: 24.0,
    description:
      'Sturdy 14oz organic cotton duck canvas tote bag featuring Google\'s timeless search motto. Extra-wide webbing shoulder straps with dual interior slip pockets for phone, keys, and water bottle.',
    details: [
      '14 oz 100% heavy unbleached organic cotton canvas',
      'High-contrast "I\'m Feeling Lucky" typography print',
      'Reinforced cross-stitch handle attachments',
      'Interior zippered valuables pocket & bottle sleeve',
      'Square gusseted flat bottom stands upright when loading',
      'Dimensions: 16" H x 15" W x 5" D with 11" strap drop'
    ],
    materials: '100% Heavyweight Organic Cotton Duck Canvas',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Natural Ecru', hex: '#F5F5F0' },
      { name: 'Washed Black', hex: '#1F2937' }
    ],
    sizes: ['Standard Large (16" x 15" x 5")'],
    inStock: true,
    isEco: true,
    rating: 4.9,
    reviewCount: 290
  },
  {
    id: 'prod-umbrella-dino',
    name: 'Chrome Dino Magic Compact Umbrella',
    category: 'Accessories',
    brand: 'Chrome Dino',
    price: 32.0,
    description:
      'Hydrochromic automatic compact umbrella. The discreet monochrome pixel Dino pattern comes alive with vibrant Google colors as soon as raindrops touch the canopy!',
    details: [
      'Hydrochromic color-changing ink technology',
      'Automatic one-touch open and close button',
      'Windproof 8-rib reinforced fiberglass frame',
      '210T high-density pongee water-repellent fabric',
      'Includes matching slipcover with carabiner clip'
    ],
    materials: '210T Pongee Fabric / Fiberglass / Aluminum',
    images: [
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Matte Black to Color', hex: '#111827' }
    ],
    sizes: ['41" Canopy (Collapses to 11.5")'],
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: 'prod-pins-enamel',
    name: 'Google Enamel Pin 4-Pack (Chrome, Drive, Gmail, Maps)',
    category: 'Accessories',
    brand: 'Google',
    price: 22.0,
    description:
      'Deluxe hard enamel pin set celebrating Google’s most iconic applications: Chrome, Google Drive, Gmail, and Google Maps. Hand-filled with lustrous hard enamel on gold-plated polished brass.',
    details: [
      'Set of 4 collector hard enamel pins',
      '2mm thick polished gold metal casing',
      'High-luster smooth polished enamel finish',
      'Dual rubber clutch backings per pin prevent spinning',
      'Mounted on FSC certified recycled card backing'
    ],
    materials: 'Hard Enamel / Gold Plated Brass',
    images: [
      'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Gold / Multi-Color', hex: '#F59E0B' }
    ],
    sizes: ['1.25" Diameter Each'],
    inStock: true,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 310
  },
  {
    id: 'prod-stickers-gemini',
    name: 'Gemini Holographic Developer Sticker Pack',
    category: 'Accessories',
    brand: 'Gemini',
    price: 12.0,
    description:
      'Ten premium die-cut vinyl stickers with radiant rainbow holographic lamination. UV-resistant, weatherproof, and safe for laptops, tumblers, and phone cases.',
    details: [
      'Pack of 10 unique Gemini & AI Developer designs',
      'Heavy-duty 6 mil thick waterproof vinyl',
      'Reflective prismatic holographic finish',
      'Resistant to scratches, sunlight, and dishwasher heat'
    ],
    materials: 'Weatherproof Heavy Vinyl with Holographic Film',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Prismatic Hologram', hex: '#8B5CF6' }
    ],
    sizes: ['Assorted (2" - 3.5")'],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 195
  },

  // COLLECTIBLES
  {
    id: 'prod-figurine-android',
    name: 'Android Classic Green Vinyl Collectible Figurine',
    category: 'Collectibles',
    brand: 'Android',
    price: 24.0,
    description:
      'The original 3-inch Android vinyl collectible robot designed by Andrew Bell in partnership with Google. Features rotating head and 360-degree movable arms in authentic Android Bugdroid green.',
    details: [
      'Official 3-inch vinyl collectible figurine',
      'Articulated rotating head and 360-degree ball joint arms',
      'Matte soft-touch finish in Pantone Android Green',
      'Packaged in a premium themed collector box with viewing window'
    ],
    materials: 'Non-toxic Molded Vinyl',
    images: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Android Green', hex: '#34A853' }
    ],
    sizes: ['3" Height (7.6 cm)'],
    inStock: true,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 642
  },
  {
    id: 'prod-figurine-bike',
    name: 'Google Campus Classic Heritage Bike Figurine',
    category: 'Collectibles',
    brand: 'Google',
    price: 36.0,
    description:
      'Die-cast metal scale miniature of the world-famous primary-colored Google campus cruiser bicycle. Features functioning rubber tires, spinning pedals connected to chain, and steerable front handlebars with bell.',
    details: [
      '1:10 precision scale die-cast zinc alloy & ABS',
      'Accurate 4-color primary Google frame paint scheme',
      'Rotating pedals, working chain, and realistic rubber tread tires',
      'Front basket with micro-replica campus laptop package',
      'Collector display kickstand included'
    ],
    materials: 'Die-cast Zinc Alloy / Rubber / ABS',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Primary Google Four-Color', hex: '#4285F4' }
    ],
    sizes: ['6.5" L x 4" H'],
    inStock: true,
    isLimited: true,
    rating: 4.9,
    reviewCount: 178
  },
  {
    id: 'prod-basketball-google',
    name: 'Google Official Rubber Basketball (Google Colors)',
    category: 'Collectibles',
    brand: 'Google',
    price: 38.0,
    description:
      'Official regulation size 7 outdoor/indoor basketball molded with high-grip pebble channels in the iconic Google blue, red, yellow, and green segment pattern.',
    details: [
      'Official Regulation Size 7 (29.5")',
      'Deep channel design for enhanced finger control',
      'High-retention butyl bladder maintains constant air pressure',
      'Durable cushioned composite rubber cover suitable for tarmac or hardwood',
      'Shipped inflated in commemorative collector net'
    ],
    materials: 'Cushioned Composite Rubber / Butyl Bladder',
    images: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Multi-Color Primary', hex: '#EA4335' }
    ],
    sizes: ['Official Size 7 (29.5")'],
    inStock: true,
    rating: 4.8,
    reviewCount: 94
  },
  {
    id: 'prod-puzzle-cloud',
    name: 'Super Cloud 500-Piece Jigsaw Puzzle',
    category: 'Collectibles',
    brand: 'Google Cloud',
    price: 25.0,
    description:
      '500 precision-cut pieces featuring an intricate illustrated aerial map of modern cloud infrastructure, data centers, fiber optic sea cables, and developer milestones.',
    details: [
      '500 high-density recycled blue puzzle board pieces',
      'Anti-glare linen matte finish prevents reflections',
      'Precision interlocking pieces that snap firmly into place',
      'Includes full-size reference poster (18" x 24")',
      'Non-toxic vegetable-based inks'
    ],
    materials: '100% Recycled Chipboard / Vegetable Inks',
    images: [
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Cloud Infrastructure Art', hex: '#3B82F6' }
    ],
    sizes: ['Completed: 18" x 24"'],
    inStock: true,
    rating: 4.7,
    reviewCount: 82
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'Apparel',
    title: 'Apparel',
    description: 'T-shirts, hoodies, caps and premium organic clothing designed for comfort and durability.',
    itemCount: '12 Items',
    image: apparelCategoryImg,
    tag: 'Organic Cotton'
  },
  {
    id: 'Drinkware',
    title: 'Drinkware',
    description: 'Vacuum insulated water bottles, stainless tumblers, and stoneware ceramic mugs.',
    itemCount: '8 Items',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=80',
    tag: 'Pro-Grade Steel'
  },
  {
    id: 'Accessories',
    title: 'Accessories',
    description: 'Recycled laptop backpacks, heavyweight canvas totes, enamel pins, and umbrellas.',
    itemCount: '14 Items',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
    tag: 'Everyday Gear'
  },
  {
    id: 'Collectibles',
    title: 'Collectibles',
    description: 'Special edition Android vinyl figurines, Chrome Dino gear, and Google campus items.',
    itemCount: '6 Items',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
    tag: 'Limited Edition'
  }
];
