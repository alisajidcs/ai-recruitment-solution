import { Badge } from "@/components/ui/badge";

export function CandidateMatchRationale({ matchRationale, highlightedKeywords }: { matchRationale: string; highlightedKeywords: string[] }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">Match Rationale</h2>
      <div>{matchRationale}</div>
      <div className="flex flex-wrap gap-2 mt-2">
        {highlightedKeywords.map((kw) => (
          <Badge key={kw} variant="default">{kw}</Badge>
        ))}
      </div>
    </div>
  );
} 