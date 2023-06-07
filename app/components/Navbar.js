"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import menu from "../../public/menu.png";
import cross from "../../public/cross.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ThemeSwitcher from "./ThemeSwitcher";
import deved from "../../public/dev-ed-wave.png"; // TODO: remove this and file

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-slate-200 bg-opacity-20 backdrop-blur dark:bg-slate-900  dark:bg-opacity-20 fixed w-full top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-6 lg:px-12 xl:px-24">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* SOCIAL ICONS */}
            <div className="text-4xl flex justify-center gap-4 text-text-head">
              <Link href="#home">
                <div className="w-16 md:w-36 flex items-center">
                  <Image
                    src={deved}
                    alt="profile avatar"
                    className="object-cover rounded-full"
                    width={50}
                    height={50}
                  />
                  <span className="hidden md:block text-xxs py-1 text-black dark:text-white">
                    Andrei Popov andrei.popov.com
                  </span>
                </div>
              </Link>

              <a
                target="_blank"
                href="https://github.com/Andryushik"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/andrei-popov-g/"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <div
                className="p-2 text-gray-700 rounded-md border border-cyan-600 border-opacity-0 focus:border-opacity-80"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src={cross}
                    width={30}
                    height={30}
                    alt="close menu icon"
                  />
                ) : (
                  <Image
                    src={menu}
                    width={30}
                    height={30}
                    alt="menu icon"
                    className="focus:border-none active:border-none"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MENU */}
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block p-12 md:p-0" : "hidden"
            }`}
          >
            <ul className="h-auto items-center justify-center flex flex-col md:flex-row">
              <li className="text-xl w-1/3 mb-1 md:mb-0 py-3 px-4 lg:px-10 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500">
                <Link href="#home" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>

              <li className="text-xl w-1/3 mb-1 md:mb-0 py-3 px-4 lg:px-10 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500">
                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>

              <li className="text-xl w-1/3 mb-1 md:mb-0 py-3 px-4 lg:px-10 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500">
                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>

              <li className="text-xl w-1/3 mb-1 md:mb-0 py-3 px-4 lg:px-10 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500">
                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>

              {/* THEME SWITCHER */}
              <li className="text-xl py-4 flex justify-center items-center ml-0 md:ml-12 lg:ml-20 xl:ml-32">
                <div onClick={() => setNavbar(!navbar)}>
                  <ThemeSwitcher onClick={() => setNavbar(!navbar)} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
