import { useState } from "react";
import Header from "./components/Header/Header";
import ShowreelModal from "./components/ShowreelModal/ShowreelModal";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  return (
    <>
      <Header onOpenShowreel={() => setIsShowreelOpen(true)} />
      <main>
        <Hero onOpenShowreel={() => setIsShowreelOpen(true)} />
        <Marquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      {isShowreelOpen && <ShowreelModal onClose={() => setIsShowreelOpen(false)} />}
    </>
  );
}
