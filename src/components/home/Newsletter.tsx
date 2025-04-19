
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would send this to your API
    console.log("Subscribing email:", email);
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter at " + email,
    });
    
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-shopwave-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-shopwave-600 mb-8">
            Stay updated with our latest products, special offers, and behind-the-scenes content.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow min-w-0"
            />
            <Button type="submit" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-shopwave-500 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
