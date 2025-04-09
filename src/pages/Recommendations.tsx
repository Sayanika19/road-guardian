
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  BrainCircuit, 
  CloudLightning, 
  FileCheck, 
  Filter, 
  Lightbulb, 
  MapPin, 
  MapIcon, 
  School, 
  ShieldCheck, 
  Timer, 
  UserCheck,
  Users as UsersIcon
} from "lucide-react";
import SafetyCard from "@/components/recommendations/SafetyCard";

const Recommendations = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  
  const handleGenerateRecommendations = () => {
    setIsGenerating(true);
    
    // In a real app, this would call an API to generate recommendations
    // For demo purposes, we're just simulating an API call
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2000);
  };
  
  // Sample recommendations data - in a real app, this would come from an API
  const infrastructureRecommendations = [
    {
      title: "Traffic Signal Optimization",
      description: "Adjust traffic signal timing at Main St & 5th Ave to reduce congestion during peak hours.",
      category: "Infrastructure",
      impact: "high" as const,
      icon: <Timer size={20} />,
      implementationSteps: [
        "Conduct traffic flow analysis during peak hours",
        "Model signal timing adjustments using simulation",
        "Implement new timing patterns and monitor results",
        "Adjust based on observed impact"
      ],
    },
    {
      title: "Road Surface Improvements",
      description: "Repair deteriorating road surfaces on Highway 101 between mile markers 23-28.",
      category: "Infrastructure",
      impact: "medium" as const,
      icon: <MapIcon size={20} />,
      implementationSteps: [
        "Schedule repairs during low-traffic periods",
        "Use high-durability materials for longer lifespan",
        "Implement proper drainage solutions",
        "Install reflective markers for improved visibility"
      ],
    },
    {
      title: "Intersection Redesign",
      description: "Modify Broadway & Oak St intersection to improve visibility and reduce crossing conflicts.",
      category: "Infrastructure",
      impact: "high" as const,
      icon: <MapPin size={20} />,
      implementationSteps: [
        "Conduct safety audit of current intersection design",
        "Develop redesign options with traffic engineering team",
        "Select optimal design based on safety impact models",
        "Implement physical changes with minimal disruption"
      ],
    },
  ];
  
  const educationRecommendations = [
    {
      title: "School Zone Safety Program",
      description: "Implement comprehensive safety education in schools near high-risk areas.",
      category: "Education",
      impact: "medium" as const,
      icon: <School size={20} />,
      implementationSteps: [
        "Develop age-appropriate educational materials",
        "Train teachers and staff on delivery methods",
        "Schedule regular safety workshops for students",
        "Include parents in take-home activities"
      ],
    },
    {
      title: "Public Awareness Campaign",
      description: "Launch targeted awareness campaign about risks of distracted driving.",
      category: "Education",
      impact: "high" as const,
      icon: <UserCheck size={20} />,
      implementationSteps: [
        "Develop compelling visual materials and messaging",
        "Utilize social media and local advertising channels",
        "Partner with community organizations for wider reach",
        "Track engagement metrics to measure effectiveness"
      ],
    },
  ];
  
  const technologyRecommendations = [
    {
      title: "Weather Alert Integration",
      description: "Connect weather warning systems to digital road signs for real-time hazard notifications.",
      category: "Technology",
      impact: "high" as const,
      icon: <CloudLightning size={20} />,
      implementationSteps: [
        "Integrate weather API with traffic management systems",
        "Develop automated alert triggering protocols",
        "Test system under various weather scenarios",
        "Deploy across strategic highway locations"
      ],
    },
    {
      title: "Smart Intersection Sensors",
      description: "Install AI-powered sensors at high-risk intersections to detect and prevent potential conflicts.",
      category: "Technology",
      impact: "high" as const,
      icon: <BrainCircuit size={20} />,
      implementationSteps: [
        "Select intersections based on accident history",
        "Install sensor array and processing hardware",
        "Calibrate detection algorithms for local conditions",
        "Connect to traffic control systems for automated responses"
      ],
    },
  ];
  
  const policyRecommendations = [
    {
      title: "Enhanced Speed Enforcement",
      description: "Implement targeted speed enforcement program on Riverside Dr during high-risk hours.",
      category: "Policy",
      impact: "medium" as const,
      icon: <ShieldCheck size={20} />,
      implementationSteps: [
        "Analyze accident data to identify optimal enforcement times",
        "Coordinate with law enforcement for resource allocation",
        "Deploy visible and educational enforcement approach",
        "Measure impact on speed compliance and accidents"
      ],
    },
    {
      title: "Commercial Vehicle Inspection Program",
      description: "Establish enhanced safety inspection program for commercial vehicles in urban areas.",
      category: "Policy",
      impact: "medium" as const,
      icon: <FileCheck size={20} />,
      implementationSteps: [
        "Develop inspection protocols based on accident data",
        "Train inspection personnel on new requirements",
        "Establish inspection stations at strategic locations",
        "Create reporting system for tracking violations"
      ],
    },
  ];
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Safety Recommendations</h1>
        <p className="text-muted-foreground mt-1">
          AI-powered recommendations to improve road safety
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Generate Custom Recommendations</CardTitle>
            <CardDescription>
              Our AI analyzes safety data to provide targeted recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="Enter area or region" defaultValue="Downtown Metro Area" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Focus Area</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    High-Risk Areas
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <UsersIcon className="mr-2 h-4 w-4" />
                    School Zones
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Recommendation Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <MapIcon className="mr-2 h-4 w-4" />
                    Infrastructure
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <BrainCircuit className="mr-2 h-4 w-4" />
                    Technology
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleGenerateRecommendations}
                disabled={isGenerating}
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating..." : "Generate Recommendations"}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {hasGenerated && (
          <>
            <div className="md:col-span-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Safety Recommendations</h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    Export
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="all">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="technology">Technology</TabsTrigger>
                  <TabsTrigger value="policy">Policy</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...infrastructureRecommendations, ...educationRecommendations, ...technologyRecommendations, ...policyRecommendations].map((recommendation, index) => (
                      <SafetyCard
                        key={index}
                        title={recommendation.title}
                        description={recommendation.description}
                        category={recommendation.category}
                        impact={recommendation.impact}
                        icon={recommendation.icon}
                        implementationSteps={recommendation.implementationSteps}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="infrastructure">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {infrastructureRecommendations.map((recommendation, index) => (
                      <SafetyCard
                        key={index}
                        title={recommendation.title}
                        description={recommendation.description}
                        category={recommendation.category}
                        impact={recommendation.impact}
                        icon={recommendation.icon}
                        implementationSteps={recommendation.implementationSteps}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="education">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {educationRecommendations.map((recommendation, index) => (
                      <SafetyCard
                        key={index}
                        title={recommendation.title}
                        description={recommendation.description}
                        category={recommendation.category}
                        impact={recommendation.impact}
                        icon={recommendation.icon}
                        implementationSteps={recommendation.implementationSteps}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="technology">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologyRecommendations.map((recommendation, index) => (
                      <SafetyCard
                        key={index}
                        title={recommendation.title}
                        description={recommendation.description}
                        category={recommendation.category}
                        impact={recommendation.impact}
                        icon={recommendation.icon}
                        implementationSteps={recommendation.implementationSteps}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="policy">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {policyRecommendations.map((recommendation, index) => (
                      <SafetyCard
                        key={index}
                        title={recommendation.title}
                        description={recommendation.description}
                        category={recommendation.category}
                        impact={recommendation.impact}
                        icon={recommendation.icon}
                        implementationSteps={recommendation.implementationSteps}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Recommendations;
