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
import { useEffect, useRef, useState } from "react";
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

export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [wheel, setWheel] = useState({ radius: 350, tile: 110 });
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wheelRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      const tile = w < 480 ? 84 : 120;
      const radius = Math.max(50, Math.round(w / 2 - tile / 2 - 8));
      setWheel({ radius, tile });
    };

    update();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

const count = skills.length;
const angleStep = 360 / count;
const { radius, tile } = wheel;

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
          <div className="flex flex-col items-center">
            <div className="glass !rounded-3xl w-full max-w-[920px] px-6 py-4 md:px-12 md:py-6">
              <div
                ref={wheelRef}
                className="relative mx-auto hidden h-[720px] w-full max-w-[800px] md:block"
                style={{ perspective: "1600px" }}
              >
                <style jsx>{`
                  @keyframes wheelSpin {
                    from { transform: rotateY(0deg); }
                    to { transform: rotateY(360deg); }
                  }
                  .wheel-track {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transform-style: preserve-3d;
                    animation: wheelSpin 35s linear infinite;
                  }
                  .wheel-track.paused {
                    animation-play-state: paused;
                  }
                  .wheel-tile {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    backface-visibility: hidden;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s, scale 0.3s;
                  }
                  .wheel-tile:hover {
                    scale: 1.3;
                    z-index: 10;
                    border-color: rgba(255, 106, 61, 0.4);
                    box-shadow: 0 0 30px rgba(255, 106, 61, 0.15);
                  }
                `}</style>

                <div
                  className={`wheel-track ${paused ? "paused" : ""}`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {skills.map((skill, i) => {
                    const angle = i * angleStep;
                    const isHovered = hovered === i;
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="wheel-tile flex flex-col items-center justify-center gap-1.5 md:gap-2"
                        style={{
                          width: tile,
                          height: tile,
                          margin: `${-tile / 2}px 0 0 ${-tile / 2}px`,
                          transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                          backfaceVisibility: "hidden",
                        }}
                        onMouseEnter={() => { setHovered(i); setPaused(true); }}
                        onMouseLeave={() => { setHovered(null); setPaused(false); }}
                      >
                        <Icon
                          size={36}
                          className={`transition-colors duration-300 ${
                            isHovered ? "text-teal" : "text-white/70"
                          }`}
                        />
                        <span className="text-[11px] font-medium text-white/80 leading-none text-center">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="md:hidden">
                <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="glass !rounded-xl flex flex-col items-center gap-1.5 px-1 py-3 text-center transition-colors"
                      >
                        <Icon size={22} className="text-white/70" />
                        <span className="text-[10px] font-medium leading-none text-white/80">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
