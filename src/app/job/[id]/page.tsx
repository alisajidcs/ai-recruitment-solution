import { JobHeader } from "@/components/JobHeader";
import { JobSkills } from "@/components/JobSkills";
import { JobQualifications } from "@/components/JobQualifications";
import { JobFilters } from "@/components/JobFilters";
import { CandidateTable } from "@/components/CandidateTable";
import { JobDetail } from "@/types/app";

async function getJobDetail(id: string): Promise<JobDetail | null> {
  const res = await fetch(`${process.env.BASE_URL}/api/jobs/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.job;
}

export default async function JobDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const job = await getJobDetail(id);
  if (!job) return <div className="p-8">Job not found.</div>;
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <JobHeader job={job} />
      <p className="mb-4 text-muted-foreground">{job.description}</p>
      <div className="mb-4">
        <h2 className="font-semibold mb-1">Skills Required:</h2>
        <JobSkills skills={job.skills} />
      </div>
      <div className="mb-4">
        <h2 className="font-semibold mb-1">Qualifications:</h2>
        <JobQualifications qualifications={job.qualifications} />
      </div>
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Filters</h2>
        <JobFilters />
      </div>
      <div>
        <h2 className="font-semibold mb-2">Candidate Match List</h2>
        <CandidateTable candidates={job.candidates} />
      </div>
    </div>
  );
}
