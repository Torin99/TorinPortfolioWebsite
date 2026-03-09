"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "@/resources/content";

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const images = gallery.concat(gallery);

  return (
    <section id="gallery" className="py-12 sm:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold tracking-tight text-center"
        >
          Gallery
        </motion.h2>
      </div>

      <div ref={containerRef} className="relative cursor-pointer">
        <div
          className={`flex gap-4 w-max animate-marquee ${
            hoveredIndex !== null ? "paused" : ""
          }`}
        >
          {images.map((item, i) => {
            const realIndex = i % gallery.length;
            const isHovered = hoveredIndex === realIndex;
            const someoneHovered = hoveredIndex !== null;

            return (
              <div
                key={i}
                className="relative flex-shrink-0 w-72 h-48 sm:w-80 sm:h-56 rounded-lg overflow-hidden"
                onMouseEnter={() => setHoveredIndex(realIndex)}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{
                    filter:
                      someoneHovered && !isHovered ? "blur(3px)" : "blur(0px)",
                    opacity: someoneHovered && !isHovered ? 0.5 : 1,
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="pointer-events-none absolute z-20 max-w-xs px-4 py-3 rounded-lg bg-bg/90 backdrop-blur-md border border-border/60 shadow-lg"
              style={{
                left: tooltip.x,
                top: tooltip.y - 80,
              }}
            >
              <p className="text-sm font-semibold text-text font-[family-name:var(--font-heading)]">
                {gallery[hoveredIndex].title}
              </p>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                {gallery[hoveredIndex].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
