"use client";

import { useEffect, useRef, useState } from "react";

/** Autoplay only while visible, in an active tab, and motion is welcome. */
export function useVisibleAutoplay<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const update = () => setPlaying(inView && !document.hidden && !preference.matches);
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(element);
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return { ref, playing };
}
