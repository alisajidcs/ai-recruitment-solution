import { Badge } from "@/components/ui/badge";
import { CandidateScoreBar } from "./CandidateScoreBar";
import { Candidate } from "@/types/app";

export function CandidateTableRow({
  candidate,
}: {
  candidate: Omit<Candidate, "id">;
}) {
  return (
    <tr className="border-t">
      <td className="px-4 py-2 font-medium">{candidate.name}</td>
      <td className="px-4 py-2">{candidate.matchScore}</td>
      <td className="px-4 py-2">
        <Badge
          variant={
            candidate.label === "Exact Match"
              ? "default"
              : candidate.label === "Partial Match"
              ? "secondary"
              : "destructive"
          }
        >
          {candidate.label}
        </Badge>
      </td>
      <td className="px-4 py-2">
        <CandidateScoreBar
          score={candidate.matchScore}
          label={candidate.label}
        />
      </td>
    </tr>
  );
}
