import { NextResponse } from "next/server";

export async function GET() {
  // Mock job data
  const jobs = [
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
  return NextResponse.json({ jobs });
} 