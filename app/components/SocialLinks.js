import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SocialLinks({
  sizes = "text-3xl md:text-5xl py-3 md:py-5 gap-10",
}) {
  return (
    <div
      className={`${sizes} flex justify-center w-fit text-text-head drop-shadow-lg hover:drop-shadow-xl`}
    >
      <a
        href="https://github.com/Andryushik"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="To see my GitHub page"
      >
        <AiFillGithub className="hover:scale-125 hover:animate-pulse duration-500" />
      </a>
      <a
        href="https://www.linkedin.com/in/andrei-popov-g/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="To see my LinkedIn profile"
      >
        <AiFillLinkedin className="hover:scale-125 hover:animate-pulse duration-500" />
      </a>
    </div>
  );
}
