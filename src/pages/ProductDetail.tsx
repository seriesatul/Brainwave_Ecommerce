
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductDetails from "@/components/product/ProductDetails";
import ProductGrid from "@/components/product/ProductGrid";
import { getProductById, getProductsByCategory } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = id ? getProductById(id) : undefined;
  
  // Get related products (same category)
  const relatedProducts = product
    ? getProductsByCategory(product.category)
        .filter((p) => p.id !== product.id)
        .slice(0, 4)
    : [];
  
  useEffect(() => {
    // Redirect to shop if product not found
    if (!product && id) {
      navigate("/shop");
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return null;
  }
  
  return (
    <Layout>
      <ProductDetails
        id={product.id}
        name={product.name}
        price={product.price}
        images={product.images}
        description={product.description}
        category={product.category}
        features={product.features}
        inStock={product.inStock}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProductGrid
          title="You may also like"
          subtitle="Similar products you might be interested in"
          products={relatedProducts}
        />
      </div>
    </Layout>
  );
};

export default ProductDetail;
