
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface RiskFactorCardProps {
  title: string;
  description: string;
  value: number;
  icon: React.ReactNode;
}

const RiskFactorCard = ({
  title,
  description,
  value,
  icon,
}: RiskFactorCardProps) => {
  // Helper function to determine color based on value
  const getColorClass = (value: number) => {
    if (value < 40) return "text-green-500";
    if (value < 60) return "text-yellow-500";
    if (value < 80) return "text-orange-500";
    return "text-red-500";
  };

  // Helper function to get progress bar color
  const getProgressColor = (value: number) => {
    if (value < 40) return "bg-green-500";
    if (value < 60) return "bg-yellow-500";
    if (value < 80) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h4 className="font-medium">{title}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
          <div
            className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center",
              "bg-primary/10"
            )}
          >
            {icon}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="w-full">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm">Risk Score</span>
              <span
                className={cn(
                  "text-sm font-medium",
                  getColorClass(value)
                )}
              >
                {value}/100
              </span>
            </div>
            <Progress
              value={value}
              max={100}
              className="h-2 w-full"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskFactorCard;
