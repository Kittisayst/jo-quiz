export type UserRole = "teacher" | "student";

export interface User {
    id: string;
    name: string;
    username: string; // For login
    role: UserRole;
    avatar?: string;
}
