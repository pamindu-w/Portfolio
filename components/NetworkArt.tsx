"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 60, y: 60 },
  { x: 220, y: 40 },
  { x: 340, y: 140 },
  { x: 160, y: 190 },
  { x: 40, y: 260 },
  { x: 260, y: 290 },
  { x: 360, y: 250 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 3],
  [3, 2],
  [3, 4],
  [3, 5],
  [5, 6],
  [2, 6],
];

export default function NetworkArt() {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      className="w-full h-auto max-w-sm"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#2A3348"
          strokeWidth={1.2}
        />
      ))}

      {edges.slice(0, 4).map(([a, b], i) => (
        <motion.circle
          key={`pulse-${i}`}
          r={3}
          fill="#FF6A3D"
          initial={{
            cx: nodes[a].x,
            cy: nodes[a].y,
            opacity: 0,
          }}
          animate={{
            cx: [nodes[a].x, nodes[b].x],
            cy: [nodes[a].y, nodes[b].y],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.4,
            delay: i * 0.9,
            repeat: Infinity,
            repeatDelay: 2.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 3 ? 7 : 5}
          fill={i === 3 ? "#FF6A3D" : "#0D1220"}
          stroke={i === 3 ? "#FF6A3D" : "#4FD6C4"}
          strokeWidth={1.5}
        />
      ))}
    </svg>
  );
}
