export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "recruiter";
  createdAt: string;
  lastLogin: string | null;
};

export type CreateUserRequest = {
  name: string;
  email: string;
  role: "admin" | "recruiter";
};

export type UpdateUserRequest = {
  name: string;
  email: string;
  role: "admin" | "recruiter";
};

export type UsersResponse = {
  users: User[];
  total: number;
};

export type UserResponse = {
  user: User;
};

export type CreateUserResponse = {
  message: string;
  user: User;
};

export type UpdateUserResponse = {
  message: string;
  user: User;
};

export type DeleteUserResponse = {
  message: string;
  user: User;
};

export type ApiError = {
  error: string;
};
