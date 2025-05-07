
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const cropTypes = ["Rice", "Wheat", "Maize", "Sugarcane", "Cotton", "Pulses", "Vegetables", "Fruits"];

// Sample data for demonstration
const cropInfo = {
  Rice: {
    water: "Rice requires continuous flooding with 5cm of water during the vegetative stage and 10cm during the reproductive stage.",
    fertilizer: "Apply NPK 120:60:60 kg/ha in three splits - at basal, tillering and panicle initiation stages.",
    pesticides: "Monitor for leaf folder, stem borer, and blast disease. Use Chlorantraniliprole for insects and Tricyclazole for blast.",
    tools: "Puddler for land preparation, mechanical transplanter for seedlings, harvester for efficient harvest."
  },
  Wheat: {
    water: "Wheat needs irrigation at crown root initiation, tillering, jointing, flowering, and grain filling stages.",
    fertilizer: "Apply NPK 120:60:40 kg/ha with nitrogen in two splits - at sowing and after first irrigation.",
    pesticides: "Watch for aphids and rust disease. Use Imidacloprid for aphids and Propiconazole for rust control.",
    tools: "Seed drill for sowing, rotary weeder for weed management, combine harvester for harvesting."
  },
  Maize: {
    water: "Maize requires irrigation at knee-high, tasseling, silking and grain filling stages.",
    fertilizer: "Apply NPK 150:75:75 kg/ha with nitrogen in three splits - at sowing, knee-high and tasseling stages.",
    pesticides: "Monitor for fall armyworm and stem borer. Use Spinetoram for effective control.",
    tools: "Ridge planter for sowing, intercultivator for weed management, maize sheller for post-harvest."
  },
  Sugarcane: {
    water: "Sugarcane needs irrigation at 7-10 day intervals during vegetative growth and 15-20 days during maturity.",
    fertilizer: "Apply NPK 250:100:120 kg/ha in three splits - at planting, 45 and 90 days after planting.",
    pesticides: "Watch for early shoot borer and red rot disease. Use Chlorantraniliprole for borer control.",
    tools: "Sugarcane planter for planting, earthing-up machine, sugarcane harvester."
  }
};

const CropSupport = () => {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [activeTab, setActiveTab] = useState("general-info");
  
  const handleCropChange = (value: string) => {
    setSelectedCrop(value);
    setResponse("");
  };
  
  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // Simulating AI response generation
    setTimeout(() => {
      const customResponse = `Based on your query about ${selectedCrop} cultivation regarding "${query}", here's my recommendation:
      
For ${selectedCrop} in Karnataka's climate conditions, this is a critical aspect of successful cultivation. Consider implementing the latest practices like [specific practice related to query]. Farmers in similar regions have reported 15-20% yield improvements by following these guidelines.

Additionally, timing is critical - make sure to align these activities with the monsoon patterns in your specific district.`;
      
      setResponse(customResponse);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-farm-green-600 py-10 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Advanced Crop Support System</h1>
          <p className="mt-2 text-xl">Get expert guidance on crop cultivation practices</p>
        </div>
      </div>
      
      <div className="flex-grow py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Select Crop</CardTitle>
                  <CardDescription>
                    Choose a crop to view cultivation guidance or ask specific questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="crop">Crop Type</Label>
                      <Select onValueChange={handleCropChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a crop" />
                        </SelectTrigger>
                        <SelectContent>
                          {cropTypes.map((crop) => (
                            <SelectItem key={crop} value={crop}>
                              {crop}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {selectedCrop && (
                      <div className="pt-4">
                        <h3 className="text-lg font-medium mb-2">Ask About {selectedCrop}</h3>
                        <form onSubmit={handleQuerySubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="query">Your Question</Label>
                            <Textarea 
                              id="query"
                              placeholder={`E.g., How do I prevent common diseases in ${selectedCrop}?`}
                              className="min-h-[100px]"
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-farm-green-600 hover:bg-farm-green-700"
                          >
                            Get AI Recommendations
                          </Button>
                        </form>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              {!selectedCrop && (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🌱</div>
                    <h2 className="text-2xl font-medium text-gray-800">Select a Crop</h2>
                    <p className="text-gray-600 mt-2">
                      Choose a crop from the left panel to view cultivation guidance
                    </p>
                  </div>
                </div>
              )}
              
              {selectedCrop && (
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{selectedCrop} Cultivation Guide</CardTitle>
                        <CardDescription>
                          Expert recommendations for successful cultivation
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {response ? (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-medium text-blue-800 mb-2">AI Recommendation</h3>
                        <p className="whitespace-pre-line text-blue-700">{response}</p>
                      </div>
                    ) : (
                      cropInfo[selectedCrop as keyof typeof cropInfo] ? (
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                          <TabsList className="grid grid-cols-4 mb-6">
                            <TabsTrigger value="general-info">Water</TabsTrigger>
                            <TabsTrigger value="fertilizer">Fertilizer</TabsTrigger>
                            <TabsTrigger value="pesticides">Pesticides</TabsTrigger>
                            <TabsTrigger value="tools">Tools</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="general-info" className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-medium mb-2">Water Requirements</h3>
                            <p>{cropInfo[selectedCrop as keyof typeof cropInfo].water}</p>
                          </TabsContent>
                          
                          <TabsContent value="fertilizer" className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-medium mb-2">Fertilizer Recommendations</h3>
                            <p>{cropInfo[selectedCrop as keyof typeof cropInfo].fertilizer}</p>
                          </TabsContent>
                          
                          <TabsContent value="pesticides" className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-medium mb-2">Pest & Disease Management</h3>
                            <p>{cropInfo[selectedCrop as keyof typeof cropInfo].pesticides}</p>
                          </TabsContent>
                          
                          <TabsContent value="tools" className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-medium mb-2">Recommended Tools</h3>
                            <p>{cropInfo[selectedCrop as keyof typeof cropInfo].tools}</p>
                          </TabsContent>
                        </Tabs>
                      ) : (
                        <div className="text-center p-8">
                          <p className="text-gray-600">
                            Detailed information for {selectedCrop} will be coming soon.
                          </p>
                        </div>
                      )
                    )}
                    
                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-4">Seasonal Calendar</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-farm-green-100">
                              <th className="border p-2 text-left">Activity</th>
                              <th className="border p-2 text-left">Optimal Time</th>
                              <th className="border p-2 text-left">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">Land Preparation</td>
                              <td className="border p-2">Pre-monsoon</td>
                              <td className="border p-2">Ensure proper drainage</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Sowing/Planting</td>
                              <td className="border p-2">With onset of monsoon</td>
                              <td className="border p-2">Ensure quality seeds</td>
                            </tr>
                            <tr>
                              <td className="border p-2">First Fertilizer</td>
                              <td className="border p-2">2 weeks after germination</td>
                              <td className="border p-2">Based on soil test</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Harvesting</td>
                              <td className="border p-2">Crop-specific period</td>
                              <td className="border p-2">Check moisture content</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Latest Agricultural Advisories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Monsoon Update</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Expected normal monsoon this year with adequate rainfall distribution across Karnataka. Plan your sowing accordingly.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>New Pest Alert</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Fall armyworm infestation reported in maize growing areas. Apply recommended pesticides at early stages.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Market Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Increased demand expected for organic pulses this season. Consider organic cultivation practices for better returns.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CropSupport;
