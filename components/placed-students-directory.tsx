"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { departments } from "@/lib/site-content";

type PlacementStory = {
  photo: string;
  name: string;
  programme: string;
  department: string;
  campus: string;
  employer: string;
  role: string;
  batchYear: number;
  consented: true;
};

// Keep this list empty until ITHS supplies approved profiles and written consent.
const approvedStories: PlacementStory[] = [];

export function PlacedStudentsDirectory() {
  const [department, setDepartment] = useState("all");
  const [campus, setCampus] = useState("all");
  const [year, setYear] = useState("all");
  const filtered = useMemo(() => approvedStories.filter(student =>
    student.consented &&
    (department === "all" || student.department === department) &&
    (campus === "all" || student.campus === campus) &&
    (year === "all" || String(student.batchYear) === year)
  ), [department, campus, year]);
  const hasFilters = department !== "all" || campus !== "all" || year !== "all";

  return <>
    <div className="placement-page-feature"><div><p className="eyebrow">Career pathways</p><h2>Prepare for what comes next.</h2><p>ITHS supports students as they explore opportunities across health science, research and further study. The right pathway depends on your qualification, experience and goals.</p><Link href="/contact/">Ask about placement support <span aria-hidden="true">→</span></Link></div><Image src="/images/notices/New-Batch-at-ITHS-2026.webp" alt="ITHS students beginning their academic journey" width={900} height={600} /></div>
    <div className="placement-pathways">{[["01","Explore career areas","Ask about roles related to your programme and interests."],["02","Build your profile","Develop practical skills and prepare your CV with guidance."],["03","Plan your next step","Discuss employment, research and further study options."]].map(([number,title,text])=><article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div>
    <p className="placement-note">Placement guidance and opportunities vary by programme and intake. Contact ITHS for current information. Student placement stories are shared only with written consent.</p>
    <div className="placement-filter" aria-label="Filter placed students">
      <label>Department<select value={department} onChange={event => setDepartment(event.target.value)}><option value="all">All departments</option>{departments.map(item => <option value={item.shortTitle} key={item.href}>{item.shortTitle}</option>)}</select></label>
      <label>Campus<select value={campus} onChange={event => setCampus(event.target.value)}><option value="all">All campuses</option><option>Hoshiarpur</option><option>Mohali</option><option>Shimla Hills (Waknaghat)</option><option>Bhopal</option></select></label>
      <label>Batch year<select value={year} onChange={event => setYear(event.target.value)}><option value="all">All years</option>{Array.from({ length: 8 }, (_, index) => 2027 - index).map(batch => <option key={batch}>{batch}</option>)}</select></label>
      {hasFilters && <button className="filter-reset" type="button" onClick={() => { setDepartment("all"); setCampus("all"); setYear("all"); }}>Clear filters</button>}
    </div>

    {filtered.length ? <div className="student-card-grid">{filtered.map(student => <article className="student-card" key={`${student.name}-${student.batchYear}`}>
      {/* Profile photography is supplied only alongside an approved student record. */}
      <div className="student-photo"><Image src={student.photo} alt={student.name} width={400} height={400} /></div><div className="student-card-content"><h2>{student.name}</h2><p>{student.programme} · {student.campus}</p><strong>{student.role}</strong><span>{student.employer} · Batch {student.batchYear}</span></div>
    </article>)}</div> : <div className="empty-students"><span className="empty-icon" aria-hidden="true">✳</span><h2>{hasFilters ? "No approved profiles match these filters." : "Student stories will appear here."}</h2><p>{hasFilters ? "Try clearing or changing the filters. Only profiles with written student consent are shown." : "Profiles are published only after written consent is received. No approved student records have been provided yet."}</p><Link href="/contact/">Share your story <span>→</span></Link></div>}
    <p className="privacy-note">Student profiles are shared only with written consent. Salary, package, and placement percentage information is not displayed.</p>
  </>;
}
