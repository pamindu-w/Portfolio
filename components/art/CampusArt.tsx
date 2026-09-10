"use client";

import { motion } from "framer-motion";

const rooms = [
  { y: 42, label: "Study room · 03" },
  { y: 96, label: "Laboratory · B" },
  { y: 150, label: "Badminton · 01" },
];

const rows = [
  { y: 40, booked: true },
  { y: 60, booked: true },
  { y: 80, booked: true },
  { y: 94, booked: true },
  { y: 114, booked: false },
  { y: 148, booked: false },
  { y: 168, booked: true },
];

export default function CampusArt() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="cb-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#232C40" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="280" fill="url(#cb-grid)" />

      {rooms.map((r) => (
        <text key={r.label} x={18} y={r.y - 12} fill="#9AA3B5" fontSize="9">
          {r.label}
        </text>
      ))}

      {rows.map((s, i) => (
        <g key={i}>
          <motion.rect
            x={18}
            y={s.y}
            width={330}
            height={18}
            rx="3"
            fill={s.booked ? "#10242B" : "#0D1220"}
            stroke={s.booked ? "#4FD6C4" : "#2A3348"}
            strokeWidth={1}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
          />
          <text x={26} y={s.y + 12} fill={s.booked ? "#4FD6C4" : "#9AA3B5"} fontSize="9">
            {s.booked ? "Booked" : "Open"}
          </text>
          {s.booked ? (
            <path
              d={`M ${18 + 330 - 22} ${s.y + 9} l -4.5 -4.5 l 8 -8`}
              stroke="#4FD6C4"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <motion.circle
              cx={18 + 330 - 16}
              cy={s.y + 9}
              r={3}
              fill="none"
              stroke="#FF6A3D"
              strokeWidth={1.5}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0.2, scale: 2.2 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
            />
          )}
        </g>
      ))}

      <motion.rect
        x={350}
        y={40}
        width={12}
        height={18}
        rx="2"
        fill="#FF6A3D"
        animate={{ y: [40, 60, 80, 80, 94, 94, 114, 114, 148, 148, 168] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.circle
        cx={356}
        cy={40}
        r={4}
        fill="none"
        stroke="#FF6A3D"
        strokeWidth={1.5}
        initial={{ opacity: 0.7, scale: 1 }}
        animate={{ opacity: 0, scale: 2.6 }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
      />
    </svg>
  );
}