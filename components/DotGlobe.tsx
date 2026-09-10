"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

const SPIN_DEG_PER_MS = 360 / 40000;

function generateWorldDots(): { lat: number; lng: number }[] {
  const dots: { lat: number; lng: number }[] = [];

  const continentPaths: [number, number, number, number][] = [
    [10, 75, 60, 30],
    [35, 130, 35, 45],
    [-10, 125, 45, 30],
    [5, -100, 55, 55],
    [-35, 20, 55, 35],
    [55, 60, 30, 40],
    [-5, -60, 20, 15],
    [65, -150, 15, 40],
    [20, 40, 25, 10],
  ];

  const seededRandom = (seed: number) => {
    let s = seed;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  };

  const rand = seededRandom(42);

  continentPaths.forEach(([centerLat, centerLng, spreadLat, spreadLng]) => {
    const count = Math.floor(spreadLat * spreadLng * 0.12);
    for (let i = 0; i < count; i++) {
      const lat = centerLat + (rand() - 0.5) * spreadLat;
      const lng = centerLng + (rand() - 0.5) * spreadLng;
      dots.push({ lat, lng });
    }
  });

  for (let lat = -80; lat <= 80; lat += 18) {
    for (let lng = -180; lng <= 180; lng += 22) {
      const onLand = continentPaths.some(
        ([cLat, cLng, sLat, sLng]) =>
          Math.abs(lat - cLat) < sLat * 0.5 &&
          Math.abs(lng - cLng) < sLng * 0.5
      );
      if (!onLand) {
        dots.push({
          lat: lat + (rand() - 0.5) * 8,
          lng: lng + (rand() - 0.5) * 8,
        });
      }
    }
  }

  return dots;
}

function rotateAroundY(p: Point3D, deg: number): Point3D {
  const rad = (deg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    x: p.x * cos + p.z * sin,
    y: p.y,
    z: -p.x * sin + p.z * cos,
  };
}

export default function DotGlobe() {
  const worldDots = useMemo(() => generateWorldDots(), []);
  const [rot, setRot] = useState(0);
  const rotRef = useRef(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useAnimationFrame((_, delta) => {
    if (reducedMotion.current) return;
    rotRef.current = (rotRef.current + delta * SPIN_DEG_PER_MS) % 360;
    setRot(rotRef.current);
  });

  const projectedDots = worldDots.map(({ lat, lng }, i) => {
    const p0 = {
      x: 101 * Math.cos((lat * Math.PI) / 180) * Math.sin((lng * Math.PI) / 180),
      y: -101 * Math.sin((lat * Math.PI) / 180),
      z: 101 * Math.cos((lat * Math.PI) / 180) * Math.cos((lng * Math.PI) / 180),
    };
    const p = rotateAroundY(p0, rot);
    const scale = (p.z + 120) / 240;
    if (scale < 0.05) return null;

    const isFront = p.z > 30;
    const isLand =
      (lat > -10 && lat < 65 && lng > 70 && lng < 135) ||
      (lat > 5 && lat < 60 && lng > -15 && lng < 55) ||
      (lat > -40 && lat < 15 && lng > -80 && lng < -35) ||
      (lat > -40 && lat < 35 && lng > 15 && lng < 55) ||
      (lat > 55 && lat < 75 && lng > -170 && lng < -130) ||
      (lat > -10 && lat < 10 && lng > 95 && lng < 140);

    return {
      x: p.x * scale,
      y: p.y * scale,
      r: (isLand ? 1.4 : 0.7) * scale,
      fill: isLand ? "#4FD6C4" : "rgba(255,106,61,0.6)",
      isFront,
      scale,
      i,
    };
  });

  const latRings = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 6;
    const points: string[] = [];
    for (let t = 0; t <= 64; t++) {
      const a = (t / 64) * Math.PI * 2;
      const p = rotateAroundY(
        {
          x: Math.sin(a) * 100,
          y: Math.cos(a) * 100 * Math.cos(angle),
          z: Math.cos(a) * 100 * Math.sin(angle),
        },
        rot
      );
      const scale = (p.z + 120) / 240;
      if (scale > 0) points.push(`${p.x * scale},${p.y * scale}`);
    }
    latRings.push(points.join(" "));
  }

  const lngRings = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 8;
    const points: string[] = [];
    for (let t = 0; t <= 64; t++) {
      const a = (t / 64) * Math.PI;
      const p = rotateAroundY(
        {
          x: 100 * Math.sin(a) * Math.sin(angle),
          y: 100 * Math.cos(a),
          z: 100 * Math.sin(a) * Math.cos(angle),
        },
        rot
      );
      const scale = (p.z + 120) / 240;
      if (scale > 0) points.push(`${p.x * scale},${p.y * scale}`);
    }
    lngRings.push(points.join(" "));
  }

  return (
    <motion.svg
      viewBox="-120 -120 240 240"
      className="w-full h-auto max-w-[280px]"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="globeGlow" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#4FD6C4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0D1220" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dotGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4FD6C4" />
          <stop offset="100%" stopColor="#FF6A3D" />
        </radialGradient>
      </defs>

      <circle cx="0" cy="0" r="100" fill="url(#globeGlow)" />

      <g>
        {latRings.map((points, i) => (
          <polyline
            key={`lat-${i}`}
            points={points}
            fill="none"
            stroke="rgba(79,214,196,0.12)"
            strokeWidth="0.5"
          />
        ))}

        {lngRings.map((points, i) => (
          <polyline
            key={`lng-${i}`}
            points={points}
            fill="none"
            stroke="rgba(79,214,196,0.12)"
            strokeWidth="0.5"
          />
        ))}

        {projectedDots.map((d) => {
          if (!d) return null;
          return (
            <motion.circle
              key={`dot-${d.i}`}
              cx={d.x}
              cy={d.y}
              r={d.r}
              fill={d.fill}
              initial={{ opacity: 0 }}
              animate={{
                opacity: d.isFront ? [0.3, 0.8, 0.3] : 0.15 * d.scale,
              }}
              transition={
                d.isFront
                  ? {
                      duration: 2 + (d.i % 3) * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (d.i % 7) * 0.3,
                    }
                  : { duration: 0 }
              }
            />
          );
        })}
      </g>

      <circle
        cx="0"
        cy="0"
        r="100"
        fill="none"
        stroke="rgba(79,214,196,0.2)"
        strokeWidth="1"
      />
    </motion.svg>
  );
}