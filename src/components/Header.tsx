"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center max-w-4xl mx-auto px-4 py-3">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
        >
          Home
        </Link>

        <div className="flex items-center gap-4 ml-auto">
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

          <ul className="hidden md:flex md:gap-8">
            <li>
              <Link
                href="#dates"
                className="font-mono text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
              >
                Dates
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="font-mono text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <ul
          className={`md:hidden absolute top-full left-0 right-0 bg-background/95 p-4 transition-all ${
            isOpen
              ? "flex flex-col gap-4 shadow-lg"
              : "hidden"
          }`}
        >
          <li>
            <Link
              href="#dates"
              className="font-mono text-sm tracking-widest uppercase hover:opacity-60 transition-opacity block py-2"
              onClick={() => setIsOpen(false)}
            >
              Dates
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="font-mono text-sm tracking-widest uppercase hover:opacity-60 transition-opacity block py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}