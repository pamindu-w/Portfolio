"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const roles = [
  {
    org: "Horana Toastmasters Club",
    title: "Vice President of Membership",
    period: "2025 – 2026",
    body: "Led recruitment, engagement, and retention for the club, and helped it earn the Smedley Award through sustained membership growth.",
  },
  {
    org: "AIESEC",
    title: "Team Leader",
    period: "2025 – 2026",
    body: "Ran a team through project execution end to end, which is where most of my leadership and communication habits actually came from.",
  },
];

export default function Experience() {
  return (
    <section id="leadership" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <Reveal variant="fadeLeft" className="order-2 md:order-1">
            <div className="glass !rounded-3xl overflow-hidden mx-auto max-w-[300px] shadow-[0_0_40px_rgba(255,106,61,0.06)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/portrait-formal.jpg"
                  alt="Pamindu Welikada at a Toastmasters event"
                  fill
                  sizes="300px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
            </div>
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal>
              <p className="label-tag mb-4">Leadership</p>
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
                Practice outside the codebase
              </h2>
            </Reveal>

            <div className="mt-10 flex flex-col gap-6">
              {roles.map((r, i) => (
                <Reveal key={r.title} delay={0.15 * (i + 1)} variant="fadeRight">
                  <motion.div
                    className="glass !rounded-2xl p-8 transition-all duration-300"
                    whileHover={{
                      borderColor: "rgba(255,106,61,0.2)",
                      boxShadow: "0 0 30px rgba(255,106,61,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="glass-pill label-tag px-3 py-1">{r.period}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-teal">{r.org}</p>
                    <p className="mt-4 max-w-[55ch] text-sm leading-relaxed text-mist">
                      {r.body}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
