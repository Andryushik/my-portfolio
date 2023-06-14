import Image from "next/image";
import diary from "../../public/diary.png";
import chat from "../../public/chat.png";
import radio from "../../public/radio.png";
import quiz from "../../public/quiz.png";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects">
      <div className="pt-14 md:pt-24 px-7 md:px-16 lg:px-28 xl:px-40">
        <div>
          <h3 className="text-2xl md:text-3xl text-text-head py-1">Projects</h3>
          <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            As a junior web developer, I have endeavored to utilize various
            approaches in each of my projects to enhance my skills and gain
            diverse experience. This has enabled me to become proficient in
            multiple frameworks and technologies.
          </p>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-xs md:text-base lg:text-xs xl:text-base">
          {/* DIARY */}
          <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
            <div className="group-hover:bg-gradient-to-t from-white dark:from-black w-full h-full absolute z-30 transition-all duration-300"></div>
            <Image
              className="object-cover group-hover:scale-110 transition-all duration-500"
              src={diary}
              placeholder="blur"
              blurDataURL={"../../public/diary-s.png"}
              alt="my diary app screenshot"
            />

            <div className="absolute flex gap-2 right-6 group-hover:top-6 z-40">
              <form
                action="https://github.com/Andryushik/MyDiary"
                method="get"
                target="_blank"
              >
                <button
                  className="rounded py-1 px-2 w:16 md:w-20 lg:w-16 bg-slate-500 opacity-70 hover:opacity-90 text-white"
                  type="submit"
                >
                  Source
                </button>
              </form>
              <form
                action="https://c41-team-two.herokuapp.com/"
                method="get"
                target="_blank"
              >
                <button
                  className="rounded py-1 px-2 w:16 md:w-20 lg:w-16 bg-gray-500 opacity-70 hover:opacity-90 text-white"
                  type="submit"
                >
                  Live
                </button>
              </form>
            </div>

            <div className="absolute flex gap-1 xl:gap-2 -bottom-full left-6 group-hover:bottom-24 transition-all duration-300 z-40">
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                HTML
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                CSS
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                ReactJS
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                NodeJS
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                MongoDB
              </div>
            </div>
            <div className="md:text-base xl:text-lg absolute -bottom-full left-6 group-hover:bottom-16 transition-all duration-500 z-40">
              <span className="text-sm md:text-base text-slate-500">
                MERN Stack social application
              </span>
            </div>
            <div className="absolute -bottom-full left-6 group-hover:bottom-6 transition-all duration-700 z-40">
              <span className="text-xl xl:text-2xl text-text-head">
                MY DIARY
              </span>
            </div>
          </div>

          {/* CHAT */}
          <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
            <div className="group-hover:bg-gradient-to-t from-white dark:from-black w-full h-full absolute z-30 transition-all duration-300"></div>
            <Image
              className="object-cover group-hover:scale-110 transition-all duration-500"
              src={chat}
              placeholder="blur"
              blurDataURL={"../../public/chat-s.png"}
              alt="chat app screenshot"
            />

            <div className="absolute flex gap-2 right-6 group-hover:top-6 z-40">
              <form
                action="https://github.com/Andryushik/chat_app_react"
                method="get"
                target="_blank"
              >
                <button
                  className="rounded py-1 px-2 w:16 md:w-20 lg:w-16 bg-slate-500 opacity-70 hover:opacity-90 text-white"
                  type="submit"
                >
                  Source
                </button>
              </form>
              <form
                action="https://chat-app-blah-blah.netlify.app/"
                method="get"
                target="_blank"
              >
                <button
                  className="rounded py-1 px-2 w:16 md:w-20 lg:w-16 bg-gray-500 opacity-70 hover:opacity-90 text-white"
                  type="submit"
                >
                  Live
                </button>
              </form>
            </div>

            <div className="absolute flex gap-2 md:gap-2 lg:gap-1 xl:gap-2 -bottom-full left-6 group-hover:bottom-24 transition-all duration-300 z-40">
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                ReactJS
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                MUI
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                NodeJS
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                Firebase
              </div>
            </div>
            <div className="md:text-base xl:text-lg absolute -bottom-full left-6 group-hover:bottom-16 transition-all duration-500 z-40">
              <span className="text-sm md:text-base text-slate-500">
                React & Firebase online chat web application
              </span>
            </div>
            <div className="absolute -bottom-full left-6 group-hover:bottom-6 transition-all duration-700 z-40">
              <span className="text-xl xl:text-2xl text-text-head">
                CHAT APP
              </span>
            </div>
          </div>

          {/* RADIO */}
          <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
            <div className="group-hover:bg-gradient-to-t from-white dark:from-black w-full h-full absolute z-30 transition-all duration-300"></div>
            <Image
              className="object-cover group-hover:scale-110 transition-all duration-500"
              src={radio}
              placeholder="blur"
              blurDataURL={"../../public/radio-s.png"}
              alt="world web radio app screenshot"
            />

            <div className="absolute flex gap-2 right-6 group-hover:top-6 z-40">
              <form
                action="https://github.com/Andryushik/World-radios-APP"
                method="get"
                target="_blank"
              >
                <button
                  className="rounded py-1 px-2 w:16 md:w-20 lg:w-16 bg-slate-500 opacity-70 hover:opacity-90 text-white"
                  type="submit"
                >
                  Source
                </button>
              </form>
              <form
                action="https://worldradioswebapp.netlify.app/"
                method="get"
                target="_blank"
              >
                <button
                  className="rounded py-1 px-2 w:16 md:w-20 lg:w-16 bg-gray-500 opacity-70 hover:opacity-90 text-white"
                  type="submit"
                >
                  Live
                </button>
              </form>
            </div>

            <div className="absolute flex gap-2 md:gap-2 lg:gap-1 xl:gap-2 -bottom-full left-6 group-hover:bottom-24 transition-all duration-300 z-40">
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                HTML
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                CSS
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                JavaScript
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                NodeJS
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                API
              </div>
            </div>
            <div className="md:text-base xl:text-lg absolute -bottom-full left-6 group-hover:bottom-16 transition-all duration-500 z-40">
              <span className="text-sm md:text-base text-slate-500">
                Web radio Vanilla JavaScript application
              </span>
            </div>
            <div className="absolute -bottom-full left-6 group-hover:bottom-6 transition-all duration-700 z-40">
              <span className="text-xl xl:text-2xl text-text-head">
                WORLD WEB RADIO
              </span>
            </div>
          </div>

          {/* QUIZ */}
          <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
            <div className="group-hover:bg-gradient-to-t from-white dark:from-black w-full h-full absolute z-30 transition-all duration-300"></div>
            <Image
              className="object-cover group-hover:scale-110 transition-all duration-500"
              src={quiz}
              placeholder="blur"
              blurDataURL={"../../public/quiz-s.png"}
              alt="quiz web app screenshot"
            />

            <div className="absolute flex gap-2 right-6 group-hover:top-6 z-40">
              <form
                action="https://github.com/Andryushik/browser-quiz-project"
                method="get"
                target="_blank"
              >
                <button
                  className="rounded py-1 px-2 w:16 md:w-20 lg:w-16 bg-slate-500 opacity-70 hover:opacity-90 text-white"
                  type="submit"
                >
                  Source
                </button>
              </form>
              <form
                action="https://quizz-app-andryushik.netlify.app/"
                method="get"
                target="_blank"
              >
                <button
                  className="rounded py-1 px-2 w:16 md:w-20 lg:w-16 bg-gray-500 opacity-70 hover:opacity-90 text-white"
                  type="submit"
                >
                  Live
                </button>
              </form>
            </div>

            <div className="absolute flex gap-2 md:gap-2 lg:gap-1 xl:gap-2 -bottom-full left-6 group-hover:bottom-24 transition-all duration-300 z-40">
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                HTML
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                CSS
              </div>
              <div className="rounded-full py-1 px-2 bg-gray-500/80 text-white">
                JavaScript
              </div>
            </div>
            <div className="md:text-base xl:text-lg absolute -bottom-full left-6 group-hover:bottom-16 transition-all duration-500 z-40">
              <span className="text-sm md:text-base text-slate-500">
                JavaScript funny quiz web application
              </span>
            </div>
            <div className="absolute -bottom-full left-6 group-hover:bottom-6 transition-all duration-700 z-40">
              <span className="text-xl xl:text-2xl text-text-head">
                QUIZ APP
              </span>
            </div>
          </div>
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
