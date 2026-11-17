"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { departments } from "@/lib/site-content";
import { getProgrammeHref } from "@/lib/course-catalogue";

export const departmentImages = ["/clinical-embryology.webp", "/cancer-biology.webp", "/nutrigenetics.webp", "/stem-cell.webp", "/images/about-iths-dna-research.webp", "/images/about-iths-biomedical.webp"];

const descriptions = [
  "Explore the laboratory science behind assisted reproduction. Study eggs, sperm and embryos, and learn how embryology connects with fertility care.",
  "Understand how cancer develops at the cellular and molecular level, through specialised study and practical laboratory learning.",
  "Discover how genes influence the body's response to food, and explore the science behind personalised nutrition.",
  "Study how cells develop and repair tissue, with pathways in stem cell science, regenerative medicine and tissue engineering.",
  "Explore how molecular processes shape health and disease, from genetic variation to approaches in diagnostics and medicine.",
  "Study the brain and nervous system, and explore the biological questions connecting neuroscience and human health.",
];

function DepartmentMark({ index }: { index: number }) {
  const drawings = [
    <><path d="m12 3 5 4-4 5-5-4 4-5ZM7 10l-2 3 3 3 3-3M16 11a5 5 0 0 1-2 9H4M10 17v3M3 22h16" /></>,
    <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="m7 5 1 2m9 10 2 1M4 13h3m10-4 2-1" /></>,
    <><path d="M20 4C9 3 3 8 6 15c7 4 14-1 14-11ZM4 21 16 9M10 15l-1-5m1 5 5 1" /></>,
    <><path d="M7 3c0 7 10 11 10 18M17 3c0 7-10 11-10 18M8 6h8M8 18h8M10 10h4m-4 4h4" /></>,
    <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="m7 7 3 3m4 0 3-3M7 17l3-3m4 0 3 3" /></>,
    <><path d="M12 5C7 1 4 5 5 8c-5 2-3 8 0 8-2 4 3 7 7 4V5Zm0 0c5-4 8 0 7 3 5 2 3 8 0 8 2 4-3 7-7 4M8 8l4 3m0 4-5 2m9-9-4 3m0 4 5 2" /></>,
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{drawings[index]}</svg>;
}

export function HomeProgrammes() {
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [selected, setSelected] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);
  const available = departments.map((item, index) => ({ ...item, index, matched: item.programmes.filter(programme => !level || programme.startsWith(level)) }))
    .filter(item => (!department || item.href === department) && item.matched.length);
  const active = available.find(item => item.index === selected) ?? available[0];
  const count = available.reduce((total, item) => total + item.matched.length, 0);

  function findProgrammes(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resultRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "nearest" });
  }

  return <>
    <form className="home-programme-filters" onSubmit={findProgrammes}>
      <label>Department<select value={department} onChange={event => setDepartment(event.target.value)}><option value="">All departments</option>{departments.map(item => <option key={item.href} value={item.href}>{item.shortTitle}</option>)}</select></label>
      <label>Programme type<select value={level} onChange={event => setLevel(event.target.value)}><option value="">All types</option>{["B.Sc", "B.Tech", "M.Sc", "PG Diploma", "PhD"].map(item => <option key={item}>{item}</option>)}</select></label>
      <button className="button button-primary" type="submit">Find programmes <span aria-hidden="true">&rarr;</span></button>
      <p role="status">{count} programme{count === 1 ? "" : "s"} match. Choose a department or programme type to explore your options.</p>
    </form>
    <div className="home-department-explorer" ref={resultRef}>
      <div className="home-department-tabs" role="tablist" aria-label="Academic departments" aria-orientation="horizontal">
        {available.map((item, index) => <button key={item.href} id={`department-tab-${item.index}`} role="tab" type="button" aria-selected={active?.index === item.index} aria-controls="home-department-panel" tabIndex={active?.index === item.index ? 0 : -1} onClick={() => setSelected(item.index)} onKeyDown={event => {
          let next = index;
          if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % available.length;
          else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + available.length) % available.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = available.length - 1;
          else return;
          event.preventDefault(); setSelected(available[next].index);
          document.getElementById(`department-tab-${available[next].index}`)?.focus();
        }}><span className="home-department-tab-icon" aria-hidden="true"><DepartmentMark index={item.index} /></span><span className="home-department-tab-label">{item.shortTitle}</span></button>)}
      </div>
      {active ? <article className="home-department-panel" id="home-department-panel" role="tabpanel" aria-labelledby={`department-tab-${active.index}`} tabIndex={0}>
        <div className="home-department-image" key={`image-${active.index}`}><Image src={departmentImages[active.index]} alt={`${active.shortTitle} study and laboratory learning`} style={{ objectPosition: active.index < 4 ? "right center" : "center" }} fill sizes="(max-width: 760px) 100vw, 85vw" /></div>
        <div className="home-department-content" key={`copy-${active.index}`}><p className="eyebrow">Explore your discipline</p><h3>{active.title}</h3><p>{descriptions[active.index]}</p>
          <ul>{active.matched.map(programme => <li key={programme}><Link href={getProgrammeHref(active.href, programme)}>{programme.length > 12 ? programme : `${programme} ${active.shortTitle}`}</Link></li>)}</ul>
          <div className="home-button-row"><Link className="button button-red" href={`/enquire/?department=${encodeURIComponent(active.shortTitle)}`}>Enquire</Link><Link className="home-outline-button" href={active.href}>View department <span aria-hidden="true">&rarr;</span></Link></div>
        </div>
      </article> : <div className="home-empty" role="status"><h3>No programmes match these filters</h3><p>Choose another department or programme type.</p><button className="button button-primary" type="button" onClick={() => { setDepartment(""); setLevel(""); }}>Reset filters</button></div>}
    </div>
    <div className="home-course-paths"><strong>Find your course</strong><Link href="/admissions/courses-after-12th/">After 10+2 <span aria-hidden="true">&rarr;</span></Link><Link href="/admissions/courses-after-graduation/">After graduation <span aria-hidden="true">&rarr;</span></Link><Link href="/admissions/courses-after-post-graduation/">After post graduation <span aria-hidden="true">&rarr;</span></Link><Link href="/admissions/lateral-entry-programmes/">Lateral entry <span aria-hidden="true">&rarr;</span></Link></div>
  </>;
}
