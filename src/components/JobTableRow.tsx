import Link from "next/link";
import { JobMatchSummary } from "./JobMatchSummary";
import { JobDataSyncBadge } from "./JobDataSyncBadge";
import { Job } from "@/types/app";

export function JobTableRow({ job }: { job: Job }) {
  return (
    <tr className="border-t">
      <td className="px-4 py-2 font-medium">{job.title}</td>
      <td className="px-4 py-2">{job.department}</td>
      <td className="px-4 py-2">{job.location}</td>
      <td className="px-4 py-2">{job.postedDate}</td>
      <td className="px-4 py-2">
        <JobMatchSummary {...job.matchSummary} />
      </td>
      <td className="px-4 py-2 font-semibold">
        {job.matchSummary.percentage}%
      </td>
      <td className="px-4 py-2">
        <JobDataSyncBadge dataSync={job.dataSync} />
      </td>
      <td className="px-4 py-2">
        <Link
          href={`/job/${job.id}`}
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
