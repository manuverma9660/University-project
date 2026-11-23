"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useVisibleAutoplay } from "./use-visible-autoplay";

export const campusLifeSlideGroups = {
  featured: [
    "/home/campus-life-picked/imgi_31_813931439_122291549624158140_7584782699489938623_n.webp",
    "/home/campus-life-picked/Clinical-Embryology-Certification-Course-Students-Chandigarh.webp",
  ],
  community: [
    "/home/campus-life-picked/Clinical-Embryology-Course-Certificate-Distribution-Ceremony.webp",
    "/home/campus-life-picked/473779348_122193382352158140_6226905599025821921_n.webp",
    "/home/campus-life-picked/IMG-20250825-WA0009.webp",
    "/home/campus-life-picked/IMG-20250825-WA0006.webp",
  ],
  studentLearning: [
    "/home/campus-life-picked/Clinical-Embryology-Students-Group-Activity-in-Chandigarh-Institute.webp",
    "/home/campus-life-picked/475166652_122195620580158140_5892494980320575969_n.webp",
    "/home/campus-life-picked/474939371_122195620796158140_8624839687051595811_n.webp",
    "/home/campus-life-picked/473711899_122193383012158140_2422036472395053674_n.webp",
    "/home/campus-life-picked/IMG-20250825-WA0007.webp",
    "/home/campus-life-picked/IMG-20250825-WA0010.webp",
    "/home/campus-life-picked/IMG-20250825-WA0019.webp",
  ],
  learning: [
    "/home/campus-life-picked/IMG-20250825-WA0021.webp",
    "/home/campus-life-picked/IMG-20250825-WA0007.webp",
    "/home/campus-life-picked/IMG-20250825-WA0010.webp",
    "/home/campus-life-picked/IMG-20250825-WA0019.webp",
    "/home/campus-life-picked/475166652_122195620580158140_5892494980320575969_n.webp",
    "/home/campus-life-picked/474939371_122195620796158140_8624839687051595811_n.webp",
    "/home/campus-life-picked/473711899_122193383012158140_2422036472395053674_n.webp",
  ],
} as const;

type SlideDirection = "left" | "right" | "up" | "down";
const fallbackSlideGroups: Record<SlideDirection, readonly string[]> = {
  left: campusLifeSlideGroups.featured,
  down: campusLifeSlideGroups.community,
  up: campusLifeSlideGroups.studentLearning,
  right: campusLifeSlideGroups.learning,
};

export function CampusLifeSlideshow({ slides, direction = "left", startDelayMs = 0 }: { slides?: readonly string[]; direction?: SlideDirection; startDelayMs?: number }) {
  const { ref: slideshowRef, playing } = useVisibleAutoplay<HTMLDivElement>();
  // Keep each tile on its own photo set even during a page refresh without props.
  const safeSlides = slides?.length ? slides : fallbackSlideGroups[direction];
  const movesPositive = direction === "right" || direction === "down";
  const [activeSlide, setActiveSlide] = useState(() => movesPositive ? safeSlides.length : 0);
  const [isResetting, setIsResetting] = useState(false);
  const isVertical = direction === "up" || direction === "down";
  const orderedSlides = safeSlides.map((_, index) => {
    const slideOffset = movesPositive ? -index : index;
    return safeSlides[(slideOffset + safeSlides.length) % safeSlides.length];
  });
  const loopedSlides = movesPositive ? [...orderedSlides, ...orderedSlides, orderedSlides[0]] : [...orderedSlides, orderedSlides[0]];
  const step = -activeSlide * (100 / loopedSlides.length);
  const trackStyle = isVertical
    ? { height: `${loopedSlides.length * 100}%`, transform: `translateY(${step}%)` }
    : { width: `${loopedSlides.length * 100}%`, transform: `translateX(${step}%)` };

  useEffect(() => {
    if (!playing) return;
    let interval: number | undefined;
    const startTimer = window.setTimeout(() => {
      interval = window.setInterval(() => {
          setActiveSlide((current) => movesPositive ? Math.max(0, current - 1) : Math.min(safeSlides.length, current + 1));
      }, 5000);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startTimer);
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, [movesPositive, startDelayMs, safeSlides.length, playing]);

  useEffect(() => {
    const reachedLoopEnd = movesPositive ? activeSlide === 0 : activeSlide === safeSlides.length;
    if (!reachedLoopEnd) return;

    const resetTimer = window.setTimeout(() => {
      setIsResetting(true);
      setActiveSlide(movesPositive ? safeSlides.length : 0);
      window.requestAnimationFrame(() => setIsResetting(false));
    }, 900);

    return () => window.clearTimeout(resetTimer);
  }, [activeSlide, movesPositive, safeSlides.length]);

  return (
    <div ref={slideshowRef} className="home-life-slideshow" aria-hidden="true">
      <div
        className={`home-life-track${isVertical ? " is-vertical" : ""}${isResetting ? " is-resetting" : ""}`}
        style={trackStyle}
      >
        {loopedSlides.map((src, index) => (
          <div className="home-life-slide" key={`${src}-${index}`} style={isVertical ? { height: `${100 / loopedSlides.length}%` } : { width: `${100 / loopedSlides.length}%` }}>
            <Image src={src} alt="" fill loading="eager" sizes="(max-width: 760px) 100vw, 30vw" />
          </div>
        ))}
      </div>
    </div>
  );
}
