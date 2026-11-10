import { BsArrowUpCircleFill } from "react-icons/bs";
import SocialLinks from "./SocialLinks";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="py-7 mt-8 w-full mx-auto flex items-center justify-between px-7 md:px-16 max-w-7xl">
      {/* COPYRIGHT */}
      <p className="text-xs md:text-sm text-text-head">
        &copy; <CurrentYear initialYear={new Date().getFullYear()} /> Andrei Popov
      </p>

      {/* TO THE TOP */}
      <a
        className="text-2xl text-slate-400 motion-safe:animate-bounce"
        href="#hero"
        aria-label="Go to the top of the page"
      >
        <BsArrowUpCircleFill />
      </a>

      {/* SOCIAL ICONS */}
      <SocialLinks sizes="text-2xl gap-6" />
    </footer>
  );
}
