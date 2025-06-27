import { Job } from "@/types/app";
import { NextRequest, NextResponse } from "next/server";

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

  // Fetch jobs from the /api/jobs endpoint with the same search param
  const params = search ? `?search=${encodeURIComponent(search)}` : "";
  const apiRes = await fetch(`${process.env.BASE_URL || ""}/api/jobs${params}`);
  const apiData = await apiRes.json();
  const jobs: Job[] = apiData.jobs;

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
