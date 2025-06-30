"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Candidate = {
  id: string;
  name: string;
  email: string;
  status: string;
  skills: string[];
  experience: string;
  location: string;
  matchScore: number;
};

type CandidatesListProps = {
  initialCandidates: Candidate[];
};

export function CandidatesList({ initialCandidates }: CandidatesListProps) {
  const [candidates] = useState<Candidate[]>(initialCandidates);
  const [search, setSearch] = useState("");

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(search.toLowerCase()) ||
      candidate.email.toLowerCase().includes(search.toLowerCase()) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      )
  );

  const getStatusBadge = (status: string) => {
    const baseClasses =
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    switch (status.toLowerCase()) {
      case "active":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "shortlisted":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case "rejected":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex gap-4 items-center">
        <Input
          type="text"
          placeholder="Search candidates by name, email, or skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Candidates Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Name
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Email
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Status
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Skills
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Experience
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Location
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Match Score
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="border border-gray-200 px-4 py-8 text-center text-gray-500"
                  >
                    No candidates found
                  </td>
                </tr>
              ) : (
                filteredCandidates.map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                      {candidate.name}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                      {candidate.email}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      <span className={getStatusBadge(candidate.status)}>
                        {candidate.status}
                      </span>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                          >
                            {skill}
                          </span>
                        ))}
                        {candidate.skills.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{candidate.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                      {candidate.experience}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                      {candidate.location}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      <span
                        className={`font-medium ${getMatchScoreColor(
                          candidate.matchScore
                        )}`}
                      >
                        {candidate.matchScore}%
                      </span>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      <Link href={`/candidate/${candidate.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-3"
                        >
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="text-sm text-gray-600">
        Showing {filteredCandidates.length} of {candidates.length} candidates
      </div>
    </div>
  );
}
