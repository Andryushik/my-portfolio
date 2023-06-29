"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import SocialLinks from "../components/SocialLinks";
import TypingText from "../components/TypingText";
import bgImage from "../../public/my-photo-removedbg.png";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <section id="hero" ref={heroRef}>
      <div className="relative h-screen w-full flex md:items-center justify-center md:justify-end px-7 md:px-16 lg:px-28 xl:px-40 overflow-hidden bg-[#CDCED2] dark:bg-gray-800">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <Image
            className="absolute bottom-0 w-auto md:h-full max-h-[60%] md:max-h-screen"
            src={bgImage}
            alt="Andrei photo"
          />
        </motion.div>

        <motion.div
          className="absolute flex flex-col text-center md:text-right text-slate-500 mt-16 md:mt-0"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0.5,
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl py-3 md:py-5 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-teal-600 font-medium">
            Hi, <br />
            my name is <br /> Andrei
          </h1>

          <TypingText
            title="I'm a Web Developer"
            textStyles="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl py-5 font-medium drop-shadow-lg"
          />

          <div className="flex justify-center md:justify-end mt-0 md:mt-14">
            <SocialLinks />
          </div>
        </motion.div>
      </div>
      <Link
        className="absolute right-4 bottom-4 flex items-center"
        href="#about"
      >
        <motion.div
          className="relative text-2xl mr-6"
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
        <motion.span
          className="relative text-xs  [writing-mode:vertical-lr]"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 1.5, delay: 4.5 }}
        >
          Scroll to discover
        </motion.span>
      </Link>
    </section>
  );
}
