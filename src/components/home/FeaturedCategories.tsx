
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
}

interface FeaturedCategoriesProps {
  categories: Category[];
}

const FeaturedCategories = ({ categories }: FeaturedCategoriesProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-shopwave-900">Shop by Category</h2>
          <p className="mt-3 text-shopwave-600 max-w-2xl mx-auto">
            Browse our curated collections and find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group animate-fade-in"
            >
              <div className="relative rounded-lg overflow-hidden border shadow-sm transition-transform duration-300 group-hover:shadow-md">
                <div className="aspect-square bg-shopwave-100 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium text-lg">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.itemCount} items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link
            to="/categories"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            View All Categories
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
