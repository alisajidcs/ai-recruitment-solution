import { NextRequest, NextResponse } from "next/server";
import { mockJobs } from "../data";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  // Find job by id from mockJobs
  const job = mockJobs.find((j) => j.id === id);
  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  return NextResponse.json({ job });
}
