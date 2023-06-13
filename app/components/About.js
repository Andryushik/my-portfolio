import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import design from "../../public/design.png";
import database from "../../public/database.png";
import computer from "../../public/computer.png";
import SocialLinks from "./SocialLinks";
import Devicons from "./Devicons";

export default function About() {
  return (
    <div className="flex items-center md:justify-between h-fit md:h-screen flex-col md:flex-row px-7 md:px-16 lg:px-28 xl:px-40">
      <div className=" w-screen md:w-2/5 h-fit px-7 py-10">
        <h3 className="text-2xl md:text-3xl text-text-head py-3">
          About & Skills
        </h3>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          Recently relocated to the Netherlands, I am highly motivated to
          kickstart my career as a Web Developer. Having graduated from
          <a
            href="https://www.hackyourfuture.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-teal-500"> HackYourFuture</span>
          </a>
          , I am eager to apply my skills and passion to the field of web
          development.
        </p>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          With international experience in customer service and sales, I am
          dedicated to delivering exceptional user experiences. My genuine
          enthusiasm for technology and knack for creating innovative solutions
          drive me in my web development journey.
        </p>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          I am detail-oriented and thrive in collaborative team environments. If
          you&apos;re interested in discussing opportunities or collaborating on
          projects, please feel free to reach out.
        </p>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          Outside of work, I indulge my passion for smart home technology and 3D
          printing. I am ready to contribute my expertise to dynamic web
          development projects.
        </p>
      </div>

      <Devicons />
    </div>
  );
}
