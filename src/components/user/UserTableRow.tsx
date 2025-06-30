import { User } from "@/types/user";
import { Button } from "@/components/ui/button";

type UserTableRowProps = {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

export function UserTableRow({ user, onEdit, onDelete }: UserTableRowProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleDateString();
  };

  const getRoleBadge = (role: string) => {
    const baseClasses =
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    return role === "admin"
      ? `${baseClasses} bg-red-100 text-red-800`
      : `${baseClasses} bg-blue-100 text-blue-800`;
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
        {user.name}
      </td>
      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
        {user.email}
      </td>
      <td className="border border-gray-200 px-4 py-3 text-sm">
        <span className={getRoleBadge(user.role)}>{user.role}</span>
      </td>
      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
        {formatDate(user.createdAt)}
      </td>
      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
        {formatDate(user.lastLogin)}
      </td>
      <td className="border border-gray-200 px-4 py-3 text-sm">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(user)}
            className="h-8 px-3"
          >
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(user)}
            className="h-8 px-3 text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}
