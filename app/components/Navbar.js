"use client";

import { useState, useEffect, useRef } from "react";
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
      <div className="justify-between mx-auto md:items-center md:flex md:h-20 px-7 md:px-16 max-w-7xl">
        <div className="flex items-center justify-between md:block">
          {/* LOGO */}
          <a href="#hero" className="flex items-center h-14 w-40 md:w-56">
            <div className="@container relative w-full aspect-[2000/434] hover:scale-105 ease-in duration-500">
              <Image
                className="w-full h-auto dark:hidden"
                src={logoLight}
                alt="Andrei Popov"
                width={220}
                height={50}
                loading="eager"
              />
              <Image
                className="w-full h-auto hidden dark:block"
                src={logoDark}
                alt="Andrei Popov"
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
                      className="flex w-[3.4cqw] items-center justify-center rounded-[1.1cqw] bg-brand text-[color:Canvas]"
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
            <button
              type="button"
              ref={hamburgerRef}
              className="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer bg-button"
              onClick={() => setNavbar(!navbar)}
              aria-label="Menu"
              aria-expanded={navbar}
              aria-controls="mobile-menu"
            >
              <span className={`burger ${navbar && "burgerActive"}`}></span>
            </button>
          </div>
        </div>

        {/* MENU */}
        <div ref={menuRef}>
          {/* Closed on phones: invisible as well, so its links leave the Tab
              order and the accessibility tree. Always shown from md up. */}
          <div
            id="mobile-menu"
            className={`transition-all duration-500 ease-in-out overflow-hidden ${navbar ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
              } md:max-h-full md:opacity-100 md:visible`}
          >
            <ul className="h-auto items-center justify-center flex flex-col md:flex-row">
              {menu.map((menuItem, i) => (
                <li
                  key={i}
                  className="text-xl md:text-lg lg:text-xl mb-1 md:mb-0 py-3 px-5 lg:px-8 xl:px-12 text-center rounded-sm hover:text-text-head ease-in-out duration-500"
                >
                  <a
                    href={`#${menuItem.toLowerCase()}`}
                    onClick={() => setNavbar(false)}
                  >
                    {menuItem}
                  </a>
                </li>
              ))}

              {/* THEME SWITCHER */}
              <li
                className="py-3 flex justify-center items-center ml-0 mt-3 md:mt-0 lg:ml-8 xl:ml-12"
                // Close the mobile menu shortly after switching the theme, so the
                // change is visible first.
                onClick={() =>
                  setTimeout(() => {
                    setNavbar(false);
                    // The closed menu is hidden on phones, which would drop
                    // keyboard focus: hand it to the burger. On desktop the
                    // burger is hidden, so focus() does nothing there.
                    if (menuRef.current?.contains(document.activeElement)) {
                      hamburgerRef.current?.focus();
                    }
                  }, 300)
                }
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
      </div>
    </nav>
  );
}
