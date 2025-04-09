
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RiskFactorCard from "@/components/assessment/RiskFactorCard";
import { AlertTriangle, Calendar, Cloud, MapPin, MapIcon, ThermometerSnowflake, Users } from "lucide-react";
import { useState } from "react";

const Assessment = () => {
  const [predictedRisk, setPredictedRisk] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, this would send the data to an API for prediction
    // For demo purposes, we're just simulating an API call
    setTimeout(() => {
      // Generate a random risk score between 35 and 85
      const risk = Math.floor(Math.random() * 50) + 35;
      setPredictedRisk(risk);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Risk Assessment</h1>
        <p className="text-muted-foreground mt-1">
          Predict and evaluate accident risks based on various factors
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Risk Prediction Model</CardTitle>
              <CardDescription>
                Enter parameters to predict accident risk for a specific scenario
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="location">
                <TabsList className="mb-6 grid grid-cols-3 w-full">
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="conditions">Conditions</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
                
                <form onSubmit={handleSubmit}>
                  <TabsContent value="location" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Road Type</label>
                        <Select defaultValue="urban">
                          <SelectTrigger>
                            <SelectValue placeholder="Select road type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urban">Urban Street</SelectItem>
                            <SelectItem value="highway">Highway</SelectItem>
                            <SelectItem value="rural">Rural Road</SelectItem>
                            <SelectItem value="residential">Residential Area</SelectItem>
                            <SelectItem value="intersection">Intersection</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Location</label>
                        <Input placeholder="Enter address or coordinates" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Speed Limit (mph)</label>
                        <Select defaultValue="35">
                          <SelectTrigger>
                            <SelectValue placeholder="Select speed limit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25">25 mph</SelectItem>
                            <SelectItem value="35">35 mph</SelectItem>
                            <SelectItem value="45">45 mph</SelectItem>
                            <SelectItem value="55">55 mph</SelectItem>
                            <SelectItem value="65">65 mph</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Road Condition</label>
                        <Select defaultValue="good">
                          <SelectTrigger>
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="poor">Poor</SelectItem>
                            <SelectItem value="construction">Under Construction</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="conditions" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Time of Day</label>
                        <Select defaultValue="evening">
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (6AM-10AM)</SelectItem>
                            <SelectItem value="midday">Midday (10AM-3PM)</SelectItem>
                            <SelectItem value="evening">Evening (3PM-7PM)</SelectItem>
                            <SelectItem value="night">Night (7PM-6AM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Day of Week</label>
                        <Select defaultValue="weekday">
                          <SelectTrigger>
                            <SelectValue placeholder="Select day" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekday">Weekday</SelectItem>
                            <SelectItem value="weekend">Weekend</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Weather</label>
                        <Select defaultValue="clear">
                          <SelectTrigger>
                            <SelectValue placeholder="Select weather" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clear">Clear</SelectItem>
                            <SelectItem value="rain">Rain</SelectItem>
                            <SelectItem value="snow">Snow</SelectItem>
                            <SelectItem value="fog">Fog</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Visibility</label>
                        <Select defaultValue="good">
                          <SelectTrigger>
                            <SelectValue placeholder="Select visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="poor">Poor</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="advanced" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Driver Age Group</label>
                        <Select defaultValue="adult">
                          <SelectTrigger>
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="teen">Teen (16-19)</SelectItem>
                            <SelectItem value="young">Young Adult (20-29)</SelectItem>
                            <SelectItem value="adult">Adult (30-59)</SelectItem>
                            <SelectItem value="senior">Senior (60+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Traffic Density</label>
                        <Select defaultValue="medium">
                          <SelectTrigger>
                            <SelectValue placeholder="Select density" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="heavy">Heavy</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Vehicle Type</label>
                        <Select defaultValue="car">
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="car">Passenger Car</SelectItem>
                            <SelectItem value="suv">SUV/Crossover</SelectItem>
                            <SelectItem value="truck">Truck</SelectItem>
                            <SelectItem value="bus">Bus</SelectItem>
                            <SelectItem value="motorcycle">Motorcycle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Historical Accident Rate</label>
                        <Select defaultValue="average">
                          <SelectTrigger>
                            <SelectValue placeholder="Select rate" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="average">Average</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="hotspot">Accident Hotspot</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <div className="mt-6 flex justify-end">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Calculating..." : "Predict Risk"}
                    </Button>
                  </div>
                </form>
              </Tabs>
            </CardContent>
          </Card>
          
          {predictedRisk !== null && (
            <Card>
              <CardHeader>
                <CardTitle>Risk Prediction Results</CardTitle>
                <CardDescription>
                  Accident risk assessment based on your inputs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <div 
                      className={`
                        h-32 w-32 rounded-full flex items-center justify-center border-8
                        ${predictedRisk < 40 ? 'border-green-500 bg-green-100' : ''}
                        ${predictedRisk >= 40 && predictedRisk < 60 ? 'border-yellow-500 bg-yellow-100' : ''}
                        ${predictedRisk >= 60 && predictedRisk < 80 ? 'border-orange-500 bg-orange-100' : ''}
                        ${predictedRisk >= 80 ? 'border-red-500 bg-red-100' : ''}
                      `}
                    >
                      <span className="text-3xl font-bold">{predictedRisk}%</span>
                    </div>
                    <p className="mt-4 font-semibold text-lg">
                      {predictedRisk < 40 ? 'Low Risk' : 
                       predictedRisk < 60 ? 'Moderate Risk' : 
                       predictedRisk < 80 ? 'High Risk' : 'Critical Risk'}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div 
                      className={`
                        rounded-lg p-4 border
                        ${predictedRisk < 40 ? 'bg-green-50 border-green-200' : ''}
                        ${predictedRisk >= 40 && predictedRisk < 60 ? 'bg-yellow-50 border-yellow-200' : ''}
                        ${predictedRisk >= 60 && predictedRisk < 80 ? 'bg-orange-50 border-orange-200' : ''}
                        ${predictedRisk >= 80 ? 'bg-red-50 border-red-200' : ''}
                      `}
                    >
                      <div className="flex items-center space-x-2">
                        <AlertTriangle size={20} className={predictedRisk >= 60 ? 'text-red-500' : 'text-yellow-500'} />
                        <p className="font-medium">Risk Level</p>
                      </div>
                      <p className="mt-2 text-sm">
                        {predictedRisk < 40 ? 'This scenario shows a low likelihood of accidents.' : 
                         predictedRisk < 60 ? 'Moderate risk factors present in this scenario.' : 
                         predictedRisk < 80 ? 'Multiple significant risk factors detected.' : 
                         'Critical risk level - immediate attention recommended.'}
                      </p>
                    </div>
                    
                    <div className="rounded-lg p-4 bg-primary/10 border border-primary/20">
                      <div className="flex items-center space-x-2">
                        <MapIcon size={20} className="text-primary" />
                        <p className="font-medium">Top Factors</p>
                      </div>
                      <ul className="mt-2 text-sm space-y-1">
                        {predictedRisk >= 60 && <li>• Evening rush hour timing</li>}
                        {predictedRisk >= 50 && <li>• Intersection location</li>}
                        {predictedRisk >= 40 && <li>• Weather conditions</li>}
                        <li>• Historical accident patterns</li>
                      </ul>
                    </div>
                    
                    <div className="rounded-lg p-4 bg-accent border border-accent/50">
                      <div className="flex items-center space-x-2">
                        <Cloud size={20} className="text-primary" />
                        <p className="font-medium">Recommendations</p>
                      </div>
                      <ul className="mt-2 text-sm space-y-1">
                        {predictedRisk >= 40 && <li>• Reduce speed in adverse conditions</li>}
                        {predictedRisk >= 60 && <li>• Consider alternative routes</li>}
                        {predictedRisk >= 80 && <li>• Avoid travel if possible</li>}
                        <li>• Maintain increased awareness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Risk Factors</CardTitle>
              <CardDescription>
                Current risk analysis components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RiskFactorCard
                title="Weather Impact"
                description="Risk contribution from current weather conditions"
                value={72}
                icon={<Cloud size={20} />}
              />
              
              <RiskFactorCard
                title="Time Factor"
                description="Risk based on time of day and traffic patterns"
                value={85}
                icon={<Calendar size={20} />}
              />
              
              <RiskFactorCard
                title="Location Risk"
                description="Historical accident patterns for this area"
                value={64}
                icon={<MapPin size={20} />}
              />
              
              <RiskFactorCard
                title="Road Conditions"
                description="Current surface and visibility conditions"
                value={45}
                icon={<MapIcon size={20} />}
              />
              
              <RiskFactorCard
                title="Seasonal Patterns"
                description="Seasonal accident trends and correlations"
                value={38}
                icon={<ThermometerSnowflake size={20} />}
              />
              
              <RiskFactorCard
                title="Demographic Factors"
                description="Risk patterns related to driver demographics"
                value={57}
                icon={<Users size={20} />}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Assessment;
