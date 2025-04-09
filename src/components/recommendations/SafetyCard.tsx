
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SafetyCardProps {
  title: string;
  description: string;
  category: string;
  impact: "low" | "medium" | "high";
  icon: ReactNode;
  implementationSteps?: string[];
  className?: string;
}

const SafetyCard = ({
  title,
  description,
  category,
  impact,
  icon,
  implementationSteps,
  className,
}: SafetyCardProps) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "low":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "high":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className={cn("overflow-hidden flex flex-col", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="mr-3 text-primary">{icon}</div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge variant="outline" className={cn("ml-2", getImpactColor(impact))}>
            {impact} impact
          </Badge>
        </div>
        <Badge variant="secondary" className="mt-2 w-fit">
          {category}
        </Badge>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <CardDescription className="text-sm text-foreground/80">
          {description}
        </CardDescription>
        
        {implementationSteps && implementationSteps.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Implementation steps:</p>
            <ul className="text-sm space-y-1">
              {implementationSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 border-t px-6 py-4 bg-muted/40">
        <Button variant="outline" size="sm" className="ml-auto">
          <Download className="h-4 w-4 mr-2" />
          Export Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SafetyCard;
