export type Candidate = {
  id: string;
  name: string;
  matchScore: number;
  label: string;
};

export type JobDetail = {
  id: string;
  title: string;
  department: string;
  location: string;
  postedDate: string;
  description: string;
  skills: string[];
  experienceLevel: string;
  qualifications: string[];
  candidates: Candidate[];
};

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  postedDate: string;
  matchSummary: {
    exact: number;
    partial: number;
    noFit: number;
    percentage: number;
  };
  dataSync: "ok" | "syncing" | "error";
};
