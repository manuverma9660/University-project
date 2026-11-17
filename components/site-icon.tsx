import type { ReactNode } from "react";

const artwork = {
  university: <><path d="m3 9 9-6 9 6H3ZM4 21h16M6 10v8m6-8v8m6-8v8M4 18h16" /></>,
  microscope: <><path d="m10 3 5 3-5 8-5-3 5-8ZM8 13l-2 3m0 5h14M14 9a6 6 0 0 1 1 12M6 17h8" /></>,
  award: <><circle cx="12" cy="8" r="5" /><path d="m8 12-2 9 6-3 6 3-2-9" /></>,
  dna: <><path d="M6 3c0 8 12 10 12 18M18 3c0 8-12 10-12 18M7 5h10M9 9h6M9 15h6M7 19h10" /></>,
  handshake: <><path d="m3 8 4-3 4 2 3-2 7 5-3 6-5 4-6-3-4-9ZM11 7l-3 4 2 2 4-3 5 5M7 17l2-3m1 5 2-3m1 4 2-3" /></>,
  lightbulb: <><path d="M8 16c0-3-3-4-3-8a7 7 0 0 1 14 0c0 4-3 5-3 8M8 17h8M9 21h6M10 13V9m4 4V9" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  leaf: <><path d="M20 3C8 2 2 8 5 16c8 5 15-2 15-13ZM4 21 16 9M9 16V9m0 7h7" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6h14M5 18h14" /></>,
  rocket: <><path d="M9 15 6 12C9 5 14 3 21 3c0 7-2 12-9 15l-3-3ZM6 12H3l2-5h5m2 11v3l5-2v-5M6 18l-3 3" /><circle cx="15" cy="9" r="2" /></>,
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
