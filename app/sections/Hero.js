"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import SocialLinks from "../components/SocialLinks";
import TypingText from "../components/TypingText";
import avatar from "../../public/avatar.png";

export default function Hero() {
  return (
    <section id="home">
      <div className="px-7 md:px-16 lg:px-28 xl:px-40 overflow-hidden">
        <Image
          className="absolute left-0 bottom-0 object-cover md:w-3/5 opacity-90"
          src={avatar}
          alt="avatar"
        />
        <div className="min-h-screen flex mt-20 md:items-center justify-center md:justify-end">
          <div className="relative h-[400px] md:h-[600px] w-full max-w-lg z-10">
            <div className="absolute top-24 -left-8 w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-300 mix-blend-multiply animate-blob filter blur-3xl opacity-90" />
            <div className="absolute -right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-yellow-300 mix-blend-multiply animate-blob filter blur-3xl opacity-90 animation-delay-4000" />
            <div className="absolute bottom-0 -right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-pink-300 mix-blend-multiply animate-blob filter blur-3xl opacity-90 animation-delay-2000" />
          </div>
          <div className="absolute w-full flex flex-col justify-center md:justify-end z-20">
            <div className="text-center md:text-right text-slate-500">
              <h1 className="text-3xl md:text-4xl lg:text-6xl py-5 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-teal-600 font-medium drop-shadow-glow">
                Hi, <br />
                my name is <br /> Andrei
              </h1>

              <TypingText
                title="I'm a Web Developer"
                textStyles="text-2xl md:text-3xl lg:text-4xl py-5 font-medium drop-shadow-lg"
              />

              <div className="flex justify-center md:justify-end mt-8 md:mt-20">
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
