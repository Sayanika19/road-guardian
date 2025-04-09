
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChartCard from "@/components/dashboard/ChartCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, BarChart2, Clock, Cloud, Road, Thermometer, Users } from "lucide-react";

const Factors = () => {
  // Sample data for the charts - in a real app, this would come from an API
  const contributingFactors = [
    { name: "Speeding", value: 35 },
    { name: "Distracted Driving", value: 28 },
    { name: "Drunk Driving", value: 18 },
    { name: "Weather Conditions", value: 12 },
    { name: "Road Design", value: 7 },
  ];
  
  const weatherData = [
    { condition: "Clear", accidents: 427, rate: 0.8 },
    { condition: "Rain", accidents: 185, rate: 1.7 },
    { condition: "Snow", accidents: 62, rate: 2.3 },
    { condition: "Fog", accidents: 35, rate: 2.1 },
  ];
  
  const timeData = [
    { time: "00:00 - 04:00", accidents: 87, rate: 1.2 },
    { time: "04:00 - 08:00", accidents: 143, rate: 1.8 },
    { time: "08:00 - 12:00", accidents: 129, rate: 1.4 },
    { time: "12:00 - 16:00", accidents: 112, rate: 1.3 },
    { time: "16:00 - 20:00", accidents: 157, rate: 1.9 },
    { time: "20:00 - 24:00", accidents: 81, rate: 1.1 },
  ];
  
  const roadData = [
    { type: "Intersection", accidents: 235, rate: 2.1 },
    { type: "Highway", accidents: 187, rate: 1.3 },
    { type: "Urban Road", accidents: 156, rate: 1.8 },
    { type: "Rural Road", accidents: 131, rate: 1.6 },
  ];
  
  const demographicData = [
    { group: "16-24", accidents: 184, rate: 2.4 },
    { group: "25-34", accidents: 213, rate: 1.9 },
    { group: "35-44", accidents: 147, rate: 1.3 },
    { group: "45-54", accidents: 93, rate: 1.0 },
    { group: "55-64", accidents: 43, rate: 0.8 },
    { group: "65+", accidents: 29, rate: 1.2 },
  ];
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Contributing Factors</h1>
        <p className="text-muted-foreground mt-1">
          Analysis of key factors leading to accidents and their impact
        </p>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Primary Contributing Factors</CardTitle>
            <CardDescription>
              Breakdown of the main factors causing accidents
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ChartCard
                title="Contribution by Factor"
                description="Percentage breakdown of primary factors"
                data={contributingFactors}
                type="pie"
                config={{
                  xKey: "name",
                  yKeys: ["value"],
                  height: 300,
                }}
              />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Key Insights</h3>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Human Factors Dominate</p>
                      <p className="text-sm text-muted-foreground">
                        Human-related factors like speeding and distracted driving account for over 80% of accidents.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Behavior Patterns</p>
                      <p className="text-sm text-muted-foreground">
                        Speeding violations are frequently accompanied by other risky behaviors, compounding risk.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Road size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Environmental Impact</p>
                      <p className="text-sm text-muted-foreground">
                        While environmental factors are less common as primary causes, they amplify the effects of human error.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart2 size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Interaction Effects</p>
                      <p className="text-sm text-muted-foreground">
                        Combining factors have a multiplicative effect on risk, not just additive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Factor Analysis</CardTitle>
            <CardDescription>
              Detailed breakdown of individual factors and their impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="weather">
              <TabsList className="mb-6">
                <TabsTrigger value="weather">Weather</TabsTrigger>
                <TabsTrigger value="time">Time of Day</TabsTrigger>
                <TabsTrigger value="road">Road Type</TabsTrigger>
                <TabsTrigger value="demographics">Demographics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="weather" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="col-span-1 md:col-span-2">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Weather Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartCard
                        title=""
                        data={weatherData}
                        type="bar"
                        config={{
                          xKey: "condition",
                          yKeys: ["accidents"],
                          height: 300,
                        }}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Risk Multipliers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium">Clear</p>
                            <p className="text-sm font-bold">1.0x</p>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium">Rain</p>
                            <p className="text-sm font-bold">2.1x</p>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium">Snow</p>
                            <p className="text-sm font-bold">2.9x</p>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium">Fog</p>
                            <p className="text-sm font-bold">2.6x</p>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <div className="flex space-x-3">
                          <Cloud size={24} className="text-primary" />
                          <div>
                            <p className="font-medium">Key Finding</p>
                            <p className="text-sm text-muted-foreground">
                              Adverse weather conditions increase accident risk by up to 3x compared to clear conditions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="time">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="col-span-1 md:col-span-2">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Time of Day Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartCard
                        title=""
                        data={timeData}
                        type="area"
                        config={{
                          xKey: "time",
                          yKeys: ["accidents"],
                          height: 300,
                        }}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Peak Times</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {timeData.map((item) => (
                          <div key={item.time} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <p className="text-sm font-medium">{item.time}</p>
                              <p className="text-sm font-bold">{item.rate}x</p>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  item.rate > 1.5 ? 'bg-red-500' : 
                                  item.rate > 1.3 ? 'bg-orange-500' : 'bg-green-500'
                                }`} 
                                style={{ width: `${(item.rate / 2) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <div className="flex space-x-3">
                          <Clock size={24} className="text-primary" />
                          <div>
                            <p className="font-medium">Key Finding</p>
                            <p className="text-sm text-muted-foreground">
                              Rush hour periods (4-8 AM and 4-8 PM) show significantly higher accident rates.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="road">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="col-span-1 md:col-span-2">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Road Type Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartCard
                        title=""
                        data={roadData}
                        type="bar"
                        config={{
                          xKey: "type",
                          yKeys: ["accidents"],
                          height: 300,
                        }}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Risk by Road Type</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {roadData.map((item) => (
                          <div key={item.type} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <p className="text-sm font-medium">{item.type}</p>
                              <p className="text-sm font-bold">{item.rate}x</p>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  item.rate > 2.0 ? 'bg-red-500' : 
                                  item.rate > 1.5 ? 'bg-orange-500' : 'bg-green-500'
                                }`} 
                                style={{ width: `${(item.rate / 2.5) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <div className="flex space-x-3">
                          <Road size={24} className="text-primary" />
                          <div>
                            <p className="font-medium">Key Finding</p>
                            <p className="text-sm text-muted-foreground">
                              Intersections have the highest accident risk, followed by urban roads.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="demographics">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="col-span-1 md:col-span-2">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Demographic Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartCard
                        title=""
                        data={demographicData}
                        type="bar"
                        config={{
                          xKey: "group",
                          yKeys: ["accidents"],
                          height: 300,
                        }}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Risk by Age Group</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {demographicData.map((item) => (
                          <div key={item.group} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <p className="text-sm font-medium">Age {item.group}</p>
                              <p className="text-sm font-bold">{item.rate}x</p>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  item.rate > 2.0 ? 'bg-red-500' : 
                                  item.rate > 1.5 ? 'bg-orange-500' : 
                                  item.rate > 1.0 ? 'bg-yellow-500' : 'bg-green-500'
                                }`} 
                                style={{ width: `${(item.rate / 2.5) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <div className="flex space-x-3">
                          <Users size={24} className="text-primary" />
                          <div>
                            <p className="font-medium">Key Finding</p>
                            <p className="text-sm text-muted-foreground">
                              Younger drivers (16-34) have significantly higher accident rates than other age groups.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Factors;
