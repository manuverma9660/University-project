"use client";

import Image from "next/image";
import styles from "./research-patent-slider.module.css";
import { useVisibleAutoplay } from "./use-visible-autoplay";

const patents = [
  { src: "/research/patents/lit-antioxidant.webp", alt: "LIT-Antioxidant certificate of registration of design displayed on the ITHS website" },
  { src: "/research/patents/student-mindset.webp", alt: "Patent application publication for a method assessing students' mindset and psychological stress before and after examinations" },
];

export function ResearchPatentSlider() {
  const { ref, playing } = useVisibleAutoplay<HTMLDivElement>();
  return <div ref={ref} data-playing={playing} className={`home-research-visual ${styles.slider}`} role="region" aria-roledescription="carousel" aria-label="ITHS patents and research documents">
    <div className={styles.viewport}>
      <div className={styles.track} aria-live="off">
        {[0, 1].map(copy => <div className={styles.group} key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {patents.map(patent => <div className={styles.slide} key={patent.src}>
            <Image src={patent.src} alt={copy === 1 ? "" : patent.alt} fill sizes="(max-width: 480px) 240px, 350px" loading="eager" />
          </div>)}
        </div>)}
      </div>
    </div>
  </div>;
}
