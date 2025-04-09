
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Shield } from "lucide-react";
import AuthForm from "@/components/auth/AuthForm";

const Auth = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  
  useEffect(() => {
    // In a real app, this would check a token or session
    // For demo purposes, we're just checking localStorage
    const user = localStorage.getItem('user');
    setIsAuthorized(!!user);
  }, []);
  
  const handleAuthSuccess = () => {
    setIsAuthorized(true);
  };
  
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
  
  // Redirect to dashboard if already logged in
  if (isAuthorized === true) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand panel */}
      <div className="hidden md:flex md:w-1/2 bg-primary text-white p-8 flex-col justify-center items-center">
        <div className="max-w-md text-center">
          <div className="flex justify-center mb-4">
            <Shield size={64} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Road Guardian AI</h1>
          <p className="text-lg mb-8">
            Advanced machine learning solution for predicting and preventing road accidents.
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Predict Accidents</h3>
              <p className="text-sm opacity-90">
                Identify high-risk areas before accidents happen
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Analyze Factors</h3>
              <p className="text-sm opacity-90">
                Understand key contributing factors and their relationships
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Safety Recommendations</h3>
              <p className="text-sm opacity-90">
                Get AI-powered interventions to improve road safety
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visualize Insights</h3>
              <p className="text-sm opacity-90">
                Interactive dashboards for decision makers
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Auth form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4 md:hidden">
              <Shield size={48} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Welcome to Road Guardian AI</h2>
            <p className="text-muted-foreground">
              Sign in to access the road safety analytics platform
            </p>
          </div>
          
          <AuthForm onSuccess={handleAuthSuccess} />
          
          <p className="text-xs text-center mt-8 text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy.
            <br />
            Demo credentials are automatically applied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
