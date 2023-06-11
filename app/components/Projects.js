import Image from "next/image";
import mydiary from "../../public/mydiary.gif";
import chat from "../../public/chat.gif";
import radio from "../../public/radio.gif";
import quiz from "../../public/quiz.gif";

export default function Projects() {
  return (
    <>
      <div>
        <h3 className="text-2xl md:text-3xl text-text-head py-1">Projects</h3>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          As a junior web developer, I have endeavored to utilize various
          approaches in each of my projects to enhance my skills and gain
          diverse experience. This has enabled me to become proficient in
          multiple frameworks and technologies.
        </p>
      </div>

      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {/* TODO: links to live demo and source code */}
        {/* <a
          target="_blank"
          href="https://c41-team-two.herokuapp.com/"
          rel="noopener noreferrer"
        ></a> */}
        <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
          <div className="group-hover:bg-gradient-to-t from-black w-full h-full absolute z-30 transition-all duration-300"></div>
          <Image
            className="group-hover:scale-110 transition-all duration-500"
            src={mydiary}
            placeholder="blur"
            blurDataURL={"../../public/web1.png"}
            alt="my diary app screenshot"
          />
          <div className="absolute flex gap-2 -bottom-full left-12 group-hover:bottom-36 transition-all duration-300 z-40">
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              NextJS
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              Typescript
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              Tailwind
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              NodeJS
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              MongoDB
            </div>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
            <span className="text-xl text-slate-500">
              MERN Stack Social App (graduation group project)
            </span>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-40">
            <span className="text-2xl text-text-head">MY DIARY</span>
          </div>
        </div>

        <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
          <div className="group-hover:bg-gradient-to-t from-black w-full h-full absolute z-30 transition-all duration-300"></div>
          <Image
            className="group-hover:scale-110 transition-all duration-500"
            src={chat}
            placeholder="blur"
            blurDataURL={"../../public/web1.png"}
            alt="chat app screenshot"
          />
          <div className="absolute flex gap-2 -bottom-full left-12 group-hover:bottom-36 transition-all duration-300 z-40">
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              ReactJS
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              MaterialUI
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              NodeJS
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              Firebase
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              Express
            </div>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
            <span className="text-xl text-slate-500">
              React & Firebase Chat web application
            </span>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-40">
            <span className="text-2xl text-text-head">CHAT APP</span>
          </div>
        </div>

        <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
          <div className="group-hover:bg-gradient-to-t from-black w-full h-full absolute z-30 transition-all duration-300"></div>
          <Image
            className="group-hover:scale-110 transition-all duration-500"
            src={radio}
            placeholder="blur"
            blurDataURL={"../../public/web1.png"}
            alt="radio app screenshot"
          />
          <div className="absolute flex gap-2 -bottom-full left-12 group-hover:bottom-36 transition-all duration-300 z-40">
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              HTML
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              CSS
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              JavaScript
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              NodeJS
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              Express
            </div>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
            <span className="text-xl text-slate-500">
              Web radio vanilla JavaScript application
            </span>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-40">
            <span className="text-2xl text-text-head">WEB RADIO APP</span>
          </div>
        </div>

        <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
          <div className="group-hover:bg-gradient-to-t from-black w-full h-full absolute z-30 transition-all duration-300"></div>
          <Image
            className="group-hover:scale-110 transition-all duration-500"
            src={quiz}
            placeholder="blur"
            blurDataURL={"../../public/web1.png"}
            alt="quiz web app screenshot"
          />
          <div className="absolute flex gap-2 -bottom-full left-12 group-hover:bottom-36 transition-all duration-300 z-40">
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              HTML
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              CSS
            </div>
            <div className="rounded-full py-1 px-2 bg-gray-500/80 text-base text-white">
              JavaScript
            </div>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
            <span className="text-xl text-slate-500">
              Funny quiz web application
            </span>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-40">
            <span className="text-2xl text-text-head">QUIZ APP</span>
          </div>
        </div>
      </div>

      <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
        P.S. This portfolio website has been created using Next.js and Tailwind
        CSS. With Next.js, I have been able to leverage server-side rendering
        and efficient routing, while Tailwind CSS has provided a flexible and
        utility-based approach to styling. The combination of Next.js and
        Tailwind CSS has allowed me to create a seamless and responsive user
        experience.
      </p>
    </>
  );
}
