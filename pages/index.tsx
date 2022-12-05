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
