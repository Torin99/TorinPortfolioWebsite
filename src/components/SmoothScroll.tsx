"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      smoothWheel: true,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Soft snap: after scrolling stops, ease to the nearest section
    let snapTimeout: ReturnType<typeof setTimeout>;

    lenis.on("scroll", ({ velocity }: { velocity: number }) => {
      clearTimeout(snapTimeout);

      if (Math.abs(velocity) < 0.5) {
        snapTimeout = setTimeout(() => {
          const sections = document.querySelectorAll("section");
          const navHeight = 64;
          let closest: Element | null = null;
          let closestDist = Infinity;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const dist = Math.abs(rect.top - navHeight);
            if (dist < closestDist) {
              closestDist = dist;
              closest = section;
            }
          });

          if (closest && closestDist > 10 && closestDist < 300) {
            lenis.scrollTo(closest, {
              offset: -navHeight,
              duration: 1.2,
              easing: (t: number) => 1 - Math.pow(1 - t, 4),
            });
          }
        }, 150);
      }
    });

    // Handle anchor link clicks so Lenis scrolls to them
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }

      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.2 });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      clearTimeout(snapTimeout);
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
