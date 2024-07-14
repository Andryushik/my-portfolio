import { motion } from "framer-motion";
import Skills from "../components/Skills";

export default function About() {
  const paragraphTexts = [
    {
      key: 1,
      content: (
        <p>
          Hello! I&apos;m a web developer based in the Netherlands, passionate
          about coding and technology.
        </p>
      ),
    },
    {
      key: 2,
      content: (
        <p>
          As a proud graduate of
          <a
            href="https://www.hackyourfuture.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-teal-500"> HackYourFuture</span>
          </a>
          , I bring a wealth of international experience in both customer
          service and IT to the table.
        </p>
      ),
    },
    {
      key: 3,
      content: (
        <p>
          I am committed to delivering exceptional user experiences through
          innovative web solutions. My enthusiasm for technology, combined with
          a keen eye for detail, enables me to thrive in collaborative team
          environments. I am always eager to discuss new opportunities or
          collaborate on exciting projects.
        </p>
      ),
    },
    {
      key: 4,
      content: (
        <p>
          Beyond coding, I enjoy exploring smart home technology and 3D
          printing. Let&apos;s connect and see how we can create something
          amazing together!
        </p>
      ),
    },
  ];

  const listVariants = {
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
      <div className="min-h-screen flex items-center md:justify-between flex-col md:flex-row px-7 md:px-16 lg:px-28 xl:px-40 py-14 md:py-24">
        <div className="top-0 md:w-2/3 max-w-prose flex-auto py-14 md:py-20 md:pr-10">
          <h3 className="text-2xl md:text-3xl text-text-head py-3 drop-shadow-md">
            About & Skills
          </h3>

          <ul>
            {paragraphTexts.map((p) => (
              <motion.li
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={p.key}
                key={p.key}
                className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200"
              >
                {p.content}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex-auto py-10 px-40 w-full md:w-1/3 md:max-w-md">
          <Skills />
        </div>
      </div>
    </section>
  );
}
