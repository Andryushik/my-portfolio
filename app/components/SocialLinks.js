import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";

export default function SocialLinks() {
  return (
    <div className="flex justify-center text-3xl md:text-5xl text-text-head py-2 md:py-8 gap-10 md:gap-20">
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
      <a target="_blank" href="#" rel="noopener noreferrer">
        <IoDocumentText className="hover:scale-125 hover:animate-pulse duration-500" />
      </a>
    </div>
  );
}
