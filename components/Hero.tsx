import Image from "next/image";
import { Download, Github, Linkedin } from "lucide-react";
import TypewriterRole from "./TypewriterRole";
import ParticleField from "./ParticleField";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import NameReveal from "./NameReveal";
import CountUp from "./CountUp";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ParticleField />
        <div
          className="absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full opacity-15 blur-[160px]"
          style={{ background: "radial-gradient(circle, #FF6A3D 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[140px]"
          style={{ background: "radial-gradient(circle, #4FD6C4 0%, transparent 70%)" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-12 px-6 py-32 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-40">
        <div className="relative z-10">
          <Reveal delay={0}>
            <div className="glass-pill mb-8 inline-flex items-center gap-2 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              <p className="label-tag !text-[11px] !tracking-normal">
                Bandaragama, Sri Lanka · Available for internships
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <NameReveal />
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 font-display text-2xl font-medium sm:text-3xl md:text-4xl">
              <span className="gradient-text">
                <TypewriterRole />
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 max-w-[48ch] text-base leading-relaxed text-mist md:text-lg">
              IT undergraduate at the University of Moratuwa. I build
              full-stack products end to end — from route optimisation for
              delivery fleets to AI-driven finance tools — and I care about
              the layer between a database and the person using it.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton strength={0.25}>
                <a
                  href="#work"
                  className="inline-block rounded-xl bg-signal px-8 py-3.5 text-sm font-semibold text-ink transition-all hover:shadow-[0_0_30px_rgba(255,106,61,0.3)] hover:scale-[1.02]"
                >
                  See the projects
                </a>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <a
                  href={`${BASE_PATH}/pamindu-welikada-cv.pdf`}
                  download
                  className="glass flex items-center gap-2 !rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all hover:!border-white/20 hover:!bg-white/[0.06]"
                >
                  <Download size={16} /> Download CV
                </a>
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10 flex items-center gap-3">
              <a
                href="https://github.com/pamindu-w"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-11 w-11 items-center justify-center !rounded-xl text-white/70 transition-all hover:!border-signal/30 hover:text-signal hover:shadow-[0_0_20px_rgba(255,106,61,0.1)]"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/pamindu-welikada-510a67314/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-11 w-11 items-center justify-center !rounded-xl text-white/70 transition-all hover:!border-signal/30 hover:text-signal hover:shadow-[0_0_20px_rgba(255,106,61,0.1)]"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="glass mt-14 grid grid-cols-3 gap-0 max-w-[32rem] overflow-hidden !rounded-2xl">
              <div className="px-2 py-4 text-center border-r border-white/[0.06] sm:px-6 sm:py-5">
                <dt className="label-tag">CGPA</dt>
                <dd className="mt-1 font-display text-xl font-bold text-white sm:text-2xl"><CountUp to={3.72} decimals={2} /><span className="text-sm font-normal text-mist">/4.00</span></dd>
              </div>
              <div className="px-2 py-4 text-center border-r border-white/[0.06] sm:px-6 sm:py-5">
                <dt className="label-tag">Since</dt>
                <dd className="mt-1 font-display text-xl font-bold text-white sm:text-2xl"><CountUp to={2023} /></dd>
              </div>
              <div className="px-2 py-4 text-center sm:px-6 sm:py-5">
                <dt className="label-tag">Stack</dt>
                <dd className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">Full-stack</dd>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 flex justify-center md:justify-end">
          <div className="relative">
            <div className="glass !rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,106,61,0.08)]">
              <div className="relative h-[380px] w-[300px] md:h-[480px] md:w-[380px]">
                <Image
                  src={`${BASE_PATH}/images/portrait-desk.jpg`}
                  alt="Pamindu Welikada"
                  fill
                  sizes="380px"
                  className="object-cover object-top"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, #1A1A2E 0%, transparent 40%)",
                  }}
                />
              </div>
            </div>
            <div className="glass-pill absolute -bottom-4 -left-4 px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <p className="label-tag !text-[10px]">PW · IT Undergraduate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
