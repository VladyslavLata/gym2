import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <Container currentContainer={"headerContainer"}>
        <NavBar />
      </Container>
    </header>
  );
};
