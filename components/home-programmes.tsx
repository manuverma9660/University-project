"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { departments } from "@/lib/site-content";
import { getProgrammeHref } from "@/lib/course-catalogue";
import { SiteIcon } from "@/components/site-icon";

export const departmentImages = ["/clinical-embryology.webp", "/cancer-biology.webp", "/nutrigenetics.webp", "/stem-cell.webp", "/images/about-iths-dna-research.webp", "/images/about-iths-biomedical.webp"];

const descriptions = [
  "Explore the laboratory science behind assisted reproduction. Study eggs, sperm and embryos, and learn how embryology connects with fertility care.",
  "Understand how cancer develops at the cellular and molecular level, through specialised study and practical laboratory learning.",
  "Discover how genes influence the body's response to food, and explore the science behind personalised nutrition.",
  "Study how cells develop and repair tissue, with pathways in stem cell science, regenerative medicine and tissue engineering.",
  "Explore how molecular processes shape health and disease, from genetic variation to approaches in diagnostics and medicine.",
  "Study the brain and nervous system, and explore the biological questions connecting neuroscience and human health.",
];

const departmentFocus = [
  ["Reproductive science", "Embryology", "Fertility care"],
  ["Cell biology", "Cancer research", "Molecular science"],
  ["Genetics", "Nutrition science", "Personalised health"],
  ["Stem cell science", "Tissue engineering", "Regeneration"],
  ["Human genetics", "Diagnostics", "Molecular health"],
  ["Brain science", "Nervous system", "Human health"],
];

function programmeLevel(programme: string) {
  if (programme.startsWith("B.")) return "Undergraduate";
  if (programme.startsWith("M.")) return "Postgraduate";
  if (programme.startsWith("PhD")) return "Doctoral research";
  return "Postgraduate diploma";
}

