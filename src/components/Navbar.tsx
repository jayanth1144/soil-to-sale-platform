
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, User, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-farm-green-600 text-xl font-bold">Farm-Connect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 text-farm-green-700 hover:bg-farm-green-100 rounded-md">
              Home
            </Link>
            <Link to="/crop-recommendation" className="px-3 py-2 text-farm-green-700 hover:bg-farm-green-100 rounded-md">
              Crop Recommendation
            </Link>
            <Link to="/marketplace" className="px-3 py-2 text-farm-green-700 hover:bg-farm-green-100 rounded-md">
              Marketplace
            </Link>
            <Link to="/crop-support" className="px-3 py-2 text-farm-green-700 hover:bg-farm-green-100 rounded-md">
              Crop Support
            </Link>
            
            <div className="ml-4 flex items-center">
              <LanguageSwitcher />
              <Link to="/auth/login">
                <Button variant="outline" className="ml-4 flex items-center">
                  <User className="h-4 w-4 mr-1" /> Login
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button className="ml-2 bg-farm-green-600 hover:bg-farm-green-700">
                  Register
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-farm-green-600 hover:text-farm-green-700 hover:bg-farm-green-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-farm-green-700 hover:bg-farm-green-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/crop-recommendation" 
              className="block px-3 py-2 rounded-md text-base font-medium text-farm-green-700 hover:bg-farm-green-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Crop Recommendation
            </Link>
            <Link 
              to="/marketplace" 
              className="block px-3 py-2 rounded-md text-base font-medium text-farm-green-700 hover:bg-farm-green-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              to="/crop-support" 
              className="block px-3 py-2 rounded-md text-base font-medium text-farm-green-700 hover:bg-farm-green-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Crop Support
            </Link>
            <div className="flex items-center px-3 py-2">
              <LanguageSwitcher />
            </div>
            <Link 
              to="/auth/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-farm-green-700 hover:bg-farm-green-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/auth/register"
              className="block px-3 py-2 rounded-md text-base font-medium bg-farm-green-600 text-white hover:bg-farm-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
