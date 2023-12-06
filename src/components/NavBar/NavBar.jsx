import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MediaQuery from "react-responsive";

// import { BtnIcon } from "../BtnIcon/BtnIcon";
import { useIsRendered } from "../../hooks/useIsRendered";
import { NavLink } from "../NavLink/NavLink";
// import CloseIcon from "/public/close.svg";
import { navData } from "../../consts/consts";
// import MenuIcon from "/public/burgerMenu.svg";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const { isRendered } = useIsRendered();
  const { pathname } = useRouter();

  // const navData = [
  //   { title: "Home", path: "/" },
  //   { title: "About us", path: "/about" },
  // ];

  // useEffect(() => {
  //   const body = document.body;
  //   let addStyleBody = null;
  //   const togleBodyStyles = () => {
  //     const bodyStyle = body.style;
  //     if (showMobileMenu) {
  //       bodyStyle.overflow = "hidden";
  //       addStyleBody = setTimeout(() => {
  //         bodyStyle.visibility = "hidden";
  //       }, 500);
  //     } else {
  //       bodyStyle.visibility = "visible";
  //       bodyStyle.overflow = "visible";
  //     }
  //   };
  //   togleBodyStyles();
  //   return () => {
  //     clearTimeout(addStyleBody);
  //   };
  // }, [showMobileMenu]);

  // const handleMediaQueryChange = (matches) => {
  //   if (matches) {
  //     if (!showMobileMenu) {
  //       return;
  //     }
  //     setshowMobileMenu(false);
  //   }
  // };

  // useMediaQuery({ minWidth: 768 }, undefined, handleMediaQueryChange);

  // const togleShowMobileMenu = (showed) => setshowMobileMenu(showed);

  return (
    <>
      <nav className={styles.navigation} role="navigation">
        <Link href="/" className={styles.logo}>
          Good<span className={styles.logoAccent}>lyfe</span>
        </Link>
        {/* <div
          className={`${styles.linkListWrapp} ${
            showMobileMenu ? styles.openMobileMenu : ""
          }`}
        > */}
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
                // <li key={title} className={styles.linkWrapp}>
                //   <Link
                //     href={path}
                //     className={
                //       pathname === path
                //         ? `${styles.link} ${styles.active}`
                //         : styles.link
                //     }
                //     onClick={() => {
                //       if (!showMobileMenu) {
                //         return;
                //       }
                //       togleShowMobileMenu(false);
                //     }}
                //   >
                //     {title}
                //   </Link>
                // </li>
              ))}
            </ul>
          </MediaQuery>
        )}

        {/* <BtnIcon svg={CloseIcon} onClick={() => togleShowMobileMenu(false)} /> */}
        {/* </div> */}
      </nav>
      {/* <BtnIcon
        svg={MenuIcon}
        name="menu"
        onClick={() => togleShowMobileMenu(true)}
      /> */}
    </>
  );
};
