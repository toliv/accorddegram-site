"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Dates", href: "#dates" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-4xl mx-auto px-4 py-3">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-widest uppercase"
        >
          ADG
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        <ul
          className={`md:flex md:gap-8 absolute md:static top-full left-0 right-0 bg-background/95 md:bg-transparent p-4 md:p-0 transition-all ${
            isOpen
              ? "flex flex-col gap-4 shadow-lg"
              : "hidden md:flex"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-mono text-sm tracking-widest uppercase hover:opacity-60 transition-opacity block py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}