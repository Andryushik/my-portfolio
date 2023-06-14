import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
