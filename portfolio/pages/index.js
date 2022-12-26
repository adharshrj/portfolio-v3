import Head from "next/head";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adharsh RJ</title>
        <meta name="description" content="Portfolio of Adharsh RJ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/bg.jpg')`,
        }}
      >
        <HeroSection />
      </div>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer />
    </div>
  );
}
