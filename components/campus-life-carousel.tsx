"use client";

import { SiteIcon } from "@/components/site-icon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { campusLifeSlideGroups } from "@/components/campus-life-slideshow";

const photos = [
  ...campusLifeSlideGroups.featured,
  ...campusLifeSlideGroups.community,
  ...campusLifeSlideGroups.studentLearning,
  ...campusLifeSlideGroups.learning,
];

const photoCaptions = [
  "Campus gathering",
  "Students at ITHS",
  "Learning together",
  "Student activities",
  "Campus community",
  "Health awareness",
  "Academic ceremony",
  "Celebrating together",
  "Community outreach",
  "Research in the community",
  "Hands-on learning",
  "A day at ITHS",
  "Campus workshop",
  "Learning beyond class",
];

export function CampusLifeCarousel() {
  const [photoOrder, setPhotoOrder] = useState<number[]>(() => photos.map((_, index) => index));
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const timeoutRef = useRef<number | undefined>(undefined);

  const move = (way: "left" | "right") => {
    if (direction) return;
    setDirection(way);
    timeoutRef.current = window.setTimeout(() => {
      setPhotoOrder((current) =>
        way === "left"
          ? [...current.slice(1), current[0]]
          : [current[current.length - 1], ...current.slice(0, -1)],
      );
      setDirection(null);
    }, 780);
  };

  useEffect(() => {
    const timer = window.setInterval(() => move("left"), 4300);
    return () => {
      window.clearInterval(timer);
      if (timeoutRef.current !== undefined) window.clearTimeout(timeoutRef.current);
    };
  });

  return (
    <div className="home-life-carousel" aria-label="ITHS campus life photographs">
      <div className="home-life-viewport">
        <div className={`home-life-carousel-track${direction ? ` is-moving-${direction}` : ""}`}>
          {photoOrder.map((photoIndex, position) => (
            <Link
              className={`home-life-carousel-card${position === 1 ? " is-featured" : ""}`}
              href={position === 1 ? "/events/" : "/campus-life/"}
              key={photos[photoIndex]}
              aria-label={`${photoCaptions[photoIndex]} — explore campus life`}
            >
              <Image
                src={photos[photoIndex]}
                alt={photoCaptions[photoIndex]}
                fill
                sizes="(max-width: 600px) 82vw, (max-width: 900px) 42vw, 27vw"
                loading={position < 5 ? "eager" : "lazy"}
              />
              <span className="home-life-card-shade" aria-hidden="true" />
              <span className="home-life-card-caption">{photoCaptions[photoIndex]}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="home-life-controls">
        <span>Moments from campus life at ITHS</span>
        <div>
          <button type="button" onClick={() => move("right")} aria-label="Previous campus photos"><SiteIcon name="arrowLeft" /></button>
          <button type="button" onClick={() => move("left")} aria-label="Next campus photos"><SiteIcon name="arrowRight" /></button>
        </div>
      </div>
    </div>
  );
}
