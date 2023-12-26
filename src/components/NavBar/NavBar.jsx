import Link from "next/link";
import { useRouter } from "next/router";
import MediaQuery from "react-responsive";

import { useIsRendered } from "../../hooks/useIsRendered";
import { NavLink } from "../NavLink/NavLink";
import { navData } from "../../consts/consts";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const { isRendered } = useIsRendered();
  const { pathname } = useRouter();

  return (
    <>
      <nav className={styles.navigation} role="navigation">
        <Link href="/" className={styles.logo}>
          Good<span className={styles.logoAccent}>life</span>
        </Link>
        {isRendered && (
          <MediaQuery minWidth={768}>
            <ul className={styles.navlist}>
              {navData.map(({ title, path }) => (
                <NavLink
                  key={title}
                  path={path}
                  pathname={pathname}
                  title={title}
                />
              ))}
            </ul>
          </MediaQuery>
        )}
      </nav>
    </>
  );
};
