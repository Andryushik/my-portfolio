import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SocialLinks() {
  return (
    <div className="flex justify-center md:justify-end text-3xl md:text-5xl text-text-head py-2 md:py-4 gap-10">
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
