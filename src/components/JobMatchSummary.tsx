import { Badge } from "@/components/ui/badge";

export function JobMatchSummary({ exact, partial, noFit }: { exact: number; partial: number; noFit: number }) {
  return (
    <>
      <Badge variant="default">Exact: {exact}</Badge>{" "}
      <Badge variant="secondary">Partial: {partial}</Badge>{" "}
      <Badge variant="destructive">No Fit: {noFit}</Badge>
    </>
  );
} 