import { Badge } from "@/components/ui/badge";
import { CandidateScoreBar } from "./CandidateScoreBar";
import Link from "next/link";

type Candidate = {
  id: string;
  name: string;
  matchScore: number;
  label: string;
};

export function CandidateTableRow({ candidate }: { candidate: Candidate }) {
  return (
    <tr className="border-t">
      <td className="px-4 py-2 font-medium">
        <Link
          href={`/candidate/${candidate.id}`}
          className="text-blue-600 hover:underline"
        >
          {candidate.name}
        </Link>
      </td>
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
