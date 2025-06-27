import { Badge } from "@/components/ui/badge";

export function JobDataSyncBadge({ dataSync }: { dataSync: "ok" | "syncing" | "error" }) {
  if (dataSync === "ok")
    return <Badge variant="default" className="bg-green-500 text-white">OK</Badge>;
  if (dataSync === "syncing")
    return <Badge variant="secondary">Syncing</Badge>;
  return <Badge variant="destructive">Error</Badge>;
} 