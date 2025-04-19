
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-shopwave-900 mb-4">Contact Us</h1>
          <p className="text-shopwave-600 max-w-2xl mx-auto">
            Have a question, feedback, or need assistance? Our team is here to help. Fill out the form below or use our contact information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border animate-fade-in">
            <h2 className="text-xl font-semibold text-shopwave-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-shopwave-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-shopwave-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-shopwave-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-shopwave-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Let us know how we can assist you..."
                  rows={6}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-shopwave-50 p-8 rounded-lg animate-fade-in">
              <h2 className="text-xl font-semibold text-shopwave-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-shopwave-900">Email</h3>
                    <p className="text-shopwave-600 mt-1">support@shopwave.com</p>
                    <p className="text-shopwave-600">info@shopwave.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-shopwave-900">Phone</h3>
                    <p className="text-shopwave-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-shopwave-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-shopwave-900">Address</h3>
                    <p className="text-shopwave-600 mt-1">
                      123 Shop Street<br />
                      Suite 456<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-shopwave-900">Business Hours</h3>
                    <p className="text-shopwave-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border animate-fade-in">
              <h2 className="text-xl font-semibold text-shopwave-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-shopwave-900">What are your shipping options?</h3>
                  <p className="text-shopwave-600 mt-1">
                    We offer standard shipping (3-5 business days), express shipping (1-2 business days), and international shipping (7-14 business days).
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-shopwave-900">How can I track my order?</h3>
                  <p className="text-shopwave-600 mt-1">
                    Once your order ships, you'll receive a tracking number via email that you can use to monitor your package's journey.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-shopwave-900">What is your return policy?</h3>
                  <p className="text-shopwave-600 mt-1">
                    We offer a 30-day return policy on most items. Products must be unopened and in their original packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-sm border p-4 h-96">
          <iframe
            title="ShopWave Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.06549649976!2d-122.43780236322474!3d37.757690709684726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1683131336148!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
