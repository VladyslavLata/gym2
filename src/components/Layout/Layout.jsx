import { useRouter } from "next/router";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <div className={pathname === "/about" ? styles.wrappApp : ""}>
        <Header />
        <main
          className={pathname === "/about" ? styles.mainAbout : styles.main}
          role="main"
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
