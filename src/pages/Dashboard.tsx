
import { useState } from "react";
import { AreaChart, BarChart2, Calendar, MapPin, TrendingDown, TrendingUp, Users } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import RiskMap from "@/components/dashboard/RiskMap";

const Dashboard = () => {
  // Sample data - in a real app, this would come from an API
  const [accidentData] = useState([
    { month: "Jan", accidents: 45, injuries: 38, fatalities: 4 },
    { month: "Feb", accidents: 52, injuries: 41, fatalities: 5 },
    { month: "Mar", accidents: 48, injuries: 39, fatalities: 3 },
    { month: "Apr", accidents: 61, injuries: 47, fatalities: 6 },
    { month: "May", accidents: 55, injuries: 45, fatalities: 4 },
    { month: "Jun", accidents: 67, injuries: 51, fatalities: 7 },
    { month: "Jul", accidents: 72, injuries: 58, fatalities: 8 },
    { month: "Aug", accidents: 69, injuries: 54, fatalities: 7 },
    { month: "Sep", accidents: 60, injuries: 49, fatalities: 5 },
    { month: "Oct", accidents: 56, injuries: 47, fatalities: 4 },
    { month: "Nov", accidents: 59, injuries: 50, fatalities: 5 },
    { month: "Dec", accidents: 65, injuries: 53, fatalities: 6 },
  ]);

  const [riskFactors] = useState([
    { name: "Speeding", value: 35 },
    { name: "Weather", value: 25 },
    { name: "Road Design", value: 20 },
    { name: "Distraction", value: 15 },
    { name: "Other", value: 5 },
  ]);

  const [timeData] = useState([
    { time: "00-04", accidents: 78 },
    { time: "04-08", accidents: 112 },
    { time: "08-12", accidents: 167 },
    { time: "12-16", accidents: 144 },
    { time: "16-20", accidents: 189 },
    { time: "20-24", accidents: 122 },
  ]);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of road safety metrics and accident data
        </p>
      </div>

      <div className="dashboard-grid">
        <StatCard
          title="Total Accidents"
          value="709"
          description="Last 12 months"
          icon={<BarChart2 size={20} />}
          trend={{ value: 12, isPositive: false }}
        />
        
        <StatCard
          title="Injuries"
          value="572"
          description="Last 12 months"
          icon={<Users size={20} />}
          trend={{ value: 8, isPositive: false }}
        />
        
        <StatCard
          title="Fatalities"
          value="64"
          description="Last 12 months"
          icon={<TrendingDown size={20} />}
          trend={{ value: 5, isPositive: false }}
        />
        
        <ChartCard
          title="Monthly Accident Trends"
          description="Accidents, injuries, and fatalities over the past year"
          data={accidentData}
          type="line"
          className="col-span-1 md:col-span-2"
          config={{
            xKey: "month",
            yKeys: ["accidents", "injuries", "fatalities"],
            colors: ["#047AFF", "#FF9500", "#FF2D55"],
            height: 250,
          }}
        />
        
        <ChartCard
          title="Contributing Factors"
          description="Main causes of accidents"
          data={riskFactors}
          type="pie"
          config={{
            xKey: "name",
            yKeys: ["value"],
            height: 250,
          }}
        />
        
        <ChartCard
          title="Accidents by Time of Day"
          description="Distribution of accidents across time periods"
          data={timeData}
          type="bar"
          className="col-span-1 md:col-span-2"
          config={{
            xKey: "time",
            yKeys: ["accidents"],
            colors: ["#047AFF"],
            height: 250,
          }}
        />
        
        <RiskMap />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
