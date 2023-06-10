"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import menu from "../../public/menu.png";
import cross from "../../public/cross.png";
import ThemeSwitcher from "./ThemeSwitcher";
import logoLight from "../../public/logo-light.png";
import logoDark from "../../public/logo-dark.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className="bg-slate-200 bg-opacity-20 backdrop-blur dark:bg-slate-900 dark:bg-opacity-20 fixed w-full top-0 left-0 right-0 z-10">
      <div className="justify-between mx-auto md:items-center md:flex md:h-20 px-7 md:px-20 lg:px-40">
        <div>
          <div className="flex items-center justify-between md:block">
            {/* LOGO */}
            <Link href="/">
              <div className="w-40 md:w-auto flex items-center">
                <Image
                  src={theme === "light" ? logoLight : logoDark}
                  alt="logo"
                  className="object-cover"
                  width={230}
                  height={50}
                />
              </div>
            </Link>

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
              <li className="text-xl w-1/3 mb-1 md:mb-0 py-3 px-3 lg:px-10 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>

              <li className="text-xl w-1/3 mb-1 md:mb-0 py-3 px-3 lg:px-10 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500">
                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>

              <li className="text-xl w-1/3 mb-1 md:mb-0 py-3 px-3 lg:px-10 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500">
                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>

              <li className="text-xl w-1/3 mb-1 md:mb-0 py-3 px-3 lg:px-10 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500">
                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>

              {/* THEME SWITCHER */}
              <li className="text-xl py-2 flex justify-center items-center ml-0 md:ml-2 lg:ml-8 xl:ml-16">
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
