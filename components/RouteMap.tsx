"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 40, y: 300, label: "6.79°N 79.98°E", tag: "Horana" },
  { x: 190, y: 120, label: "6.79°N 79.90°E", tag: "Moratuwa" },
  { x: 360, y: 210, label: "in transit", tag: "FreshRoute" },
  { x: 500, y: 70, label: "delivered", tag: "AI Expense Analyzer" },
];

const path = `M ${nodes[0].x} ${nodes[0].y} L ${nodes[1].x} ${nodes[1].y} L ${nodes[2].x} ${nodes[2].y} L ${nodes[3].x} ${nodes[3].y}`;

export default function RouteMap() {
  return (
    <svg
      viewBox="0 0 560 340"
      fill="none"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {nodes.slice(0, -1).map((n, i) => {
        const next = nodes[i + 1];
        return (
          <motion.line
            key={i}
            x1={n.x}
            y1={n.y}
            x2={next.x}
            y2={next.y}
            stroke="#3A4256"
            strokeWidth={1.5}
            strokeDasharray="4 6"
          />
        );
      })}

      <motion.path
        d={path}
        stroke="#FF6A3D"
        strokeWidth={2.5}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
      />

      {nodes.map((n, i) => (
        <g key={i}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={i === nodes.length - 1 ? 7 : 5}
            fill={i === nodes.length - 1 ? "#FF6A3D" : "#0D1220"}
            stroke="#FF6A3D"
            strokeWidth={2}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.4 }}
          />
          <motion.text
            x={n.x}
            y={n.y - 16}
            textAnchor={i === 0 ? "start" : i === nodes.length - 1 ? "end" : "middle"}
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="#9AA3B5"
            initial={{ opacity: 0, y: n.y - 8 }}
            animate={{ opacity: 1, y: n.y - 16 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.4 }}
          >
            {n.tag}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}
