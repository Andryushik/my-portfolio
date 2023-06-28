"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import menuIcon from "../../public/menu-icon.png";
import crossIcon from "../../public/cross-icon.png";
import ThemeSwitcher from "./ThemeSwitcher";
import logoLight from "../../public/logo-light.png";
import logoDark from "../../public/logo-dark.png";

const menuVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { theme } = useTheme();
  const menu = ["About", "Projects", "Contact"];
  const { scrollYProgress } = useScroll();
  const progressBar = useTransform(
    scrollYProgress,
    [0.07, 0.5, 0.75, 1],
    [0, 0.4, 0.5, 1]
  );

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

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <div
                className="py-2 text-gray-700 rounded-md border border-cyan-600 border-opacity-0 focus:border-opacity-80"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src={crossIcon}
                    width={30}
                    height={30}
                    alt="close menu icon"
                  />
                ) : (
                  <Image
                    src={menuIcon}
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
            <motion.ul
              className="h-auto items-center justify-center flex flex-col md:flex-row"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              transition={{
                ease: "easeIn",
                type: "tween",
                staggerChildren: 0.13,
                duration: 0.5,
              }}
            >
              {menu.map((menuItem, i) => (
                <motion.li
                  key={i}
                  className="text-xl md:text-lg lg:text-xl mb-1 md:mb-0 py-3 px-5 lg:px-8 xl:px-12 text-center hover:bg-text-head hover:bg-opacity-50 rounded md:hover:text-text-head md:hover:bg-transparent ease-in-out duration-500"
                  variants={menuVariants}
                >
                  <Link
                    href={`#${menuItem.toLowerCase()}`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {menuItem}
                  </Link>
                </motion.li>
              ))}

              {/* THEME SWITCHER */}
              <li
                className="py-3 flex justify-center items-center ml-0 mt-3 md:mt-0 lg:ml-8 xl:ml-12"
                onClick={() => setTimeout(() => setNavbar(!navbar), 500)}
              >
                <ThemeSwitcher />
              </li>
            </motion.ul>
            {!navbar && (
              <div className="relative left-5 w-3/4">
                <motion.div
                  className="absolute h-1 right-0 top-0 left-0 bg-text-head"
                  style={{
                    scaleX: progressBar,
                    transformOrigin: "0%",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
