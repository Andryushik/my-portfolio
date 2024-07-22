"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import logoLight from "../../public/logo-light.png";
import logoDark from "../../public/logo-dark.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { theme, setTheme } = useTheme();
  const menu = ["About", "Projects", "Contact"];
  const menuRef = useRef();
  const hamburgerRef = useRef();
  const { scrollYProgress } = useScroll();
  const progressBar = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.3, 0.85, 1],
    [0, 0.3, 0.4, 0.65, 1]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Set initial theme based on system preference
    if (theme === "system") {
      setTheme(mediaQuery.matches ? "dark" : "light");
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme, setTheme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, hamburgerRef]);

  return (
    <nav className="fixed backdrop-blur-lg w-full top-0 left-0 right-0 z-50">
      <motion.div
        className="justify-between mx-auto md:items-center md:flex md:h-20 px-7 md:px-16 lg:px-28 xl:px-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <div className="flex items-center justify-between md:block">
            {/* LOGO */}
            <Link href="/">
              <Image
                className="object-contain h-14 w-40 md:w-56 hover:scale-105 ease-in duration-500"
                src={theme === "light" ? logoLight : logoDark}
                alt="logo"
                width={220}
                height={50}
              />
            </Link>

            {/* BURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <div
                ref={hamburgerRef}
                className="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer bg-text-head"
                onClick={() => setNavbar(!navbar)}
              >
                <div className={`burger ${navbar && "burgerActive"}`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* MENU */}
        <motion.div ref={menuRef}>
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block p-12 md:p-0" : "hidden"
            }`}
          >
            <ul className="h-auto items-center justify-center flex flex-col md:flex-row">
              {menu.map((menuItem, i) => (
                <li
                  key={i}
                  className="text-xl md:text-lg lg:text-xl mb-1 md:mb-0 py-3 px-5 lg:px-8 xl:px-12 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500"
                >
                  <Link
                    href={`#${menuItem.toLowerCase()}`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {menuItem}
                  </Link>
                </li>
              ))}

              {/* THEME SWITCHER */}
              <li
                className="py-3 flex justify-center items-center ml-0 mt-3 md:mt-0 lg:ml-8 xl:ml-12"
                onClick={() => setTimeout(() => setNavbar(!navbar), 300)}
              >
                <ThemeSwitcher />
              </li>
            </ul>

            <div className="relative left-5 w-3/4 hidden md:block">
              <motion.div
                className="absolute h-1 right-0 top-0 left-0 bg-text-head"
                style={{
                  scaleX: progressBar,
                  transformOrigin: "0%",
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
