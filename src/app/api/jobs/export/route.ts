import { Job } from "@/types/app";
import { NextRequest, NextResponse } from "next/server";
import { mockJobs } from "../data";

function jobsToCSV(jobs: Job[]): string {
  const header = [
    "Job Title",
    "Department",
    "Location",
    "Posted",
    "Exact Match",
    "Partial Match",
    "No Fit",
    "Match %",
    "Data Sync",
  ];
  const rows = jobs.map((job) => [
    job.title,
    job.department,
    job.location,
    job.postedDate,
    job.matchSummary.exact,
    job.matchSummary.partial,
    job.matchSummary.noFit,
    job.matchSummary.percentage,
    job.dataSync,
  ]);
  return [header, ...rows].map((row) => row.join(",")).join("\n");
}

function jobsToExcel(jobs: Job[]): string {
  // For mock, just return CSV with .xls extension
  return jobsToCSV(jobs);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const format = searchParams.get("format") || "csv";
  const search = searchParams.get("search") || "";

  // Use mockJobs from data file
  let jobs: Job[] = mockJobs as Job[];
  if (search) {
    const s = search.toLowerCase();
    jobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(s) ||
        job.department.toLowerCase().includes(s) ||
        job.location.toLowerCase().includes(s)
    );
  }

  let fileContent: string, contentType: string, fileName: string;
  if (format === "excel") {
    fileContent = jobsToExcel(jobs);
    contentType = "application/vnd.ms-excel";
    fileName = "jobs.xls";
  } else {
    fileContent = jobsToCSV(jobs);
    contentType = "text/csv";
    fileName = "jobs.csv";
  }

  return new NextResponse(fileContent, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename=${fileName}`,
    },
  });
}
