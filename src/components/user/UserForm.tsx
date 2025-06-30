"use client";
import { useState, useEffect } from "react";
import { User, CreateUserRequest, UpdateUserRequest } from "@/types/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type UserFormProps = {
  user?: User | null;
  onSubmit: (data: CreateUserRequest | UpdateUserRequest) => void;
  onCancel: () => void;
  isLoading?: boolean;
};

export function UserForm({
  user,
  onSubmit,
  onCancel,
  isLoading = false,
}: UserFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "recruiter" as "admin" | "recruiter",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={errors.name ? "border-red-500" : ""}
          placeholder="Enter full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={errors.email ? "border-red-500" : ""}
          placeholder="Enter email address"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Role
        </label>
        <select
          id="role"
          value={formData.role}
          onChange={(e) => handleChange("role", e.target.value)}
          className={`block w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.role ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="recruiter">Recruiter</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && (
          <p className="mt-1 text-sm text-red-600">{errors.role}</p>
        )}
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" disabled={isLoading} className="flex-1">
          {isLoading ? "Saving..." : user ? "Update User" : "Add User"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
