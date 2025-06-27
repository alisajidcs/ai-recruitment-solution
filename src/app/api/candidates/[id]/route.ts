import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  // Mock candidate data
  const candidate = {
    id,
    name:
      id === "c1" ? "Alice Smith" : id === "c2" ? "Bob Johnson" : "Charlie Lee",
    contact:
      id === "c1"
        ? "alice@example.com"
        : id === "c2"
        ? "bob@example.com"
        : "charlie@example.com",
    skills:
      id === "c1"
        ? ["React", "TypeScript", "CSS"]
        : id === "c2"
        ? ["Node.js", "PostgreSQL", "Docker"]
        : ["Agile", "Product Strategy"],
    experience:
      id === "c1"
        ? "3 years at TechCorp as Frontend Engineer"
        : id === "c2"
        ? "5 years at Backendify as Backend Developer"
        : "7 years at Productify as Product Manager",
    tools:
      id === "c1"
        ? ["VSCode", "Figma"]
        : id === "c2"
        ? ["Docker", "Postman"]
        : ["Jira", "Confluence"],
    education:
      id === "c1"
        ? "BSc Computer Science, MIT"
        : id === "c2"
        ? "BSc Software Engineering, TU Berlin"
        : "MBA, London Business School",
    matchRationale: "Strong match on required skills and experience.",
    highlightedKeywords: ["React", "TypeScript", "Frontend Engineer"],
    resumeRaw: `Name: ${
      id === "c1" ? "Alice Smith" : id === "c2" ? "Bob Johnson" : "Charlie Lee"
    }\nExperience: ...\nSkills: ...`,
    recruiterNotes: "Great communication skills. Consider for next round.",
    tags: ["shortlisted", "frontend"],
    status: id === "c1" ? "shortlisted" : id === "c2" ? "rejected" : "pending",
  };
  return NextResponse.json({ candidate });
}
