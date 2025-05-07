
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Database, Globe, Search, Tractor } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-pattern text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Farm-Connect: Bridging Farmers and Buyers
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Advanced crop recommendations with machine learning and direct market access
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/crop-recommendation">
              <Button size="lg" className="bg-white text-farm-green-700 hover:bg-gray-100">
                Get Crop Recommendations
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-farm-green-700">
                Browse Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides innovative solutions to empower farmers and connect them directly with buyers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Tractor className="h-6 w-6 text-farm-green-600" />}
              title="Crop Recommendation"
              description="Advanced machine learning algorithms predict the best crops based on soil NPK values and production data"
            />
            <FeatureCard 
              icon={<Database className="h-6 w-6 text-farm-green-600" />}
              title="Direct Market Access"
              description="Connect directly with retailers, eliminating middlemen and ensuring fair prices for your produce"
            />
            <FeatureCard 
              icon={<Search className="h-6 w-6 text-farm-green-600" />}
              title="Crop Support System"
              description="Get tailored recommendations for water requirements, fertilizers, and cultivation practices"
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6 text-farm-green-600" />}
              title="Multilingual Support"
              description="Use the platform in your native language, breaking down communication barriers"
            />
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Simple process to get crop recommendations and connect with buyers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-farm-green-100 flex items-center justify-center text-farm-green-700 font-bold text-xl mx-auto">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold">Enter Soil Data</h3>
              <p className="mt-2 text-gray-600">
                Input your soil's NPK values and location information
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-farm-green-100 flex items-center justify-center text-farm-green-700 font-bold text-xl mx-auto">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold">Get Recommendations</h3>
              <p className="mt-2 text-gray-600">
                Our AI analyzes your data and provides the best crop recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-farm-green-100 flex items-center justify-center text-farm-green-700 font-bold text-xl mx-auto">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold">Connect With Buyers</h3>
              <p className="mt-2 text-gray-600">
                List your produce on the marketplace and connect directly with retailers
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call To Action */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-farm-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already benefiting from our advanced crop recommendation system
          </p>
          <Link to="/auth/register">
            <Button size="lg" className="bg-white text-farm-green-700 hover:bg-gray-100">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
