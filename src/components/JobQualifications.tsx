export function JobQualifications({ qualifications }: { qualifications: string[] }) {
  return (
    <ul className="list-disc list-inside">
      {qualifications.map((q) => (
        <li key={q}>{q}</li>
      ))}
    </ul>
  );
} 