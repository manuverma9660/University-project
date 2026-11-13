"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getVisibleNavigation, pageDescriptions, quickLinks, type NavigationGroup } from "@/lib/site-map";
import { siteConfig } from "@/lib/site-config";

const navigation = getVisibleNavigation();
const searchablePages = [...new Map([
  ...navigation.flatMap(group => [
    { title: group.label, href: group.href },
    ...(group.items ?? []),
    ...(group.columns ?? []).flatMap(column => column.items),
  ]),
  ...quickLinks,
  { title: "Enquire", href: "/enquire/" },
].map(page => [page.href, page])).values()];

function HeaderSearch({ onOpen }: { onOpen: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = terms.length ? searchablePages.filter(page => {
    const text = `${page.title} ${pageDescriptions[page.href] ?? ""}`.toLowerCase();
    return terms.every(term => text.includes(term));
  }).slice(0, 6) : [];

  useEffect(() => { setIsOpen(false); setQuery(""); }, [pathname]);
  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const dismiss = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setIsOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("pointerdown", dismiss);
    window.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      window.removeEventListener("keydown", escape);
    };
  }, [isOpen]);

  return <div className="header-search-container" ref={containerRef} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
  }}>
    <button ref={toggleRef} type="button" className="header-scholarship-link" aria-label="Search website" title="Search website" aria-expanded={isOpen} aria-controls="header-search-panel" onClick={() => {
      if (!isOpen) onOpen();
      setIsOpen(current => !current);
    }}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /></svg></button>
    {isOpen && <div id="header-search-panel" className="header-search-panel">
      <form role="search" aria-label="Search website pages" className="header-search-form" onSubmit={event => {
        event.preventDefault();
        if (results[0]) { router.push(results[0].href); setIsOpen(false); setQuery(""); }
        else inputRef.current?.focus();
      }}>
        <input ref={inputRef} type="search" aria-label="Search pages and programmes" placeholder="Search..." value={query} onChange={event => setQuery(event.target.value)} autoComplete="off" />
        <button type="submit" aria-label="Submit search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></svg></button>
      </form>
      {!!terms.length && <div className="header-search-results">
        <p role="status">{results.length ? `${results.length} matching pages` : "No pages found. Try another search."}</p>
        {!!results.length && <ul aria-label="Search results">{results.map(page => <li key={page.href}><Link href={page.href} onClick={() => { setIsOpen(false); setQuery(""); }}>{page.title}<span aria-hidden="true">&rarr;</span></Link></li>)}</ul>}
      </div>}
    </div>}
  </div>;
}

