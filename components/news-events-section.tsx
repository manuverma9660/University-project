"use client";

import { useEffect, useState } from "react";

const nutritionArticle = "https://www.translationalhealthscience.in/nutrition-matters-2026/";
const nutritionPhotos = [
  ["Nutrigenetics-Week-Celebration-17-1024x576.webp", "Students presenting healthy food at Nutrition Matters 2026"],
  ["Nutrigenetics-Week-Celebration-18-1024x576.webp", "Nutrition Week expert session at ITHS"],
  ["Nutrigenetics-Week-Celebration-15-576x1024.webp", "Student entry at the Nutrition Week competition"],
  ["Nutrigenetics-Week-Celebration-16-1024x576.webp", "Students and faculty at the Nutrition Week event"],
  ["Nutrigenetics-Week-Celebration-14-576x1024.webp", "Nutrition Matters student presentation"],
  ["Nutrigenetics-Week-Celebration-13-1024x576.webp", "ITHS students attend an academic event"],
  ["Nutrigenetics-Week-Celebration-12-1024x576.webp", "Nutrition Week activities at ITHS Chandigarh"],
  ["Nutrigenetics-Week-Celebration-11-1024x576.webp", "Students take part in a campus competition"],
  ["Nutrigenetics-Week-Celebration-10-1024x576.webp", "Nutrition Matters 2026 campus gathering"],
  ["Nutrigenetics-Week-Celebration-9-1024x576.webp", "ITHS Nutrition Week lecture"],
  ["Nutrigenetics-Week-Celebration-8-1024x576.webp", "Students share nutrition science posters"],
  ["Nutrigenetics-Week-Celebration-7-1024x576.webp", "Nutrition Week participants at ITHS"],
].map(([file, alt]) => ({
  image: `https://www.translationalhealthscience.in/wp-content/uploads/2026/09/${file}`,
  alt,
}));

export function NewsEventsSection() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  useEffect(() => {
    if (activePhoto === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowRight") setActivePhoto(current => current === null ? null : (current + 1) % nutritionPhotos.length);
      if (event.key === "ArrowLeft") setActivePhoto(current => current === null ? null : (current - 1 + nutritionPhotos.length) % nutritionPhotos.length);
    };
    document.body.classList.add("event-lightbox-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("event-lightbox-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePhoto]);

  return <section className="news-events-section" aria-label="ITHS events">
    <div className="news-events-gallery" aria-label="Nutrition Week event photos">
      {nutritionPhotos.map((photo, index) => <button className="news-events-gallery-photo" type="button" key={photo.image} aria-label={`Open photo ${index + 1}: ${photo.alt}`} onClick={() => setActivePhoto(index)}><img src={photo.image} alt={photo.alt} loading={index > 3 ? "lazy" : "eager"} /></button>)}
    </div>
    {activePhoto !== null && <div className="event-lightbox" role="dialog" aria-modal="true" aria-label="Event photo viewer" onMouseDown={event => { if (event.target === event.currentTarget) setActivePhoto(null); }}>
      <div className="event-lightbox-toolbar"><span>{activePhoto + 1} / {nutritionPhotos.length}</span><button type="button" onClick={() => setActivePhoto(null)} aria-label="Close photo viewer">×</button></div>
      <button className="event-lightbox-arrow event-lightbox-prev" type="button" aria-label="Previous photo" onClick={() => setActivePhoto((activePhoto - 1 + nutritionPhotos.length) % nutritionPhotos.length)}>‹</button>
      <figure className="event-lightbox-figure"><img src={nutritionPhotos[activePhoto].image} alt={nutritionPhotos[activePhoto].alt} /><figcaption>{nutritionPhotos[activePhoto].alt}</figcaption></figure>
      <button className="event-lightbox-arrow event-lightbox-next" type="button" aria-label="Next photo" onClick={() => setActivePhoto((activePhoto + 1) % nutritionPhotos.length)}>›</button>
    </div>}
  </section>;
}
