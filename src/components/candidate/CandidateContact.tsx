export function CandidateContact({ contact }: { contact: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">Contact Info</h2>
      <div>{contact}</div>
    </div>
  );
} 