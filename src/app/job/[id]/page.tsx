import { DetailHeader } from "@/components/shared/DetailHeader";
import { BadgeList } from "@/components/shared/BadgeList";
import { DetailSection } from "@/components/shared/DetailSection";
import { CandidateTable } from "@/components/candidate/CandidateTable";
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
  const job = await getJobDetail(params.id);
  if (!job) return <div className="p-8">Job not found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <DetailHeader
        title={job.title}
        status={job.experienceLevel}
        tags={[job.department, job.location, `Posted: ${job.postedDate}`]}
      />
      <DetailSection title="Description">{job.description}</DetailSection>
      <DetailSection title="Skills Required">
        <BadgeList items={job.skills} />
      </DetailSection>
      <DetailSection title="Qualifications">
        <ul className="list-disc list-inside">
          {job.qualifications.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </DetailSection>
      <DetailSection title="Filters">
        {/* Todo: filter UI here */}
        <div />
      </DetailSection>
      <DetailSection title="Candidate Match List">
        <CandidateTable candidates={job.candidates} />
      </DetailSection>
    </div>
  );
}
