import { User } from "@/types/user";
import { UserTableRow } from "./UserTableRow";

type UserTableProps = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

export function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
              Name
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
              Email
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
              Role
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
              Created
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
              Last Login
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="border border-gray-200 px-4 py-8 text-center text-gray-500"
              >
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <UserTableRow
                key={user.id}
                user={user}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
