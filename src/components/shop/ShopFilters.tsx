
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

interface FilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  maxPrice: number;
  onClearFilters: () => void;
}

const ShopFilters = ({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
  maxPrice,
  onClearFilters,
}: FilterProps) => {
  const isMobile = useIsMobile();
  const [priceValue, setPriceValue] = useState(priceRange);

  const handleSliderChange = (value: number[]) => {
    const range: [number, number] = [value[0], value[1] || maxPrice];
    setPriceValue(range);
  };

  const applyPriceFilter = () => {
    onPriceChange(priceValue);
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-shopwave-900">Filters</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClearFilters}
          className="h-8 text-sm text-shopwave-600"
        >
          <X size={16} className="mr-1" />
          Clear all
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price"]} className="space-y-4">
        <AccordionItem value="categories" className="border rounded-md p-2">
          <AccordionTrigger className="text-sm font-medium px-2">Categories</AccordionTrigger>
          <AccordionContent className="pt-4 px-2">
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => onCategoryChange(category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="text-sm text-shopwave-700 cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border rounded-md p-2">
          <AccordionTrigger className="text-sm font-medium px-2">Price Range</AccordionTrigger>
          <AccordionContent className="pt-4 px-2">
            <div className="space-y-6">
              <Slider
                defaultValue={[priceRange[0], priceRange[1]]}
                max={maxPrice}
                step={5}
                value={[priceValue[0], priceValue[1]]}
                onValueChange={handleSliderChange}
                className="mb-6"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-shopwave-700">
                  ${priceValue[0]} - ${priceValue[1]}
                </span>
                <Button size="sm" onClick={applyPriceFilter} className="h-8">
                  Apply
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  // Render as sidebar on desktop, sheet on mobile
  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="mb-4">
            <SlidersHorizontal size={16} className="mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <FiltersContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="w-64 flex-shrink-0">
      <FiltersContent />
    </div>
  );
};

export default ShopFilters;
