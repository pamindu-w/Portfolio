"use client";

import { GraduationCap, School } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const entries = [
  {
    period: "2023 — present",
    icon: GraduationCap,
    title: "BSc (Hons) in Information Technology",
    org: "University of Moratuwa",
    body: "Coursework spans object-oriented programming, data structures & algorithms, database management, web technologies, software engineering, computer networks, operating systems, computer architecture, and systems analysis & design.",
    metric: { label: "CGPA", value: 3.72, max: 4.0 },
  },
  {
    period: "2014 — 2022",
    icon: School,
    title: "G.C.E. Advanced Level, Physical Science",
    org: "Taxial Central College, Horana",
    body: "9 A passes at O/L. Badminton and swimming ran alongside the academics the whole way through.",
    grades: [
      { subject: "Chemistry", grade: "A" },
      { subject: "Physics", grade: "B" },
      { subject: "Combined Maths", grade: "B" },
    ],
  },
];

const gradeWeight: Record<string, number> = { A: 1, B: 0.75, C: 0.5, S: 0.25 };

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="label-tag mb-4">Education</p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Record
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16 pl-2">
          <div
            className="absolute left-[27px] top-2 bottom-2 w-px bg-white/[0.06]"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-[27px] top-2 w-px bg-signal/70"
            style={{ height: lineHeight }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {entries.map((e) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={e.title}
                  className="relative flex gap-5 md:gap-8"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center glass !rounded-xl text-signal">
                    <Icon size={22} />
                  </div>

                  <div className="glass !rounded-2xl p-5 flex-1 md:p-6">
                    <p className="label-tag">{e.period}</p>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">
                      {e.title}
                    </h3>
                    <p className="text-sm font-medium text-teal">{e.org}</p>
                    <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-mist">
                      {e.body}
                    </p>

                    {e.metric && (
                      <div className="mt-4 max-w-[240px]">
                        <div className="flex items-baseline justify-between text-xs text-mist">
                          <span>{e.metric.label}</span>
                          <span className="font-display font-bold text-white">
                            {e.metric.value.toFixed(2)}
                            <span className="font-normal text-mist">
                              {" "}
                              / {e.metric.max.toFixed(2)}
                            </span>
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-signal to-teal"
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${(e.metric.value / e.metric.max) * 100}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                          />
                        </div>
                      </div>
                    )}

                    {e.grades && (
                      <div className="mt-4 flex gap-5">
                        {e.grades.map((g) => (
                          <div key={g.subject} className="flex flex-col gap-1.5">
                            <span className="text-xs text-mist">{g.subject}</span>
                            <div className="flex items-end gap-0.5">
                              <span className="font-display text-lg font-bold text-white">
                                {g.grade}
                              </span>
                              <div className="mb-1 h-6 w-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                                <div
                                  className="w-full rounded-full bg-signal"
                                  style={{
                                    height: `${gradeWeight[g.grade] * 100}%`,
                                    marginTop: `${(1 - gradeWeight[g.grade]) * 100}%`,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
