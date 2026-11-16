"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import styles from "./apply-landing-page.module.css";

const programmes = [
  { id: "embryology", title: "Clinical Embryology & ART", courses: ["B.Sc.", "M.Sc.", "PG Diploma", "Ph.D."] },
  { id: "stem-cell", title: "Stem Cell & Regenerative Medicine", courses: ["B.Sc.", "M.Sc."] },
  { id: "nutrition", title: "Nutrigenetics & Personalised Nutrition", courses: ["B.Sc.", "M.Sc."] },
  { id: "cancer", title: "Cancer Biology", courses: ["B.Sc.", "M.Sc."] },
  { id: "btech", title: "Stem Cell & Tissue Engineering", courses: ["B.Tech"] },
];

const campuses = [
  { id: "bhopal", name: "SCOPE Global Skills University", location: "Bhopal, Madhya Pradesh", image: "/images/campuses/bhopal.jpg", programmes: ["embryology"] },
  { id: "hoshiarpur", name: "Rayat Bahra Professional University", location: "Hoshiarpur, Punjab", image: "/images/campuses/hoshiarpur.jpg", programmes: ["embryology"] },
  { id: "shimla", name: "Bahra University", location: "Shimla Hills, Himachal Pradesh", image: "/images/campuses/shimla-hills.jpg", programmes: ["embryology", "stem-cell"] },
  { id: "mohali", name: "Rayat Bahra University", location: "Chandigarh (Mohali), Punjab", image: "/images/campuses/chandigarh-mohali.jpg", programmes: ["embryology", "nutrition", "stem-cell", "cancer", "btech"] },
];

