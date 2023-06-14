import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <main>
      <Intro />

      <About />

      <Projects />

      <Contacts />
    </main>
  );
}
