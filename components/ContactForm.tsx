"use client";

import { useState } from "react";
import MagneticButton from "./MagneticButton";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${name || "a visitor"}`
    );

    const body = encodeURIComponent(
      `${message}\n\n— ${name || "Anonymous"} (${email || "no email given"})`
    );

    window.location.href = `mailto:pamindupiyumaka@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-strong !rounded-3xl p-8 md:p-10 flex flex-col gap-5"
    >
      <div className="mb-2 flex items-center justify-between border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_10px_rgba(79,214,196,0.6)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/20">
          
        </span>
      </div>

      <div
        className={`transition-all duration-300 ${
          focused === "name" ? "translate-x-1" : ""
        }`}
      >
        <label
          htmlFor="name"
          className={`label-tag mb-2 block transition-colors duration-300 ${
            focused === "name" ? "text-teal" : ""
          }`}
        >
          Your name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
          onChange={(e) => setName(e.target.value)}
          placeholder="What should I call you?"
          className="w-full glass !rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-mist/50 focus:!border-teal/30 focus:shadow-[0_0_20px_rgba(79,214,196,0.06)]"
        />
      </div>

      <div
        className={`transition-all duration-300 ${
          focused === "email" ? "translate-x-1" : ""
        }`}
      >
        <label
          htmlFor="email"
          className={`label-tag mb-2 block transition-colors duration-300 ${
            focused === "email" ? "text-teal" : ""
          }`}
        >
          Your email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="so I can reply"
          className="w-full glass !rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-mist/50 focus:!border-teal/30 focus:shadow-[0_0_20px_rgba(79,214,196,0.06)]"
        />
      </div>

      <div
        className={`transition-all duration-300 ${
          focused === "message" ? "translate-x-1" : ""
        }`}
      >
        <label
          htmlFor="message"
          className={`label-tag mb-2 block transition-colors duration-300 ${
            focused === "message" ? "text-teal" : ""
          }`}
        >
          Your message
        </label>
        <textarea
          id="message"
          value={message}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you building?"
          rows={4}
          className="w-full resize-none glass !rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-mist/50 focus:!border-teal/30 focus:shadow-[0_0_20px_rgba(79,214,196,0.06)]"
        />
      </div>

      <MagneticButton strength={0.2} type="submit">
        <span className="group relative mt-2 block w-full overflow-hidden rounded-xl bg-gradient-to-r from-signal to-signal-dim px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,106,61,0.25)] sm:w-fit">
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative flex items-center justify-center gap-3">
            <span>Open in email</span>
            <span className="font-mono transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </span>
      </MagneticButton>

      
    </form>
  );
}
