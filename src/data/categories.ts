
export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
  description?: string;
}

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    itemCount: 42,
    description: "Discover the latest gadgets and tech essentials, from headphones to smartwatches."
  },
  {
    id: "clothing",
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    itemCount: 78,
    description: "Explore our stylish collection of clothing for all occasions and seasons."
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    itemCount: 36,
    description: "Complete your look with our premium selection of bags, jewelry, and accessories."
  },
  {
    id: "beauty",
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    itemCount: 29,
    description: "Pamper yourself with our range of skincare, makeup, and beauty products."
  },
  {
    id: "home",
    name: "Home",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1087&q=80",
    itemCount: 45,
    description: "Transform your space with our stylish home decor, furniture, and kitchen essentials."
  },
  {
    id: "fitness",
    name: "Fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    itemCount: 22,
    description: "Achieve your fitness goals with our quality workout gear and equipment."
  },
  {
    id: "footwear",
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1112&q=80",
    itemCount: 31,
    description: "Step out in style with our collection of shoes for every occasion."
  },
  {
    id: "sale",
    name: "Sale",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    itemCount: 24,
    description: "Grab amazing deals on a wide range of products across all categories."
  }
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};
