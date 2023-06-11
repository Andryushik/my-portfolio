import HomeIntro from "./components/HomeIntro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <main className="px-7 md:px-20 lg:px-28 xl:px-40">
      <section id="home" className="min-h-screen">
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
