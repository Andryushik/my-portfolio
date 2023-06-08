import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="px-4 py-4 mt-8w-full mx-auto flex items-center justify-between md:px-6 lg:px-12 xl:px-24">
      {/* COPYRIGHT */}
      <div className="w-1/2">
        <p className="text-xs md:text-sm text-gray-500">
          &copy; 2023 Andrei Popov Website. All rights reserved.
          {/* TODO: add website name */}
        </p>
      </div>

      {/* SOCIAL ICONS */}
      <div className="text-2xl flex justify-center gap-6 text-text-head">
        <a
          target="_blank"
          href="https://github.com/Andryushik"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/andrei-popov-g/"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          target="_blank"
          href="mailto:a.g.popov@hotmaiil.com"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
      </div>
    </footer>
  );
}
