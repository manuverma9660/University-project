"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const targets = [
  "main h1", "main h2", "main article", "main ol > li",
  "main a[class*='card']", "main .home-why-card", "main .home-intro-copy",
  "main .home-section-head", "main [class*='_sectionHead__']",
  "main [class*='_copy__']", "main [class*='_heroCopy__']", "main [class*='_intro__']",
  "main .home-life-tile", ".site-footer .footer-main > div",
].join(",");

// Enhance server-rendered content only after observers are ready. No-JS pages stay visible.
export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const marked = new Set<HTMLElement>();
    let observer: IntersectionObserver | undefined;
    let mutations: MutationObserver | undefined;
    let frame = 0;

    function reveal(element: HTMLElement) {
      element.dataset.motion = "visible";
      observer?.unobserve(element);
    }

    function reset() {
      observer?.disconnect();
      mutations?.disconnect();
      window.cancelAnimationFrame(frame);
      for (const element of marked) {
        element.dataset.motion = "done";
        element.style.removeProperty("--reveal-delay");
      }
      marked.clear();
    }

    function scan() {
      document.querySelectorAll<HTMLElement>(targets).forEach(element => {
        if (element.dataset.motion || !element.getClientRects().length) return;
        // Parent cards/intro blocks already reveal their contents together.
        if (element.parentElement?.closest(targets)) return;
        if (element.closest(".home-partner-carousel, [role='tablist'], [hidden], [inert]")) return;
        const rect = element.getBoundingClientRect();
        if (rect.bottom <= 0) return;
        const siblings = element.parentElement ? Array.from(element.parentElement.children).filter(sibling => sibling.matches(targets)) : [];
        const delay = Math.min(Math.max(0, siblings.indexOf(element)), 3) * 55;
        element.style.setProperty("--reveal-delay", `${delay}ms`);
        marked.add(element);
        if (rect.top < window.innerHeight - 28) reveal(element);
        else {
          observer?.observe(element);
          element.dataset.motion = "pending";
        }
      });
    }

    function start() {
      reset();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        });
      }, { threshold: 0, rootMargin: "0px 0px -28px 0px" });
      frame = window.requestAnimationFrame(scan);
      mutations = new MutationObserver(() => {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(scan);
      });
      mutations.observe(document.body, { childList: true, subtree: true });
    }

    function onFocus(event: FocusEvent) {
      if (!(event.target instanceof HTMLElement)) return;
      // Keyboard focus must never land in visually hidden content.
      const pending = event.target.closest<HTMLElement>('[data-motion="pending"]');
      if (pending) {
        observer?.unobserve(pending);
        pending.dataset.motion = "done";
      }
    }

    function onAnimationEnd(event: AnimationEvent) {
      if (event.animationName === "site-reveal" && event.target instanceof HTMLElement) {
        event.target.dataset.motion = "done";
        event.target.style.removeProperty("--reveal-delay");
      }
    }

    start();
    preference.addEventListener("change", start);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("animationend", onAnimationEnd);
    return () => {
      reset();
      preference.removeEventListener("change", start);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("animationend", onAnimationEnd);
    };
  }, [pathname]);

  return null;
}
