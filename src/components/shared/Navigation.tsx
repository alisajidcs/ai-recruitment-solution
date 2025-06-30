"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Jobs", href: "/jobs" },
  { name: "Candidates", href: "/candidates" },
  { name: "Users", href: "/users" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold text-gray-900">AI Recruitment</h1>
          <div className="flex space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="h-8 px-3"
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
