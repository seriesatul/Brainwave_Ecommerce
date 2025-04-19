
// Mock data for the e-commerce site
const PRODUCTS = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 129.99,
    description: "Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation technology and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    category: "Electronics",
    stock: 15,
    rating: 4.8,
    reviews: 123,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Comfortable ear cups",
      "Built-in microphone"
    ],
    colors: ["Black", "White", "Blue"]
  },
  {
    id: 2,
    name: "Casual Cotton T-Shirt",
    price: 24.99,
    description: "A comfortable, everyday t-shirt made from 100% organic cotton. Perfect for casual wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    category: "Clothing",
    stock: 50,
    rating: 4.5,
    reviews: 89,
    features: [
      "100% organic cotton",
      "Breathable fabric",
      "Machine washable",
      "Pre-shrunk"
    ],
    colors: ["White", "Black", "Gray", "Navy", "Red"]
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 89.99,
    description: "Track your fitness goals with this feature-packed smartwatch. Includes heart rate monitoring, GPS, and customizable workout modes.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1089&q=80",
    category: "Electronics",
    stock: 20,
    rating: 4.6,
    reviews: 76,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery life",
      "Sleep tracking"
    ],
    colors: ["Black", "Silver", "Rose Gold"]
  },
  {
    id: 4,
    name: "Designer Leather Handbag",
    price: 149.99,
    description: "Elegant and practical designer handbag made from genuine leather. Features multiple compartments and a stylish design.",
    image: "https://images.unsplash.com/photo-1590739157670-48a649636a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    category: "Accessories",
    stock: 10,
    rating: 4.9,
    reviews: 42,
    features: [
      "Genuine leather",
      "Multiple compartments",
      "Adjustable shoulder strap",
      "Metal hardware",
      "Inner zip pocket"
    ],
    colors: ["Brown", "Black", "Tan"]
  },
  {
    id: 5,
    name: "Ultralight Running Shoes",
    price: 119.99,
    description: "Engineered for speed and comfort, these running shoes feature responsive cushioning and breathable mesh upper.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    category: "Footwear",
    stock: 25,
    rating: 4.7,
    reviews: 104,
    features: [
      "Lightweight design",
      "Responsive cushioning",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Reflective details"
    ],
    colors: ["Blue/White", "Black/Red", "Gray/Yellow"]
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    description: "Keep your drinks cold for 24 hours or hot for 12 hours with this vacuum-insulated stainless steel water bottle.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1087&q=80",
    category: "Accessories",
    stock: 40,
    rating: 4.4,
    reviews: 67,
    features: [
      "Vacuum insulation",
      "BPA-free",
      "Leak-proof lid",
      "Durable construction",
      "Wide mouth opening"
    ],
    colors: ["Silver", "Black", "Blue", "Red"]
  },
  {
    id: 7,
    name: "Wireless Bluetooth Speaker",
    price: 79.99,
    description: "Portable Bluetooth speaker with 360° sound and 20-hour battery life. Perfect for outdoor adventures.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80",
    category: "Electronics",
    stock: 18,
    rating: 4.6,
    reviews: 91,
    features: [
      "360° sound",
      "20-hour battery life",
      "Waterproof design",
      "Bluetooth 5.1",
      "Built-in microphone"
    ],
    colors: ["Black", "Blue", "Red"]
  },
  {
    id: 8,
    name: "Slim Fit Denim Jeans",
    price: 59.99,
    description: "Classic slim-fit jeans made from premium stretch denim for all-day comfort.",
    image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    category: "Clothing",
    stock: 35,
    rating: 4.3,
    reviews: 78,
    features: [
      "Premium stretch denim",
      "Slim fit",
      "5-pocket styling",
      "Machine washable"
    ],
    colors: ["Blue", "Black", "Gray"]
  }
];

const CATEGORIES = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    itemCount: 25
  },
  {
    id: "clothing",
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    itemCount: 42
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    itemCount: 18
  },
  {
    id: "footwear",
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1112&q=80",
    itemCount: 12
  },
  {
    id: "home",
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    itemCount: 30
  },
  {
    id: "beauty",
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1084&q=80",
    itemCount: 20
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    itemCount: 15
  },
  {
    id: "books",
    name: "Books & Stationery",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    itemCount: 22
  }
];
