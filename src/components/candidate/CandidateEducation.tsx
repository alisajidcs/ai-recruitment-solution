export function CandidateEducation({ education }: { education: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">Education</h2>
      <div>{education}</div>
    </div>
  );
} 