const items = [
  "Full-stack Development",
  "Python",
  "React.js",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "TypeScript",
  "FastAPI",
  "AI / LLM",
  "Prisma",
  "Socket.IO",
  "Tailwind CSS",
];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <div
      className={`flex shrink-0 items-center gap-6 pr-6 ${
        hidden ? "aria-hidden" : ""
      }`}
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <span key={item} className="flex items-center gap-6 whitespace-nowrap">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/30">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-signal/60" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="marquee relative overflow-hidden py-10"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}