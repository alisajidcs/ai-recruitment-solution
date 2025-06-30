"use client";
import { Input } from "@/components/ui/input";

type UserSearchBarProps = {
  search: string;
  roleFilter: string;
  onSearchChange: (value: string) => void;
  onRoleFilterChange: (value: string) => void;
};

export function UserSearchBar({
  search,
  roleFilter,
  onSearchChange,
  onRoleFilterChange,
}: UserSearchBarProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Search users by name or email..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="max-w-md"
        />
      </div>
      <div>
        <select
          value={roleFilter}
          onChange={(e) => onRoleFilterChange(e.target.value)}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="recruiter">Recruiter</option>
        </select>
      </div>
    </div>
  );
}
