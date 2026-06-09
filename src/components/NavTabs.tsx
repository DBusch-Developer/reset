"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function MealsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  );
}

function FoodsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
      <path d="M12 8v4l3 3"/>
      <path d="M8.5 2.5C9.5 4 10 5 10 7"/>
      <path d="M15.5 2.5C14.5 4 14 5 14 7"/>
    </svg>
  );
}

function TrackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  );
}

const tabs = [
  { href: "/", label: "Info", Icon: InfoIcon },
  { href: "/meals", label: "Meals", Icon: MealsIcon },
  { href: "/foods", label: "Foods", Icon: FoodsIcon },
  { href: "/progress", label: "Track", Icon: TrackIcon },
];

function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(href + "/");
}

export function NavTabs({ variant }: { variant: "bottom" | "desktop" }) {
  const path = usePathname();

  if (variant === "desktop") {
    return (
      <div className="desktop-tabs">
        {tabs.map(({ href, label }) => (
          <Link key={href} href={href} className={`nav-tab${isActive(path, href) ? " active" : ""}`}>
            {label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <nav className="bottom-tabs" aria-label="Main navigation">
      {tabs.map(({ href, label, Icon }) => (
        <Link key={href} href={href} className={`tab-item${isActive(path, href) ? " active" : ""}`}>
          <span className="tab-icon"><Icon /></span>
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
