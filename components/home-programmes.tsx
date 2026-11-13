"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { departments } from "@/lib/site-content";

export const departmentImages = ["/clinical-embryology.webp", "/cancer-biology.webp", "/nutrigenetics.webp", "/stem-cell.webp", "/iths-learning-01.webp", "/iths-learning-02.webp"];

const descriptions = [
  "Explore the laboratory science behind assisted reproduction. Study eggs, sperm and embryos, and learn how embryology connects with fertility care.",
  "Understand how cancer develops at the cellular and molecular level, through specialised study and practical laboratory learning.",
  "Discover how genes influence the body's response to food, and explore the science behind personalised nutrition.",
  "Study how cells develop and repair tissue, with pathways in stem cell science, regenerative medicine and tissue engineering.",
  "Explore how molecular processes shape health and disease, from genetic variation to approaches in diagnostics and medicine.",
  "Study the brain and nervous system, and explore the biological questions connecting neuroscience and human health.",
];

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
    resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  return <>
    <form className="home-programme-filters" onSubmit={findProgrammes}>
      <label>Department<select value={department} onChange={event => setDepartment(event.target.value)}><option value="">All departments</option>{departments.map(item => <option key={item.href} value={item.href}>{item.shortTitle}</option>)}</select></label>
      <label>Programme type<select value={level} onChange={event => setLevel(event.target.value)}><option value="">All types</option>{["B.Sc", "B.Tech", "M.Sc", "PG Diploma", "PhD"].map(item => <option key={item}>{item}</option>)}</select></label>
      <button className="button button-primary" type="submit">Find programmes <span aria-hidden="true">&rarr;</span></button>
      <p role="status">{count} programme{count === 1 ? "" : "s"} match. Choose a department or programme type to explore your options.</p>
    </form>
    <div className="home-department-explorer" ref={resultRef}>
      <div className="home-department-tabs" role="tablist" aria-label="Academic departments" aria-orientation="vertical">
        {available.map((item, index) => <button key={item.href} id={`department-tab-${item.index}`} role="tab" type="button" aria-selected={active?.index === item.index} aria-controls="home-department-panel" tabIndex={active?.index === item.index ? 0 : -1} onClick={() => setSelected(item.index)} onKeyDown={event => {
          let next = index;
          if (event.key === "ArrowDown") next = (index + 1) % available.length;
          else if (event.key === "ArrowUp") next = (index - 1 + available.length) % available.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = available.length - 1;
          else return;
          event.preventDefault(); setSelected(available[next].index);
          document.getElementById(`department-tab-${available[next].index}`)?.focus();
        }}>{item.shortTitle}<span aria-hidden="true">&rsaquo;</span></button>)}
      </div>
      {active ? <article className="home-department-panel" id="home-department-panel" role="tabpanel" aria-labelledby={`department-tab-${active.index}`} tabIndex={0}>
        <div className="home-department-image"><Image src={departmentImages[active.index]} alt={`${active.shortTitle} study and laboratory learning`} fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
        <div className="home-department-content"><p className="eyebrow">Explore your discipline</p><h3>{active.title}</h3><p>{descriptions[active.index]}</p>
          <ul>{active.matched.map(programme => <li key={programme}><Link href={active.href}>{programme.length > 12 ? programme : `${programme} ${active.shortTitle}`}</Link></li>)}</ul>
          <div className="home-button-row"><Link className="button button-red" href={`/enquire/?department=${encodeURIComponent(active.shortTitle)}`}>Enquire</Link><Link className="home-outline-button" href={active.href}>View department <span aria-hidden="true">&rarr;</span></Link></div>
        </div>
      </article> : <div className="home-empty" role="status"><h3>No programmes match these filters</h3><p>Choose another department or programme type.</p><button className="button button-primary" type="button" onClick={() => { setDepartment(""); setLevel(""); }}>Reset filters</button></div>}
    </div>
    <div className="home-course-paths"><strong>Find your course</strong><Link href="/admissions/courses-after-12th/">After 10+2 <span aria-hidden="true">&rarr;</span></Link><Link href="/admissions/courses-after-graduation/">After graduation <span aria-hidden="true">&rarr;</span></Link><Link href="/admissions/courses-after-post-graduation/">After post graduation <span aria-hidden="true">&rarr;</span></Link><Link href="/admissions/lateral-entry-programmes/">Lateral entry <span aria-hidden="true">&rarr;</span></Link></div>
  </>;
}
