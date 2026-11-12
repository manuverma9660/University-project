"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, quickLinks } from "@/lib/site-map";
import { siteConfig } from "@/lib/site-config";

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label={`${siteConfig.name} â€” ${siteConfig.descriptor} home`}>
      <span className="brand-logo-crop" aria-hidden="true"><Image className="brand-logo" src="/iths-logo.webp" alt="" width={515} height={290} priority={!compact} /></span>
      <span className="brand-divider" aria-hidden="true" />
      <span className="brand-name"><strong>University of<br />Translational<br />Health Science</strong></span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
    <header className="site-header">
      <div className="header-shell">
      <div className="utility-bar">
        <div className="container utility-inner">
        <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 1 8.5l11 5.5 9-4.5V16h2V8.5L12 3Zm-7 9v4.5c4.4 3.3 9.6 3.3 14 0V12l-7 3.5-7-3.5Z" /></svg>{siteConfig.shortName} admissions · {siteConfig.admissionsCycle} course information</span>
          <div className="utility-links">
            {quickLinks.filter(link => link.title !== "Contact").map(link => <Link href={link.href} key={link.title} className={link.title === "Apply Online" ? "utility-apply" : ""}>{link.title}</Link>)}
          </div>
        </div>
      </div>
      <div className="brand-row"><div className="container brand-inner"><Brand /><a className="header-helpline" href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}><span className="helpline-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" /></svg></span><span className="helpline-copy"><small>Admission Helpline</small><strong>{siteConfig.admissionsPhone}</strong></span></a><button className="mobile-menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => setMobileOpen(true)}><span /><span /><span /></button></div>
      {mobileOpen && <button className="mobile-nav-backdrop" type="button" aria-label="Close navigation menu" onClick={() => { setMobileOpen(false); setOpenMenu(null); }} />}
      <nav ref={navRef} id="primary-navigation" className={`main-nav${mobileOpen ? " mobile-open" : ""}`} aria-label="Main navigation">
        <div className="mobile-drawer-top"><Brand compact /><button type="button" aria-label="Close navigation menu" onClick={() => { setMobileOpen(false); setOpenMenu(null); }}>Ã—</button></div>
        <div className="container nav-inner">
          <Link className={`home-link${pathname === "/" ? " is-active" : ""}`} href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setMobileOpen(false)}>Home</Link>
          {navigation.map(group => (
            group.direct ? <Link className={`direct-nav-link${pathname.startsWith(group.href) ? " is-active" : ""}`} href={group.href} key={group.label} onClick={() => setMobileOpen(false)}>{group.label}</Link> : <div className={`nav-dropdown${openMenu === group.label ? " menu-open" : ""}${group.label === "News" ? " nav-dropdown-align-right" : ""}`} key={group.label} onMouseEnter={() => { if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) setOpenMenu(group.label); }} onMouseLeave={() => { if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) setOpenMenu(null); }} onFocusCapture={() => setOpenMenu(group.label)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null); }}>
              <button type="button" className={`nav-trigger${pathname.startsWith(group.href) || group.items?.some(item => item.href.split(/[?#]/)[0] === pathname) || group.columns?.some(column => column.items.some(item => item.href.split(/[?#]/)[0] === pathname)) ? " is-active" : ""}`} aria-expanded={openMenu === group.label} aria-controls={`nav-menu-${group.label.toLowerCase().replaceAll(" ", "-").replaceAll("@", "at")}`} onClick={() => setOpenMenu(current => current === group.label ? null : group.label)}>{group.label}<span className="nav-chevron" aria-hidden="true" /></button>
              {openMenu === group.label && <><span className={`nav-menu-bridge${group.label === "News" ? " nav-menu-bridge-right" : ""}`} aria-hidden="true" /><div id={`nav-menu-${group.label.toLowerCase().replaceAll(" ", "-").replaceAll("@", "at")}`} className={`mega-menu ${group.columns ? "mega-menu-columns" : ""}${group.columns?.length === 1 ? " mega-menu-single-column" : ""}${group.label === "News" ? " mega-menu-align-right" : ""}`}>
                {group.columns ? group.columns.map(column => (
                  <div className="mega-column" key={column.title}>
                    <p>{column.title}</p>
                    {column.items.map(item => <Link href={item.href} key={item.href} title={item.status} onClick={() => { setMobileOpen(false); setOpenMenu(null); }}>{item.title}{item.status && <small>{item.status}</small>}</Link>)}
                  </div>
                )) : <div className="mega-column">{(group.items ?? []).map(item => <Link href={item.href} key={item.href} title={item.status} onClick={() => { setMobileOpen(false); setOpenMenu(null); }}>{item.title}{item.status && <small>{item.status}</small>}</Link>)}</div>}
              </div></>}
            </div>
          ))}
        </div>
      </nav>
      </div>
      </div>
    </header>
    </>
  );
}

