import Image from "next/image";
import { motion } from "motion/react";

// public/icons: devicon 2.18.0 (MIT).
const skills = [
  { name: "HTML", icon: "html5-original.svg", x: "-3rem", y: "-3rem" },
  { name: "CSS", icon: "css3-original.svg", x: "-9rem", y: "2rem" },
  { name: "JavaScript", icon: "javascript-original.svg", x: "0rem", y: "1rem" },
  { name: "Next.js", icon: "nextjs-original-wordmark.svg", x: "1rem", y: "-9rem" },
  { name: "TailwindCss", icon: "tailwindcss-original.svg", x: "7rem", y: "8rem" },
  { name: "Git", icon: "git-original.svg", x: "-7rem", y: "8rem" },
  { name: "RubyOnRails", icon: "rails-original-wordmark.svg", x: "7rem", y: "-7rem" },
  { name: "Ruby", icon: "ruby-original-wordmark.svg", x: "-8rem", y: "-4rem" },
  { name: "Node.js", icon: "nodejs-original-wordmark.svg", x: "3rem", y: "5rem" },
  { name: "AlpineJS", icon: "alpinejs-original.svg", x: "-5rem", y: "-8rem" },
  { name: "MongoDB", icon: "mongodb-plain-wordmark.svg", x: "0rem", y: "10rem" },
  { name: "Express", icon: "express-original.svg", x: "-4rem", y: "4rem" },
  { name: "PostgreSQL", icon: "postgresql-original-wordmark.svg", x: "9rem", y: "3rem" },
  { name: "Figma", icon: "figma-original.svg", x: "9rem", y: "-2rem" },
  { name: "React.js", icon: "react-original.svg", x: "3rem", y: "-3rem" },
];

const Skill = ({ name, icon, x, y }) => {
  return (
    <motion.div
      className="absolute flex-1 w-10 h-10 lg:w-11 lg:h-11 bg-gray-100 dark:bg-gray-200 rounded-full p-2"
      whileHover={{ scale: 1.6 }}
      initial={{
        x: 0,
        y: 0,
        boxShadow: "2px 2px 1px rgba(150,150,150,0.6)",
      }}
      whileInView={{
        x: x,
        y: y,
        boxShadow: "6px 6px 4px rgba(150,150,150,0.3)",
        scale: 1.3,
      }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      <Image src={`/icons/${icon}`} alt={name} height={48} width={48} />
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="relative overflow-visible flex justify-center items-center w-full h-72 md:h-fit">
      {skills.map((skill) => (
        <Skill key={skill.name} {...skill} />
      ))}
    </div>
  );
}
