import { Badge } from "@/components/ui/badge";
import { BadgeList } from "./BadgeList";

export function DetailHeader({ title, status, tags }: { title: string; status?: string; tags?: string[] }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {status && <Badge variant="secondary">{status}</Badge>}
        {tags && <BadgeList items={tags} />}
      </div>
    </>
  );
} 