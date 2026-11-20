"use client";

import { SiteIcon } from "@/components/site-icon";
import { useState, type FormEvent } from "react";
import { campuses, departments } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

export function HomeEnquiryForm() {
  const [emailLink, setEmailLink] = useState("");
  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = `Admissions enquiry\n\nName: ${data.get("name")}\nEnquiring as: ${data.get("role")}\nMobile: ${data.get("phone")}\nEmail: ${data.get("email")}\nProgramme: ${data.get("programme")}\nPreferred campus: ${data.get("campus")}\n\nI agree that ITHS may use these details to answer my enquiry.`;
    setEmailLink(`mailto:${siteConfig.admissionsEmail}?subject=${encodeURIComponent("ITHS programme enquiry")}&body=${encodeURIComponent(body)}`);
  }
  return <form className="home-enquiry-card" id="home-enquiry" onSubmit={prepareEnquiry} onChange={() => setEmailLink("")}>
    <div><h2>Enquire now</h2><p>Speak to an admissions counsellor. Let us help you find your next step.</p></div>
    <fieldset><legend>Who is filling in this form?</legend><div className="home-role-options"><label><input type="radio" name="role" value="Student" required /> I am a student</label><label><input type="radio" name="role" value="Parent or guardian" /> Parent / guardian</label></div></fieldset>
    <label>Your full name<input name="name" autoComplete="name" minLength={2} maxLength={100} placeholder="Enter your full name" required /></label>
    <div className="home-form-pair"><label>Mobile number<input name="phone" type="tel" autoComplete="tel-national" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} placeholder="10-digit mobile number" required /></label><label>Email address<input name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" required /></label></div>
    <label>Programme of interest<select name="programme" defaultValue="" required><option value="" disabled>Choose a programme</option>{departments.map(item => <optgroup key={item.href} label={item.shortTitle}>{item.programmes.map(programme => <option key={programme}>{programme.length > 12 ? programme : `${programme} ${item.shortTitle}`}</option>)}</optgroup>)}</select></label>
    <label>Preferred campus <small>(optional)</small><select name="campus" defaultValue="Not sure yet"><option>Not sure yet</option>{campuses.map(item => <option key={item.href}>{item.title}</option>)}</select></label>
    <label className="home-consent"><input type="checkbox" name="consent" required /><span>I agree that ITHS may use these details to answer my enquiry and help me with admissions.</span></label>
    <button className="button button-red" type="submit">Prepare enquiry <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></button>
    <small className="home-form-note">Send your enquiry through your email app, or <a href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}>call admissions</a>.</small>
    {emailLink && <div className="home-enquiry-result" role="status"><strong>Your enquiry is ready.</strong><p>Open your email app and send it to admissions. Your details have not been submitted yet.</p><a className="button button-primary" href={emailLink}>Open email to send</a></div>}
  </form>;
}
