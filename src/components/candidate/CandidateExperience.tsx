export function CandidateExperience({ experience }: { experience: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">Experience</h2>
      <div>{experience}</div>
    </div>
  );
} 