
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // This is just to ensure any old route redirects properly
    console.log("Index page loaded - redirecting to main app");
  }, []);

  // Redirect to Auth page
  return <Navigate to="/auth" replace />;
};

export default Index;
