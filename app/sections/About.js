import { motion } from "motion/react";
import Skills from "../components/Skills";

export default function About() {
  const paragraphs = [
    "I'm a full-stack developer based in 's-Hertogenbosch, the Netherlands. I build web applications that solve real problems and are a pleasure to use.",
    "I work at a startup on a B2B single sign-on (SSO) product built with Ruby on Rails. I came to code through an intensive bootcamp after working in customer service and IT, so I think about the people using the product as much as the code behind it.",
    "I like owning a feature from the database to the interface and getting the details right. My international background helps me work well in diverse, collaborative teams.",
    "Away from the keyboard, I tinker with home automation and bring ideas to life with a 3D printer.",
  ];

  const paragraphVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: (order) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: order * 0.3,
      },
    }),
  };

  return (
    <section id="about">
      <div className="min-h-screen flex items-center md:justify-between flex-col md:flex-row px-7 md:px-16 max-w-7xl mx-auto py-14 md:py-24">
        <div className="md:w-2/3 max-w-prose flex-auto py-14 md:py-20 md:pr-10">
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
