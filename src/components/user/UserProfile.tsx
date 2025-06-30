"use client";
import { useState } from "react";
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DetailSection } from "@/components/shared/DetailSection";

type UserProfileProps = {
  user: User;
  onUpdateProfile?: (data: {
    name: string;
    currentPassword: string;
    newPassword: string;
  }) => void;
};

export function UserProfile({ user, onUpdateProfile }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (formData.newPassword) {
      if (!formData.currentPassword) {
        newErrors.currentPassword =
          "Current password is required to change password";
      }

      if (formData.newPassword.length < 8) {
        newErrors.newPassword = "New password must be at least 8 characters";
      }

      if (formData.newPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        await onUpdateProfile?.({
          name: formData.name,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        });
        setIsEditing(false);
        setFormData((prev) => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));
      } catch (error) {
        console.error("Failed to update profile:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      name: user.name,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleString();
  };

  if (!isEditing) {
    return (
      <DetailSection title="User Profile">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <p className="text-sm text-gray-900 mt-1">{user.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <p className="text-sm text-gray-900 mt-1">{user.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Role</label>
              <p className="text-sm text-gray-900 mt-1 capitalize">
                {user.role}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Member Since
              </label>
              <p className="text-sm text-gray-900 mt-1">
                {formatDate(user.createdAt)}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Last Login
              </label>
              <p className="text-sm text-gray-900 mt-1">
                {formatDate(user.lastLogin)}
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          </div>
        </div>
      </DetailSection>
    );
  }

  return (
    <DetailSection title="Edit Profile">
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
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Change Password (Optional)
          </h4>

          <div className="space-y-3">
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Current Password
              </label>
              <Input
                id="currentPassword"
                type="password"
                value={formData.currentPassword}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    currentPassword: e.target.value,
                  }))
                }
                className={errors.currentPassword ? "border-red-500" : ""}
                placeholder="Enter current password"
              />
              {errors.currentPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.currentPassword}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New Password
              </label>
              <Input
                id="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    newPassword: e.target.value,
                  }))
                }
                className={errors.newPassword ? "border-red-500" : ""}
                placeholder="Enter new password (min 8 characters)"
              />
              {errors.newPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm New Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                className={errors.confirmPassword ? "border-red-500" : ""}
                placeholder="Confirm new password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" disabled={isLoading} className="flex-1">
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isLoading}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </form>
    </DetailSection>
  );
}
