"use client";
import { motion } from "framer-motion";
import Skills from "./Skills";

export default function About() {
  const paragraphTexts = [
    {
      key: 1,
      content: (
        <p>
          Recently relocated to the Netherlands, I am highly motivated to
          kickstart my career as a Web Developer. Having graduated from
          <a
            href="https://www.hackyourfuture.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-teal-500"> HackYourFuture</span>
          </a>
          , I am eager to apply my skills and passion to the field of web
          development.
        </p>
      ),
    },
    {
      key: 2,
      content: (
        <p>
          With international experience in customer service and sales, I am
          dedicated to delivering exceptional user experiences. My genuine
          enthusiasm for technology and knack for creating innovative solutions
          drive me in my web development journey.
        </p>
      ),
    },
    {
      key: 3,
      content: (
        <p>
          I am detail-oriented and thrive in collaborative team environments. If
          you&apos;re interested in discussing opportunities or collaborating on
          projects, please feel free to reach out.
        </p>
      ),
    },
    {
      key: 4,
      content: (
        <p>
          Outside of work, I indulge my passion for smart home technology and 3D
          printing. I am ready to contribute my expertise to dynamic web
          development projects.
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
      <div className="flex items-center md:justify-between md:h-screen flex-col md:flex-row px-7 md:px-16 lg:px-28 xl:px-40 py-14 md:py-24 ">
        <div className="top-0 md:w-2/3 max-w-prose flex-auto py-14 md:py-20">
          <h3 className="text-2xl md:text-3xl text-text-head py-3 drop-shadow-md">
            About & Skills
          </h3>

          <ul>
            {paragraphTexts.map((p) => (
              <motion.li
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={p.key}
                key={p.key}
                className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200"
              >
                {p.content}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex-auto w-full md:w-1/3 md:max-w-md md:ml-20 lg:ml-32">
          <Skills />
        </div>
      </div>
    </section>
  );
}
