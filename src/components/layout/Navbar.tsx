
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";

const Navbar = () => {
  const isMobile = useIsMobile();
  const { cartItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-background sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              ShopWave
            </h1>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="nav-link text-shopwave-700 px-2 py-1 rounded-md text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {!isSearchOpen ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-shopwave-700"
              >
                <Search size={20} />
                <span className="sr-only">Search</span>
              </Button>
            ) : (
              <div className="relative animate-fade-in">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-3 pr-10 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full text-shopwave-500"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X size={16} />
                </Button>
              </div>
            )}

            <Link to="/account">
              <Button variant="ghost" size="icon" className="text-shopwave-700">
                <User size={20} />
                <span className="sr-only">Account</span>
              </Button>
            </Link>

            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-shopwave-700">
                <ShoppingCart size={20} />
                <span className="sr-only">Cart</span>
              </Button>
              {cartItems.length > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartItems.length}
                </Badge>
              )}
            </Link>

            {/* Mobile menu button */}
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-shopwave-700 md:hidden">
                    <Menu size={20} />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col h-full">
                    <div className="py-4">
                      <h2 className="text-xl font-bold text-primary mb-4">ShopWave</h2>
                      <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                          <Link
                            key={link.name}
                            to={link.path}
                            className="text-shopwave-700 px-2 py-2 rounded-md text-lg font-medium border-b border-gray-100"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
