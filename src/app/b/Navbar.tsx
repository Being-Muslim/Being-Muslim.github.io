"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { css } from "@/lib/css";

const navLinks = [
  { label: "Home", href: "/b" },
  { label: "Learn", href: "/b/learn" },
  { label: "Convert", href: "/b/convert" },
  { label: "Products", href: "/b/shop" },
  { label: "Support", href: "/b/support" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={css("padding: 16px 24px")}>
      {/* Desktop: pill navbar (always visible on md+) */}
      <nav
        className="bm-navbar-pill hidden md:flex"
        style={css(
          "max-width: 1100px; margin: 0 auto; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px; border-radius: 999px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.08); box-shadow: none; transition: all 0.3s",
        )}
      >
        <Link href="/b" style={css("display: flex; align-items: center; gap: 10px; text-decoration: none")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style={css("height: 28px; width: 28px")} />
          <span style={css("font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #fff")}>Being Muslim</span>
        </Link>
        <div style={css("display: flex; align-items: center; gap: 28px")}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; color: rgba(255,255,255,0.85); padding: 6px 14px; border-radius: 999px")}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/b/contact"
          style={css("align-items: center; padding: 8px 20px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: all 0.3s; background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.25)")}
        >
          Contact
        </Link>
      </nav>

      {/* Mobile: single glass container that expands */}
      <div className={`mobile-shell md:hidden ${mobileOpen ? "open" : ""}`}>
        {/* Top row: logo + hamburger */}
        <div style={css("display: flex; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px")}>
          <Link href="/b" style={css("display: flex; align-items: center; gap: 10px; text-decoration: none")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style={css("height: 28px; width: 28px")} />
            <span style={css("font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #fff")}>Being Muslim</span>
          </Link>
          <button
            style={css("padding: 8px; border: none; background: none; cursor: pointer; color: #fff")}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Expandable links */}
        <div className="mobile-links">
          <div style={css("padding: 4px 20px 16px")}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={css("display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #fff; text-decoration: none")}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/b/contact"
              style={css("display: block; margin-top: 8px; text-align: center; background: rgba(255,255,255,0.15); color: #fff; padding: 10px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid rgba(255,255,255,0.25)")}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
