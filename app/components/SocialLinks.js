import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SocialLinks() {
  return (
    <div className="flex justify-center w-fit text-3xl md:text-5xl text-text-head py-3 md:py-5 gap-10 drop-shadow-lg hover:drop-shadow-xl">
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
    </div>
  );
}
