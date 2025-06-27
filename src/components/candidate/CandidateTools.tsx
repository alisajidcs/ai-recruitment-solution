import { Badge } from "@/components/ui/badge";

export function CandidateTools({ tools }: { tools: string[] }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">Tools</h2>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <Badge key={tool} variant="outline">{tool}</Badge>
        ))}
      </div>
    </div>
  );
} 