export function CandidateRecruiterNotes({ recruiterNotes }: { recruiterNotes: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">Recruiter Notes</h2>
      <div>{recruiterNotes}</div>
    </div>
  );
} 