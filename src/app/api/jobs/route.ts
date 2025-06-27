import { Job } from "@/types/app";
import { NextRequest, NextResponse } from "next/server";

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

  // Mock job data
  const jobs: Job[] = [
    {
      id: "1",
      title: "Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      postedDate: "2024-06-01",
      matchSummary: {
        exact: 3,
        partial: 5,
        noFit: 2,
        percentage: 87,
      },
      dataSync: "ok",
    },
    {
      id: "2",
      title: "Backend Developer",
      department: "Engineering",
      location: "Berlin, Germany",
      postedDate: "2024-05-28",
      matchSummary: {
        exact: 1,
        partial: 4,
        noFit: 6,
        percentage: 65,
      },
      dataSync: "syncing",
    },
    {
      id: "3",
      title: "Product Manager",
      department: "Product",
      location: "London, UK",
      postedDate: "2024-05-25",
      matchSummary: {
        exact: 2,
        partial: 3,
        noFit: 5,
        percentage: 72,
      },
      dataSync: "error",
    },
  ];

  const filteredJobs = filterJobs(jobs, search);
  return NextResponse.json({ jobs: filteredJobs });
}
