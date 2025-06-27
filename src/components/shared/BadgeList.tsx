import { Badge } from "@/components/ui/badge";

export function BadgeList({ items, variant = "outline" }: { items: string[]; variant?: "default" | "secondary" | "destructive" | "outline" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant={variant}>{item}</Badge>
      ))}
    </div>
  );
} 