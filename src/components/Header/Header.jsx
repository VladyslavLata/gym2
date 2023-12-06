import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

import { useIsRendered } from "../../hooks/useIsRendered";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";
import { BtnIcon } from "../BtnIcon/BtnIcon";
import { MobileMenu } from "../MobileMenu/MobileMenu";

import MenuIcon from "/public/burgerMenu.svg";
import styles from "./Header.module.css";

export const Header = () => {
  const { isRendered } = useIsRendered();
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    const body = document.body;
    let addStyleBody = null;
    const togleBodyStyles = () => {
      const bodyStyle = body.style;
      if (showMobileMenu) {
        bodyStyle.overflow = "hidden";
        addStyleBody = setTimeout(() => {
          bodyStyle.visibility = "hidden";
        }, 500);
      } else {
        bodyStyle.visibility = "visible";
        bodyStyle.overflow = "visible";
      }
    };
    togleBodyStyles();
    return () => {
      clearTimeout(addStyleBody);
    };
  }, [showMobileMenu]);

  return (
    <header className={styles.header} role="banner">
      <Container currentContainer={"headerContainer"}>
        <NavBar />
        <BtnIcon
          svg={MenuIcon}
          name="menu"
          onClick={() => setshowMobileMenu(true)}
        />
      </Container>
      {isRendered && (
        <MediaQuery maxWidth={767}>
          <MobileMenu
            showMobileMenu={showMobileMenu}
            setshowMobileMenu={setshowMobileMenu}
          />
        </MediaQuery>
      )}
    </header>
  );
};
