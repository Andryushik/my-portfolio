import { Fragment } from "react";
import { motion, stagger } from "motion/react";

const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { delay: 1, delayChildren: stagger(0.2, { startDelay: 1 + i * 0.2 }) },
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
        {/* Screen readers get the plain title: letters as separate boxes can
            be read one by one. */}
        <span className="sr-only">{title}</span>
        <span aria-hidden="true">
          {title.split(" ").map((word, w) => (
            <Fragment key={w}>
              {w > 0 && " "}
              {/* Letters are inline-block so y can move them (it can't move
                  inline boxes); each word stays in one piece when wrapping. */}
              <span className="whitespace-nowrap">
                {Array.from(word).map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={textVariant}
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
    </div>
  );
}
