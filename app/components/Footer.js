import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="py-7 mt-8w-full mx-auto flex items-center justify-between px-7 md:px-20 lg:px-28 xl:px-40">
      {/* COPYRIGHT */}
      <div className="">
        <p className="text-xs md:text-sm text-text-head">
          &copy; 2023 andrei-popov.com
        </p>
      </div>
      <Link className="text-2xl text-slate-400 animate-bounce" href="/">
        <BsArrowUpCircleFill />
      </Link>

      {/* SOCIAL ICONS */}
      <div className="text-2xl flex justify-center gap-6 text-text-head">
        <a
          className="hover:scale-125 ease-in-out duration-500"
          target="_blank"
          href="https://github.com/Andryushik"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a
          className="hover:scale-125 ease-in-out duration-500"
          target="_blank"
          href="https://www.linkedin.com/in/andrei-popov-g/"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          className="hover:scale-125 ease-in-out duration-500"
          target="_blank"
          href="mailto:a.g.popov@hotmail.com?subject=[Website]"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
      </div>
    </footer>
  );
}