export function ApplyLandingPage() {
  const [programme, setProgramme] = useState("");
  const [course, setCourse] = useState("");
  const [campus, setCampus] = useState("");
  const [emailLink, setEmailLink] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const activeProgramme = programmes.find(item => item.id === programme);
  const availableCampuses = campuses.filter(item => !programme || item.programmes.includes(programme));

  function chooseCampus(id: string) {
    const selected = campuses.find(item => item.id === id)!;
    const nextProgramme = selected.programmes.includes(programme) ? programme : selected.programmes[0];
    if (nextProgramme !== programme) setCourse("");
    setProgramme(nextProgramme);
    setCampus(id);
    setEmailLink("");
    formRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    formRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus({ preventScroll: true });
  }

  function prepareApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const data = new FormData(event.currentTarget);
    const campusName = campuses.find(item => item.id === campus)?.name;
    const body = `Hello ITHS Admissions,\n\nI would like to discuss my application.\n\nName: ${data.get("name")}\nMobile: ${data.get("phone")}\nEmail: ${data.get("email")}\nProgramme: ${activeProgramme?.title}\nCourse type: ${course}\nPreferred university: ${campusName}\n\nPlease guide me on eligibility, course availability and the application process.\n\nI consent to being contacted about my application.`;
    setEmailLink(`mailto:${siteConfig.admissionsEmail}?subject=${encodeURIComponent("ITHS application enquiry — 2026–27")}&body=${encodeURIComponent(body)}`);
  }

  return <main id="main-content" className={styles.page}>
    <div className={styles.container}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Apply to ITHS</span></nav>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>ADMISSIONS 2026–27</p>
        <h1>Your next chapter <span>starts here.</span></h1>
        <p>Find your campus, explore specialist health science programmes and take the first step with ITHS.</p>
      </header>
      <div className={styles.layout}>
        <section className={styles.campuses} aria-labelledby="apply-campus-title">
          <div className={styles.sectionHead}><div><p className={styles.eyebrow}>FOUR CAMPUSES. YOUR CHOICE.</p><h2 id="apply-campus-title">Where will you begin?</h2></div><span>University partners</span></div>
          <div className={styles.campusGrid}>
            {campuses.map((item, index) => <article className={`${styles.card}${campus === item.id ? ` ${styles.selected}` : ""}`} key={item.id}>
              <div className={styles.photo}><Image src={item.image} alt={`${item.name} campus`} fill sizes="(max-width: 600px) 100vw, (max-width: 1080px) 50vw, 30vw" priority={index < 2} /><span className={styles.location}><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M16 8c0 4-6 9-6 9S4 12 4 8a6 6 0 0 1 12 0Z" /><circle cx="10" cy="8" r="2" /></svg>{item.location}</span></div>
              <div className={styles.cardBody}><h3>{item.name}</h3><p className={styles.programmeLabel}>Explore programmes</p><ul>{item.programmes.map(id => <li key={id}>{programmes.find(p => p.id === id)?.title}{id === "btech" ? " (B.Tech)" : ""}</li>)}</ul><button className={styles.campusButton} type="button" onClick={() => chooseCampus(item.id)} aria-label={`Apply at ${item.name}`}>{campus === item.id ? "Campus selected" : "Apply here"}<span aria-hidden="true">{campus === item.id ? "✓" : "↗"}</span></button></div>
            </article>)}
          </div>
          <p className={styles.availability}>Programme levels, eligibility and intake availability vary by campus. Our admissions team can help you confirm the right option.</p>
        </section>
        <aside className={styles.formPanel} aria-labelledby="apply-form-title">
          <div className={styles.formHeading}><span className={styles.formTag}>LET’S GET STARTED</span><h2 id="apply-form-title">Apply to ITHS</h2><p>A few details. A clearer next step.</p></div>
          <form ref={formRef} className={styles.form} id="application-form" onSubmit={prepareApplication} onChange={() => setEmailLink("")}>
            <label>Full name <span>*</span><input name="name" autoComplete="name" placeholder="Enter your full name" minLength={2} maxLength={100} required /></label>
            <label>Mobile number <span>*</span><div className={styles.phone}><span>+91</span><input name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" pattern="[6-9][0-9]{9}" maxLength={10} placeholder="10-digit mobile number" required /></div></label>
            <label>Email address <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required /></label>
            <label>Programme of interest <span>*</span><select name="programme" value={programme} required onChange={event => { const next = event.target.value; setProgramme(next); setCourse(""); if (!campuses.find(item => item.id === campus)?.programmes.includes(next)) setCampus(""); }}><option value="" disabled>Choose your programme</option>{programmes.map(item => <option value={item.id} key={item.id}>{item.title}</option>)}</select></label>
            <div className={styles.pair}>
              <label>Course type <span>*</span><select name="course" value={course} disabled={!activeProgramme} required onChange={event => setCourse(event.target.value)}><option value="" disabled>Select course type</option>{activeProgramme?.courses.map(item => <option key={item}>{item}</option>)}</select></label>
              <label>Preferred campus <span>*</span><select name="campus" value={campus} required onChange={event => setCampus(event.target.value)}><option value="" disabled>Select campus</option>{availableCampuses.map(item => <option key={item.id} value={item.id}>{item.id === "mohali" ? "Chandigarh (Mohali)" : item.id === "shimla" ? "Shimla Hills" : item.id === "bhopal" ? "Bhopal" : "Hoshiarpur"}</option>)}</select></label>
            </div>
            <label className={styles.consent}><input name="consent" type="checkbox" required /><span>I agree that ITHS may contact me about my application and programme choices.</span></label>
            <button className={styles.submit} type="submit">Prepare application <span aria-hidden="true">→</span></button>
            <p className={styles.formNote}>We’ll prepare an email for you to send to admissions. This form does not submit or save your details online.</p>
            {emailLink && <div className={styles.result} role="status"><strong>Your application enquiry is ready.</strong><p>Send the prepared email to continue with admissions.</p><a href={emailLink}>Open email to send <span aria-hidden="true">↗</span></a></div>}
            <div className={styles.divider}><span>Or connect directly</span></div>
            <a className={styles.whatsapp} href="https://wa.me/917696614978" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.6-4.7A9 9 0 1 1 21 11.5Z" /><path d="m8.5 7.5 1.5 3-1 1a7 7 0 0 0 3 3l1-1 3 1.5" /></svg>Chat on WhatsApp</a>
            <a className={styles.call} href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}>Call admissions <strong>{siteConfig.admissionsPhone}</strong></a>
          </form>
        </aside>
      </div>
    </div>
  </main>;
}
