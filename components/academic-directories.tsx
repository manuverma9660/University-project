import { SiteIcon } from "@/components/site-icon";
import Link from "next/link";
import Image from "next/image";
import { campuses, departments, leadership, programmeCategories, universityPartners } from "@/lib/site-content";
import { courseCatalogue, getProgrammeHref } from "@/lib/course-catalogue";

export function DepartmentDirectory() {
  return <div className="directory-grid">
    {departments.map((department, index) => { const course = courseCatalogue.find(item => item.departmentHref === department.href); return <Link className="directory-card" href={department.href} key={department.href}>
      {course && <div className="directory-card-image"><Image src={course.image} alt="" fill sizes="(max-width: 760px) 90vw, 33vw" /></div>}<span className="directory-number">0{index + 1}</span><h2>{department.shortTitle}</h2><p>{department.description}</p>
      <div className="directory-tags">{department.programmes.map(programme => <span key={programme}>{programme}</span>)}</div><b>Explore department <span aria-hidden="true"><SiteIcon name="arrowUpRight" /></span></b>
    </Link>; })}
  </div>;
}

export function ProgrammeDirectory({ href }: { href: string }) {
  const category = programmeCategories.find(item => item.href === href);
  if (!category) return <div className="programme-category-grid">
    {programmeCategories.map(item => <Link href={item.href} className="programme-category-card" key={item.href}><span>{item.levels.length ? item.levels.join(" · ") : "Programme information"}</span><h2>{item.title}</h2><b>View pathway <span aria-hidden="true"><SiteIcon name="arrowUpRight" /></span></b></Link>)}
  </div>;

  const offerings = departments.flatMap(department => {
    const matched = department.programmes.filter(programme => category.levels.some(level => programme.startsWith(level)));
    return matched.length ? [{ ...department, matched }] : [];
  });

  return <>
    {offerings.length ? <div className="directory-grid">
      {offerings.map(department => <Link className="directory-card" href={getProgrammeHref(department.href, department.matched.length === 1 ? department.matched[0] : "")} key={department.href}><span className="directory-number">{category.title}</span><h2>{department.shortTitle}</h2><p>{department.description}</p><div className="directory-tags">{department.matched.map(programme => <span key={programme}>{programme}</span>)}</div><b>View department <span aria-hidden="true"><SiteIcon name="arrowUpRight" /></span></b></Link>)}
    </div> : <div className="content-notice"><strong>Programme details pending from ITHS</strong><p>Specific {category.title.toLowerCase()} offerings will be listed here when confirmed for the 2026–27 admission cycle.</p></div>}
  </>;
}

export function CampusDirectory() {
  return <div className="campus-grid">
    {campuses.map((campus, index) => <Link href={campus.href} className="campus-card" key={campus.href}>
      <span className="directory-number">CAMPUS 0{index + 1}</span>{campus.status && <span className="content-pending">{campus.status}</span>}
      <h2>{campus.title}</h2><p>{campus.location}</p><strong>In collaboration with</strong><p>{campus.partner}</p><b>Explore campus <span aria-hidden="true"><SiteIcon name="arrowUpRight" /></span></b>
    </Link>)}
  </div>;
}

export function CampusProfile({ href }: { href: string }) {
  const campus = campuses.find(item => item.href === href);
  if (!campus) return null;
  const offerings: Record<string, string[]> = {
    "/campuses/bhopal/": ["Clinical Embryology: B.Sc. (Hons./Research)", "Clinical Embryology: M.Sc.", "Clinical Embryology: PG Diploma"],
    "/campuses/hoshiarpur/": ["Clinical Embryology: B.Sc.", "Clinical Embryology: M.Sc."],
    "/campuses/shimla-hills/": ["Clinical Embryology: B.Sc. and M.Sc.", "Stem Cell & Regenerative Medicine: B.Sc. and M.Sc."],
    "/campuses/mohali/": ["Clinical Embryology & ART: B.Sc., M.Sc., and Ph.D.", "Cancer Biology: B.Sc. and M.Sc.", "Stem Cell & Regenerative Medicine: B.Sc. and M.Sc.", "Nutrigenetics & Personalised Nutrition: B.Sc. and M.Sc.", "B.Tech Stem Cell & Tissue Engineering"],
  };
  return <>
    <h2>{campus.title} campus</h2>
    <p>{campus.location} · In collaboration with {campus.partner}</p>
    <div className="campus-detail-panel"><h3>Programmes listed for this campus</h3><ul>{(offerings[href] ?? []).map(programme => <li key={programme}>{programme}</li>)}</ul><p>Listings follow the ITHS admissions page. Confirm current availability, eligibility, fees, and the awarding university directly with admissions.</p><Link href="/admissions/">Ask about campus programmes <span><SiteIcon name="arrowRight" /></span></Link></div>
    <Link className="text-link" href="/campuses/">All campuses <span><SiteIcon name="arrowRight" /></span></Link>
  </>;
}

export function UniversityPartnersSection() {
  return <section className="university-partners-showcase" aria-labelledby="university-partners-title">
    <header className="university-partners-heading"><span>Our Partners</span><h2 id="university-partners-title"><em>University</em> Partners</h2></header>
    <div className="university-partners-grid">
      {universityPartners.map(partner => <div className="university-partner-logo" key={partner.name}>
        <img src={partner.logo} alt={partner.name} />
      </div>)}
    </div>
  </section>;
}

export function LeadershipProfiles({ variant = "cards" }: { variant?: "cards" | "showcase" }) {
  const showcase = variant === "showcase";
  return <div className={showcase ? "leadership-showcase" : "leadership-profile-grid"}>
    {showcase && <header className="leadership-showcase-heading"><span>Leadership</span><h2>Meet Our <em>Visionaries</em></h2></header>}
    {leadership.map((person, index) => <article className={showcase ? `leadership-showcase-card leadership-showcase-card-${index + 1}` : "leadership-profile"} key={person.name}>
      <div className="leadership-photo-wrap"><img className="leadership-profile-photo" src={person.image} alt={person.name} />{!showcase && <span className="leadership-badge">{person.badge}</span>}</div>
      <div className={showcase ? "leadership-showcase-content" : "leadership-profile-content"}><h2>{person.name}</h2><span className="leadership-role">{person.title}</span>
        {showcase ? <p>{person.description}</p> : <><ul className="leadership-credentials">{person.credentials.map(item => <li key={item}>{item}</li>)}</ul><p>{person.description}</p><blockquote>{person.quote}</blockquote></>}
        {showcase && <ul className="leadership-showcase-credentials">{person.credentials.map((item, credentialIndex) => <li key={item}><span aria-hidden="true"><SiteIcon name={credentialIndex === 0 ? "award" : "certificate"} /></span>{item}</li>)}</ul>}
      </div>
    </article>)}
  </div>;
}
