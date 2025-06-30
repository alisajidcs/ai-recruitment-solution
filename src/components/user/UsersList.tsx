"use client";
import { useState, useEffect } from "react";
import { User, CreateUserRequest, UpdateUserRequest } from "@/types/user";
import { UserTable } from "./UserTable";
import { UserSearchBar } from "./UserSearchBar";
import { UserForm } from "./UserForm";
import { Button } from "@/components/ui/button";

type UsersListProps = {
  initialUsers: User[];
};

export function UsersList({ initialUsers }: UsersListProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Filter users based on search and role filter
  useEffect(() => {
    let filtered = [...users];

    if (search) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (roleFilter !== "all") {
      filtered = filtered.filter((user) => user.role === roleFilter);
    }

    setFilteredUsers(filtered);
  }, [users, search, roleFilter]);

  const handleAddUser = async (userData: CreateUserRequest) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create user");
      }

      const result = await response.json();
      setUsers((prev) => [...prev, result.user]);
      setShowAddForm(false);
      alert("User created successfully!");
    } catch (error) {
      console.error("Failed to create user:", error);
      alert(error instanceof Error ? error.message : "Failed to create user");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditUser = async (userData: UpdateUserRequest) => {
    if (!editingUser) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/users/${editingUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update user");
      }

      const result = await response.json();
      setUsers((prev) =>
        prev.map((user) => (user.id === editingUser.id ? result.user : user))
      );
      setEditingUser(null);
      alert("User updated successfully!");
    } catch (error) {
      console.error("Failed to update user:", error);
      alert(error instanceof Error ? error.message : "Failed to update user");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (user: User) => {
    if (!confirm(`Are you sure you want to delete ${user.name}?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to delete user");
      }

      setUsers((prev) => prev.filter((u) => u.id !== user.id));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert(error instanceof Error ? error.message : "Failed to delete user");
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Search and Add User */}
      <div className="flex justify-between items-center">
        <UserSearchBar
          search={search}
          roleFilter={roleFilter}
          onSearchChange={setSearch}
          onRoleFilterChange={setRoleFilter}
        />
        <Button onClick={() => setShowAddForm(true)}>Add New User</Button>
      </div>

      {/* Add User Form */}
      {showAddForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Add New User
          </h3>
          <UserForm
            onSubmit={handleAddUser}
            onCancel={handleCancelAdd}
            isLoading={isLoading}
          />
        </div>
      )}

      {/* Edit User Form */}
      {editingUser && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Edit User</h3>
          <UserForm
            user={editingUser}
            onSubmit={handleEditUser}
            onCancel={handleCancelEdit}
            isLoading={isLoading}
          />
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <UserTable
          users={filteredUsers}
          onEdit={handleEdit}
          onDelete={handleDeleteUser}
        />
      </div>

      {/* Summary */}
      <div className="text-sm text-gray-600">
        Showing {filteredUsers.length} of {users.length} users
      </div>
    </div>
  );
}
