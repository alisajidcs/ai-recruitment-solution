"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  postedDate: string;
  matchSummary: {
    exact: number;
    partial: number;
    noFit: number;
    percentage: number;
  };
  dataSync: "ok" | "syncing" | "error";
}

export default function Dashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.department.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64"
          />
          <Button variant="outline">Export CSV</Button>
          <Button variant="outline">Export Excel</Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left">Job Title</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Posted</th>
              <th className="px-4 py-2 text-left">Match Summary</th>
              <th className="px-4 py-2 text-left">Match %</th>
              <th className="px-4 py-2 text-left">Data Sync</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="text-center py-8">
                  Loading jobs...
                </td>
              </tr>
            ) : filteredJobs.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-8">
                  No jobs found.
                </td>
              </tr>
            ) : (
              filteredJobs.map((job) => (
                <tr key={job.id} className="border-t">
                  <td className="px-4 py-2 font-medium">{job.title}</td>
                  <td className="px-4 py-2">{job.department}</td>
                  <td className="px-4 py-2">{job.location}</td>
                  <td className="px-4 py-2">{job.postedDate}</td>
                  <td className="px-4 py-2">
                    <Badge variant="default">
                      Exact: {job.matchSummary.exact}
                    </Badge>{" "}
                    <Badge variant="secondary">
                      Partial: {job.matchSummary.partial}
                    </Badge>{" "}
                    <Badge variant="destructive">
                      No Fit: {job.matchSummary.noFit}
                    </Badge>
                  </td>
                  <td className="px-4 py-2 font-semibold">
                    {job.matchSummary.percentage}%
                  </td>
                  <td className="px-4 py-2">
                    {job.dataSync === "ok" && (
                      <Badge
                        variant="default"
                        className="bg-green-500 text-white"
                      >
                        OK
                      </Badge>
                    )}
                    {job.dataSync === "syncing" && (
                      <Badge variant="secondary">Syncing</Badge>
                    )}
                    {job.dataSync === "error" && (
                      <Badge variant="destructive">Error</Badge>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <Link
                      href={`/job/${job.id}`}
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
