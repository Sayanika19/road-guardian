
import { useState } from "react";
import { PredictionInput, PredictionResult } from "@/types/prediction";
import { mlPredictionService } from "@/services/mlPredictionService";

export function usePrediction() {
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const predictRisk = async (input: PredictionInput) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call to a backend ML service
      // For demo purposes, we're using our simulated ML service
      // Adding a timeout to simulate a real API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const result = mlPredictionService.predictRisk(input);
      setPredictionResult(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during prediction';
      setError(errorMessage);
      console.error('Prediction error:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    predictRisk,
    predictionResult,
    isLoading,
    error
  };
}
