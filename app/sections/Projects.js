import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    liveUrl: "https://mydiary.andrei-popov.me",
    technologies: ["HTML", "CSS", "ReactJS", "NodeJS", "MongoDB"],
    description: "MERN Stack social application",
    title: "MY DIARY",
  },
  {
    imgSource: radio,
    blurSource: "../../public/radio-s.png",
    sourceUrl: "https://github.com/Andryushik/World-radios-APP",
    liveUrl: "https://radio.andrei-popov.me",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJS", "API"],
    description: "Web radio Vanilla JavaScript application",
    title: "WORLD WEB RADIO",
  },
  {
    imgSource: quiz,
    blurSource: "../../public/quiz-s.png",
    sourceUrl: "https://github.com/Andryushik/browser-quiz-project",
    liveUrl: "https://quizz-app-andryushik.netlify.app",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "JavaScript funny quiz web application",
    title: "QUIZ APP",
  },
  {
    imgSource: chat,
    blurSource: "../../public/chat-s.png",
    sourceUrl: "https://github.com/Andryushik/chat_app_react",
    liveUrl: "https://chat-app-blah-blah.netlify.app",
    technologies: ["ReactJS", "MUI", "NodeJS", "Firebase"],
    description: "React & Firebase online chat web application",
    title: "CHAT APP",
  },
];

export default function Projects() {
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0.9, 0.94], [1, 0]);

  return (
    <section ref={projectsRef} id="projects">
      <div className="relative py-14 md:py-24 px-7 md:px-16 max-w-7xl mx-auto">
        <motion.div className="sticky top-14 md:top-24" style={{ opacity }}>
          <h3 className="text-2xl md:text-3xl text-text-head py-1 drop-shadow-md">
            Projects
          </h3>
        </motion.div>

        <div className="mx-auto py-12 max-w-lg lg:max-w-2xl xl:max-w-4xl">
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

        <div className="pt-14">
          <p className="text-sm md:text-base lg:pt-20 leading-8 text-gray-800 dark:text-gray-200">
            As a junior web developer, I have endeavored to utilize various
            approaches in each of my projects to enhance my skills and gain
            diverse experience. This has enabled me to become proficient in
            multiple frameworks and technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
