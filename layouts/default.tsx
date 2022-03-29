import type { NextComponentType } from "next";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import Footer from "../components/footer";

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 16px;
          }
          body {
            /* daily ui theme */
            /* background: #1864ff; */
            /* color: #fff; */
            /* default theme */
            background: #efefef;
            color: #333;
          }
          img {
            pointer-events: none;
          }
        `}
      />
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.lg"} my={7}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
