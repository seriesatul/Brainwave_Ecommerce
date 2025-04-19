
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-shopwave-900 mb-6">About ShopWave</h1>
            <p className="text-shopwave-600 mb-4">
              Welcome to ShopWave, your destination for quality products at affordable prices. Founded in 2025, we've been on a mission to provide an exceptional online shopping experience.
            </p>
            <p className="text-shopwave-600 mb-6">
              Our team is dedicated to curating the best products across multiple categories, ensuring that you get only the highest quality items delivered right to your doorstep.
            </p>
            <Button asChild size="lg">
              <Link to="/shop">Explore Our Products</Link>
            </Button>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Our team at ShopWave" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-shopwave-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm bg-white">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-shopwave-900 mb-2">Quality</h3>
              <p className="text-shopwave-600">
                We believe in offering products that exceed expectations in terms of quality, durability, and performance.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm bg-white">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 01-2.929 6.54l-.645-.645C7.882 17.265 7.273 17 6.828 17H4.172a4 4 0 01-2.929-6.54l4-4a1 1 0 01.707-.293z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-shopwave-900 mb-2">Innovation</h3>
              <p className="text-shopwave-600">
                We continuously seek new products and technologies that improve our customers' lives in meaningful ways.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm bg-white">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-shopwave-900 mb-2">Community</h3>
              <p className="text-shopwave-600">
                We build lasting relationships with our customers and partners based on trust, transparency, and shared values.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-shopwave-50 p-8 rounded-xl mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-shopwave-900 mb-6">Our Story</h2>
            <p className="text-shopwave-600 mb-4">
              ShopWave began with a simple idea: to create an online shopping experience that feels personal, intuitive, and enjoyable. We noticed that many e-commerce sites were complex and impersonal, so we set out to build something different.
            </p>
            <p className="text-shopwave-600 mb-4">
              Starting with just a handful of products and a small team, we've grown to offer hundreds of items across multiple categories. Throughout our journey, we've remained committed to our core values of quality, affordability, and exceptional customer service.
            </p>
            <p className="text-shopwave-600">
              Today, we serve customers around the world, but we still approach each day with the same enthusiasm and dedication that inspired us from the beginning.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-shopwave-900 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
              },
              {
                name: "Michael Chen",
                role: "Product Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              },
              {
                name: "Emily Rodriguez",
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80",
              },
              {
                name: "David Kim",
                role: "Customer Experience",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
              },
            ].map((member) => (
              <div key={member.name} className="border rounded-lg overflow-hidden shadow-sm bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-shopwave-900">{member.name}</h3>
                  <p className="text-shopwave-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
