import Image from "next/image";
import { motion } from "framer-motion";

const Skill = ({ name, source, x, y }) => {
  return (
    <motion.div
      className="absolute flex-1 w-10 h-10 lg:w-11 lg:h-11 bg-gray-100 dark:bg-gray-200 rounded-full p-2"
      whileHover={{ scale: 1.6 }}
      initial={{
        x: 0,
        y: 0,
        boxShadow: "2px 2px 0px rgba(0,0,0,0.5)",
      }}
      whileInView={{
        x: x,
        y: y,
        boxShadow: "8px 8px 5px rgba(0,0,0,0.4)",
        scale: 1.3,
      }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      <Image src={source} alt={name} height={48} width={48} />
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="relative overflow-visible flex justify-center items-center w-full h-72 md:h-fit">
      <Skill
        name="HTML"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        x="-3rem"
        y="-3rem"
      />
      <Skill
        name="CSS"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        x="-9rem"
        y="2rem"
      />
      <Skill
        name="JavaScript"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        x="0rem"
        y="1rem"
      />
      <Skill
        name="Next.js"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        x="1rem"
        y="-9rem"
      />
      <Skill
        name="TailwindCss"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        x="7rem"
        y="8rem"
      />
      <Skill
        name="Git"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        x="-7rem"
        y="8rem"
      />
      <Skill
        name="RubyOnRails"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg"
        x="7rem"
        y="-7rem"
      />
      <Skill
        name="Ruby"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original-wordmark.svg"
        x="-8rem"
        y="-4rem"
      />
      <Skill
        name="Node.js"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        x="3rem"
        y="5rem"
      />
      <Skill
        name="AlpineJS"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg"
        x="-5rem"
        y="-8rem"
      />
      <Skill
        name="MongoDB"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
        x="0rem"
        y="10rem"
      />
      <Skill
        name="Express"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        x="-4rem"
        y="4rem"
      />
      <Skill
        name="PostgreSQL"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
        x="9rem"
        y="3rem"
      />
      <Skill
        name="Figma"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        x="9rem"
        y="-2rem"
      />
      <Skill
        name="React.js"
        source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        x="3rem"
        y="-3rem"
      />
    </div>
  );
}
