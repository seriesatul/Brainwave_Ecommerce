
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import type { CartItem } from "@/hooks/use-cart";

interface ProductCardProps {
  product: Omit<CartItem, 'quantity'>;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image, category } = product;
  const { addToCart } = useCart();

  return (
    <div className="group product-card bg-white rounded-lg overflow-hidden border">
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <div className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-2 right-2">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-white/80 backdrop-blur-sm text-shopwave-700 hover:bg-white">
              <Heart size={16} />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>
        </Link>
      </div>
      
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-shopwave-900 text-sm sm:text-base line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="mt-1 text-xs text-shopwave-500">{category}</div>
        
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold text-shopwave-900">${price.toFixed(2)}</span>
          
          <Button 
            size="sm" 
            variant="outline"
            className="text-xs"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
