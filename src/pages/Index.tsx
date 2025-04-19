
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import ProductGrid from "@/components/product/ProductGrid";
import Newsletter from "@/components/home/Newsletter";
import { categories } from "@/data/categories";
import { 
  getFeaturedProducts, 
  getNewProducts, 
  getDiscountedProducts 
} from "@/data/products";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewProducts();
  const discountedProducts = getDiscountedProducts();

  return (
    <Layout>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeaturedCategories categories={categories.slice(0, 4)} />

        <ProductGrid 
          products={featuredProducts}
          title="Featured Products"
          subtitle="Discover our carefully selected products that stand out from the rest"
        />
        
        <div className="my-16">
          <ProductGrid 
            products={newArrivals}
            title="New Arrivals"
            subtitle="Be the first to shop our latest products and newest designs"
          />
        </div>
        
        <div className="mb-16">
          <ProductGrid 
            products={discountedProducts}
            title="Special Offers"
            subtitle="Limited time deals on great products. Don't miss out!"
          />
        </div>
      </div>
      
      <Newsletter />
    </Layout>
  );
};

export default Index;
