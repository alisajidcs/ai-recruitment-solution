import { User } from "@/types/user";

// Mock data for users
export const mockUsers: Array<User> = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@company.com",
    role: "admin",
    createdAt: "2024-01-15T10:00:00Z",
    lastLogin: "2024-01-20T14:30:00Z",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "recruiter",
    createdAt: "2024-01-10T09:00:00Z",
    lastLogin: "2024-01-19T16:45:00Z",
  },
  {
    id: "3",
    name: "Mike Davis",
    email: "mike.davis@company.com",
    role: "recruiter",
    createdAt: "2024-01-12T11:30:00Z",
    lastLogin: "2024-01-18T13:20:00Z",
  },
  {
    id: "4",
    name: "Emily Wilson",
    email: "emily.wilson@company.com",
    role: "admin",
    createdAt: "2024-01-08T08:15:00Z",
    lastLogin: "2024-01-20T10:15:00Z",
  },
];
