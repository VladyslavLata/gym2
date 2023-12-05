import "../styles/globals.css";
import { poppins } from "../src/fonts/fonts";
import { Layout } from "../src/components/Layout/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
