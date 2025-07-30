// Type definitions for SWGoH Raid Analysis

export interface Player {
  name: string;
  allycode: string;
  estimatedScore: number;
  lastActualScore: number;
  diff: number;
  diffPercent: number;
  participated: boolean;
  raidDate: string;
}

export interface RaidData {
  date: string;
  file: string;
  data: Player[];
}

export interface PlayerRaidEntry {
  date: string;
  score: number;
  participated: boolean;
  estimatedScore: number;
}

export interface PlayerStats {
  name: string;
  allycode: string;
  participation: number;
  raidsParticipated: number;
  totalRaids: number;
  totalScore: number;
  avgScore: number;
  avgEstimate: number;
  bestScore: number;
  maxEstimated: number;
  lastScore: number;
  efficiency: number;
  lastActivity: string;
  trend: string;
  raids: PlayerRaidEntry[];
  last5Raids: PlayerRaidEntry[];
}
