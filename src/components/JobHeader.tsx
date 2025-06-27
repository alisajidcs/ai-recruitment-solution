import { Badge } from "@/components/ui/badge";
import { JobDetail } from "@/types/app";

export function JobHeader({
  job,
}: {
  job: Pick<
    JobDetail,
    "title" | "department" | "location" | "experienceLevel" | "postedDate"
  >;
}) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="secondary">{job.department}</Badge>
        <Badge variant="secondary">{job.location}</Badge>
        <Badge variant="secondary">{job.experienceLevel}</Badge>
        <Badge variant="secondary">Posted: {job.postedDate}</Badge>
      </div>
    </>
  );
}
