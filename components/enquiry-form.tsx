"use client";

import { useEffect, useState, type FormEvent } from "react";
import { departments } from "@/lib/site-content";
import { courseCatalogue } from "@/lib/course-catalogue";

type EnquiryFormProps = { compact?: boolean; campaign?: boolean; courseOptions?: string[] };
type AdmissionEnquiryFormProps = { variant?: "admissions" | "contact" };

const admissionProgrammes = courseCatalogue.map(course => course.title);

/** Admissions form matching the fields shown on the official admissions page. */
export function AdmissionEnquiryForm({ variant = "admissions" }: AdmissionEnquiryFormProps) {
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("admissions");

  useEffect(() => {
    const requestedTopic = new URLSearchParams(window.location.search).get("topic");
    if (["fees", "campus", "graduate-story", "research", "publications", "patents", "collaboration"].includes(requestedTopic ?? "")) setTopic(requestedTopic ?? "admissions");
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) {
      setMessage("Preview only: your enquiry details have not been sent or stored.");
    }
  }

  if (variant === "contact") return <form className="enquiry-form admission-enquiry-form contact-message-form" onSubmit={handleSubmit}>
    <label><span>Name <b>*</b></span><input name="name" autoComplete="name" minLength={2} maxLength={100} placeholder="Enter Your Name" required /></label>
    <label><span>Number <b>*</b></span><input name="phone" type="tel" autoComplete="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="Enter Your Number" required /></label>
    <label><span>Email <b>*</b></span><input name="email" type="email" autoComplete="email" maxLength={254} placeholder="Enter Your Email" required /></label>
    <label><span>Program</span><select name="programme" defaultValue=""><option value="">Select Program</option>{admissionProgrammes.map(programme => <option key={programme}>{programme}</option>)}</select></label>
    <label><span>Campus</span><select name="campus" defaultValue=""><option value="">Select Campus</option>{["Chandigarh (Mohali)", "Hoshiarpur", "Shimla", "Bhopal"].map(campus => <option key={campus}>{campus}</option>)}</select></label>
    <label><span>Message</span><textarea name="message" rows={4} maxLength={1500} placeholder="Enter Your Message" /></label>
    <button className="button button-primary form-button" type="submit">SUBMIT</button>
    {message && <p className="form-message form-info" role="status">{message}</p>}
  </form>;

  return <form className="enquiry-form admission-enquiry-form" onSubmit={handleSubmit}>
    <label><span>Full Name <b>*</b></span><input name="name" autoComplete="name" minLength={2} maxLength={100} placeholder="Enter your full name" required /></label>
    <label><span>Email Address <b>*</b></span><input name="email" type="email" autoComplete="email" maxLength={254} placeholder="Enter your email address" required /></label>
    <label><span>Phone Number <b>*</b></span><input name="phone" type="tel" autoComplete="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="10-digit mobile number" required /></label>
    <label><span>City <b>*</b></span><input name="city" autoComplete="address-level2" maxLength={100} placeholder="Your city" required /></label>
    <label><span>State</span><input name="state" autoComplete="address-level1" maxLength={100} placeholder="Your state" /></label>
    <label><span>Program of Interest <b>*</b></span><select name="programme" defaultValue="" required><option value="" disabled>Select a program</option>{admissionProgrammes.map(programme => <option key={programme}>{programme}</option>)}</select></label>
    <label><span>Level <b>*</b></span><select name="level" defaultValue="" required><option value="" disabled>Select a level</option>{["B.Sc.", "B.Tech", "M.Sc.", "PG Diploma", "Ph.D."].map(level => <option key={level}>{level}</option>)}</select></label>
    <label><span>Preferred Campus <b>*</b></span><select name="campus" defaultValue="" required><option value="" disabled>Select a campus</option>{["Chandigarh (Mohali)", "Hoshiarpur", "Shimla", "Bhopal"].map(campus => <option key={campus}>{campus}</option>)}</select></label>
    <label><span>Your Message</span><textarea name="message" rows={4} maxLength={1500} placeholder="Share your question (optional)" /></label>
    <button className="button button-primary form-button" type="submit">Submit enquiry</button>
    {message && <p className="form-message form-info" role="status">{message}</p>}
  </form>;
}

