import type { User } from "@/types/user";
import { MOCK_USERS } from "./mockData";

export interface IAuthService {
    login(username: string): Promise<User>;
    logout(): Promise<void>;
    getCurrentUser(): Promise<User | null>;
}

export const authService: IAuthService = {
    login: async (username: string): Promise<User> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = MOCK_USERS.find((u) => u.username === username);
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error("ຊື່ຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ"));
                }
            }, 800); // Simulate network delay
        });
    },

    logout: async (): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    },

    getCurrentUser: async (): Promise<User | null> => {
        // In a real app, this might check a token or session
        return null;
    }
};
