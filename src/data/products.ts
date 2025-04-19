
import { CartItem } from "@/hooks/use-cart";

export type Product = Omit<CartItem, 'quantity'> & {
  description: string;
  features?: string[];
  inStock: boolean;
  images: string[];
  rating: number;
  reviews: number;
  isFeatured?: boolean;
  isNew?: boolean;
  discount?: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Leather Backpack",
    price: 79.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    ],
    description: "Handcrafted from premium full-grain leather, this backpack combines style and functionality for your everyday needs. Features multiple compartments, including a padded laptop sleeve.",
    features: [
      "100% genuine full-grain leather",
      "Padded 15-inch laptop compartment",
      "Water-resistant lining",
      "Adjustable shoulder straps",
      "Multiple interior pockets"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 127,
    isFeatured: true
  },
  {
    id: "2",
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
      "https://images.unsplash.com/photo-1604160456992-86569a1d4b0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Experience immersive sound with our premium wireless headphones featuring active noise cancellation, long battery life, and comfortable over-ear design.",
    features: [
      "Active noise cancellation technology",
      "40-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone for calls",
      "Foldable design for easy storage"
    ],
    inStock: true,
    rating: 4.7,
    reviews: 342,
    isFeatured: true
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 149.95,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80",
      "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, GPS tracking, and smartphone notifications.",
    features: [
      "Heart rate and sleep monitoring",
      "Built-in GPS",
      "Water-resistant up to 50m",
      "5-day battery life",
      "Customizable watch faces"
    ],
    inStock: true,
    rating: 4.5,
    reviews: 218,
    isNew: true
  },
  {
    id: "4",
    name: "Classic Cotton T-Shirt",
    price: 24.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Our signature 100% organic cotton t-shirt. Soft, comfortable, and perfect for everyday wear. Available in multiple colors.",
    features: [
      "100% organic cotton",
      "Pre-shrunk fabric",
      "Reinforced stitching",
      "Relaxed fit",
      "Machine washable"
    ],
    inStock: true,
    rating: 4.6,
    reviews: 529,
    discount: 15
  },
  {
    id: "5",
    name: "Professional Ceramic Hair Straightener",
    price: 89.99,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1586343492328-8469248e7b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Achieve salon-quality results at home with this professional ceramic hair straightener. Features adjustable temperature settings and fast heat-up.",
    features: [
      "Ceramic plates with ionic technology",
      "Adjustable temperature (250°F-450°F)",
      "30-second heat-up time",
      "Auto shut-off safety feature",
      "Dual voltage for worldwide use"
    ],
    inStock: true,
    rating: 4.4,
    reviews: 173
  },
  {
    id: "6",
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1575484662751-216378e357e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Keep your beverages hot for 12 hours or cold for 24 hours with this double-walled vacuum insulated water bottle. BPA-free and eco-friendly.",
    features: [
      "Double-wall vacuum insulation",
      "18/8 food-grade stainless steel",
      "Leak-proof lid",
      "Sweat-free exterior",
      "500ml capacity"
    ],
    inStock: true,
    rating: 4.9,
    reviews: 302,
    isFeatured: true
  },
  {
    id: "7",
    name: "Wireless Bluetooth Speaker",
    price: 59.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1589625307652-f516eb50c7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1537963447914-dbc04b81de27?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Fill any room with immersive 360° sound. This portable Bluetooth speaker delivers rich bass and clear highs for up to 12 hours on a single charge.",
    features: [
      "360° surround sound",
      "IPX7 waterproof rating",
      "12-hour battery life",
      "Built-in microphone",
      "Bluetooth 5.0 connectivity"
    ],
    inStock: true,
    rating: 4.6,
    reviews: 256,
    isNew: true
  },
  {
    id: "8",
    name: "Adjustable Dumbbell Set",
    price: 229.99,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    images: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80"
    ],
    description: "Save space and get a complete workout with these adjustable dumbbells. Weight can be adjusted from 5 to 52.5 pounds per dumbbell in 2.5-pound increments.",
    features: [
      "Adjustable weights from 5-52.5 lbs each",
      "Easy weight selection dial",
      "Space-efficient design",
      "Durable cast iron construction",
      "Storage tray included"
    ],
    inStock: true,
    rating: 4.7,
    reviews: 188
  },
  {
    id: "9",
    name: "Minimalist Desk Lamp",
    price: 49.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1586023493380-a56989aec82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
    ],
    description: "This modern LED desk lamp features adjustable brightness and color temperature to create the perfect lighting for any task.",
    features: [
      "5 brightness levels",
      "3 color temperature settings",
      "Flexible gooseneck design",
      "Touch controls",
      "USB charging port"
    ],
    inStock: false,
    rating: 4.5,
    reviews: 143,
    discount: 10
  },
  {
    id: "10",
    name: "Organic Moisturizing Face Cream",
    price: 42.99,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    images: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
    ],
    description: "Hydrate and rejuvenate your skin with this organic face cream. Made with natural ingredients to nourish and protect all skin types.",
    features: [
      "100% organic ingredients",
      "Paraben and sulfate-free",
      "Rich in antioxidants",
      "Suitable for all skin types",
      "Not tested on animals"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 217,
    isFeatured: true
  },
  {
    id: "11",
    name: "High-Performance Running Shoes",
    price: 129.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1584735175315-9d5df23be2c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1608379273012-38d2613309f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "Designed for serious runners, these shoes offer superior cushioning, support, and energy return for a responsive ride.",
    features: [
      "Lightweight mesh upper",
      "Responsive cushioning",
      "Durable rubber outsole",
      "Reflective details for visibility",
      "Breathable design"
    ],
    inStock: true,
    rating: 4.6,
    reviews: 389,
    isNew: true
  },
  {
    id: "12",
    name: "Slim Minimalist Wallet",
    price: 29.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1607784784481-567cc45db30b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1589782177895-ee9abe5634b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Streamline your pocket with this slim wallet. Features RFID blocking technology and space for all your essential cards and cash.",
    features: [
      "Genuine leather construction",
      "RFID blocking technology",
      "Holds up to 8 cards",
      "Quick access pocket for most used cards",
      "Ultra-slim design"
    ],
    inStock: true,
    rating: 4.7,
    reviews: 253,
    discount: 20
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getDiscountedProducts = (): Product[] => {
  return products.filter(product => product.discount !== undefined);
};

export const getCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};
