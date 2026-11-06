"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Electrolize } from "next/font/google";
import { motion, useScroll, useTransform } from "motion/react";
import ThemeSwitcher from "./ThemeSwitcher";
import logoLight from "../../public/logo-light.png";
import logoDark from "../../public/logo-dark.png";

const electrolize = Electrolize({ weight: "400", subsets: ["latin"] });

const TAGLINE = "FULL-STACK DEVELOPER";

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
        className="justify-between mx-auto md:items-center md:flex md:h-20 px-7 md:px-16 max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <div className="flex items-center justify-between md:block">
            {/* LOGO */}
            <a href="#hero" className="flex items-center h-14 w-40 md:w-56">
              <div className="@container relative w-full aspect-[2000/434] hover:scale-105 ease-in duration-500">
                <Image
                  className="w-full h-auto dark:hidden"
                  src={logoLight}
                  alt="logo"
                  width={220}
                  height={50}
                  loading="eager"
                />
                <Image
                  className="w-full h-auto hidden dark:block"
                  src={logoDark}
                  alt="logo"
                  width={220}
                  height={50}
                  loading="eager"
                />
                {/* Tagline drawn over the image's empty slot; sizes in cqw
                    scale with the logo. Letters use the page background
                    colour (Canvas) so they look cut out of the tiles. */}
                <span
                  className={`${electrolize.className} absolute left-[24.65%] top-[66.6%] flex h-[19.6%] text-[3.7cqw] leading-none`}
                  aria-hidden="true"
                >
                  {[...TAGLINE].map((char, i) =>
                    char === " " ? (
                      <span key={i} className="w-[1.2cqw]" />
                    ) : (
                      <span
                        key={i}
                        className="flex w-[3.4cqw] items-center justify-center rounded-[1.1cqw] bg-text-head text-[color:Canvas]"
                      >
                        {char}
                      </span>
                    )
                  )}
                </span>
                <span className="sr-only">Full-Stack Developer</span>
              </div>
            </a>

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
        <div ref={menuRef}>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${navbar ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } md:max-h-full md:opacity-100`}
          >
            <ul className="h-auto items-center justify-center flex flex-col md:flex-row">
              {menu.map((menuItem, i) => (
                <li
                  key={i}
                  className="text-xl md:text-lg lg:text-xl mb-1 md:mb-0 py-3 px-5 lg:px-8 xl:px-12 text-center rounded-sm hover:text-text-head ease-in-out duration-500"
                >
                  <a
                    href={`#${menuItem.toLowerCase()}`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {menuItem}
                  </a>
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
          </div>

          {/* SCROLL PROGRESS BAR */}
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
    </nav>
  );
}
