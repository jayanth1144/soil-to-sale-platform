
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, Filter, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample products for the marketplace
const sampleProducts = [
  {
    id: 1,
    name: "Organic Rice",
    farmer: "Ravi Kumar",
    location: "Mysuru",
    category: "Grains",
    quantity: "50 kg",
    price: "₹35 per kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 15, 2024",
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    farmer: "Anjali Patil",
    location: "Belagavi",
    category: "Vegetables",
    quantity: "100 kg",
    price: "₹30 per kg",
    image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 18, 2024",
  },
  {
    id: 3,
    name: "Raw Sugarcane",
    farmer: "Mahesh Gowda",
    location: "Mandya",
    category: "Raw Materials",
    quantity: "500 kg",
    price: "₹20 per kg",
    image: "https://images.unsplash.com/photo-1596473345638-a1b0c89c9312?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 20, 2024",
  },
  {
    id: 4,
    name: "Mango Alphonso",
    farmer: "Deepak Singh",
    location: "Ramanagara",
    category: "Fruits",
    quantity: "75 kg",
    price: "₹80 per kg",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 12, 2024",
  },
  {
    id: 5,
    name: "Green Chillies",
    farmer: "Kavitha Naidu",
    location: "Dharwad",
    category: "Vegetables",
    quantity: "30 kg",
    price: "₹45 per kg",
    image: "https://images.unsplash.com/photo-1601560496309-9967996aa3b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 22, 2024",
  },
  {
    id: 6,
    name: "Cotton",
    farmer: "Rajesh Sharma",
    location: "Vijayapura",
    category: "Raw Materials",
    quantity: "200 kg",
    price: "₹60 per kg",
    image: "https://images.unsplash.com/photo-1595263074093-3c45e0e673c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 14, 2024",
  },
];

// Categories for filtering
const categories = ["All", "Fruits", "Vegetables", "Grains", "Raw Materials"];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSortOption, setSelectedSortOption] = useState("date");
  
  // Filter products based on search term and category
  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSortOption === "price-low") {
      return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
    } else if (selectedSortOption === "price-high") {
      return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
    } else {
      // Sort by date (default)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-farm-green-600 py-10 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Farm-Connect Marketplace</h1>
          <p className="mt-2 text-xl">Connect directly with farmers and retailers</p>
        </div>
      </div>
      
      <div className="flex-grow py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search products, farmers, or locations..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedSortOption} onValueChange={setSelectedSortOption}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <div className="flex items-center text-gray-500 mt-1">
                          <User className="h-4 w-4 mr-1" />
                          <span className="text-sm">{product.farmer}</span>
                        </div>
                        <div className="flex items-center text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{product.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-farm-green-100 text-farm-green-800 hover:bg-farm-green-200">
                        {product.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-500">Quantity</p>
                        <p className="font-medium">{product.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500">Price</p>
                        <p className="font-medium text-farm-green-700">{product.price}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <p className="text-sm text-gray-500">
                      Listed on {product.date}
                    </p>
                    <Button>Contact Farmer</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="text-2xl font-medium text-gray-800">No products found</h2>
              <p className="text-gray-600 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-farm-green-600 hover:bg-farm-green-700">
              List Your Products
            </Button>
            <p className="mt-4 text-gray-600">
              Are you a farmer with products to sell? List them on our marketplace!
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
