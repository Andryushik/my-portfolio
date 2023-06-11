import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import Devicons from "./Devicons";
import avatar from "../../public/avatar.png";

export default function HomeIntro() {
  return (
    <>
      <div className="text-center px-5 md:px-10 py-5 md:py-12 md:mt-20">
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-teal-500 font-medium md:text-7xl">
          Andrei Popov
        </h1>
        <h2 className="text-2xl py-2 md:py-4 md:text-4xl">
          Full-Stack Web Developer
        </h2>

        <div className="flex justify-center text-4xl text-text-head py-3 md:py-10 gap-6 md:gap-16">
          <a
            href="https://github.com/Andryushik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="hover:scale-125 hover:animate-pulse duration-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrei-popov-g/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="hover:scale-125 hover:animate-pulse duration-500" />
          </a>
          <a
            target="_blank"
            href="mailto:a.g.popov@hotmaiil.com"
            rel="noopener noreferrer"
          >
            <IoDocumentText className="hover:scale-125 hover:animate-pulse duration-500" />
          </a>
        </div>

        <p className="text-sm py-1 md:py-6 leading-8 text-gray-500 md:text-xl max-w-3xl mx-auto">
          Recently graduated and filled with enthusiasm. I invite you to explore
          my portfolio, where you can find a selection of my projects that
          highlight my abilities and showcase my diverse range of work.
        </p>
      </div>

      <div className="relative mx-auto rounded-full w-72 h-72 mb-3 md:mb-5 overflow-hidden md:h-96 md:w-96">
        <Image
          src={avatar}
          alt="profile photo"
          fill
          className="object-cover"
          priority={true}
          sizes="50vw"
        />
      </div>
      <Devicons />
    </>
  );
}
