"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import SocialLinks from "../components/SocialLinks";
import TypingText from "../components/TypingText";
import bgCode from "../../public/background-code.jpg";
import Fusion from "../components/Fusion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);

  return (
    <section id="home" ref={ref}>
      <motion.div
        className="absolute w-full h-screen left-0 bottom-0 -z-10"
        style={{ y, opacity, scale }}
      >
        <Image
          className="object-cover w-full h-full opacity-90"
          src={bgCode}
          alt="background code screen"
        />
      </motion.div>

      <div className="px-7 md:px-16 lg:px-28 xl:px-40 overflow-hidden">
        <div className="min-h-screen flex mt-28 md:mt-0 md:items-center justify-center md:justify-end">
          <motion.div style={{ y }}>
            <Fusion />
          </motion.div>

          <div className="absolute flex flex-col">
            <div className="text-center md:text-right text-slate-500">
              <h1 className="text-3xl md:text-4xl lg:text-6xl py-5 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-teal-600 font-medium drop-shadow-glow">
                Hi, <br />
                my name is <br /> Andrei
              </h1>

              <TypingText
                title="I'm a Web Developer"
                textStyles="text-2xl md:text-3xl lg:text-4xl py-5 font-medium drop-shadow-lg"
              />

              <div className="flex justify-center md:justify-end mt-8 md:mt-16">
                <SocialLinks />
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-16 left-0 w-full text-center">
            <p className="text-sm md:text-xl py-4 text-gray-400 dark:text-gray-600 drop-shadow-md">
              I invite you to explore my portfolio, where you can find a
              selection of my projects.
            </p>
          </div> */}

          <Link className="absolute bottom-6 flex items-center" href="#about">
            <motion.span
              className="text-sm"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 1.5, delay: 4.5 }}
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
