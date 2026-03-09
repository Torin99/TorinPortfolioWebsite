"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hero } from "@/resources/content";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1"
          >
            <p className="text-text-muted text-lg mb-3">{hero.greeting}</p>

            <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6">
              {hero.name}
            </h1>

            <div className="h-10 mb-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-xl sm:text-2xl text-accent font-medium"
                >
                  {hero.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-text-muted text-lg max-w-xl leading-relaxed">
              {hero.bio}
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium
                  bg-accent text-white rounded-md hover:bg-accent-hover
                  transition-colors duration-200"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium
                  text-text border border-border rounded-md hover:bg-sand
                  transition-colors duration-200"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-shrink-0"
          >
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full md:rounded-2xl bg-sand/50 border border-border/60 overflow-hidden mx-auto md:mx-0">
              {hero.profileImage ? (
                <img
                  src={hero.profileImage}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-text-muted/40"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
