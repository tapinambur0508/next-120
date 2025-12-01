import Link from "next/link";

import css from "./Header.module.css";

function Header() {
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
