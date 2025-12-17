"use client";

import { useEffect } from "react";
import { checkSession, getMe } from "@/services/auth";
import { useAuthStore } from "@/store/auth";

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );

  useEffect(() => {
    const fetchUser = async () => {
      const isAuthenticated = await checkSession();

      if (isAuthenticated) {
        const user = await getMe();

        if (user) {
          setUser(user);
        }
      } else {
        clearIsAuthenticated();
      }
    };

    fetchUser();
  }, [setUser, clearIsAuthenticated]);

  return children;
}

export default AuthProvider;
