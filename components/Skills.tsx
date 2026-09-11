"use client";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiSocketdotio,
  SiPostgresql,
  SiPrisma,
  SiSqlalchemy,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiJsonwebtokens,
  SiStripe,
  SiGooglegemini,
} from "react-icons/si";
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

const primarySkills = skills.filter((_, i) => i % 2 === 0);
const secondarySkills = skills.filter((_, i) => i % 2 === 1);

export default function Skills() {
  const row = (list: Skill[], accent: "signal" | "teal", hidden: boolean) => (
    <div
      className={`flex shrink-0 items-center gap-3 pr-3 ${
        hidden ? "aria-hidden" : ""
      }`}
      aria-hidden={hidden || undefined}
    >
      {list.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.name}
            className={`group skill-tile ${
              accent === "teal" ? "skill-tile--teal" : ""
            }`}
          >
            <Icon
              size={30}
              className={`transition-colors duration-300 text-white/70 ${
                accent === "teal" ? "group-hover:text-teal" : "group-hover:text-signal"
              }`}
            />
            <span className="text-[11px] font-medium leading-none text-center text-white/80">
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="mb-20 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
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
            <div className="glass glare-sweep animated-border !rounded-2xl flex gap-8 p-6">
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
          <div className="marquee glass !rounded-3xl overflow-hidden py-10 md:py-12">
            <div className="skill-row-mask flex flex-col gap-4 md:gap-6">
              <div className="skill-track flex w-max">
                {row(primarySkills, "signal", false)}
                {row(primarySkills, "signal", true)}
              </div>
              <div className="skill-track-reverse flex w-max">
                {row(secondarySkills, "teal", false)}
                {row(secondarySkills, "teal", true)}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes skillMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes skillMarqueeReverse {
          from { transform: translateX(0); }
          to { transform: translateX(50%); }
        }
        .skill-track,
        .skill-track-reverse {
          will-change: transform;
        }
        .skill-track {
          animation: skillMarquee 45s linear infinite;
        }
        .skill-track-reverse {
          animation: skillMarqueeReverse 45s linear infinite;
        }
        .marquee:hover .skill-track,
        .marquee:hover .skill-track-reverse {
          animation-play-state: paused;
        }
        .skill-row-mask {
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
        .skill-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 138px;
          min-width: 138px;
          height: 128px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s, background 0.3s;
        }
        .skill-tile:hover {
          border-color: rgba(255, 106, 61, 0.45);
          box-shadow: 0 0 30px rgba(255, 106, 61, 0.15);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-3px);
        }
        .skill-tile--teal:hover {
          border-color: rgba(79, 214, 196, 0.45);
          box-shadow: 0 0 30px rgba(79, 214, 196, 0.15);
        }
      `}</style>
    </section>
  );
}