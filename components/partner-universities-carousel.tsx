"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const partners = [
  { name: "Rayat Bahra University", location: "Mohali, Punjab", image: "/home/partner-rbu.png", href: "/campuses/mohali/" },
  { name: "Rayat Bahra Professional University", location: "Hoshiarpur, Punjab", image: "/home/partner-rbpu.png", href: "/campuses/hoshiarpur/" },
  { name: "Bahra University", location: "Waknaghat, Himachal Pradesh", image: "/home/partner-bahra.png", href: "/campuses/shimla-hills/" },
  { name: "Scope Global Skills University", location: "Bhopal, Madhya Pradesh", image: "/home/partner-scope.png", href: "/campuses/bhopal/" },
];

const slides = [...partners, ...partners, ...partners];

export function PartnerUniversitiesCarousel() {
  const [position, setPosition] = useState(4);
  const [visibleCards, setVisibleCards] = useState(3);
  const [transitioning, setTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const updateVisible = () => setVisibleCards(window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3);
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const move = useCallback((direction: number) => {
    setTransitioning(true);
    setPosition(current => current + direction);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => move(1), 3000);
    return () => window.clearInterval(timer);
  }, [move, paused]);

  const resetLoop = () => {
    if (position >= 8 || position <= 3) {
      setTransitioning(false);
      setPosition(current => current >= 8 ? current - 4 : current + 4);
      requestAnimationFrame(() => requestAnimationFrame(() => setTransitioning(true)));
    }
  };

  const leadingCards = visibleCards === 3 ? 1 : 0;
  const shift = position - leadingCards;

  return <div className="home-partner-carousel" role="region" aria-roledescription="carousel" aria-label="Partner universities" onFocus={() => setPaused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false); }} onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={event => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1); touchStart.current = null; }}>
    <button className="home-partner-arrow home-partner-arrow--prev" type="button" aria-label="Previous university" onClick={() => move(-1)}><span aria-hidden="true">&#8249;</span></button>
    <div className="home-partner-viewport">
      <div className={`home-partner-track${transitioning ? " is-transitioning" : ""}`} style={{ transform: `translateX(-${shift * (100 / 12)}%)` }} onTransitionEnd={resetLoop}>
        {slides.map((partner, index) => {
          const featured = index === position + (visibleCards === 3 ? 0 : visibleCards === 2 ? 1 : 0);
          const hidden = index < shift || index >= shift + visibleCards;
          return <article className={`home-partner-card${featured ? " is-featured" : ""}`} key={`${partner.name}-${index}`} aria-hidden={hidden} inert={hidden}>
            <Image className="home-partner-logo" src={partner.image} alt={`${partner.name} logo`} width={240} height={110} />
            <h3>{partner.name}</h3>
            <p className="home-partner-location"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18s6-5.7 6-10a6 6 0 1 0-12 0c0 4.3 6 10 6 10Z"/><circle cx="10" cy="8" r="2"/></svg>{partner.location}</p>
            <Link className="home-partner-know-more" href={partner.href}>Know More <span aria-hidden="true">&rarr;</span></Link>
          </article>;
        })}
      </div>
    </div>
    <button className="home-partner-arrow home-partner-arrow--next" type="button" aria-label="Next university" onClick={() => move(1)}><span aria-hidden="true">&#8250;</span></button>
  </div>;
}
