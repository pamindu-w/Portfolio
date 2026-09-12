"use client";

import { SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus } from "react-icons/si";
import { SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiRedux } from "react-icons/si";
import { SiNodedotjs, SiExpress, SiFastapi, SiSocketdotio } from "react-icons/si";
import { SiPostgresql, SiPrisma, SiSqlalchemy } from "react-icons/si";
import { SiGit, SiGithub, SiDocker, SiPostman } from "react-icons/si";
import { SiJsonwebtokens, SiStripe, SiGooglegemini } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import type { IconType } from "react-icons";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

type Skill = {
  name: string;
  icon: IconType;
};

const skills: Skill[] = [
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Socket.IO", icon: SiSocketdotio },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "SQLAlchemy", icon: SiSqlalchemy },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "Postman", icon: SiPostman },
  { name: "JWT Auth", icon: SiJsonwebtokens },
  { name: "Stripe API", icon: SiStripe },
  { name: "Gemini AI", icon: SiGooglegemini },
];

const totalSkills = skills.length;

type Category = {
  title: string;
  accent: "teal" | "signal";
  skills: Skill[];
};

const byName = (names: string[]) =>
  names.map((n) => skills.find((s) => s.name === n)!).filter(Boolean);

const categories: Category[] = [
  { title: "Languages", accent: "teal", skills: byName(["Python", "Java", "JavaScript", "TypeScript", "C", "C++"]) },
  { title: "Frontend", accent: "signal", skills: byName(["React.js", "Next.js", "Vite", "Tailwind CSS", "Redux Toolkit"]) },
  { title: "Backend", accent: "teal", skills: byName(["Node.js", "Express.js", "FastAPI", "Socket.IO"]) },
  { title: "Databases & ORM", accent: "signal", skills: byName(["PostgreSQL", "Prisma", "SQLAlchemy"]) },
  { title: "DevOps & Tools", accent: "teal", skills: byName(["Git", "GitHub", "Docker", "Postman"]) },
  { title: "Integrations & AI", accent: "signal", skills: byName(["JWT Auth", "Stripe API", "Gemini AI"]) },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal>
              <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl">
                Tools I use to turn
                <span className="block gradient-text">
                  ideas into products.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-mist md:text-base">
                A collection of languages, frameworks, databases and tools
                I use to design, build, ship and scale software.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="glass !rounded-2xl flex gap-8 p-6">
              <div>
                <div className="font-display text-4xl font-bold text-white">
                  <CountUp to={totalSkills} suffix="+" />
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-mist">
                  Technologies
                </div>
              </div>
              <div className="h-auto w-px bg-white/[0.08]" />
              <div>
                <div className="font-display text-4xl font-bold text-teal">
                  <CountUp to={6} />
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-mist">
                  Domains
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, ci) => (
              <Reveal key={cat.title} delay={ci * 0.08}>
                <div className="glass !rounded-3xl p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`block h-4 w-1 rounded-full ${
                        cat.accent === "teal" ? "bg-teal/80" : "bg-signal/80"
                      }`}
                    />
                    <div className="flex items-center gap-3">
                      <h3
                        className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
                          cat.accent === "teal" ? "text-teal" : "text-signal"
                        }`}
                      >
                        {cat.title}
                      </h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-mist">
                        {cat.skills.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className={`chip ${
                            cat.accent === "teal" ? "chip--teal" : ""
                          }`}
                        >
                          <Icon
                            size={28}
                            className={`inline-block text-white/70 transition-colors duration-300 ${
                              cat.accent === "teal"
                                ? "group-hover:text-teal"
                                : "group-hover:text-signal"
                            }`}
                          />
                          <span className="ml-2 text-base font-semibold text-white align-middle">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
