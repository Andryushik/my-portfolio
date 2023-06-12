import HomeIntro from "./components/HomeIntro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <main>
      <section id="home">
        <HomeIntro />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contacts />
      </section>
    </main>
  );
}
