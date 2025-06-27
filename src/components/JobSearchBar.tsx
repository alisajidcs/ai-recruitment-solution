import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function JobSearchBar({ search, setSearch }: { search: string; setSearch: (s: string) => void }) {
  return (
    <div className="flex gap-2 items-center">
      <Input
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-64"
      />
      <Button variant="outline">Export CSV</Button>
      <Button variant="outline">Export Excel</Button>
    </div>
  );
} 