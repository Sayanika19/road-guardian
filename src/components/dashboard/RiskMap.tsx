
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const RiskMap = () => {
  // In a real application, this would be a proper interactive map
  // For demo purposes, we're creating a simple visual representation
  const gridSize = 10;
  const riskLevels = ['low', 'medium', 'high', 'critical'];
  
  // Generate semi-random risk data
  const generateRiskData = () => {
    const data = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        // Generate clusters of similar risk
        const base = Math.floor(Math.random() * 4);
        const variation = Math.random() > 0.7 ? Math.floor(Math.random() * 2) - 1 : 0;
        const risk = Math.max(0, Math.min(3, base + variation));
        row.push(risk);
      }
      data.push(row);
    }
    return data;
  };
  
  const riskData = generateRiskData();

  return (
    <Card className="stat-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Risk Heatmap</CardTitle>
        <div className="flex space-x-2">
          {riskLevels.map((level, index) => (
            <Badge
              key={level}
              variant="outline"
              className={`
                border-2 
                ${index === 0 ? 'border-green-400 bg-green-50' : ''}
                ${index === 1 ? 'border-yellow-400 bg-yellow-50' : ''}
                ${index === 2 ? 'border-orange-400 bg-orange-50' : ''}
                ${index === 3 ? 'border-red-400 bg-red-50' : ''}
              `}
            >
              {level}
            </Badge>
          ))}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle size={16} className="text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Areas with varying accident risk levels</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-10 gap-1">
          {riskData.map((row, i) =>
            row.map((risk, j) => (
              <div
                key={`${i}-${j}`}
                className={`
                  aspect-square rounded-sm border
                  ${risk === 0 ? 'bg-green-100 border-green-200' : ''}
                  ${risk === 1 ? 'bg-yellow-100 border-yellow-200' : ''}
                  ${risk === 2 ? 'bg-orange-100 border-orange-200' : ''}
                  ${risk === 3 ? 'bg-red-100 border-red-200' : ''}
                  ${risk === 3 ? 'flex items-center justify-center' : ''}
                `}
              >
                {risk === 3 && <AlertTriangle size={14} className="text-red-500" />}
              </div>
            ))
          )}
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          This simplified visualization represents accident hotspots.
          <br />In a production environment, this would be an interactive map using real geospatial data.
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskMap;
