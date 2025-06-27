import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function JobFilters() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Input placeholder="Language" className="w-32" />
      <Input placeholder="Nationality" className="w-32" />
      <Input placeholder="Seniority" className="w-32" />
      <Input placeholder="Location" className="w-32" />
      <Button variant="outline">Apply</Button>
    </div>
  );
} 