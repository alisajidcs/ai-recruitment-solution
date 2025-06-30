import { DetailHeader } from "@/components/shared/DetailHeader";
import { UserProfile } from "@/components/user/UserProfile";
import { notFound } from "next/navigation";

async function getUser(id: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/users/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.user;
}

export default async function UserProfilePage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const user = await getUser(params.id);
  
  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <DetailHeader 
        title={`${user.name}'s Profile`} 
        status={user.role} 
        tags={["User Management"]} 
      />
      <UserProfile user={user} />
    </div>
  );
} 