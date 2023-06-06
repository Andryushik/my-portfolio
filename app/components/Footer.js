import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-slate-200 bg-opacity-20 dark:bg-slate-900 dark:bg-opacity-20 px-4 py-6 mt-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* COPYRIGHT */}
        <div>
          <p className="text-gray-500">
            &copy; 2023 Your Website. All rights reserved.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="text-2xl flex justify-center gap-6 text-text-head">
          <Link href="#">
            <AiOutlineGithub />
          </Link>
          <Link href="#">
            <AiOutlineLinkedin />
          </Link>
          <Link href="#">
            <AiOutlineMail />
          </Link>
        </div>
      </div>
    </footer>
  );
}
