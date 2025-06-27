export function CandidateResume({ resumeRaw }: { resumeRaw: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">Resume (Raw)</h2>
      <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">{resumeRaw}</pre>
    </div>
  );
} 