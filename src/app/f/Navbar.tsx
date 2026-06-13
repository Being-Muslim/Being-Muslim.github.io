"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  BookOpen,
  GraduationCap,
  BookMarked,
  Compass,
  Users,
  HelpCircle,
  ShoppingBag,
  Package,
  Layers,
  Tablet,
  Heart,
  Gift,
  HandHeart,
} from "lucide-react";
import { css } from "@/lib/css";

type LucideIcon = ComponentType<{ size?: number; strokeWidth?: number; color?: string }>;
type MenuRow = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  /** Accent color for the icon + title. Defaults to teal. */
  accent?: "teal" | "gold";
};

const TEAL = "#1f8a70";
const GOLD = "#f5c518";
// The title color leans into a slightly deeper teal for legibility.
const TITLE_TEAL = "#15302e";

const megaMenus: Record<string, MenuRow[]> = {
  Learn: [
    { icon: BookOpen, title: "Articles", desc: "In-depth guides on faith and practice", href: "/f/learn", accent: "teal" },
    { icon: GraduationCap, title: "Get Started", desc: "First steps for new Muslims", href: "/f/learn/beginners-guide", accent: "gold" },
    { icon: BookMarked, title: "Overview of Islam", desc: "Core beliefs, practices, and history", href: "/f/learn/brief-overview-of-islam", accent: "teal" },
  ],
  Convert: [
    { icon: Compass, title: "Ready to Convert?", desc: "Take the next step with guidance and support", href: "/f/convert", accent: "teal" },
    { icon: Users, title: "Find a Community", desc: "Connect with Muslims near you", href: "/f/convert", accent: "gold" },
    { icon: HelpCircle, title: "FAQ for Reverts", desc: "Answers to the most common questions", href: "/f/convert", accent: "teal" },
  ],
  Products: [
    { icon: BookOpen, title: "The Book", desc: "Being Muslim: A Practical Guide", href: "/f/shop/book", accent: "teal" },
    { icon: Package, title: "Boxed Set", desc: "Book, prayer cards, and more", href: "/f/shop/boxed-set", accent: "gold" },
    { icon: Layers, title: "Prayer Cards", desc: "Keep by your prayer mat", href: "/f/shop/prayer-cards", accent: "teal" },
    { icon: Tablet, title: "Digital Edition", desc: "Read anywhere, instantly", href: "/f/shop/ebook", accent: "gold" },
  ],
  Support: [
    { icon: Heart, title: "Donate", desc: "Help fund resources for new Muslims", href: "/f/support", accent: "teal" },
    { icon: Gift, title: "Sponsor a Set", desc: "Gift a boxed set to someone in need", href: "/f/support", accent: "gold" },
    { icon: HandHeart, title: "Volunteer", desc: "Join our team of contributors", href: "/f/support", accent: "teal" },
  ],
};

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/f" },
  { label: "Learn", href: "/f/learn" },
  { label: "Convert", href: "/f/convert" },
  { label: "Products", href: "/f/shop" },
  { label: "Support", href: "/f/support" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openMenu(label: string) {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(label);
  }
  function scheduleClose() {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  }
  function cancelClose() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  }

  const solid = scrolled || !!activeMenu || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        solid ? "backdrop-blur-md shadow-sm border-border" : "border-transparent"
      }`}
      style={
        solid
          ? css("background: rgba(249,247,242,0.97)")
          : css("background: rgba(249,247,242,0.7); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)")
      }
    >
      <nav className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/f" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
            alt="Being Muslim"
            className="h-8 w-8 invert"
            style={css("transition: filter 0.3s")}
          />
          <span className="text-lg font-bold transition-colors" style={css("font-family: 'Inter', sans-serif; color: #1d2b29")}>
            Being Muslim
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const rows = megaMenus[link.label];
            const open = activeMenu === link.label;
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => (rows ? openMenu(link.label) : setActiveMenu(null))}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={link.href}
                  className="bm-link-animated text-[15px] font-medium transition-colors py-6 inline-block"
                  style={css("font-family: 'Inter', sans-serif; color: #1d2b29")}
                >
                  {link.label}
                </Link>

                {/* Beginnings-style dropdown card */}
                {rows && open && (
                  <div
                    className="bm-dropdown"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="bm-dropdown-caret" />
                    <div className="bm-dropdown-card">
                      {rows.map((row) => {
                        const Icon = row.icon;
                        const accent = row.accent === "gold" ? GOLD : TEAL;
                        return (
                          <Link key={row.title} href={row.href} className="bm-dropdown-row">
                            <span
                              className="bm-dropdown-icon"
                              style={css(`color: ${accent}`)}
                            >
                              <Icon size={26} strokeWidth={1.75} />
                            </span>
                            <span style={css("display: flex; flex-direction: column; gap: 2px")}>
                              <span
                                className="bm-dropdown-title"
                                style={css(`color: ${row.accent === "gold" ? "#a87d00" : TITLE_TEAL}`)}
                              >
                                {row.title}
                              </span>
                              <span className="bm-dropdown-desc">{row.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/f/support"
          className="hidden md:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all bm-btn-gold"
          style={css("font-family: 'Inter', sans-serif")}
        >
          Donate
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 md:hidden"
          style={css("color: #1d2b29")}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu md:hidden ${mobileOpen ? "open" : ""}`}>
        <div className="px-6 py-4" style={css("border-top: 1px solid #ece7dd")}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="block py-2.5 font-medium" style={css("font-family: 'Inter', sans-serif; color: #1d2b29")} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/f/support" className="block mt-3 text-center py-2.5 rounded-full font-semibold bm-btn-gold" style={css("justify-content: center; font-family: 'Inter', sans-serif")} onClick={() => setMobileOpen(false)}>
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
