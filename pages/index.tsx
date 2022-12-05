import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { About, Header, Sidebar } from "../components";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Portfolio from "../components/Projects";
import Skills from "../components/Skills";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      <Head>
        <title>jethroau.com</title>
        <meta
          name="description"
          content="This is the personal website of Jethro Au, a professional software developer."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      {width && width < 1024 && <Sidebar />}
      <main>
        {/* home banner */}
        <Banner />
        {/* about */}
        <About />
        {/* skills */}
        <Skills />
        {/* experience*/}
        <Experience />
        {/* portfolio*/}
        <Portfolio />
        {/* contact*/}
        <Contact />

        <ToastContainer />
      </main>
    </div>
  );
};
// [FIXME] AGADF
export default Home;
