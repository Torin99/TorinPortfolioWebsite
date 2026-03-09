"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/resources/content";

const tabs = [
  { key: "all", label: "All" },
  { key: "tech", label: "Projects" },
  { key: "event", label: "Events" },
  { key: "org", label: "Organizations" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const filtered = activeTab === "all"
    ? projects
    : projects.filter((p) => p.type === activeTab);

  return (
    <section id="projects" className="pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold tracking-tight mb-10 text-center"
        >
          Projects
        </motion.h2>

        <div className="flex justify-center gap-1 mb-14">
          {tabs.filter((tab) => tab.key === "all" || projects.some((p) => p.type === tab.key)).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.key
                  ? "text-accent"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
          >
            {filtered.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i % 2 === 1 ? 0.15 : 0 }}
                className={`group ${i % 2 === 1 ? "md:mt-12" : ""}`}
              >
                <div className="p-6 rounded-lg border border-border/60 hover:border-accent/30 transition-colors duration-300">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>

                  {item.type === "event" && (
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium">
                        {item.role}
                      </span>
                      <span className="text-xs text-text-muted">
                        {item.date}
                      </span>
                    </div>
                  )}

                  {item.type === "org" && (
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-medium">
                        {item.role}
                      </span>
                      <span className="text-xs text-text-muted">
                        {item.period}
                      </span>
                    </div>
                  )}

                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.type === "tech" && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full bg-sand/60 text-text-muted font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors duration-200"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        {item.type === "tech" ? "Live" : "View"}
                      </a>
                    )}
                    {item.type === "tech" && item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors duration-200"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
