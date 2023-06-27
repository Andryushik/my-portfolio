"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import SocialLinks from "../components/SocialLinks";
import TypingText from "../components/TypingText";
import Fusion from "../components/Fusion";
import bgImage from "../../public/my-photo-removedbg.png";
import netherlands from "../../public/netherlands-map.png";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);

  return (
    <section id="hero" ref={heroRef}>
      <motion.div
        className="absolute flex justify-start h-screen w-full bg-[#CDCED2] -z-10"
        style={{ y, opacity, scale }}
      >
        <Image
          className="absolute object-left-bottom bottom-0 left-0 h-auto md:h-full w-auto"
          src={bgImage}
          alt="background code screen"
        />
      </motion.div>

      <div className="px-7 md:px-16 lg:px-28 xl:px-40 overflow-hidden">
        <div className="relative min-h-screen flex mt-28 md:mt-0 md:items-center justify-center md:justify-end">
          {/* <motion.div style={{ y, opacity }}>
            <Fusion />
          </motion.div> */}

          <motion.div
            className="absolute flex flex-col text-center md:text-right text-slate-500"
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1,
              delay: 0.5,
            }}
          >
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

            <div className="flex justify-center gap-4 items-end md:justify-end mt-8 md:mt-16 text-sm">
              <span>
                Located <br /> in the <br /> Netherlands
              </span>
              <Image className="w-16" src={netherlands} alt="Netherlands map" />
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
      </div>
    </section>
  );
}
