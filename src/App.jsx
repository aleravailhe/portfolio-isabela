import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
