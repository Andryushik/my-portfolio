import { Fragment } from "react";
import { motion, stagger } from "motion/react";

const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 1, delayChildren: stagger(0.2, { startDelay: 1.2 }) },
  },
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
    <motion.p
      className={textStyles}
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <span className="sr-only">{title}</span>
      <span aria-hidden="true">
        {title.split(" ").map((word, w) => (
          <Fragment key={w}>
            {w > 0 && " "}
            <span className="whitespace-nowrap">
              {Array.from(word).map((letter, i) => (
                <motion.span
                  key={i}
                  variants={textVariant}
                  // Transforms don't move inline boxes.
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </Fragment>
        ))}
      </span>
    </motion.p>
  );
}
