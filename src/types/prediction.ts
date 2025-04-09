
export type RiskFactor = 
  | 'weather' 
  | 'time' 
  | 'location' 
  | 'roadCondition' 
  | 'season' 
  | 'demographics'
  | 'speed'
  | 'roadDesign'
  | 'trafficDensity'
  | 'vehicleType';

export interface PredictionInput {
  roadType?: string;
  location?: string;
  speedLimit?: number;
  roadCondition?: string;
  timeOfDay?: string;
  dayOfWeek?: string;
  weather?: string;
  visibility?: string;
  driverAge?: string;
  trafficDensity?: string;
  vehicleType?: string;
  historicalRate?: string;
}

export interface RiskScore {
  overall: number;
  factors: {
    [key in RiskFactor]?: number;
  };
  confidence: number;
}

export interface PredictionResult {
  riskScore: RiskScore;
  topFactors: Array<{factor: RiskFactor, contribution: number}>;
  recommendations: string[];
}
