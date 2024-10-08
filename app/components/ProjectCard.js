import Image from "next/image";
import { motion, useTransform } from "framer-motion";

export default function ProjectCard({
  i,
  imgSource,
  blurSource,
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
        <div className="group-hover:bg-gradient-to-t from-white dark:from-black w-full h-full absolute z-30 transition-all duration-300"></div>
        <Image
          className="object-cover w-full h-full"
          src={imgSource}
          placeholder="blur"
          blurDataURL={blurSource}
          alt="project's home page picture"
        />

        <div className="absolute flex gap-2 right-6 -top-full group-hover:top-6 transition-all duration-300 z-40">
          <form action={sourceUrl} method="get" target="_blank">
            <button
              className="rounded py-1 px-2 w-16 md:w-20 bg-slate-500 opacity-70 hover:opacity-90 text-white"
              type="submit"
            >
              Source
            </button>
          </form>
          <form action={liveUrl} method="get" target="_blank">
            <button
              className="rounded py-1 px-2 w-16 md:w-20 bg-gray-500 opacity-70 hover:opacity-90 text-white"
              type="submit"
            >
              Live
            </button>
          </form>
        </div>

        <div className="absolute flex gap-1 md:gap-2 -bottom-full left-6 group-hover:bottom-24 transition-all duration-300 z-40">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full py-1 px-2 bg-gray-500/80 text-white"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="md:text-base xl:text-lg absolute -bottom-full left-6 group-hover:bottom-16 transition-all duration-500 z-40">
          <span className="text-sm md:text-base text-slate-500">
            {description}
          </span>
        </div>
        <div className="absolute -bottom-full left-6 group-hover:bottom-6 transition-all duration-700 z-40">
          <span className="text-xl xl:text-2xl text-text-head">{title}</span>
        </div>
      </motion.div>
    </div>
  );
}
