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
            <Link href="/about">About</Link>
          </li>
          <li className={css.navigation__element}>
            <Link href="/control-panel">Control Panel</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
