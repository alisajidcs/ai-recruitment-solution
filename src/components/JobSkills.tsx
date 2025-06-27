import { Badge } from "@/components/ui/badge";

export function JobSkills({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} variant="outline">{skill}</Badge>
      ))}
    </div>
  );
} 