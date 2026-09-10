"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface GalleryProps {
  images: string[];
  alt?: string;
}

const AUTOPLAY_MS = 3000;

export default function Gallery({ images, alt = "Screenshot" }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, goNext]);

  return (
    <div
      className="group relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="relative h-full w-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,26,46,0.5) 0%, transparent 30%)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute right-3 top-3 rounded-lg bg-ink/60 px-2 py-1 font-mono text-[10px] tracking-widest text-white/80 backdrop-blur-sm">
        {index + 1} / {images.length}
      </div>

      <button
        onClick={goPrev}
        aria-label="Previous screenshot"
        className="glass-pill absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-white/70 opacity-0 transition-all duration-300 hover:text-white group-hover:opacity-100"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={goNext}
        aria-label="Next screenshot"
        className="glass-pill absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-white/70 opacity-0 transition-all duration-300 hover:text-white group-hover:opacity-100"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 bg-teal shadow-[0_0_8px_rgba(79,214,196,0.6)]"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}