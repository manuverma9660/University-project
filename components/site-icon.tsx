import type { ReactNode } from "react";

const artwork = {
  home: <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
  university: <><path d="m3 9 9-6 9 6H3ZM4 21h16M6 10v8m6-8v8m6-8v8M4 18h16" /></>,
  trophy: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34" /><path d="M18 4H6v7a6 6 0 0 0 12 0V4Z" /></>,
  // Lucide microscope: https://lucide.dev/icons/microscope (ISC license).
  microscope: <><path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" /><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></>,
  dna: <><path d="M6 3c0 8 12 10 12 18M18 3c0 8-12 10-12 18M7 5h10M9 9h6M9 15h6M7 19h10" /></>,
  handshake: <><path d="m11 17 2 2a1 1 0 0 0 1.42 0l4.58-4.58a1 1 0 0 0 0-1.42l-2.58-2.58a1 1 0 0 0-1.42 0L13 12.42" /><path d="m16 8 4.58 4.58a1 1 0 0 1 0 1.42l-2.58 2.58a1 1 0 0 1-1.42 0L12 12" /><path d="M7 11 2.42 6.42a1 1 0 0 1 0-1.42L5 2.42a1 1 0 0 1 1.42 0L11 7" /><path d="m2 16 4.58-4.58a1 1 0 0 1 1.42 0l2.58 2.58a1 1 0 0 1 0 1.42L6 20" /></>,
  lightbulb: <><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
  target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
  eye: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6h14M5 18h14" /></>,
  rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
  graduation: <><path d="m2 8 10-5 10 5-10 5L2 8Zm4 3v7l6 3 6-3v-7m4-3v9" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V3h8v4M3 12l9 4 9-4m-9 1v5" /></>,
  phone: <path d="m7 3 3 5-3 3a15 15 0 0 0 6 6l3-3 5 3-1 4C10 23 1 14 3 4l4-1Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>,
  chat: <path d="M21 11a9 9 0 0 1-13 8l-5 2 1-6A9 9 0 1 1 21 11ZM8 10h8m-8 4h5" />,
  sparkles: <><path d="m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6ZM20 2v4m-2-2h4" /></>,
  certificate: <><path d="M14 21H4V3h16v10M7 7h10M7 11h6" /><circle cx="17" cy="16" r="3" /><path d="m15 19-1 4 3-1 3 1-1-4" /></>,
  users: <><circle cx="9" cy="8" r="4" /><path d="M2 21v-3a7 7 0 0 1 14 0v3M16 4a4 4 0 0 1 0 8m3 3a6 6 0 0 1 3 6" /></>,
  heart: <path d="M12 21 3 12C-3 4 7-2 12 5c5-7 15-1 9 7l-9 9Z" />,
  check: <path d="m4 12 5 5L20 6" />,
  external: <><path d="M14 3h7v7m0-7L10 14M10 3H3v18h18v-7" /></>,
} satisfies Record<string, ReactNode>;

export type SiteIconName = keyof typeof artwork;

export function SiteIcon({ name }: { name: SiteIconName }) {
  return <svg className="site-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{artwork[name]}</svg>;
}
