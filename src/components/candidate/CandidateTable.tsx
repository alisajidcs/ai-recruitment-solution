import { Candidate } from "@/types/app";
import { CandidateTableRow } from "./CandidateTableRow";

export function CandidateTable({ candidates }: { candidates: Candidate[] }) {
  return (
    <table className="min-w-full text-sm border rounded-lg overflow-hidden">
      <thead className="bg-muted">
        <tr>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Score</th>
          <th className="px-4 py-2 text-left">Label</th>
          <th className="px-4 py-2 text-left">Visual</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((c) => (
          <CandidateTableRow key={c.id} candidate={c} />
        ))}
      </tbody>
    </table>
  );
}
