import { DetailHeader } from "@/components/shared/DetailHeader";
import { CandidatesList } from "@/components/candidate/CandidatesList";

async function getCandidates() {
  // Mock data for candidates list
  const candidates = [
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

  return candidates;
}

export default async function CandidatesPage() {
  const candidates = await getCandidates();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <DetailHeader title="Candidates" status="Active" tags={["Talent Management"]} />
      <CandidatesList initialCandidates={candidates} />
    </div>
  );
} 