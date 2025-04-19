
import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/product/ProductGrid";
import ShopFilters from "@/components/shop/ShopFilters";
import { products, getCategories } from "@/data/products";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";

const Shop = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("featured");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);
  
  const categories = getCategories();
  const isMobile = useIsMobile();
  
  const maxPrice = 250; // Max price of products

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, maxPrice]);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by price
    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "newest":
        filtered.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case "featured":
      default:
        filtered.sort((a, b) => (a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1));
        break;
    }
    
    return filtered;
  }, [products, selectedCategories, priceRange, sort]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-shopwave-900">Shop All Products</h1>
            <p className="mt-2 text-shopwave-600">
              Browse our collection of quality products
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              {selectedCategories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map((category) => (
                    <Badge key={category} variant="secondary" className="px-2 py-1">
                      {category}
                      <button
                        onClick={() => handleCategoryChange(category)}
                        className="ml-1 text-shopwave-500 hover:text-shopwave-700"
                      >
                        &times;
                      </button>
                    </Badge>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-sm text-shopwave-500 hover:text-shopwave-700"
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="text-sm text-shopwave-600 mr-2">Sort by:</span>
                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger className="h-9 w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                    <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {!isMobile && (
                <div className="flex border rounded-md overflow-hidden">
                  <Button
                    variant={view === "grid" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setView("grid")}
                    className="rounded-none h-9 w-9"
                  >
                    <LayoutGrid size={18} />
                  </Button>
                  <Button
                    variant={view === "list" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setView("list")}
                    className="rounded-none h-9 w-9"
                  >
                    <List size={18} />
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <ShopFilters
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              maxPrice={maxPrice}
              onClearFilters={clearFilters}
            />
            
            {/* Products */}
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-shopwave-600 text-sm">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              
              <ProductGrid products={filteredProducts} />
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-shopwave-600 mb-4">No products match your filters.</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
