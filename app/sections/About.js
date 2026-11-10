import { motion } from "motion/react";
import Skills from "../components/Skills";

export default function About() {
  const paragraphs = [
    "Hello! I'm a full-stack software developer based in the Netherlands, passionate about building digital experiences that matter.",
    "I recently refreshed and expanded my coding expertise through an intensive development bootcamp, and I now work as a Software Developer at a dynamic startup. With a strong foundation in both customer service and IT, I've evolved into a developer who understands not just the code, but the people behind the screen.",
    "I specialize in creating user-centric web solutions that blend functionality with seamless design. My international background and attention to detail help me excel in collaborative environments where innovation thrives.",
    "When I'm not coding, you'll find me tinkering with smart home automation or bringing ideas to life through 3D printing. Ready to collaborate on your next project? Let's build something extraordinary together!",
  ];

  const paragraphVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: (key) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: key * 0.3,
      },
    }),
  };

  return (
    <section id="about">
      <div className="min-h-screen flex items-center md:justify-between flex-col md:flex-row px-7 md:px-16 max-w-7xl mx-auto py-14 md:py-24">
        <div className="top-0 md:w-2/3 max-w-prose flex-auto py-14 md:py-20 md:pr-10">
          <h2 className="text-2xl md:text-3xl text-text-head py-3 drop-shadow-md">
            About & Skills
          </h2>

          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={i + 1}
              className="text-sm/8 md:text-base py-2 text-gray-800 dark:text-gray-200"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <div className="flex-auto py-10 px-40 w-full md:w-1/3 md:max-w-md">
          <Skills />
        </div>
      </div>
    </section>
  );
}
