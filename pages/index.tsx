import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer, Header, Sidebar } from "../components";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Portfolio from "../components/Projects";
import Skills from "../components/Skills";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home: NextPage = () => {
  const { width } = useWindowDimensions();
  console.log(width);
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
        {/* about*/}
        <About />
        {/* [FIXME] FOR TESTING PURPOSE. REMOVE LATER */}
        {/* <GradientTest /> */}
        {/* skills */}
        <Skills />
        {/* experience*/}
        <Experience />
        {/* portfolio*/}
        <Portfolio />
        {/* contact*/}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
// [FIXME] AGADF
export default Home;
