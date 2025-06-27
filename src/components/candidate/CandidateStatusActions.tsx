import { Button } from "@/components/ui/button";

export function CandidateStatusActions() {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">Status Actions</h2>
      <div className="flex gap-2">
        <Button variant="outline">Shortlist</Button>
        <Button variant="outline">Reject</Button>
        <Button variant="outline">Pending</Button>
      </div>
    </div>
  );
} 