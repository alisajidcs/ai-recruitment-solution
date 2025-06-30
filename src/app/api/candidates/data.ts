export const mockCandidates: Array<{
  id: string;
  name: string;
  email: string;
  status: string;
  skills: string[];
  experience: string;
  location: string;
  matchScore: number;
}> = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    skills: ["React", "TypeScript", "Node.js"],
    experience: "5 years",
    location: "New York",
    matchScore: 85,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@email.com",
    status: "Shortlisted",
    skills: ["Python", "Django", "PostgreSQL"],
    experience: "3 years",
    location: "San Francisco",
    matchScore: 92,
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@email.com",
    status: "Rejected",
    skills: ["Java", "Spring", "MySQL"],
    experience: "7 years",
    location: "Chicago",
    matchScore: 45,
  },
]; 