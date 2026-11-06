import Link from "next/link";
import { BsArrowUpCircleFill } from "react-icons/bs";
import SocialLinks from "./SocialLinks";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="py-7 mt-8 w-full mx-auto flex items-center justify-between px-7 md:px-16 max-w-7xl">
      {/* COPYRIGHT */}
      <div className="">
        <p className="text-xs md:text-sm text-text-head">
          &copy; <CurrentYear initialYear={new Date().getFullYear()} /> Andrei Popov
        </p>
      </div>

      {/* TO THE TOP */}
      <Link
        className="text-2xl text-slate-400 animate-bounce"
        href="/"
        aria-label="Go to the top of the page"
      >
        <BsArrowUpCircleFill />
      </Link>

      {/* SOCIAL ICONS */}
      <SocialLinks sizes="text-2xl gap-6" />
    </footer>
  );
}
