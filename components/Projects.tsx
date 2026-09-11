import { Truck, Receipt, BookOpen, CalendarDays, Shapes, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import TiltPanel from "./TiltPanel";
import CampusArt from "./art/CampusArt";
import Gallery from "./Gallery";
import Reveal from "./Reveal";

interface Project {
  index: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  body: string;
  stack: string[];
  Art?: ComponentType;
  images?: string[];
}

const expenseImages = [
  "/images/expense-analyzer/expense-1.png",
  "/images/expense-analyzer/expense-2.png",
  "/images/expense-analyzer/expense-3.png",
  "/images/expense-analyzer/expense-4.png",
  "/images/expense-analyzer/expense-5.png",
  "/images/expense-analyzer/expense-6.png",
  "/images/expense-analyzer/expense-7.png",
];

const learningImages = [
  "/images/learning-companion/learning-1.png",
  "/images/learning-companion/learning-2.png",
  "/images/learning-companion/learning-3.png",
  "/images/learning-companion/learning-4.png",
  "/images/learning-companion/learning-5.png",
  "/images/learning-companion/learning-6.png",
  "/images/learning-companion/learning-7.png",
  "/images/learning-companion/learning-8.png",
];

const cadImages = [
  "/images/cad-app/cad-1.png",
  "/images/cad-app/cad-2.png",
  "/images/cad-app/cad-3.png",
  "/images/cad-app/cad-4.png",
  "/images/cad-app/cad-5.png",
];

const freshRouteImages = [
  "/images/fresh-route/fresh-route-1.png",
  "/images/fresh-route/fresh-route-2.png",
  "/images/fresh-route/fresh-route-3.png",
  "/images/fresh-route/fresh-route-4.png",
  "/images/fresh-route/fresh-route-5.png",
];

const projects: Project[] = [
  {
    index: "01",
    icon: Truck,
    name: "FreshRoute",
    tagline: "Smart logistics & delivery management system",
    body: "A web and mobile platform for fleet, delivery, and route management. Bin-packing and spatial clustering decide how deliveries get grouped, PostGIS handles the geography, and Socket.IO keeps every vehicle's position live on the map.",
    stack: ["React", "Node.js", "PostgreSQL", "PostGIS", "Socket.IO", "Google Maps API"],
    images: freshRouteImages,
  },
  {
    index: "02",
    icon: Receipt,
    name: "AI Expense Analyzer",
    tagline: "Full-stack finance tool with an AI that reads receipts",
    body: "Upload a receipt and Gemini AI turns it into a categorised expense — recurring bills, budgets, and real-time alerts included. A streaming chat assistant answers questions about your own spending over SSE, and everything sits behind JWT auth.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Prisma", "Gemini AI"],
    images: expenseImages,
  },
  {
    index: "03",
    icon: BookOpen,
    name: "AI Learning Companion",
    tagline: "A browser extension that studies alongside you",
    body: "Feed it a video, article, or PDF and it pulls out the key points — summaries, flashcards, and auto-generated quizzes, plus topic detection so it knows what you're actually learning.",
    stack: ["Python", "FastAPI", "AI APIs", "Prompt Engineering"],
    images: learningImages,
  },
  {
    index: "04",
    icon: CalendarDays,
    name: "Smart Campus Booking System",
    tagline: "Role-based resource booking for campus facilities",
    body: "A full-stack booking platform for study rooms, laboratories and badminton courts. Role-based access controls decide who can book, approve and manage, while real-time updates keep every slot's availability in sync the moment a booking lands. Next.js drives the front end, FastAPI the API behind JWT auth, and the whole stack ships in Docker.",
    stack: ["Next.js", "FastAPI", "Tailwind CSS", "PostgreSQL", "JWT Auth", "Docker", "WebSockets"],
    Art: CampusArt,
  },
  {
    index: "05",
    icon: Shapes,
    name: "2D CAD Application",
    tagline: "Draw, fill, rotate and mirror — rendered in OpenGL",
    body: "A from-scratch vector drawing tool built in C++ with OpenGL. Shapes can be drawn, filled with any colour, rotated and mirrored in real time, with Sutherland–Cohen clipping and polygon algorithms driving the selection, trimming and rendering pipeline.",
    stack: ["C++", "OpenGL", "Polygon Algorithms", "Clipping Algorithms"],
    images: cadImages,
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="label-tag mb-4">Selected work</p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Selected work, built end to end
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-8">
          {projects.map((p, i) => {
            const Icon = p.icon;
            const Art = p.Art;
            const reversed = i % 2 === 1;

            return (
              <Reveal key={p.name} delay={i * 0.12}>
                <article className="glass glare-sweep animated-border !rounded-3xl p-6 md:p-10 transition-all duration-300 hover:!border-white/[0.12]">
                  <div className="relative">
                    <span
                      className="pointer-events-none absolute -top-4 select-none font-display text-[8rem] leading-none text-white/[0.02] md:text-[10rem]"
                      style={reversed ? { right: 0 } : { left: 0 }}
                      aria-hidden="true"
                    >
                      {p.index}
                    </span>

                    <div
                      className={`relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 md:items-center ${
                        reversed ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      <TiltPanel
                        className={p.images ? "aspect-video w-full" : "aspect-[4/3] w-full"}
                      >
                        <div className="glass !rounded-2xl h-full w-full overflow-hidden">
                          {p.images ? (
                            <Gallery images={p.images} alt={`${p.name} screenshot`} />
                          ) : Art ? (
                            <Art />
                          ) : null}
                        </div>
                      </TiltPanel>

                      <div>
                        <div className="flex items-center gap-3">
                          <div className="glass-pill flex h-8 w-8 items-center justify-center">
                            <Icon size={16} className="text-signal" />
                          </div>
                        </div>
                        <h3 className="mt-5 font-display text-2xl font-bold text-white md:text-3xl">
                          {p.name}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-teal">{p.tagline}</p>
                        <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-mist">
                          {p.body}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="glass !rounded-lg label-tag px-3 py-1.5 text-white/70 !text-[10px]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
