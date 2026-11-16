"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import styles from "./iths-set-page.module.css";

const programmes = [
  "Nutrigenetics And Personalized Nutrition",
  "ART And Clinical Embryology",
  "Stem Cell And Regenerative Medicine",
  "Cancer Biology",
  "B.Tech Stem Cell And Tissue Engineering",
];

export function IthsSetRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSubmitted(true);
  }

  return <form className={styles.form} onSubmit={handleSubmit}>
    <label htmlFor="iths-set-name">Full name <span>*</span>
      <input id="iths-set-name" name="name" autoComplete="name" minLength={2} maxLength={100} placeholder="Enter Your Name" required />
    </label>
    <label htmlFor="iths-set-phone">Mobile number <span>*</span>
      <div className={styles.phoneField}>
        <span className={styles.phonePrefix}><svg viewBox="0 0 21 15" aria-hidden="true"><path fill="#ff9933" d="M0 0h21v5H0z" /><path fill="#fff" d="M0 5h21v5H0z" /><path fill="#138808" d="M0 10h21v5H0z" /><circle cx="10.5" cy="7.5" r="1.7" fill="none" stroke="#000080" strokeWidth=".6" /></svg><span>+91</span></span>
        <input id="iths-set-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" pattern="[0-9]{10}" maxLength={10} placeholder="Enter your phone number" required />
      </div>
    </label>
    <label htmlFor="iths-set-email">Email <span>*</span>
      <input id="iths-set-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="Enter Your Email" required />
    </label>
    <label className={styles.unlabelled} htmlFor="iths-set-city"><span className={styles.srOnly}>City</span>
      <input id="iths-set-city" name="city" autoComplete="address-level2" maxLength={100} placeholder="City" />
    </label>
    <label className={styles.unlabelled} htmlFor="iths-set-programme"><span className={styles.srOnly}>Program Type</span>
      <select id="iths-set-programme" name="programme" aria-label="Program Type" defaultValue=""><option value="">Program Type</option>{programmes.map(programme => <option key={programme}>{programme}</option>)}</select>
    </label>
    <label className={styles.unlabelled} htmlFor="iths-set-course"><span className={styles.srOnly}>Course interest</span>
      <select id="iths-set-course" name="course" aria-label="Course interest" defaultValue=""><option value="">Course interest</option>{["B.Sc.", "M.Sc.", "Ph.D.", "PG Diploma"].map(course => <option key={course}>{course}</option>)}</select>
    </label>
    <button className={styles.submit} type="submit">Submit</button>
    {submitted && <p className={styles.notice} role="status">Your details have not been sent. Online submission is not connected yet. To complete registration, call <a href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}>{siteConfig.admissionsPhone}</a> or use the <a href="https://www.translationalhealthscience.in/iths-set/" target="_blank" rel="noreferrer">official registration form</a>.</p>}
  </form>;
}
