"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "pt-5" : "pt-0 opacity-0 pointer-events-none"
      }`}
    >
      <nav className="glass-pill flex items-center gap-1 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <a
          href="#"
          className="px-4 py-2 font-display text-sm font-semibold text-white transition-colors hover:text-signal"
        >
          PW
        </a>

        <div className="h-4 w-px bg-white/10" />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-mist hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="h-4 w-px bg-white/10 hidden md:block" />

        <a
          href="mailto:pamindupiyumaka@gmail.com"
          className="hidden rounded-full bg-signal/10 border border-signal/20 px-4 py-2 text-xs font-medium text-signal transition-all hover:bg-signal/20 md:inline-block"
        >
          Contact
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 glass-strong p-4 md:hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-mist hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
