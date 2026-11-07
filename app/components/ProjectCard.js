import Image from "next/image";
import { motion, useTransform } from "motion/react";

export default function ProjectCard({
  i,
  imgSource,
  sourceUrl,
  liveUrl,
  technologies,
  description,
  title,
  progress,
  range,
  targetScale,
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="top-0 lg:h-screen pt-32 pb-20 flex items-center justify-center sticky">
      <motion.div
        className="group relative overflow-hidden shadow-md dark:shadow-slate-700 rounded-xl flex-1 text-xs md:text-base"
        style={{ scale, top: `calc(${i * 40}px)` }}
      >
        <div className="group-hover:bg-linear-to-t group-focus-within:bg-linear-to-t from-white dark:from-black w-full h-full absolute z-30 transition-all duration-300"></div>
        <Image
          className="object-cover w-full h-full"
          src={imgSource}
          placeholder="blur"
          alt={`${title} screenshot`}
        />

        <div className="absolute flex gap-2 right-6 -top-full group-hover:top-6 group-focus-within:top-6 transition-all duration-300 z-40">
          <a
            className="rounded-sm py-1 px-2 w-16 md:w-20 text-center bg-slate-500 opacity-70 hover:opacity-90 text-white"
            href={sourceUrl}
            target="_blank"
            rel="noopener"
            aria-label={`${title} source code`}
          >
            Source
          </a>
          <a
            className="rounded-sm py-1 px-2 w-16 md:w-20 text-center bg-gray-500 opacity-70 hover:opacity-90 text-white"
            href={liveUrl}
            target="_blank"
            rel="noopener"
            aria-label={`${title} live demo`}
          >
            Live
          </a>
        </div>

        <div className="absolute flex gap-1 md:gap-2 -bottom-full left-6 group-hover:bottom-24 group-focus-within:bottom-24 transition-all duration-300 z-40">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full py-1 px-2 bg-gray-500/80 text-white"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="md:text-base xl:text-lg absolute -bottom-full left-6 group-hover:bottom-16 group-focus-within:bottom-16 transition-all duration-500 z-40">
          <span className="text-sm md:text-base text-slate-500">
            {description}
          </span>
        </div>
        <div className="absolute -bottom-full left-6 group-hover:bottom-6 group-focus-within:bottom-6 transition-all duration-700 z-40">
          <h3 className="text-xl xl:text-2xl text-text-head">{title}</h3>
        </div>
      </motion.div>
    </div>
  );
}
