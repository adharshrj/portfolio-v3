import Head from "next/head";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-[#282828] space-y-16">
      <Head>
        <title>Adharsh RJ</title>
        <meta name="description" content="Portfolio of Adharsh RJ" />
        <link rel="icon" href="/assets/adharsh3.png" />
      </Head>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
