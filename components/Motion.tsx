"use client";

import { useEffect } from "react";

export function Motion({ intro = true }: { intro?: boolean }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, { opacity: 0, y: 28, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 91%", once: true } });
        });
      });
    })();
    return () => { cancelled = true; ctx?.revert(); };
  }, []);
  return intro ? <div className="intro" aria-hidden="true"><span>KŌEN</span><i /></div> : null;
}
