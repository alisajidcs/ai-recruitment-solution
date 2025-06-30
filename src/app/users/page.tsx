import { DetailHeader } from "@/components/shared/DetailHeader";
import { UsersList } from "@/components/user/UsersList";

async function getUsers() {
  const res = await fetch(`${process.env.BASE_URL}/api/users`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.users;
}

export default async function UsersPage() {
  const users = await getUsers();
  if (!users) return <div className="p-8">Failed to load users.</div>;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <DetailHeader title="User Management" status="Admin" tags={["User Management"]} />
      <UsersList initialUsers={users} />
    </div>
  );
} 