"use client";

import { motion } from "framer-motion";
import { career } from "@/resources/content";

export function CareerSection() {
  return (
    <section id="career" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold tracking-tight mb-16 text-center"
        >
          Career
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-timeline" />

          <div className="space-y-12 md:space-y-16">
            {career.map((entry, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on the timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg z-10" />

                  {/* Content card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                    }`}
                  >
                    <span className="text-sm text-text-muted font-medium tracking-wide">
                      {entry.period}
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mt-1">
                      {entry.role}
                    </h3>
                    <p className="text-accent text-sm font-medium mt-0.5">
                      {entry.company}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed mt-3">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
