
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data for Karnataka districts
const districts = [
  "Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban",
  "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga",
  "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri",
  "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur",
  "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"
];

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    district: "",
    area: ""
  });
  
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDistrictChange = (value: string) => {
    setFormData({
      ...formData,
      district: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating API call for ML predictions
    setTimeout(() => {
      // Here we would normally send the data to an API for processing
      // For now, we'll just use some sample recommendations
      const sampleCrops = ["Rice", "Wheat", "Maize", "Jowar"];
      setRecommendations(sampleCrops);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">Crop Recommendation System</h1>
            <p className="mt-4 text-xl text-gray-600">
              Enter your soil details to get personalized crop recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Enter Soil & Location Details</CardTitle>
                  <CardDescription>
                    Provide information about your soil composition and farm location
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nitrogen">Nitrogen (N)</Label>
                        <Input
                          id="nitrogen"
                          name="nitrogen"
                          type="number"
                          placeholder="e.g., 80"
                          required
                          value={formData.nitrogen}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phosphorus">Phosphorus (P)</Label>
                        <Input
                          id="phosphorus"
                          name="phosphorus"
                          type="number"
                          placeholder="e.g., 40"
                          required
                          value={formData.phosphorus}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="potassium">Potassium (K)</Label>
                        <Input
                          id="potassium"
                          name="potassium"
                          type="number"
                          placeholder="e.g., 60"
                          required
                          value={formData.potassium}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Select onValueChange={handleDistrictChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your district" />
                        </SelectTrigger>
                        <SelectContent>
                          {districts.map((district) => (
                            <SelectItem key={district} value={district}>
                              {district}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="area">Land Area (acres)</Label>
                      <Input
                        id="area"
                        name="area"
                        type="number"
                        placeholder="e.g., 5"
                        required
                        value={formData.area}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-farm-green-600 hover:bg-farm-green-700" disabled={loading}>
                      {loading ? "Processing..." : "Get Recommendations"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Crops</CardTitle>
                  <CardDescription>
                    Based on your soil parameters, historical data, and AI predictions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="min-h-40 flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-farm-green-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Processing your data...</p>
                      </div>
                    </div>
                  ) : recommendations.length > 0 ? (
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        Based on your soil NPK values of {formData.nitrogen}:{formData.phosphorus}:{formData.potassium} and location in {formData.district}, we recommend the following crops for your {formData.area} acres of land:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {recommendations.map((crop, index) => (
                          <Card key={index} className={`border-l-4 ${index === 0 ? 'border-l-farm-green-600' : 'border-l-farm-green-400'}`}>
                            <CardContent className="p-4 flex justify-between items-center">
                              <div>
                                <p className="font-medium">{crop}</p>
                                <p className="text-sm text-gray-500">
                                  {index === 0 ? 'Best match' : `Recommendation #${index + 1}`}
                                </p>
                              </div>
                              {index === 0 && (
                                <div className="bg-farm-green-100 text-farm-green-800 px-2 py-1 rounded text-xs">
                                  Highest Yield
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h4 className="text-lg font-medium text-blue-800">Why these recommendations?</h4>
                        <p className="mt-2 text-blue-700">
                          Our AI analyzes your soil composition, historical crop data, and local production trends to identify crops with the highest potential yield and market demand in your region.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-600">Enter your soil parameters to get crop recommendations</p>
                    </div>
                  )}
                </CardContent>
                {recommendations.length > 0 && (
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Save Results</Button>
                    <Button variant="outline">View Detailed Report</Button>
                  </CardFooter>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CropRecommendation;
