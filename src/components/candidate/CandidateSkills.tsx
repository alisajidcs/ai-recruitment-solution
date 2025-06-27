import { Badge } from "@/components/ui/badge";

export function CandidateSkills({ skills }: { skills: string[] }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline">{skill}</Badge>
        ))}
      </div>
    </div>
  );
} 