export function EnquiryForm({ compact = false, campaign = false, courseOptions = departments.flatMap(department => [`B.Sc. ${department.shortTitle}`, `M.Sc. ${department.shortTitle}`]) }: EnquiryFormProps) {
  const [message, setMessage] = useState("");
  const [verificationLoading, setVerificationLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setMessage("Your details have not been sent or stored. Please call admissions or contact us on WhatsApp to complete your enquiry.");
  }

  if (campaign) return <form className="enquiry-card enquiry-card-course enquiry-card-campaign" onSubmit={handleSubmit}>
    <h2>2026 Admissions Open - Limited Seats</h2>
    <label><span>Name <b>*</b></span><input name="name" autoComplete="name" minLength={2} maxLength={100} placeholder="Enter Your Name" required /></label>
    <label><span>Mobile Number <b>*</b></span><div className="campaign-phone"><input name="phone" type="tel" autoComplete="tel-national" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="Enter Your Number" required /><span aria-hidden="true">🇮🇳</span></div></label>
    <label><span>Email Address <b>*</b></span><input name="email" type="email" autoComplete="email" maxLength={254} placeholder="Enter Your Email" required /></label>
    <label><input name="city" autoComplete="address-level2" maxLength={100} placeholder="City" /></label>
    <label><input name="state" autoComplete="address-level1" maxLength={100} placeholder="State" /></label>
    <label><select name="programme" defaultValue=""><option value="">Select Course Type</option>{courseOptions.map(option => <option key={option} value={option}>{option}</option>)}</select></label>
    <label className="campaign-human"><input name="human" type="checkbox" required onChange={() => { setVerificationLoading(true); window.setTimeout(() => setVerificationLoading(false), 900); }} /><span className="campaign-human-copy">I’m not a robot</span><span className="campaign-captcha-mark" aria-hidden="true">{verificationLoading ? <i /> : <svg viewBox="0 0 40 36"><path d="M16 4a13 13 0 0 1 16 9" fill="none" stroke="#4285f4" strokeWidth="6"/><path d="m30 4 5 9-10 1" fill="#4285f4"/><path d="M25 32A13 13 0 0 1 8 23" fill="none" stroke="#9aa0a6" strokeWidth="6"/><path d="m10 32-5-9 10-1" fill="#9aa0a6"/><path d="M6 17a13 13 0 0 1 5-10" fill="none" stroke="#4285f4" strokeWidth="6"/></svg>}</span><small>reCAPTCHA</small></label>
    <button className="button button-primary form-button" type="submit">Submit</button>
    {message && <p className="form-message form-info" role="status">{message}</p>}
    <div className="enquiry-instant"><span>or instant connect</span></div>
    <a className="enquiry-whatsapp" href="https://wa.me/917696614978" target="_blank" rel="noreferrer">CHAT ON WHATSAPP</a>
    <a className="enquiry-call" href="tel:+917696614978">Or call: +91 76966 14978</a>
  </form>;

  return <form className={compact ? "enquiry-card enquiry-card-course" : "enquiry-form"} onSubmit={handleSubmit}>
    {compact && <><h2>Request a call back</h2><p className="enquiry-subtitle">Takes under a minute</p></>}
    <label>{compact ? <span>Full name <b>*</b></span> : "Your name"}<input name="name" autoComplete="name" minLength={2} maxLength={100} placeholder="Enter Your Name" required /></label>
    <label>{compact ? <span>Mobile number <b>*</b></span> : "Mobile number"}<div className={compact ? "enquiry-phone" : undefined}>{compact && <><span aria-hidden="true">🇮🇳</span><span>+91</span></>}<input name="phone" type="tel" autoComplete="tel-national" inputMode="numeric" pattern={compact ? "[0-9]{10}" : "[0-9+() -]{10,18}"} maxLength={compact ? 10 : undefined} placeholder={compact ? "Enter your phone number" : "10-digit mobile number"} required /></div></label>
    {compact && <label><span>Email <b>*</b></span><input name="email" type="email" autoComplete="email" maxLength={254} placeholder="Enter Your Email" required /></label>}
    {compact && <label>City<input name="city" autoComplete="address-level2" maxLength={100} placeholder="City" /></label>}
    {!compact && <label>What is this about?<select name="topic" defaultValue="admissions"><option value="admissions">Admissions enquiry</option><option value="fees">Fee details</option><option value="campus">Campus information</option><option value="graduate-story">Graduate story</option><option value="research">Research enquiry</option><option value="publications">Publication records</option><option value="patents">Patent records</option><option value="collaboration">Research collaboration</option></select></label>}
    <label>{compact ? "Program Type" : "Programme of interest"}<select name="programme" defaultValue=""><option value="">{compact ? "Program Type..." : "Select a programme (optional)"}</option>{(compact ? courseOptions : departments.map(department => department.shortTitle)).map(option => <option key={option} value={option}>{option}</option>)}</select></label>
    {!compact && <label>Your message<textarea name="message" rows={4} maxLength={1500} placeholder="Share your question or story (optional)" /></label>}
    {!compact && <label className="consent-label"><input name="consent" type="checkbox" required /> I agree that ITHS may contact me about this enquiry.</label>}
    <button className="button button-primary form-button" type="submit">{compact ? "Submit" : "Preview enquiry"}{!compact && <span aria-hidden="true">→</span>}</button>
    {message && <p className="form-message form-info" role="status">{message}</p>}
  </form>;
}
