import { Job } from "@/types/app";
import { NextRequest, NextResponse } from "next/server";
import { mockJobs } from "./data";

function filterJobs(jobs: Job[], search: string): Job[] {
  if (!search) return jobs;
  const s = search.toLowerCase();
  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(s) ||
      job.department.toLowerCase().includes(s) ||
      job.location.toLowerCase().includes(s)
  );
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";

  // Use mockJobs from data file
  const jobs: Job[] = mockJobs as Job[];

  const filteredJobs = filterJobs(jobs, search);
  return NextResponse.json({ jobs: filteredJobs });
}
