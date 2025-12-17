"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth";
import { logout } from "@/services/auth";

import css from "./Header.module.css";

function Header() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push("/login");
  };

  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navigation}>
          <li className={css.navigation__element}>
            <Link href="/">Home</Link>
          </li>
          <li className={css.navigation__element}>
            <Link href="/profile">Profile</Link>
          </li>
          <li className={css.navigation__element}>
            <Link href="/todos">Todos</Link>
          </li>

          {isAuthenticated ? (
            <li className={css.navigation__element}>
              <p>{user?.email}</p>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li className={css.navigation__element}>
                <Link href="/login">Login</Link>
              </li>
              <li className={css.navigation__element}>
                <Link href="/registration">Registration</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
