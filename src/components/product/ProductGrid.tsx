
import { ReactNode } from "react";
import ProductCard from "./ProductCard";
import type { CartItem } from "@/hooks/use-cart";

interface ProductGridProps {
  products: Omit<CartItem, 'quantity'>[];
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

const ProductGrid = ({ 
  products, 
  title, 
  subtitle, 
  children 
}: ProductGridProps) => {
  return (
    <section className="py-8">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-shopwave-900">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-2 text-shopwave-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}
      
      {children && <div className="mb-6">{children}</div>}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
