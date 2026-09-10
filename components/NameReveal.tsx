"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const letter = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function NameReveal() {
  const words = useMemo(() => ["Pamindu", "Welikada"], []);
  let delayIndex = 0;

  return (
    <span>
      {words.map((word) => (
        <span key={word} className="block overflow-hidden">
          {word.split("").map((char, cIndex) => {
            const i = delayIndex++;
            return (
              <motion.span
                key={`${word}-${cIndex}`}
                className="inline-block will-change-transform"
                variants={letter}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
      <span className="sr-only">Pamindu Welikada</span>
    </span>
  );
}