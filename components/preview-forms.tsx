"use client";

import { SiteIcon } from "@/components/site-icon";
import { useState, type FormEvent } from "react";
import { courseCatalogue } from "@/lib/course-catalogue";

function PreviewNotice({ message }: { message: string }) {
  return <p className="form-message form-info" role="status">{message}</p>;
}

export function ApplicationPreviewForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSubmitted(true);
  }
  return <form className="enquiry-form application-form" onSubmit={handleSubmit}>
    <p className="eyebrow">Application preview · 2026–27</p>
    <h2>Start your ITHS application.</h2>
    <div className="application-fields">
      <label>Full name<input name="fullName" autoComplete="name" minLength={2} required /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
      <label>Mobile number<input name="phone" type="tel" inputMode="tel" pattern="[0-9+() -]{10,18}" autoComplete="tel" required /></label>
      <label>Programme<select name="programme" defaultValue="" required><option value="" disabled>Select a programme</option>{courseCatalogue.map(item => <option key={item.href}>{item.title}</option>)}</select></label>
      <label>Preferred campus<select name="campus" defaultValue="" required><option value="" disabled>Select a campus</option><option>Hoshiarpur</option><option>Mohali</option><option>Shimla Hills (Waknaghat)</option><option>Bhopal</option></select></label>
      <label>Highest qualification<select name="qualification" defaultValue="" required><option value="" disabled>Select qualification</option><option>Class 10</option><option>Class 12</option><option>Undergraduate degree</option><option>Postgraduate degree</option></select></label>
    </div>
    <label className="consent-label"><input type="checkbox" required /> I agree that ITHS may contact me about admissions.</label>
    <button className="button button-primary form-button" type="submit">Preview application <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></button>
    {submitted && <PreviewNotice message="Frontend preview only. Your application has not been submitted or saved." />}
  </form>;
}

export function IthsSetPreviewForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSubmitted(true);
  }
  return <form className="enquiry-form test-registration-form" onSubmit={handleSubmit}>
    <p className="eyebrow">ITHS-SET 2026�27</p><h2>Registration preview</h2>
    <label>Student name<input name="name" autoComplete="name" minLength={2} required /></label>
    <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
    <label>Mobile number<input name="phone" type="tel" inputMode="tel" pattern="[0-9+() -]{10,18}" autoComplete="tel" required /></label>
    <label>Programme of interest<select name="programme" defaultValue="" required><option value="" disabled>Select a programme</option>{courseCatalogue.map(item => <option key={item.href}>{item.title}</option>)}</select></label>
    <button className="button button-primary form-button" type="submit">Preview registration <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></button>
    {submitted && <PreviewNotice message="Frontend preview only. Registration is not open through this form yet; your details have not been sent." />}
  </form>;
}
