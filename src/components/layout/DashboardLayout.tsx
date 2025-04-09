
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SideNav from "@/components/navigation/SideNav";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  
  useEffect(() => {
    // In a real app, this would check a token or session
    // For demo purposes, we're just checking localStorage
    const user = localStorage.getItem('user');
    setIsAuthorized(!!user);
  }, []);
  
  // Show loading while checking auth
  if (isAuthorized === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-slow text-primary font-semibold">
          Loading...
        </div>
      </div>
    );
  }
  
  // Redirect to auth page if not logged in
  if (isAuthorized === false) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <SideNav />
      
      <main className={cn(
        "flex-1 transition-all duration-300 ease-in-out p-4 md:p-6",
        "md:ml-[70px] lg:ml-[240px]"
      )}>
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
