import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types/user";
import { authService } from "@/services/auth";

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    login: (username: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (username: string) => {
                set({ isLoading: true, error: null });
                try {
                    const user = await authService.login(username);
                    set({ user, isAuthenticated: true, isLoading: false });
                } catch (error) {
                    set({ error: (error as Error).message, isLoading: false });
                    throw error;
                }
            },

            logout: async () => {
                set({ isLoading: true });
                await authService.logout();
                set({ user: null, isAuthenticated: false, isLoading: false });
            },
        }),
        {
            name: "auth-storage", // name of the item in the storage (must be unique)
            partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }), // only persist user and auth status
        }
    )
);
