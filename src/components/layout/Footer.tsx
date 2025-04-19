
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-shopwave-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary">ShopWave</h2>
            <p className="text-shopwave-600 text-sm max-w-xs">
              Discover trendy and high-quality products from around the world at amazing prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-shopwave-600 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-shopwave-600 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-shopwave-600 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-shopwave-800">Shop</h3>
            <ul className="space-y-2">
              {["New Arrivals", "Best Sellers", "Discounts", "Clothing", "Accessories", "Electronics"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-shopwave-600 hover:text-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-shopwave-800">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Blog", "Affiliates", "Partners"].map((item) => (
                <li key={item}>
                  <Link to="/about" className="text-shopwave-600 hover:text-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-shopwave-800">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-shopwave-600 mt-0.5 flex-shrink-0" />
                <span className="text-shopwave-600 text-sm">123 Shop Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-shopwave-600 flex-shrink-0" />
                <span className="text-shopwave-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-shopwave-600 flex-shrink-0" />
                <span className="text-shopwave-600 text-sm">support@shopwave.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-shopwave-600">
              © {new Date().getFullYear()} ShopWave. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-shopwave-600 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-shopwave-600 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-sm text-shopwave-600 hover:text-accent transition-colors">
                Shipping & Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
