import Image from "next/image";
import web1 from "../../public/web1.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

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
        <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
          <div className="group-hover:bg-gradient-to-t from-black w-full h-full absolute z-40 transition-all duration-300"></div>
          <Image
            className="group-hover:scale-125 transition-all duration-500"
            src={web1}
            alt="" // TODO: add alts here
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="text-xl text-slate-500">
              MERN Stack Social Web App
            </span>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50">
            <span className="text-2xl text-text-head">MY DIARY</span>
          </div>
        </div>

        <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
          <div className="group-hover:bg-gradient-to-t from-black w-full h-full absolute z-40 transition-all duration-300"></div>
          <Image
            className="group-hover:scale-125 transition-all duration-500"
            src={web4}
            alt=""
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="text-xl text-slate-500">
              MERN Stack Social Web App
            </span>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50">
            <span className="text-2xl text-text-head">MY DIARY</span>
          </div>
        </div>

        <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
          <div className="group-hover:bg-gradient-to-t from-black w-full h-full absolute z-40 transition-all duration-300"></div>
          <Image
            className="group-hover:scale-125 transition-all duration-500"
            src={web5}
            alt=""
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="text-xl text-slate-500">
              MERN Stack Social Web App
            </span>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50">
            <span className="text-2xl text-text-head">MY DIARY</span>
          </div>
        </div>

        <div className="group relative overflow-hidden shadow-xl md:shadow-2xl dark:shadow-slate-700 rounded-xl basis-1/3 flex-1">
          <div className="group-hover:bg-gradient-to-t from-black w-full h-full absolute z-40 transition-all duration-300"></div>
          <Image
            className="group-hover:scale-125 transition-all duration-500"
            src={web6}
            alt=""
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="text-xl text-slate-500">
              MERN Stack Social Web App
            </span>
          </div>
          <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50">
            <span className="text-2xl text-text-head">MY DIARY</span>
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
