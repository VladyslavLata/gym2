import Link from "next/link";

import styles from "./NavLink.module.css";

export const NavLink = ({
  pathname,
  path,
  title,
  showMobileMenu,
  togleShowMobileMenu,
}) => {
  return (
    <li className={styles.linkWrapp}>
      <Link
        href={path}
        className={
          pathname === path ? `${styles.link} ${styles.active}` : styles.link
        }
        onClick={() => {
          if (
            !showMobileMenu ||
            showMobileMenu === undefined ||
            !togleShowMobileMenu
          ) {
            return;
          }
          togleShowMobileMenu(false);
        }}
      >
        {title}
      </Link>
    </li>
  );
};
