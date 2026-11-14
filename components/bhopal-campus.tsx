import Link from "next/link";

import { campusDetails, type CampusKey } from "@/lib/campus-details";

export function CampusLandingPage({ campus }: { campus: CampusKey }) {
  const details = campusDetails[campus];
  const programmesId = `${campus}-programmes`;

  return <div className="campus-landing-page">
    <section className="campus-landing-hero">
      <div className="campus-landing-hero-copy">
        <span className="campus-landing-kicker">In collaboration with {details.partner}</span>
        <h2>ITHS – {details.shortName}<br /><em>{details.campusName} Campus</em></h2>
        <p>{details.introduction}</p>
        <ul>{details.benefits.map(item => <li key={item}>{item}</li>)}</ul>
        <div className="campus-landing-actions"><Link className="button button-primary" href="/apply/">Apply online <span aria-hidden="true">→</span></Link><Link className="text-link" href={`#${programmesId}`}>Explore programmes <span aria-hidden="true">↓</span></Link></div>
      </div>
      <img className="campus-landing-hero-image" src={details.image} alt={details.imageAlt} />
    </section>

    <section className="campus-programmes" id={programmesId}>
      <div className="campus-section-heading"><p className="eyebrow">Study at ITHS {details.campusName}</p><h2>{details.programmeHeading}</h2><p>{details.programmeIntro}</p></div>
      <div className="campus-programme-grid">{details.programmes.map(programme => <article className="campus-programme-card" key={programme.name}>
        <span className="campus-programme-level">{programme.level}</span><h3>{programme.name}</h3><p>{programme.description}</p>
        <dl><div><dt>{programme.durationLabel ?? "Duration"}</dt><dd>{programme.duration}</dd></div><div><dt>Eligibility</dt><dd>{programme.eligibility}</dd></div></dl>
        <Link href="/enquire/">Ask about this programme <span aria-hidden="true">→</span></Link>
      </article>)}</div>
    </section>

    <section className="campus-highlights">
      <div className="campus-section-heading"><p className="eyebrow">Why {details.campusName}</p><h2>Learn through practice</h2><p>Build specialist knowledge with a learning experience connected to real clinical settings.</p></div>
      <div className="campus-highlight-grid">{details.highlights.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
    </section>

    <section className="campus-location">
      <div><p className="eyebrow">Campus partner</p><h2>{details.partner}</h2><p>{details.partnerDescription}</p><p className="campus-address">{details.address}</p></div>
      <Link className="button button-primary" href="/enquire/">Contact admissions <span aria-hidden="true">→</span></Link>
    </section>
  </div>;
}

export function BhopalCampusPage() {
  return <CampusLandingPage campus="bhopal" />;
}

export function HoshiarpurCampusPage() {
  return <CampusLandingPage campus="hoshiarpur" />;
}

export function ShimlaCampusPage() {
  return <CampusLandingPage campus="shimla" />;
}

export function MohaliCampusPage() {
  return <CampusLandingPage campus="mohali" />;
}
