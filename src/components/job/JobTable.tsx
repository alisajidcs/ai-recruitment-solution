import { Job } from "@/types/app";
import { JobTableRow } from "./JobTableRow";

export function JobTable({ jobs, loading }: { jobs: Job[]; loading: boolean }) {
  if (loading) {
    return (
      <tbody>
        <tr>
          <td colSpan={8} className="text-center py-8">
            Loading jobs...
          </td>
        </tr>
      </tbody>
    );
  }
  if (jobs.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={8} className="text-center py-8">
            No jobs found.
          </td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {jobs.map((job) => (
        <JobTableRow key={job.id} job={job} />
      ))}
    </tbody>
  );
}
