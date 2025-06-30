import { DetailHeader } from "@/components/shared/DetailHeader";
import { CandidatesList } from "@/components/candidate/CandidatesList";

async function getCandidates() {
  const res = await fetch(`${process.env.BASE_URL}/api/candidates`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.candidates;
}

export default async function CandidatesPage() {
  const candidates = await getCandidates();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <DetailHeader title="Candidates" status="Active" tags={["Talent Management"]} />
      <CandidatesList initialCandidates={candidates} />
    </div>
  );
} 