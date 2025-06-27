export function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">{title}</h2>
      {children}
    </div>
  );
} 