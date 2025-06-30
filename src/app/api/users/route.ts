import { NextRequest, NextResponse } from "next/server";
import { mockUsers } from "./data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  const role = searchParams.get("role");

  let filteredUsers = [...mockUsers];

  // Apply search filter
  if (search) {
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply role filter
  if (role && role !== "all") {
    filteredUsers = filteredUsers.filter((user) => user.role === role);
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    users: filteredUsers,
    total: filteredUsers.length,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, role } = body;

    // Validation
    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Name, email, and role are required" },
        { status: 400 }
      );
    }

    if (!["admin", "recruiter"].includes(role)) {
      return NextResponse.json(
        { error: "Role must be either 'admin' or 'recruiter'" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = mockUsers.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Create new user
    const newUser = {
      id: (mockUsers.length + 1).toString(),
      name,
      email,
      role,
      createdAt: new Date().toISOString(),
      lastLogin: null,
    };

    // In a real app, you would save to database
    mockUsers.push(newUser);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