function MegaMenuContent({ group, close }: { group: NavigationGroup; close: () => void }) {
  const columns = group.columns ?? [{ title: group.label, items: group.items ?? [] }];
  const items = columns.flatMap(column => column.items);
  // Reuse the published navigation and existing site copy for every panel.
  const cards = items.filter(item => item.href !== group.href).slice(0, 3);
  const image = group.label === "Academics" || group.label === "Programmes" ? "/clinical-embryology.webp" : "/iths-learning-01.webp";
  return <>
    <div className="header-mega-top">
      <Link className="header-mega-feature" href={group.href} onClick={close}>
        <Image src={image} alt="" fill sizes="(min-width: 1081px) 500px, 1px" />
        <div><span>{siteConfig.shortName}</span><h2>{group.label}</h2>{pageDescriptions[group.href] && <p>{pageDescriptions[group.href]}</p>}<strong>{group.label} <span aria-hidden="true">&rarr;</span></strong></div>
      </Link>
      <div className={`header-mega-links${columns.length === 1 ? " header-mega-links-single" : ""}`}>
        {columns.map(column => <div className="mega-column" key={column.title}>
          <p>{column.title}</p>
          {column.items.map(item => <Link href={item.href} key={item.href} title={item.status} onClick={close}>{item.title}{item.description && <small>{item.description}</small>}{item.status && <small>{item.status}</small>}</Link>)}
          {!column.items.length && <small>Updates coming soon.</small>}
        </div>)}
      </div>
    </div>
    {!!cards.length && <div className="header-mega-cards">{cards.map((item, index) => <Link className="header-mega-card" href={item.href} key={item.href} onClick={close}>
      <span>{group.label}</span><h3>{item.title}</h3>{item.description && <p>{item.description}</p>}
      {index === 2 && <Image src="/iths-learning-02.webp" alt="" fill sizes="350px" />}
      <span className="header-mega-card-arrow" aria-hidden="true">&rarr;</span>
    </Link>)}</div>}
  </>;
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label={`${siteConfig.name} home`}>
      <span className="brand-logo-crop" aria-hidden="true"><Image className="brand-logo" src="/iths-logo.webp" alt="" width={515} height={290} priority={!compact} /></span>
      <span className="brand-divider" aria-hidden="true" />
      <span className="brand-name"><strong>University of<br />Translational Health<br />Science</strong></span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuInteraction = useRef<"hover" | "click">("hover");
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  function cancelMenuClose() {
    if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current);
    menuCloseTimer.current = null;
  }
  function hoverMenu(label: string) {
    cancelMenuClose();
    if (!window.matchMedia("(min-width: 1081px) and (hover: hover) and (pointer: fine)").matches) return;
    if (openMenu !== label) menuInteraction.current = "hover";
    setOpenMenu(label);
  }
  function leaveMenu(label: string) {
    if (menuInteraction.current === "click" || !window.matchMedia("(min-width: 1081px) and (hover: hover) and (pointer: fine)").matches) return;
    cancelMenuClose();
    menuCloseTimer.current = setTimeout(() => {
      if (menuInteraction.current === "hover") setOpenMenu(current => current === label ? null : current);
    }, 180);
  }
  function toggleMenu(label: string) {
    cancelMenuClose();
    const close = openMenu === label && menuInteraction.current === "click";
    menuInteraction.current = close ? "hover" : "click";
    setOpenMenu(close ? null : label);
  }
  useEffect(() => {
    if (!openMenu || mobileOpen) return;
    const positionMenu = () => {
      const header = headerRef.current;
      if (header) header.style.setProperty("--header-bottom", `${header.getBoundingClientRect().bottom}px`);
    };
    positionMenu();
    window.addEventListener("resize", positionMenu);
    window.addEventListener("scroll", positionMenu, { passive: true });
    return () => {
      window.removeEventListener("resize", positionMenu);
      window.removeEventListener("scroll", positionMenu);
    };
  }, [openMenu, mobileOpen]);
  useEffect(() => () => { if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current); }, []);
  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const oldOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    navRef.current?.querySelector<HTMLButtonElement>(".mobile-drawer-top button")?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
      if (event.key === "Tab") {
        const elements = Array.from(navRef.current?.querySelectorAll<HTMLElement>('a[href], button, [tabindex="0"]') ?? []).filter(element => element.getClientRects().length);
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      previousFocus?.focus();
    };
  }, [mobileOpen]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1081px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!openMenu || mobileOpen) return;
    const dismiss = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("pointerdown", dismiss);
    window.addEventListener("keydown", dismissOnEscape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      window.removeEventListener("keydown", dismissOnEscape);
    };
  }, [openMenu, mobileOpen]);

  return (
    <>
      <header ref={headerRef} className={`site-header${openMenu ? " has-open-menu" : ""}`} onKeyDown={event => { if (event.key === "Escape") { setOpenMenu(null); setMobileOpen(false); } }}>
        {openMenu && !mobileOpen && <div className="header-menu-backdrop" aria-hidden="true" onPointerDown={() => setOpenMenu(null)} />}
        <div className="header-shell">
          <div className="utility-bar">
            <div className="container utility-inner">
              <div className="header-contact-chips">
                <a className="header-contact-chip" href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}><span>Admissions</span><strong>{siteConfig.admissionsPhone}</strong></a>
                <a className="header-contact-chip" href="https://wa.me/917696614978" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{siteConfig.admissionsPhone}</strong></a>
              </div>
              <div className="utility-links">
                {quickLinks.filter(link => link.title !== "Apply Online" && link.title !== "Contact").map(link => <Link href={link.href} key={link.title}>{link.title}</Link>)}
                <Link href="/campuses/">Our Campuses</Link>
              </div>
              <div className="header-utility-actions">
                <HeaderSearch onOpen={() => { setOpenMenu(null); setMobileOpen(false); }} />
                <Link className="header-utility-pill header-contact-link" href="/contact/" aria-label="Contact Us"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 3 3 5-3 2a15 15 0 0 0 6 6l2-3 5 3-1 4c-9 1-17-7-17-16l5-1Z" /></svg><span>Contact Us</span></Link>
                <Link className="header-utility-pill header-enquiry-link" href="/enquire/"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z" /><path d="M8 10h8M8 14h5" /></svg><span>Enquire Now</span></Link>
              </div>
            </div>
          </div>
          <div className="brand-row"><div className="container brand-inner"><Brand /><div className="header-actions"><Link className="header-apply" href="/apply/">Apply Now</Link></div><button className="mobile-menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => setMobileOpen(true)}><span /><span /><span /></button></div>
            {mobileOpen && <button className="mobile-nav-backdrop" type="button" aria-label="Close navigation menu" onClick={() => { setMobileOpen(false); setOpenMenu(null); }} />}
            <nav ref={navRef} id="primary-navigation" className={`main-nav${mobileOpen ? " mobile-open" : ""}`} aria-label="Main navigation">
              <div className="mobile-drawer-top"><Brand compact /><button type="button" aria-label="Close navigation menu" onClick={() => { setMobileOpen(false); setOpenMenu(null); }}><svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 6 12 12M18 6 6 18" /></svg></button></div>
              <div className="container nav-inner">
                <Link className={`home-link${pathname === "/" ? " is-active" : ""}`} href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setMobileOpen(false)}>Home</Link>
                {navigation.map(group => (
                  group.direct ? <Link className={`direct-nav-link${pathname.startsWith(group.href) ? " is-active" : ""}`} href={group.href} key={group.label} onClick={() => setMobileOpen(false)}>{group.label}</Link> : <div className={`nav-dropdown${openMenu === group.label ? " menu-open" : ""}${group.label === "News" ? " nav-dropdown-align-right" : ""}`} key={group.label} onMouseEnter={() => hoverMenu(group.label)} onMouseLeave={() => leaveMenu(group.label)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(current => current === group.label ? null : current); }}>
                    <button type="button" className={`nav-trigger${pathname.startsWith(group.href) || group.items?.some(item => item.href.split(/[?#]/)[0] === pathname) || group.columns?.some(column => column.items.some(item => item.href.split(/[?#]/)[0] === pathname)) ? " is-active" : ""}`} aria-expanded={openMenu === group.label} aria-controls={`nav-menu-${group.label.toLowerCase().replaceAll(" ", "-").replaceAll("@", "at")}`} onClick={() => toggleMenu(group.label)}>{group.label}<span className="nav-chevron" aria-hidden="true" /></button>
                    {openMenu === group.label && <><span className={`nav-menu-bridge${group.label === "News" ? " nav-menu-bridge-right" : ""}`} aria-hidden="true" /><div id={`nav-menu-${group.label.toLowerCase().replaceAll(" ", "-").replaceAll("@", "at")}`} className={`mega-menu ${group.columns ? "mega-menu-columns" : ""}${group.columns?.length === 1 ? " mega-menu-single-column" : ""}${group.label === "News" ? " mega-menu-align-right" : ""}`}>
                      <MegaMenuContent group={group} close={() => { setMobileOpen(false); setOpenMenu(null); }} />
                    </div></>}
                  </div>
                ))}
              </div>
              <div className="mobile-drawer-actions"><Link className="button button-red" href="/enquire/" onClick={() => { setMobileOpen(false); setOpenMenu(null); }}>Enquire now</Link><Link className="button button-primary" href="/apply/" onClick={() => { setMobileOpen(false); setOpenMenu(null); }}>Apply online</Link></div></nav>
          </div>
        </div>
      </header>
    </>
  );
}

