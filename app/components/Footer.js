import Link from "next/link";
import { BsArrowUpCircleFill } from "react-icons/bs";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="py-7 mt-8w-full mx-auto flex items-center justify-between px-7 md:px-16 lg:px-28 xl:px-40">
      {/* COPYRIGHT */}
      <div className="">
        <p className="text-xs md:text-sm text-text-head">
          &copy; 2023 andrei-popov.com
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
