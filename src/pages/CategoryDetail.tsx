
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/product/ProductGrid";
import { getCategoryById } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const category = id ? getCategoryById(id) : undefined;
  const products = id ? getProductsByCategory(category?.name || "") : [];
  
  useEffect(() => {
    // Redirect to categories if category not found
    if (!category && id) {
      navigate("/categories");
    }
  }, [category, id, navigate]);
  
  if (!category) {
    return null;
  }
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/categories">
              <ArrowLeft size={16} className="mr-2" />
              Back to Categories
            </Link>
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold text-shopwave-900">{category.name}</h1>
              {category.description && (
                <p className="mt-3 text-shopwave-600">{category.description}</p>
              )}
              <p className="mt-2 text-shopwave-500">{category.itemCount} products</p>
            </div>
            
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <ProductGrid products={products} />
          
          {products.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-shopwave-800 mb-2">No products found</h3>
              <p className="text-shopwave-600 mb-6">
                We couldn't find any products in this category at the moment.
              </p>
              <Button asChild>
                <Link to="/shop">Browse All Products</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryDetail;
