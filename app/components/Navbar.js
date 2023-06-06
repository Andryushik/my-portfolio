"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import menu from "../../public/menu.png";
import cross from "../../public/cross.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-slate-200 bg-opacity-20 backdrop-blur dark:bg-slate-900  dark:bg-opacity-20 fixed w-full top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-6 lg:px-12 xl:px-24">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* SOCIAL ICONS */}
            <div className="text-4xl flex justify-center gap-6 text-text-head">
              <Link href="#">
                <AiFillGithub />
              </Link>
              <Link href="#">
                <AiFillLinkedin />
              </Link>
              <Link href="#">
                <IoDocumentText />
              </Link>
            </div>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
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
              </button>
            </div>
          </div>
        </div>

        {/* MENU */}
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex">
              <li className="text-xl py-2 px-4 lg:px-10 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#home" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>

              <li className="text-xl py-2 px-4 lg:px-10 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>

              <li className="text-xl py-2 px-4 lg:px-10 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>

              <li className="text-xl py-2 px-4 lg:px-10 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>

              {/* THEME SWITCHER */}
              <li className="text-xl py-2 flex justify-center items-center ml-0 md:ml-12 lg:ml-20 xl:ml-32">
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
