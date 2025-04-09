
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/dashboard/StatCard";
import { AlertTriangle, MapPin, BarChart, Cloud, MapIcon } from "lucide-react";
import { mlPredictionService } from "@/services/mlPredictionService";

const RiskMapPage = () => {
  // In a real application, this would use actual geospatial data
  // For demo purposes, we're using a simulated ML-based risk analysis
  
  const [riskAnalysis, setRiskAnalysis] = useState({
    highRiskLocations: [] as {name: string, score: number}[],
    patternAnalysis: [] as string[],
    recommendations: [] as string[]
  });
  
  useEffect(() => {
    // Simulate loading risk analysis data from ML model
    const generateRiskAnalysis = () => {
      // Generate simulated high-risk locations
      const locations = [
        "Main St & 5th Ave Intersection", 
        "Highway 101 Mile Marker 23", 
        "Broadway & Oak St", 
        "Riverside Dr Curve", 
        "Central Park West Entrance"
      ].map(name => ({
        name,
        score: Math.floor(Math.random() * 30) + 70 // Scores between 70-100
      }));
      
      // Generate pattern analysis from ML insights
      const patterns = [
        "Time of Day: Evening rush hour (4-7 PM)", 
        "Weather Correlation: 32% increase during rain", 
        "Vehicle Types: 47% involve SUVs or trucks", 
        "Driver Demographics: 38% under age 25", 
        "Road Conditions: 41% occur near construction"
      ];
      
      // Generate ML-based recommendations
      const recs = [
        "Downtown corridor safety improvements", 
        "Weather alert integration for high-risk zones", 
        "Expanded traffic calming in residential areas"
      ];
      
      setRiskAnalysis({
        highRiskLocations: locations,
        patternAnalysis: patterns,
        recommendations: recs
      });
    };
    
    generateRiskAnalysis();
  }, []);
  
  // In a real application, this would get dynamic prediction data
  // based on geospatial analysis of accident data
  const getPredictedRiskStats = () => {
    // This simulates what would be ML-derived stats about risk areas
    return {
      highRiskIntersections: 37,
      accidentClusters: 12,
      riskDistribution: 68
    };
  };
  
  const stats = getPredictedRiskStats();
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Risk Map</h1>
        <p className="text-muted-foreground mt-1">
          Visualize accident-prone areas and high-risk locations
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Interactive Risk Map</CardTitle>
            <CardDescription>
              View accident density and risk levels across the region
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="heatmap">
              <TabsList className="mb-4">
                <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
                <TabsTrigger value="clusters">Clusters</TabsTrigger>
                <TabsTrigger value="factors">Risk Factors</TabsTrigger>
              </TabsList>
              
              <TabsContent value="heatmap" className="space-y-4">
                <div className="aspect-video bg-accent rounded-md border flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-primary opacity-70" />
                    <p className="text-muted-foreground">
                      In a production environment, this would display an interactive heatmap 
                      showing accident density and risk levels using real geospatial data 
                      analyzed by our machine learning model.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <StatCard
                    title="High-Risk Intersections"
                    value={stats.highRiskIntersections.toString()}
                    description="Locations with multiple accidents"
                    icon={<AlertTriangle size={20} />}
                  />
                  
                  <StatCard
                    title="Accident Clusters"
                    value={stats.accidentClusters.toString()}
                    description="Areas with high accident density"
                    icon={<MapPin size={20} />}
                  />
                  
                  <StatCard
                    title="Risk Distribution"
                    value={`${stats.riskDistribution}%`}
                    description="Accidents in identified high-risk zones"
                    icon={<BarChart size={20} />}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="clusters">
                <div className="aspect-video bg-accent rounded-md border flex items-center justify-center">
                  <div className="text-center p-8">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-primary opacity-70" />
                    <p className="text-muted-foreground">
                      This view would show clustered accident locations identified by our 
                      machine learning algorithms, helping identify patterns in accident distributions.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="factors">
                <div className="aspect-video bg-accent rounded-md border flex items-center justify-center">
                  <div className="text-center p-8">
                    <BarChart className="h-12 w-12 mx-auto mb-4 text-primary opacity-70" />
                    <p className="text-muted-foreground">
                      This view would display different risk factors overlaid on the map,
                      such as road design issues, weather impact zones, or speeding corridors,
                      as identified by our prediction model.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <StatCard
                    title="Weather Impact Zones"
                    value="14"
                    description="Areas affected by adverse weather"
                    icon={<Cloud size={20} />}
                  />
                  
                  <StatCard
                    title="Hazardous Road Design"
                    value="23"
                    description="Locations with road design issues"
                    icon={<MapIcon size={20} />}
                  />
                  
                  <StatCard
                    title="Speeding Corridors"
                    value="19"
                    description="High-speed accident locations"
                    icon={<AlertTriangle size={20} />}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Risk Analysis</CardTitle>
            <CardDescription>
              ML-powered breakdown of accident patterns and risk factors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Top High-Risk Locations</h3>
                <ul className="space-y-2">
                  {riskAnalysis.highRiskLocations.map((location, index) => (
                    <li key={index} className="flex items-center py-2 px-3 rounded-md bg-muted/40">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <MapPin size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{location.name}</p>
                        <p className="text-xs text-muted-foreground">Risk Score: {location.score}/100</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Pattern Analysis</h3>
                <div className="space-y-2">
                  {riskAnalysis.patternAnalysis.map((pattern, index) => (
                    <div key={index} className="flex items-center py-2 px-3 rounded-md bg-muted/40">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                      <p className="text-sm">{pattern}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-medium mt-6">AI-Recommended Focus Areas</h3>
                <div className="grid grid-cols-1 gap-2">
                  {riskAnalysis.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-center py-2 px-3 rounded-md bg-primary/10 border border-primary/20">
                      <div className="h-6 w-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <AlertTriangle size={14} className="text-primary" />
                      </div>
                      <p className="text-sm font-medium">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RiskMapPage;
