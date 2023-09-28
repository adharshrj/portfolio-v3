import Head from "next/head";
import AboutMe from "./components/AboutMe";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Backtotop from "../helpers/backtotop";

export default function Home() {
  return (
    <div className="bg-[#1F2833] space-y-16">
      <Head>
        <title>Adharsh RJ</title>
        <meta name="description" content="Portfolio of Adharsh RJ" />
        <link rel="icon" href="/assets/adharsh3.png" />
      </Head>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Backtotop />
      <Footer />
    </div>
  );
}
