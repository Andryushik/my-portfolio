import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import diary from "../../public/diary.png";
import chat from "../../public/chat.png";
import radio from "../../public/radio.png";
import quiz from "../../public/quiz.png";

const projects = [
  {
    imgSource: diary,
    blurSource: "../../public/diary-s.png",
    sourceUrl: "https://github.com/Andryushik/MyDiary",
    liveUrl: "https://c41-team-two.herokuapp.com/",
    technologies: ["HTML", "CSS", "ReactJS", "NodeJS", "MongoDB"],
    description: "MERN Stack social application",
    title: "MY DIARY",
  },
  {
    imgSource: radio,
    blurSource: "../../public/radio-s.png",
    sourceUrl: "https://github.com/Andryushik/World-radios-APP",
    liveUrl: "https://worldradioswebapp.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJS", "API"],
    description: "Web radio Vanilla JavaScript application",
    title: "WORLD WEB RADIO",
  },
  {
    imgSource: chat,
    blurSource: "../../public/chat-s.png",
    sourceUrl: "https://github.com/Andryushik/chat_app_react",
    liveUrl: "https://chat-app-blah-blah.netlify.app/",
    technologies: ["ReactJS", "MUI", "NodeJS", "Firebase"],
    description: "React & Firebase online chat web application",
    title: "CHAT APP",
  },
  {
    imgSource: quiz,
    blurSource: "../../public/quiz-s.png",
    sourceUrl: "https://github.com/Andryushik/browser-quiz-project",
    liveUrl: "https://quizz-app-andryushik.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "JavaScript funny quiz web application",
    title: "QUIZ APP",
  },
];

export default function Projects() {
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(scrollYProgress.current));
  }, []);

  return (
    <section ref={projectsRef} id="projects">
      <div className="py-14 md:py-24 px-7 md:px-16 lg:px-28 xl:px-40">
        <div className="sticky top-14 md:top-24">
          <h3 className="text-2xl md:text-3xl text-text-head py-1 drop-shadow-md">
            Projects
          </h3>
          <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            As a junior web developer, I have endeavored to utilize various
            approaches in each of my projects to enhance my skills and gain
            diverse experience. This has enabled me to become proficient in
            multiple frameworks and technologies.
          </p>
        </div>

        <div className="mx-auto max-w-screen-md">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <ProjectCard
                key={i}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          P.S. This portfolio website has been created using Next.js and
          Tailwind CSS. The code source is available on GitHub
          <a
            href="https://github.com/Andryushik/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="text-teal-500">here</span>.
          </a>
        </p>
      </div>
    </section>
  );
}
