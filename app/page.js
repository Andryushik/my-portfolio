import HomeIntro from "./components/HomeIntro";
import AboutSkills from "./components/AboutSkills";
import Projects from "./Projects";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <main className="px-10 md:px-20 lg:px-40">
      <section id="home" className="min-h-screen">
        <HomeIntro />
      </section>

      <section id="about">
        <AboutSkills />
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
