export function CandidateScoreBar({ score, label }: { score: number; label: string }) {
  return (
    <div className="h-3 w-32 bg-muted rounded">
      <div
        className={
          label === "Exact Match"
            ? "bg-green-500"
            : label === "Partial Match"
            ? "bg-yellow-400"
            : "bg-red-400"
        }
        style={{ width: `${score}%`, height: '0.75rem', minWidth: '0.5rem', borderRadius: '0.375rem' }}
        title={`${score}%`}
        role="progressbar"
      />
    </div>
  );
} 