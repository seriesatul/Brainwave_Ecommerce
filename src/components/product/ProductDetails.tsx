
import { useState } from "react";
import { MinusIcon, PlusIcon, Heart, Share2, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

interface ProductDetailsProps {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  features?: string[];
  inStock?: boolean;
}

const ProductDetails = ({
  id,
  name,
  price,
  images,
  description,
  category,
  features = [],
  inStock = true,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id,
        name,
        price,
        image: images[0],
        category,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border bg-white">
            <img
              src={images[activeImage]}
              alt={name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-md overflow-hidden border bg-white ${
                    activeImage === idx ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${name} - Image ${idx + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-shopwave-900 sm:text-3xl">{name}</h1>
            <p className="mt-1 text-sm text-shopwave-500">{category}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-shopwave-900">${price.toFixed(2)}</p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full h-9 w-9 border">
                <Heart size={18} />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full h-9 w-9 border">
                <Share2 size={18} />
                <span className="sr-only">Share product</span>
              </Button>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <div className="prose prose-sm text-shopwave-700 max-w-none">
              <p>{description}</p>
            </div>
            
            {features.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-shopwave-900">Features:</h3>
                <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-shopwave-700">
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {/* Stock Status */}
            <div className="flex items-center text-sm">
              <div className={`h-3 w-3 rounded-full ${inStock ? "bg-green-500" : "bg-red-500"}`} />
              <span className="ml-2 text-shopwave-700">
                {inStock ? "In stock and ready to ship" : "Out of stock"}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center">
              <span className="mr-3 text-sm font-medium text-shopwave-700">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="h-9 w-9 rounded-none border-r"
                >
                  <MinusIcon size={16} />
                </Button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={increaseQuantity}
                  className="h-9 w-9 rounded-none border-l"
                >
                  <PlusIcon size={16} />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button 
              onClick={handleAddToCart} 
              disabled={!inStock}
              className="w-full"
            >
              {inStock ? "Add to Cart" : "Out of Stock"}
            </Button>

            {/* Shipping Info */}
            <div className="flex items-start space-x-2 text-sm text-shopwave-600">
              <TruckIcon size={18} className="flex-shrink-0 mt-0.5" />
              <p>Free shipping on orders over $50. Free returns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
