import { Badge } from "@/components/ui/badge";

export function CandidateHeader({ name, status, tags }: { name: string; status: string; tags: string[] }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="secondary">{status}</Badge>
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">{tag}</Badge>
        ))}
      </div>
    </>
  );
} 