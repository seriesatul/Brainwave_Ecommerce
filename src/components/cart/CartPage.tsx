
import { Link } from "react-router-dom";
import { Trash2, ArrowRight, CreditCard, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;
  
  const handleCheckout = () => {
    // In a real app, you would redirect to a checkout page or process
    toast({
      title: "Checkout initiated",
      description: "In a real shop, you would be redirected to payment processing",
    });
    
    setTimeout(() => {
      clearCart();
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase",
      });
    }, 2000);
  };
  
  const handlePromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Promo code applied",
      description: `Code "${promoCode}" has been applied to your order`,
    });
    setPromoCode("");
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-shopwave-900 mb-4">Your Cart is Empty</h1>
          <p className="text-shopwave-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild size="lg">
            <Link to="/shop">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-shopwave-900 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg border animate-fade-in">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between text-base font-medium text-shopwave-900">
                  <h3>
                    <Link to={`/product/${item.id}`} className="hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </h3>
                  <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <p className="mt-1 text-sm text-shopwave-500">{item.category}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="h-8 w-8 rounded-none border-r"
                    >
                      <span className="font-bold">-</span>
                    </Button>
                    <span className="w-10 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 rounded-none border-l"
                    >
                      <span className="font-bold">+</span>
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/shop">
                <svg 
                  className="mr-2 h-4 w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                Continue Shopping
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="text-destructive hover:bg-destructive/10"
            >
              <Trash2 size={16} className="mr-2" />
              Clear Cart
            </Button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="bg-shopwave-50 rounded-lg border p-6 animate-fade-in">
          <h2 className="text-lg font-medium text-shopwave-900 mb-4">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-shopwave-600">Subtotal</span>
              <span className="font-medium text-shopwave-900">${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-shopwave-600">Shipping</span>
              <span className="font-medium text-shopwave-900">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            
            <form onSubmit={handlePromoCode} className="pt-2">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="min-w-0"
                />
                <Button type="submit" variant="outline">Apply</Button>
              </div>
            </form>
            
            <Separator className="my-2" />
            
            <div className="flex justify-between font-medium">
              <span className="text-shopwave-900">Total</span>
              <span className="text-lg text-shopwave-900">${total.toFixed(2)}</span>
            </div>
            
            <Button 
              onClick={handleCheckout} 
              className="w-full mt-4"
              size="lg"
            >
              <CreditCard size={18} className="mr-2" />
              Checkout
            </Button>
            
            {shipping > 0 && (
              <div className="flex items-start mt-4 text-shopwave-600 text-sm">
                <AlertCircle size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <p>Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping</p>
              </div>
            )}
            
            <div className="flex items-center justify-center space-x-4 mt-6">
              <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="PayPal" className="h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="American Express" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
