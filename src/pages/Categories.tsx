
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { categories } from "@/data/categories";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-shopwave-900 mb-4">Browse Categories</h1>
          <p className="text-shopwave-600 max-w-2xl mx-auto">
            Explore our wide range of product categories to find exactly what you're looking for
          </p>
          
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-shopwave-500" />
            </div>
            <Input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group animate-fade-in"
            >
              <div className="overflow-hidden rounded-lg shadow-md border transition-all duration-300 h-full group-hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-shopwave-900 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-shopwave-600 text-sm">{category.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-shopwave-500">{category.itemCount} products</span>
                    <span className="text-primary font-medium inline-flex items-center text-sm">
                      Browse 
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-shopwave-800 mb-2">No categories found</h3>
            <p className="text-shopwave-600">
              Try adjusting your search query or browse all categories.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Categories;
