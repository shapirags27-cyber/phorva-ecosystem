"use client";

import { useEffect } from "react";

const SELECTORS = [
  ".section-heading",
  ".intro-bottom",
  ".layers-top",
  ".layer-row",
  ".products-heading",
  ".product-card",
  ".forge-visual",
  ".forge-copy",
  ".audience-heading",
  ".audience-card",
  ".testing-section > div",
  ".loop-heading",
  ".loop-card",
  ".community-inner",
  ".footer-main",
];

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTORS.join(","))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => {
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).filter((c) => c.className === el.className)
        : [];
      const index = Math.max(0, siblings.indexOf(el));
      el.style.setProperty("--d", `${Math.min(index, 4) * 90}ms`);
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