function DepartmentMark({ index }: { index: number }) {
  if (index === 2) return <SiteIcon name="leaf" />;

  const drawings = [
    <><path d="m12 3 5 4-4 5-5-4 4-5ZM7 10l-2 3 3 3 3-3M16 11a5 5 0 0 1-2 9H4M10 17v3M3 22h16" /></>,
    <><circle cx="9" cy="9" r="5.5" /><circle cx="9" cy="9" r="1.8" /><circle cx="16.5" cy="15.5" r="3.5" /><circle cx="16.5" cy="15.5" r="1" /><circle cx="17" cy="6" r="1" /></>,
    <><path d="M6 4c0 5 12 11 12 16M18 4c0 5-12 11-12 16M7.5 7h9M10 10h4M10 14h4M7.5 17h9" /><path d="M15.2 5.2c.8-2 3-2.8 5.1-2.6-.1 2.4-1.4 4.1-4 4.8M15.4 5.3l3.1-1.6" /></>,
    <><path d="M7 3c0 7 10 11 10 18M17 3c0 7-10 11-10 18M8 6h8M8 18h8M10 10h4m-4 4h4" /></>,
    <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="m7 7 3 3m4 0 3-3M7 17l3-3m4 0 3 3" /></>,
    <><path d="M12 5C7 1 4 5 5 8c-5 2-3 8 0 8-2 4 3 7 7 4V5Zm0 0c5-4 8 0 7 3 5 2 3 8 0 8 2 4-3 7-7 4M8 8l4 3m0 4-5 2m9-9-4 3m0 4 5 2" /></>,
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{drawings[index]}</svg>;
}

export function HomeProgrammes() {
  const [selected, setSelected] = useState(0);
  const [tabsStuck, setTabsStuck] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsShellRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;
    // The utility row scrolls away; only the remaining header needs clearance.
    const updateOffset = () => {
      const style = window.getComputedStyle(header);
      const offset = ["sticky", "fixed"].includes(style.position)
        ? Math.max(0, header.getBoundingClientRect().height + (parseFloat(style.top) || 0))
        : 0;
      resultRef.current?.style.setProperty("--department-header-height", `${offset}px`);
    };
    const observer = new ResizeObserver(updateOffset);
    observer.observe(header);
    window.addEventListener("resize", updateOffset);
    updateOffset();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  useEffect(() => {
    const updateStickyState = () => {
      const shell = tabsShellRef.current;
      if (!shell) return;
      const stickyTop = parseFloat(window.getComputedStyle(shell).top) || 0;
      const bounds = shell.getBoundingClientRect();
      const stuck = bounds.top <= stickyTop + 1 && bounds.bottom > stickyTop;
      setTabsStuck(current => current === stuck ? current : stuck);
    };

    window.addEventListener("scroll", updateStickyState, { passive: true });
    window.addEventListener("resize", updateStickyState);
    updateStickyState();
    return () => {
      window.removeEventListener("scroll", updateStickyState);
      window.removeEventListener("resize", updateStickyState);
    };
  }, []);

  function selectDepartment(index: number) {
    setSelected(index);
    // Wait for the selected panel to render before measuring its scroll target.
    window.requestAnimationFrame(() => {
      const panel = panelRef.current;
      const tabs = tabsRef.current;
      if (!panel || !tabs) return;
      const stickyTop = parseFloat(window.getComputedStyle(tabs.parentElement ?? tabs).top) || 0;
      const top = window.scrollY + panel.getBoundingClientRect().top
        - stickyTop - tabs.getBoundingClientRect().height - 16;
      window.scrollTo({ top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    });
  }

  function scrollDepartmentTabs(direction: -1 | 1) {
    tabsRef.current?.scrollBy({
      left: direction * Math.max(180, tabsRef.current.clientWidth * 0.72),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  const available = departments.map((item, index) => ({ ...item, index, matched: item.programmes }));
  const active = available.find(item => item.index === selected) ?? available[0];

  return <>
    <div className="home-department-explorer" ref={resultRef}>
      <div className="home-department-tabs-shell" ref={tabsShellRef} data-stuck={tabsStuck ? "true" : undefined}>
        <button className="home-department-tabs-arrow home-department-tabs-arrow-prev" type="button" aria-label="Scroll departments left" aria-controls="department-tabs" onClick={() => scrollDepartmentTabs(-1)}><SiteIcon name="arrowLeft" /></button>
        <div className="home-department-tabs" id="department-tabs" ref={tabsRef} role="tablist" aria-label="Academic departments" aria-orientation="horizontal">
          {available.map((item, index) => <button key={item.href} id={`department-tab-${item.index}`} role="tab" type="button" aria-selected={active?.index === item.index} aria-controls="home-department-panel" tabIndex={active?.index === item.index ? 0 : -1} onClick={() => selectDepartment(item.index)} onKeyDown={event => {
          let next = index;
          if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % available.length;
          else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + available.length) % available.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = available.length - 1;
          else return;
          event.preventDefault(); selectDepartment(available[next].index);
          document.getElementById(`department-tab-${available[next].index}`)?.focus({ preventScroll: true });
          }}><span className="home-department-tab-icon" aria-hidden="true"><DepartmentMark index={item.index} /></span><span className="home-department-tab-label">{item.shortTitle}</span></button>)}
        </div>
        <button className="home-department-tabs-arrow home-department-tabs-arrow-next" type="button" aria-label="Scroll departments right" aria-controls="department-tabs" onClick={() => scrollDepartmentTabs(1)}><SiteIcon name="arrowRight" /></button>
      </div>
      <article ref={panelRef} className="home-department-panel" id="home-department-panel" role="tabpanel" aria-labelledby={`department-tab-${active.index}`} tabIndex={0}>
        <div className="home-department-image" key={`image-${active.index}`}><Image src={departmentImages[active.index]} alt={`${active.shortTitle} study and laboratory learning`} style={{ objectPosition: active.index < 4 ? "right center" : "center" }} fill sizes="(max-width: 760px) 90vw, 40vw" /><div className="department-image-caption"><span>Discover your discipline</span><p>Curiosity today.<br />Possibility tomorrow.</p></div></div>
        <div className="home-department-content" key={`copy-${active.index}`}><p className="eyebrow">Department spotlight</p><span className="department-spotlight-icon" aria-hidden="true"><DepartmentMark index={active.index} /></span><h3>{active.shortTitle}</h3><p>{descriptions[active.index]}</p>
          <div className="department-focus" aria-label="Areas of study">{departmentFocus[active.index].map(focus => <span key={focus}>{focus}</span>)}</div>
          <div className="home-button-row"><Link className="button button-red" href={active.href}>Explore department</Link><Link className="department-enquiry-link" href={`/enquire/?department=${encodeURIComponent(active.shortTitle)}`}>Talk to admissions</Link></div>
        </div>
        <div className="department-study-options"><div className="department-options-heading"><div><p className="eyebrow">Choose your pathway</p><h4>Make your next move.</h4></div><span>{active.matched.length} study option{active.matched.length === 1 ? "" : "s"}</span></div><ul>{active.matched.map(programme => <li key={programme}><Link href={getProgrammeHref(active.href, programme)}><span>{programmeLevel(programme)}</span><h5>{programme}</h5><span className="department-option-action">View programme <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m8 5 5 5-5 5" /></svg></span></Link></li>)}</ul></div>
      </article>
      <div className="home-course-paths"><strong>Where are you<br />starting from?</strong><Link href="/admissions/courses-after-12th/">After 10+2</Link><Link href="/admissions/courses-after-graduation/">After graduation</Link><Link href="/admissions/courses-after-post-graduation/">After post graduation</Link><Link href="/admissions/lateral-entry-programmes/">Lateral entry</Link></div>
    </div>
  </>;
}
