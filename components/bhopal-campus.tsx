import { SiteIcon } from "@/components/site-icon";
import Link from "next/link";

import { campusDetails, type CampusKey } from "@/lib/campus-details";

export function CampusLandingPage({ campus }: { campus: CampusKey }) {
  const details = campusDetails[campus];
  const programmesId = `${campus}-programmes`;
  const partnerLogo = {
    bhopal: "/images/campuses/scope-global-skills-university-logo.png",
    shimla: "/images/campuses/bahra-shimla-logo.webp",
    hoshiarpur: "/images/campuses/rayat-bahra-hoshiarpur-logo.jfif",
    mohali: "/images/campuses/rayat-bahra-mohali-logo.webp",
  }[campus];
  const partnerAddress = campus === "bhopal"
    ? "NH-12, Near Misrod, Village Bhairpur, Hoshangabad Road, Bhopal, Madhya Pradesh 462026"
    : details.address;

  return <div className={`campus-landing-page campus-landing-${campus}`}>
    {campus === "bhopal" && <section className="campus-bhopal-photo-hero" aria-label="SCOPE Global Skills University campus"><div className="campus-bhopal-photo-hero-copy"><span className="campus-bhopal-campus-logo"><img src="/images/campuses/scope-global-skills-university-logo.png" alt="SCOPE Global Skills University logo" /></span><div><span className="campus-bhopal-campus-label">ITHS · Partner campus</span><strong>Bhopal Campus</strong><p>Study with SCOPE Global Skills University in Central India.</p></div></div><img src="/images/campuses/scope-global-skills-university-hero.png" alt="SCOPE Global Skills University campus in Bhopal" /></section>}
    {campus === "shimla" && <section className="campus-bhopal-photo-hero campus-shimla-photo-hero" aria-label="Bahra University campus in Shimla Hills"><div className="campus-bhopal-photo-hero-copy"><span className="campus-bhopal-campus-logo"><img src="/images/campuses/bahra-shimla-logo.webp" alt="Bahra University Shimla Hills logo" /></span><div><span className="campus-bhopal-campus-label">ITHS · Partner campus</span><strong>Shimla Hills Campus</strong><p>Study with Bahra University in the Himachal Pradesh hills.</p></div></div><img src="/images/campuses/bahra-shimla-hero-bg.png" alt="Bahra University campus among the Shimla Hills" /></section>}
    {campus === "hoshiarpur" && <section className="campus-bhopal-photo-hero campus-hoshiarpur-photo-hero" aria-label="Rayat Bahra University campus in Hoshiarpur"><div className="campus-bhopal-photo-hero-copy"><span className="campus-bhopal-campus-logo"><img src="/images/campuses/rayat-bahra-hoshiarpur-logo.jfif" alt="Rayat Bahra University Hoshiarpur logo" /></span><div><span className="campus-bhopal-campus-label">ITHS · Partner campus</span><strong>Hoshiarpur Campus</strong><p>Study with Rayat Bahra University in Punjab.</p></div></div><img src="/images/campuses/rayat-bahra-hoshiarpur-hero.png" alt="Rayat Bahra University campus in Hoshiarpur" /></section>}
    {campus === "mohali" && <section className="campus-bhopal-photo-hero campus-mohali-photo-hero" aria-label="Rayat Bahra University campus in Mohali"><div className="campus-bhopal-photo-hero-copy"><span className="campus-bhopal-campus-logo"><img src="/images/campuses/rayat-bahra-mohali-logo.webp" alt="Rayat Bahra University logo" /></span><div><span className="campus-bhopal-campus-label">ITHS · Partner campus</span><strong>Mohali Campus</strong><p>Study with Rayat Bahra University in Mohali, Punjab.</p></div></div><img src="/images/campuses/rayat-bahra-mohali-hero.png" alt="Rayat Bahra University campus in Mohali" /></section>}
    <section className="campus-landing-hero">
      <div className="campus-landing-hero-copy">
        <nav className="campus-landing-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/campuses/">Campuses</Link><span aria-hidden="true">/</span><span>{details.shortName}</span></nav>
        <span className="campus-landing-kicker">ITHS · Partner campus</span>
        <h1>Study at ITHS<br /><em>{details.campusName}</em></h1>
        <p>{details.introduction}</p>
        <ul>{details.benefits.map(item => <li key={item}>{item}</li>)}</ul>
        <div className="campus-landing-actions"><Link className="button button-primary" href="/apply/">Apply online <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link><Link className="text-link" href={`#${programmesId}`}>Explore programmes <span aria-hidden="true"><SiteIcon name="arrowDown" /></span></Link></div>
      </div>
      <figure className="campus-landing-hero-visual"><img className="campus-landing-hero-image" src={details.image} alt={details.imageAlt} /><figcaption><span>ITHS CAMPUS</span><strong>{details.campusName}</strong><span>{details.partner}</span></figcaption></figure>
    </section>

    <section className="campus-programmes" id={programmesId}>
      <div className="campus-section-heading"><p className="eyebrow">Study at ITHS {details.campusName}</p><h2>{details.programmeHeading}</h2><p>{details.programmeIntro}</p></div>
      <div className="campus-programme-grid">{details.programmes.map(programme => <article className="campus-programme-card" key={programme.name}>
        <span className="campus-programme-level">{programme.level}</span><h3>{programme.name}</h3><p>{programme.description}</p>
        <dl><div><dt>{programme.durationLabel ?? "Duration"}</dt><dd>{programme.duration}</dd></div><div><dt>Eligibility</dt><dd>{programme.eligibility}</dd></div></dl>
        <Link href="/enquire/">Ask about this programme <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link>
      </article>)}</div>
    </section>

    <section className="campus-highlights">
      <div className="campus-section-heading"><p className="eyebrow">Why {details.campusName}</p><h2>Learn through practice</h2><p>Build specialist knowledge with a learning experience connected to real clinical settings.</p></div>
      <div className="campus-highlight-grid">{details.highlights.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
    </section>

    <section className={`campus-location campus-location-partner campus-location-partner-${campus}`}>
      <span className="campus-location-scope-curve campus-location-scope-curve-top" aria-hidden="true" />
      <span className="campus-location-scope-curve campus-location-scope-curve-bottom" aria-hidden="true" />
      <span className={`campus-location-scope-logo${campus === "shimla" ? " campus-location-partner-logo-round" : ""}`}><img src={partnerLogo} alt={`${details.partner} logo`} /></span>
      <div className="campus-location-scope-copy"><p className="eyebrow">Our campus partner</p><h2>{details.partner}</h2><p>{details.partnerDescription}</p><p className="campus-address">{partnerAddress}</p></div>
      <Link className="button button-primary" href="/enquire/">Contact Admissions <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link>
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
