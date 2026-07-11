import React from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Perspectives", path: "/perspectives" },
  { label: "Contact", path: "/contact" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-obsidian/85 border-b border-steel-navy/15">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-heading text-base md:text-lg text-parchment font-bold tracking-tight hover:text-steel-navy transition-colors"
        >
          Carolina Buigas
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase transition-colors ${
                  isActive
                    ? "text-steel-navy"
                    : "text-slate-mist hover:text-steel-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}