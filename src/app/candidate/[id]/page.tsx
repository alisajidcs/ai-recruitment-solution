import { DetailHeader } from "@/components/shared/DetailHeader";
import { BadgeList } from "@/components/shared/BadgeList";
import { DetailSection } from "@/components/shared/DetailSection";
import { Button } from "@/components/ui/button";

async function getCandidate(id: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/candidates/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.candidate;
}

export default async function CandidateDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id = "" } = await params;
  const candidate = await getCandidate(id);
  if (!candidate) return <div className="p-8">Candidate not found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <DetailHeader
        title={candidate.name}
        status={candidate.status}
        tags={candidate.tags}
      />
      <DetailSection title="Contact Info">{candidate.contact}</DetailSection>
      <DetailSection title="Skills">
        <BadgeList items={candidate.skills} />
      </DetailSection>
      <DetailSection title="Experience">{candidate.experience}</DetailSection>
      <DetailSection title="Tools">
        <BadgeList items={candidate.tools} />
      </DetailSection>
      <DetailSection title="Education">{candidate.education}</DetailSection>
      <DetailSection title="Match Rationale">
        <div>{candidate.matchRationale}</div>
        <BadgeList items={candidate.highlightedKeywords} variant="default" />
      </DetailSection>
      <DetailSection title="Resume (Raw)">
        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
          {candidate.resumeRaw}
        </pre>
      </DetailSection>
      <DetailSection title="Recruiter Notes">
        {candidate.recruiterNotes}
      </DetailSection>
      <DetailSection title="Status Actions">
        <div className="flex gap-2">
          <Button variant="outline">Shortlist</Button>
          <Button variant="outline">Reject</Button>
          <Button variant="outline">Pending</Button>
        </div>
      </DetailSection>
    </div>
  );
}
