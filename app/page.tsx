import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <SmoothScroll />
      <div className="noise-overlay" />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="orb-1 absolute -top-[30%] -left-[10%] h-[600px] w-[600px] rounded-full opacity-20 blur-[180px]"
          style={{ background: "radial-gradient(circle, #FF6A3D 0%, transparent 70%)" }}
        />
        <div
          className="orb-2 absolute top-[40%] -right-[15%] h-[500px] w-[500px] rounded-full opacity-15 blur-[160px]"
          style={{ background: "radial-gradient(circle, #4FD6C4 0%, transparent 70%)" }}
        />
        <div
          className="orb-3 absolute -bottom-[20%] left-[30%] h-[400px] w-[400px] rounded-full opacity-10 blur-[140px]"
          style={{ background: "radial-gradient(circle, #FF6A3D 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10">
        <ScrollProgress />
        <CustomCursor />
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Marquee />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
