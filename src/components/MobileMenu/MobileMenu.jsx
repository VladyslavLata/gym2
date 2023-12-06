import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import { navData } from "../../consts/consts";
import { NavLink } from "../NavLink/NavLink";
import { BtnIcon } from "../BtnIcon/BtnIcon";
import CloseIcon from "/public/close.svg";

import styles from "./MobileMenu.module.css";

export const MobileMenu = ({ showMobileMenu, setshowMobileMenu }) => {
  const { pathname } = useRouter();

  const handleMediaQueryChange = (matches) => {
    if (matches) {
      if (!showMobileMenu) {
        return;
      }
      setshowMobileMenu(false);
    }
  };

  useMediaQuery({ minWidth: 768 }, undefined, handleMediaQueryChange);

  return (
    <div
      className={`${styles.menu} ${
        showMobileMenu ? styles.openMobileMenu : ""
      }`}
    >
      <BtnIcon svg={CloseIcon} onClick={() => setshowMobileMenu(false)} />
      <nav role="navigation">
        <ul>
          {navData.map(({ title, path }) => (
            <NavLink
              key={title}
              title={title}
              path={path}
              pathname={pathname}
              showMobileMenu={showMobileMenu}
              togleShowMobileMenu={setshowMobileMenu}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
