import { motion } from "motion/react";
import Skills from "../components/Skills";

export default function About() {
  const paragraphs = [
    "I'm a full-stack developer based in 's-Hertogenbosch, the Netherlands, and I enjoy building web applications that solve real problems.",
    "After an intensive coding bootcamp, I joined a startup where I work as a full-stack developer on a B2B single sign-on (SSO) web application built with Ruby on Rails. My background in customer service and IT means I care not just about the code, but about the people who use it.",
    "I like building web applications end to end, from the database to the interface, and making them reliable and pleasant to use. My international background and attention to detail help me work well in diverse, collaborative teams.",
    "When I'm not coding, you'll find me tinkering with home automation or bringing ideas to life through 3D printing. Have a project or a role in mind? Let's talk!",
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
