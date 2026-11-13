import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import "./homepage.css";
import "./header.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Health Science Education`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    `Explore programmes, research, admissions, and campus life at ${siteConfig.name}.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
