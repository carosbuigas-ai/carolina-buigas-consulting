import React from "react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Perspectives", path: "/perspectives" },
  { label: "Contact", path: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-steel-navy/15">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-slate-mist">
          &copy; {new Date().getFullYear()} Carolina Buigas Arguelles
        </p>
        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-mono text-xs text-slate-mist hover:text-steel-navy transition-colors tracking-[0.1em] uppercase"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/carolina-buigas-arguelles-66512835"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate-mist hover:text-steel-navy transition-colors tracking-[0.1em] uppercase"
          >
            LinkedIn &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}