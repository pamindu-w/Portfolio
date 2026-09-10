"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  decimals?: number;
  duration?: number;
  suffix?: string;
}

export default function CountUp({
  to,
  decimals = 0,
  duration = 1.6,
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;

    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = value.toFixed(decimals) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [inView, to, decimals, duration, suffix]);

  return (
    <span ref={ref} suppressHydrationWarning>
      {(0).toFixed(decimals) + suffix}
    </span>
  );
}