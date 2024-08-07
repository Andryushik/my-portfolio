import { motion } from "framer-motion";

const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { delay: 1, staggerChildren: 0.2, delayChildren: 1 + i * 0.2 },
  }),
};

const textVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export default function TypingText({ title, textStyles }) {
  return (
    <div>
      <motion.p
        className={`${textStyles}`}
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant} key={index}>
            {letter === "%" ? <br /> : letter}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
