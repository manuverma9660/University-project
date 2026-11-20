"use client";

import { useState } from "react";
import styles from "./home-notices.module.css";

// Events and announcements from the official ITHS homepage and blog.
// Use a topic badge when the source does not supply an event date.
const notices = [
  { title: "Admissions open for the 2026–27 academic session", category: "Admissions", badge: "OPEN", caption: "2026–27", href: "/apply/" },
  { title: "ITHS students gain clinical insights at Aashakiran IVF Centre, Kharar", category: "Clinical exposure", badge: "IVF", caption: "Campus news", href: "https://www.translationalhealthscience.in/iths-students-gain-clinical-insights-at-aashakiran-ivf-centre-kharar/" },
  { title: "Sofia Khan wins first prize at Talent Hunt 2026", category: "Student achievement", badge: "WIN", caption: "Talent Hunt", href: "https://www.translationalhealthscience.in/sofia-khan-first-prize-talent-hunt-2026/" },
  { title: "Nutrition Matters 2026: exploring genes, nutrition and health", category: "Campus life", badge: "07", caption: "Sep 2026", date: "2026-09-07", href: "https://www.translationalhealthscience.in/nutrition-matters-2026/" },
  { title: "Teachers’ Day 2026: a celebration planned by students", category: "Campus life", badge: "03", caption: "Sep 2026", date: "2026-09-03", href: "/iths-teachers-day-2026-celebration/" },
  { title: "Orientation & Induction Programme: welcoming our new batch", category: "Campus update", badge: "17", caption: "Aug 2026", date: "2026-08-17", href: "/orientation-cum-induction-programme-2026-iths/" },
];

export function HomeNotices() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return <aside className={styles.section} data-notice-dock aria-label="Latest announcements">
    <div className={styles.inner}>
      <div className={styles.heading}>
        <strong>Notices</strong>
      </div>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {[false, true].map(copy => <ul key={String(copy)} className={copy ? `${styles.list} ${styles.copy}` : styles.list} aria-hidden={copy || undefined} aria-label={copy ? undefined : "Latest ITHS announcements"}>
            {notices.map(notice => <li key={notice.href}>
              <span className={styles.notice}>
                <span>{notice.title}</span>{notice.href === "/apply/" && <strong className={styles.apply}>Apply now</strong>}
              </span>
            </li>)}
          </ul>)}
        </div>
      </div>
    </div>
    <button className={styles.close} type="button" aria-label="Close announcements" onClick={() => setClosed(true)}><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" /></svg></button>
  </aside>;
}
