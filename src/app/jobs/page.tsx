import { JobTable } from "@/components/job/JobTable";
import { JobSearchExportBar } from "@/components/job/JobSearchExportBar";
import { Job } from "@/types/app";

async function getJobs(search: string): Promise<Job[]> {
  const params = search ? `?search=${encodeURIComponent(search)}` : "";
  const res = await fetch(`${process.env.BASE_URL}/api/jobs${params}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.jobs;
}

export default async function Jobs({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const { search = "" } = await searchParams;
  const jobs = await getJobs(search);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">Jobs</h1>
        <JobSearchExportBar search={search} />
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left">Job Title</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Posted</th>
              <th className="px-4 py-2 text-left">Match Summary</th>
              <th className="px-4 py-2 text-left">Match %</th>
              <th className="px-4 py-2 text-left">Data Sync</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <JobTable jobs={jobs} loading={false} />
        </table>
      </div>
    </div>
  );
}
