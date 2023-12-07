import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import { navData } from "../../consts/consts";
import { NavLink } from "../NavLink/NavLink";
import { BtnIcon } from "../BtnIcon/BtnIcon";
import CloseIcon from "/public/close.svg";
import MenuIcon from "/public/burgerMenu.svg";

import styles from "./MobileMenu.module.css";

export const MobileMenu = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const body = document.body;
    let addStyleBody = null;

    const togleBodyStyles = (param) => {
      const bodyStyle = body.style;
      if (param) {
        bodyStyle.overflow = "hidden";
        addStyleBody = setTimeout(() => {
          bodyStyle.visibility = "hidden";
        }, 500);
      } else {
        bodyStyle.visibility = "visible";
        bodyStyle.overflow = "visible";
      }
    };

    togleBodyStyles(showMobileMenu);

    return () => {
      if (showMobileMenu) {
        togleBodyStyles(false);
      }
      clearTimeout(addStyleBody);
    };
  }, [showMobileMenu]);

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
    <>
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
      <BtnIcon
        svg={MenuIcon}
        name="menu"
        onClick={() => setshowMobileMenu(true)}
      />
    </>
  );
};
