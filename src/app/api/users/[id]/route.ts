import { NextRequest, NextResponse } from "next/server";
import { mockUsers } from "../data";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = mockUsers.find((u) => u.id === params.id);

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({ user });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, email, role } = body;

    const userIndex = mockUsers.findIndex((u) => u.id === params.id);

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

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

    // Check if email already exists (excluding current user)
    const existingUser = mockUsers.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.id !== params.id
    );
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Update user
    const updatedUser = {
      ...mockUsers[userIndex],
      name,
      email,
      role,
    };

    mockUsers[userIndex] = updatedUser;

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userIndex = mockUsers.findIndex((u) => u.id === params.id);

  if (userIndex === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Remove user from array
  const deletedUser = mockUsers.splice(userIndex, 1)[0];

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({
    message: "User deleted successfully",
    user: deletedUser,
  });
}
