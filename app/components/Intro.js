"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import SocialLinks from "./SocialLinks";

export default function Intro() {
  return (
    <section id="home">
      <div className="px-7 md:px-16 lg:px-28 xl:px-40 overflow-hidden">
        <div className="min-h-screen flex items-center justify-center md:justify-end">
          <div className="relative h-[430px] md:h-[600px] w-full max-w-lg z-10">
            <div className="absolute top-24 -left-8 w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-300 mix-blend-multiply animate-blob filter blur-3xl opacity-90" />
            <div className="absolute -right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-yellow-300 mix-blend-multiply animate-blob filter blur-3xl opacity-90 animation-delay-4000" />
            <div className="absolute bottom-0 -right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-pink-300 mix-blend-multiply animate-blob filter blur-3xl opacity-90 animation-delay-2000" />
          </div>
          <div className="absolute w-full flex flex-col justify-center md:justify-end z-20">
            <div className="text-center md:text-right">
              <h1 className="text-2xl sm:3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl py-5 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-teal-600 font-medium drop-shadow-lg">
                Hi, <br />
                my name is <br /> Andrei
              </h1>

              <h2 className="text-2xl sm:3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl py-2 md:py-4 text-stone-500 drop-shadow-lg">
                I&apos;m a Web Developer
              </h2>

              {/* <p className="text-sm md:ml-32 lg:ml-40 xl:ml-64 2xl:ml-64 md:mt-4 py-1 md:py-5 leading-8 text-gray-400 dark:text-gray-640 md:text-xl max-w-3xl mx-auto drop-shadow-lg">
              I invite you to explore my portfolio, where you can find a
              selection of my projects.
            </p> */}
              <div className="flex justify-center md:justify-end">
                <SocialLinks />
              </div>
            </div>
          </div>
          <Link className="absolute bottom-6 flex items-center" href="#about">
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              Scroll to discover
            </motion.span>
            <motion.div
              className="text-2xl ml-4"
              initial={{ y: -5 }}
              animate={{ y: 5 }}
              transition={{
                type: "spring",
                mass: 10,
                damping: 0,
              }}
            >
              <AiOutlineArrowDown />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
