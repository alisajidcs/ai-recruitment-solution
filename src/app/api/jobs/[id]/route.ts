import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // Mock job detail data
  const job = {
    id,
    title: id === "1" ? "Frontend Engineer" : id === "2" ? "Backend Developer" : "Product Manager",
    department: id === "1" || id === "2" ? "Engineering" : "Product",
    location: id === "1" ? "Remote" : id === "2" ? "Berlin, Germany" : "London, UK",
    postedDate: id === "1" ? "2024-06-01" : id === "2" ? "2024-05-28" : "2024-05-25",
    description: "This is a mock job description for the position.",
    skills: id === "1"
      ? ["React", "TypeScript", "CSS", "Tailwind"]
      : id === "2"
      ? ["Node.js", "TypeScript", "PostgreSQL", "Docker"]
      : ["Agile", "Product Strategy", "Communication"],
    experienceLevel: id === "3" ? "Senior" : "Mid",
    qualifications: ["Bachelor's Degree", "Relevant Experience"],
    candidates: [
      {
        id: "c1",
        name: "Alice Smith",
        matchScore: 92,
        label: "Exact Match",
      },
      {
        id: "c2",
        name: "Bob Johnson",
        matchScore: 78,
        label: "Partial Match",
      },
      {
        id: "c3",
        name: "Charlie Lee",
        matchScore: 55,
        label: "No Fit",
      },
    ],
  };

  return NextResponse.json({ job });
} 