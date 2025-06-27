"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Candidate {
  id: string;
  name: string;
  matchScore: number;
  label: string;
}

interface JobDetail {
  id: string;
  title: string;
  department: string;
  location: string;
  postedDate: string;
  description: string;
  skills: string[];
  experienceLevel: string;
  qualifications: string[];
  candidates: Candidate[];
}

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data.job);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!job) return <div className="p-8">Job not found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="secondary">{job.department}</Badge>
        <Badge variant="secondary">{job.location}</Badge>
        <Badge variant="secondary">{job.experienceLevel}</Badge>
        <Badge variant="secondary">Posted: {job.postedDate}</Badge>
      </div>
      <p className="mb-4 text-muted-foreground">{job.description}</p>
      <div className="mb-4">
        <h2 className="font-semibold mb-1">Skills Required:</h2>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold mb-1">Qualifications:</h2>
        <ul className="list-disc list-inside">
          {job.qualifications.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Filters</h2>
        <div className="flex gap-2 flex-wrap">
          <Input placeholder="Language" className="w-32" />
          <Input placeholder="Nationality" className="w-32" />
          <Input placeholder="Seniority" className="w-32" />
          <Input placeholder="Location" className="w-32" />
          <Button variant="outline">Apply</Button>
        </div>
      </div>
      <div>
        <h2 className="font-semibold mb-2">Candidate Match List</h2>
        <table className="min-w-full text-sm border rounded-lg overflow-hidden">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Score</th>
              <th className="px-4 py-2 text-left">Label</th>
              <th className="px-4 py-2 text-left">Visual</th>
            </tr>
          </thead>
          <tbody>
            {job.candidates.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-2 font-medium">{c.name}</td>
                <td className="px-4 py-2">{c.matchScore}</td>
                <td className="px-4 py-2">
                  <Badge
                    variant={
                      c.label === "Exact Match"
                        ? "default"
                        : c.label === "Partial Match"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {c.label}
                  </Badge>
                </td>
                <td className="px-4 py-2">
                  <div className="h-3 w-32 bg-muted rounded">
                    <div
                      className={
                        c.label === "Exact Match"
                          ? "bg-green-500"
                          : c.label === "Partial Match"
                          ? "bg-yellow-400"
                          : "bg-red-400"
                      }
                      style={{
                        width: `${c.matchScore}%`,
                        height: "0.75rem",
                        minWidth: "0.5rem",
                        borderRadius: "0.375rem",
                      }}
                      title={`${c.matchScore}%`}
                      role="progressbar"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
