
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface RiskFactorCardProps {
  title: string;
  description: string;
  value: number;
  icon: ReactNode;
  className?: string;
}

const RiskFactorCard = ({
  title,
  description,
  value,
  icon,
  className,
}: RiskFactorCardProps) => {
  const getProgressColor = (value: number) => {
    if (value < 30) return "bg-green-500";
    if (value < 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getTextColor = (value: number) => {
    if (value < 30) return "text-green-500";
    if (value < 70) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card className={cn("stat-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>
          
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Risk Level</p>
            <p className={cn("text-sm font-bold", getTextColor(value))}>
              {value}%
            </p>
          </div>
          
          <Progress
            value={value}
            max={100}
            className="h-2"
            indicatorClassName={getProgressColor(value)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskFactorCard;
