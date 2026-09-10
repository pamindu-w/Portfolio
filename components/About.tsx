"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const principles = [
  {
    title: "Build the whole path",
    body: "From a Postgres schema to the button someone taps, I want to have touched every layer in between.",
  },
  {
    title: "Shape the data right",
    body: "Spatial clustering for delivery routes, ledgers for expenses — the right structure makes the feature obvious.",
  },
  {
    title: "Keep learning out loud",
    body: "Toastmasters and AIESEC taught me that explaining a decision well is part of making it.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="label-tag mb-4">About</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl font-bold text-white text-balance md:text-5xl">
                An engineer who likes the plumbing as much as the interface.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-mist md:text-lg">
                I&apos;m a Physical Science stream graduate who moved into
                software because I liked systems more than any single subject —
                how a fleet of vehicles gets assigned routes, how a receipt
                becomes a budget, how a browser extension learns what you&apos;re
                reading. Outside of code, badminton and swimming taught me the
                same lesson twice: consistency beats intensity.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={0.15 * i} variant="fadeRight">
                <motion.div
                  className="glass glare-sweep animated-border !rounded-2xl p-6 h-full transition-all duration-300"
                  whileHover={{
                    borderColor: "rgba(255,106,61,0.2)",
                    boxShadow: "0 0 30px rgba(255,106,61,0.06)",
                    y: -4,
                  }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-signal/10 text-signal">
                    <span className="font-display text-lg font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {p.body}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
