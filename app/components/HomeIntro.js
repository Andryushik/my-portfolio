import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import Devicons from "./Devicons";
import avatar from "../../public/avatar.jpg";

export default function HomeIntro() {
  return (
    <>
      <div className="text-center  px-5 md:px-10 py-10 md:mt-10">
        <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-teal-500 font-medium md:text-7xl">
          Andrei Popov
        </h2>
        <h3 className="text-xl py-2 md:py-4 md:text-3xl">
          Full Stack Web Developer
        </h3>

        <div className="flex justify-center text-4xl text-text-head py-3 gap-6 md:gap-16">
          <a
            href="https://github.com/Andryushik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/andrei-popov-g/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            target="_blank"
            href="mailto:a.g.popov@hotmaiil.com"
            rel="noopener noreferrer"
          >
            <IoDocumentText />
          </a>
        </div>

        <p className="text-sm py-4 md:py-6 leading-8 text-gray-500 md:text-xl max-w-3xl mx-auto">
          Relocated to the Netherlands and eager to pursue a new career in IT as
          a Web Developer. Recently graduated from Hack Your Future and filled
          with enthusiasm. Possess international work experience in customer
          service and sales.
        </p>
      </div>

      <div className="relative mx-auto rounded-full w-72 h-72 m-5 overflow-hidden md:h-96 md:w-96">
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
