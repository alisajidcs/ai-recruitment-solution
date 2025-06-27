type JobSearchExportBarProps = {
  search: string;
};

export function JobSearchExportBar({ search }: JobSearchExportBarProps) {
  return (
    <form method="GET" className="flex gap-2 items-center">
      <input
        type="text"
        name="search"
        placeholder="Search jobs..."
        defaultValue={search}
        className="w-64 border px-2 py-1 rounded"
      />
      <button type="submit" className="border px-3 py-1 rounded bg-gray-100">
        Search
      </button>
      <a
        href={`/api/jobs/export?format=csv${
          search ? `&search=${encodeURIComponent(search)}` : ""
        }`}
        className="border px-3 py-1 rounded bg-gray-100"
      >
        Export CSV
      </a>
      <a
        href={`/api/jobs/export?format=excel${
          search ? `&search=${encodeURIComponent(search)}` : ""
        }`}
        className="border px-3 py-1 rounded bg-gray-100"
      >
        Export Excel
      </a>
    </form>
  );
}
