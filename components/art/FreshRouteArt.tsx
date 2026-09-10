"use client";

import { motion } from "framer-motion";

const stops = [
  { x: 60, y: 220 },
  { x: 150, y: 100 },
  { x: 250, y: 160 },
  { x: 340, y: 70 },
];

const path = stops.map((s, i) => `${i === 0 ? "M" : "L"} ${s.x} ${s.y}`).join(" ");

export default function FreshRouteArt() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="fr-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#232C40" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="280" fill="url(#fr-grid)" />

      <path d={path} stroke="#2A3348" strokeWidth={2} fill="none" strokeDasharray="5 6" />

      <motion.path
        d={path}
        stroke="#FF6A3D"
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />

      {stops.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={i === stops.length - 1 ? 7 : 5}
          fill={i === stops.length - 1 ? "#FF6A3D" : "#0D1220"}
          stroke={i === stops.length - 1 ? "#FF6A3D" : "#4FD6C4"}
          strokeWidth={2}
        />
      ))}

      <motion.rect
        animate={{
          x: stops.map((s) => s.x - 9),
          y: stops.map((s) => s.y - 6),
        }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        width="18"
        height="12"
        rx="2"
        fill="#EEECE6"
      />
      <motion.circle
        animate={{
          cx: stops.map((s) => s.x - 5),
          cy: stops.map((s) => s.y + 7),
        }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        r="2.4"
        fill="#0D1220"
      />
      <motion.circle
        animate={{
          cx: stops.map((s) => s.x + 4),
          cy: stops.map((s) => s.y + 7),
        }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        r="2.4"
        fill="#0D1220"
      />

      <motion.circle
        cx={stops[3].x}
        cy={stops[3].y}
        r={7}
        fill="none"
        stroke="#FF6A3D"
        strokeWidth={1.5}
        initial={{ opacity: 0.7, scale: 1 }}
        animate={{ opacity: 0, scale: 2.4 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />
    </svg>
  );
}
