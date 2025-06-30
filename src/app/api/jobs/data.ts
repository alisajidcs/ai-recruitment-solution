export const mockJobs: Array<{
  id: string;
  title: string;
  department: string;
  location: string;
  postedDate: string;
  experienceLevel: string;
  skills: string[];
  qualifications: string[];
  description: string;
  matchSummary: {
    exact: number;
    partial: number;
    noFit: number;
    percentage: number;
  };
  dataSync: string;
}> = [
  {
    id: "1",
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    postedDate: "2024-06-01",
    experienceLevel: "Mid",
    skills: ["React", "TypeScript", "CSS"],
    qualifications: ["BSc Computer Science", "3+ years experience"],
    description: "Build and maintain UI components for our web platform.",
    matchSummary: {
      exact: 3,
      partial: 5,
      noFit: 2,
      percentage: 87,
    },
    dataSync: "ok",
  },
  {
    id: "2",
    title: "Backend Developer",
    department: "Engineering",
    location: "Berlin, Germany",
    postedDate: "2024-05-28",
    experienceLevel: "Senior",
    skills: ["Node.js", "PostgreSQL", "API Design"],
    qualifications: ["BSc Computer Science", "5+ years experience"],
    description: "Develop and optimize backend services and APIs.",
    matchSummary: {
      exact: 1,
      partial: 4,
      noFit: 6,
      percentage: 65,
    },
    dataSync: "syncing",
  },
  {
    id: "3",
    title: "Product Manager",
    department: "Product",
    location: "London, UK",
    postedDate: "2024-05-25",
    experienceLevel: "Mid",
    skills: ["Agile", "Product Strategy", "Communication"],
    qualifications: ["Bachelor's Degree", "Relevant Experience"],
    description: "Analyze data and build ML models for recruitment intelligence.",
    matchSummary: {
      exact: 2,
      partial: 3,
      noFit: 5,
      percentage: 72,
    },
    dataSync: "error",
  },
]; 