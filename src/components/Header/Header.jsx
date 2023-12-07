import MediaQuery from "react-responsive";

import { useIsRendered } from "../../hooks/useIsRendered";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";
import { MobileMenu } from "../MobileMenu/MobileMenu";

import styles from "./Header.module.css";

export const Header = () => {
  const { isRendered } = useIsRendered();

  return (
    <header className={styles.header} role="banner">
      <Container currentContainer={"headerContainer"}>
        <NavBar />
        {isRendered && (
          <MediaQuery maxWidth={767}>
            <MobileMenu />
          </MediaQuery>
        )}
      </Container>
    </header>
  );
};
