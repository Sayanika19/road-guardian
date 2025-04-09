
import { PredictionInput, PredictionResult, RiskFactor } from "@/types/prediction";

// Constants for risk factors and their weights in different contexts
const RISK_WEIGHTS = {
  roadType: {
    urban: 0.6,
    highway: 0.7,
    rural: 0.4,
    residential: 0.3,
    intersection: 0.8
  },
  speedLimit: {
    '25': 0.3,
    '35': 0.5,
    '45': 0.6,
    '55': 0.7,
    '65': 0.8
  },
  roadCondition: {
    good: 0.2,
    fair: 0.5,
    poor: 0.8,
    construction: 0.9
  },
  timeOfDay: {
    morning: 0.5,
    midday: 0.3,
    evening: 0.7,
    night: 0.8
  },
  dayOfWeek: {
    weekday: 0.6,
    weekend: 0.7
  },
  weather: {
    clear: 0.2,
    rain: 0.7,
    snow: 0.9,
    fog: 0.8
  },
  visibility: {
    good: 0.2,
    moderate: 0.5,
    poor: 0.9
  },
  driverAge: {
    teen: 0.9,
    young: 0.7,
    adult: 0.4,
    senior: 0.6
  },
  trafficDensity: {
    light: 0.3,
    medium: 0.5,
    heavy: 0.8
  },
  vehicleType: {
    car: 0.5,
    suv: 0.6,
    truck: 0.7,
    bus: 0.6,
    motorcycle: 0.9
  },
  historicalRate: {
    low: 0.3,
    average: 0.5,
    high: 0.8,
    hotspot: 0.95
  }
};

// Feature importance factors (simulating ML model weights)
const FEATURE_IMPORTANCE = {
  roadType: 0.15,
  speedLimit: 0.12,
  roadCondition: 0.1,
  timeOfDay: 0.15,
  dayOfWeek: 0.05,
  weather: 0.12,
  visibility: 0.07,
  driverAge: 0.08,
  trafficDensity: 0.06,
  vehicleType: 0.04,
  historicalRate: 0.06
};

// Map input fields to risk factors
const FACTOR_MAPPING: Record<string, RiskFactor> = {
  roadType: 'roadDesign',
  speedLimit: 'speed',
  roadCondition: 'roadCondition',
  timeOfDay: 'time',
  dayOfWeek: 'time',
  weather: 'weather',
  visibility: 'weather',
  driverAge: 'demographics',
  trafficDensity: 'trafficDensity',
  vehicleType: 'vehicleType',
  historicalRate: 'location'
};

/**
 * A service that simulates machine learning prediction models for accident risk
 */
export class MLPredictionService {
  /**
   * Predicts risk based on input parameters
   * This simulates what would be a call to a real ML model API
   */
  predictRisk(input: PredictionInput): PredictionResult {
    // Calculate base risk score from inputs
    let overallRisk = 0;
    let totalWeight = 0;
    const factorContributions: Record<RiskFactor, number> = {
      weather: 0,
      time: 0,
      location: 0,
      roadCondition: 0,
      season: 0,
      demographics: 0,
      speed: 0,
      roadDesign: 0,
      trafficDensity: 0,
      vehicleType: 0
    };
    
    // Process each input factor
    Object.entries(input).forEach(([key, value]) => {
      if (!value || !(key in FEATURE_IMPORTANCE)) return;
      
      // Get the weight for this feature
      const featureWeight = FEATURE_IMPORTANCE[key as keyof typeof FEATURE_IMPORTANCE];
      
      // Get the risk value for this input
      const riskWeightCategory = RISK_WEIGHTS[key as keyof typeof RISK_WEIGHTS];
      const riskValue = riskWeightCategory[value as keyof typeof riskWeightCategory] || 0.5;
      
      // Contribution to overall risk
      const contribution = featureWeight * riskValue;
      overallRisk += contribution;
      totalWeight += featureWeight;
      
      // Map to risk factor category and add contribution
      const riskFactor = FACTOR_MAPPING[key];
      if (riskFactor) {
        factorContributions[riskFactor] += contribution;
      }
    });
    
    // Normalize risk score to 0-100 range
    const normalizedRisk = Math.min(Math.round((overallRisk / Math.max(totalWeight, 0.01)) * 100), 100);
    
    // Add randomness to simulate real-world variation
    const finalRisk = Math.max(10, Math.min(95, normalizedRisk + (Math.random() * 10 - 5)));
    
    // Calculate top contributing factors
    const topFactors = Object.entries(factorContributions)
      .map(([factor, value]) => ({
        factor: factor as RiskFactor,
        contribution: value
      }))
      .sort((a, b) => b.contribution - a.contribution)
      .slice(0, 4);
    
    // Generate recommendations based on top factors
    const recommendations = this.generateRecommendations(topFactors, finalRisk);
    
    // Create risk score object with factor breakdown
    const riskScore = {
      overall: finalRisk,
      factors: Object.fromEntries(
        Object.entries(factorContributions)
          .map(([key, value]) => [key, Math.round(value * 100)])
      ),
      confidence: 80 + (Math.random() * 15) // Simulate confidence level
    };
    
    return {
      riskScore,
      topFactors,
      recommendations
    };
  }
  
  /**
   * Generates tailored safety recommendations based on risk factors
   */
  private generateRecommendations(
    topFactors: Array<{factor: RiskFactor, contribution: number}>, 
    riskLevel: number
  ): string[] {
    const recommendations: string[] = [];
    
    // Base recommendations everyone gets
    recommendations.push("Maintain increased awareness of surroundings");
    
    // Add factor-specific recommendations
    topFactors.forEach(({factor}) => {
      switch(factor) {
        case 'weather':
          recommendations.push("Reduce speed in adverse weather conditions");
          if (riskLevel > 60) recommendations.push("Check weather forecasts before travel");
          break;
        case 'time':
          recommendations.push("Plan travel outside peak hours when possible");
          if (riskLevel > 70) recommendations.push("Allow extra time for journey during high-risk periods");
          break;
        case 'location':
          if (riskLevel > 50) recommendations.push("Consider alternative routes if available");
          if (riskLevel > 80) recommendations.push("Avoid known high-risk areas when possible");
          break;
        case 'roadCondition':
          recommendations.push("Maintain safe following distance");
          if (riskLevel > 60) recommendations.push("Report hazardous road conditions to authorities");
          break;
        case 'demographics':
          if (riskLevel > 60) recommendations.push("Consider additional driver training or education");
          break;
        case 'speed':
          recommendations.push("Strictly adhere to speed limits");
          if (riskLevel > 70) recommendations.push("Drive below speed limits in challenging conditions");
          break;
        case 'roadDesign':
          if (riskLevel > 60) recommendations.push("Exercise extra caution at complex intersections");
          break;
        case 'trafficDensity':
          if (riskLevel > 50) recommendations.push("Allow extra travel time during busy periods");
          break;
        case 'vehicleType':
          if (riskLevel > 60) recommendations.push("Ensure vehicle is properly maintained for optimal safety");
          break;
        default:
          break;
      }
    });
    
    // Add severity-based recommendations
    if (riskLevel > 80) {
      recommendations.push("Consider postponing non-essential travel if possible");
    }
    
    // Return unique recommendations (remove duplicates)
    return [...new Set(recommendations)].slice(0, 5);
  }
}

// Export singleton instance
export const mlPredictionService = new MLPredictionService();
