"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Menu,
  X,
  Droplets,
  Square,
  ChevronDown,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Compass,
  HelpCircle,
  Users,
  Heart,
  MessageCircle,
  Sparkles,
  Globe,
  Gift,
} from "lucide-react";
import { css } from "@/lib/css";

type MegaLink = { label: string; href: string; desc?: string; icon?: LucideIcon };
type MegaColumn = { heading?: string; links: MegaLink[]; seeAll?: { label: string; href: string } };
type ProductCard = { label: string; href: string; img: string };
type MegaMenu = {
  title: string;
  titleHref: string;
  columns: MegaColumn[];
  // Optional right-hand visual column of product image cards (Products menu).
  products?: ProductCard[];
};

const megaMenus: Record<string, MegaMenu> = {
  Learn: {
    title: "Learn",
    titleHref: "/c/learn",
    columns: [
      {
        heading: "Resources",
        links: [
          { label: "Articles", href: "/c/learn", icon: BookOpen },
          { label: "Courses", href: "/c/learn", icon: GraduationCap },
          { label: "Brief Overview of Islam", href: "/c/learn/brief-overview-of-islam", icon: Compass },
        ],
        seeAll: { label: "See all", href: "/c/learn" },
      },
      {
        heading: "Popular",
        links: [
          { label: "Beginner's Guide", href: "/c/learn/beginners-guide", icon: Sparkles },
          { label: "Islam and Other Faiths", href: "/c/learn/islam-and-other-faiths", icon: Globe },
        ],
      },
      {
        heading: "More",
        links: [
          { label: "Ask a Question", href: "/c/learn" },
          { label: "Recommended Reading", href: "/c/learn" },
        ],
        seeAll: { label: "See all", href: "/c/learn" },
      },
    ],
  },
  Convert: {
    title: "Convert",
    titleHref: "/c/convert",
    columns: [
      {
        heading: "Your Journey",
        links: [
          { label: "Ready to Convert?", href: "/c/convert", icon: Compass },
          { label: "What to Expect", href: "/c/convert", icon: HelpCircle },
          { label: "FAQ for New Muslims", href: "/c/convert", icon: MessageCircle },
        ],
        seeAll: { label: "See all", href: "/c/convert" },
      },
      {
        heading: "Support",
        links: [
          { label: "Find a Community", href: "/c/convert", icon: Users },
          { label: "Mentorship Program", href: "/c/convert", icon: Heart },
        ],
      },
    ],
  },
  Products: {
    title: "Products",
    titleHref: "/c/shop",
    columns: [
      {
        heading: "Browse",
        links: [
          { label: "All Products", href: "/c/shop", icon: Gift },
          { label: "Boxed Sets", href: "/c/shop/boxed-set", icon: BookOpen },
          { label: "Digital Editions", href: "/c/shop/ebook", icon: Globe },
        ],
        seeAll: { label: "See all", href: "/c/shop" },
      },
    ],
    products: [
      { label: "Being Muslim: A Practical Guide", href: "/c/shop/book", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" },
      { label: "The Complete Boxed Set", href: "/c/shop/boxed-set", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg" },
      { label: "Prayer Reference Cards", href: "/c/shop/prayer-cards", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg" },
      { label: "Digital Edition (eBook)", href: "/c/shop/ebook", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png" },
    ],
  },
  Support: {
    title: "Support",
    titleHref: "/c/support",
    columns: [
      {
        heading: "Get Involved",
        links: [
          { label: "Donate", href: "/c/support", icon: Heart },
          { label: "Sponsor a Boxed Set", href: "/c/support", icon: Gift },
          { label: "Volunteer", href: "/c/support", icon: Users },
        ],
        seeAll: { label: "See all", href: "/c/support" },
      },
    ],
  },
};

const navLinks = [
  { label: "Home", href: "/c" },
  { label: "Learn", href: "/c/learn" },
  { label: "Convert", href: "/c/convert" },
  { label: "Products", href: "/c/shop" },
  { label: "Support", href: "/c/support" },
];

type NavStyle = "glass" | "white";

type Theme = {
  pillBg: string;
  pillBorder: string;
  pillShadow: string;
  blur: string;
  logoFilter: string;
  text: string;
  link: string;
  ctaBg: string;
  ctaColor: string;
  ctaBorder: string;
  hoverBg: string;
};

// The expanding mega-menu panel reads as a clean, calm, Coda-style light
// surface in BOTH nav styles (the glass pill stays glassy, but the panel
// itself is always a readable white surface with dark text).
const PANEL = {
  bg: "rgba(255,255,255,0.97)",
  border: "rgba(0,0,0,0.06)",
  shadow: "0 16px 40px rgba(0,0,0,0.14)",
  blur: "blur(20px)",
  title: "#2a2018",
  heading: "#9a8f80",
  itemText: "#3a2e22",
  itemIcon: "#8a7e70",
  itemHoverBg: "rgba(42,32,24,0.05)",
  divider: "rgba(0,0,0,0.07)",
  link: "#7a6f60",
  cardBg: "#f4f1eb",
  cardBorder: "rgba(0,0,0,0.05)",
  cardTitle: "#2a2018",
};

const themes: Record<NavStyle, Theme> = {
  glass: {
    pillBg: "rgba(255,255,255,0.08)",
    pillBorder: "rgba(255,255,255,0.15)",
    pillShadow: "none",
    blur: "blur(20px)",
    logoFilter: "none",
    text: "#fff",
    link: "rgba(255,255,255,0.85)",
    ctaBg: "rgba(255,255,255,0.15)",
    ctaColor: "#fff",
    ctaBorder: "rgba(255,255,255,0.25)",
    hoverBg: "rgba(255,255,255,0.12)",
  },
  white: {
    pillBg: "#ffffff",
    pillBorder: "rgba(0,0,0,0.08)",
    pillShadow: "0 4px 24px rgba(0,0,0,0.10)",
    blur: "none",
    logoFilter: "invert(1)",
    text: "#2a2018",
    link: "rgba(42,32,24,0.8)",
    ctaBg: "#2a2018",
    ctaColor: "#fff",
    ctaBorder: "#2a2018",
    hoverBg: "rgba(42,32,24,0.06)",
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [navStyle, setNavStyle] = useState<NavStyle>("glass");
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll so the glass pill can become a readable solid surface once
  // the user scrolls past the dark hero onto the light page body.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
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
  function toggleNavStyle() {
    setNavStyle((s) => (s === "glass" ? "white" : "glass"));
  }

  const T = themes[navStyle];
  // Keep the last-opened menu mounted while the panel collapses, so the
  // max-height/opacity transition has content to animate out against.
  const [lastMenuKey, setLastMenuKey] = useState<string | null>(null);
  useEffect(() => {
    if (activeMenu) setLastMenuKey(activeMenu);
  }, [activeMenu]);
  const menu = (activeMenu ?? lastMenuKey) ? megaMenus[activeMenu ?? lastMenuKey!] : null;
  const panelOpen = !!activeMenu;

  // When in glass mode and scrolled past the dark hero, swap the translucent
  // pill for a solid dark surface so the white text stays legible over light
  // page content. White theme already reads fine, so leave it untouched.
  const glassScrolled = navStyle === "glass" && scrolled;
  const pillBg = glassScrolled ? "rgba(30,28,24,0.92)" : T.pillBg;
  const pillBorder = glassScrolled ? "rgba(255,255,255,0.12)" : T.pillBorder;
  const pillShadow = glassScrolled ? "0 4px 24px rgba(0,0,0,0.25)" : T.pillShadow;

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={css("padding: 16px 24px")}>
      {/* Desktop: pill navbar (always visible on md+) */}
      <nav
        className="bm-navbar-pill hidden md:flex"
        style={css(
          `max-width: 1100px; margin: 0 auto; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px; border-radius: 999px; backdrop-filter: ${T.blur}; -webkit-backdrop-filter: ${T.blur}; border: 1px solid ${pillBorder}; background: ${pillBg}; box-shadow: ${pillShadow}; transition: all 0.3s`
        )}
      >
        <Link href="/c" style={css("display: flex; align-items: center; gap: 10px; text-decoration: none")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
            alt="Being Muslim"
            style={css(`height: 28px; width: 28px; filter: ${T.logoFilter}; transition: filter 0.3s`)}
          />
          <span style={css(`font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: ${T.text}; transition: color 0.3s`)}>
            Being Muslim
          </span>
        </Link>

        <div style={css("display: flex; align-items: center; gap: 28px")}>
          {navLinks.map((link) => {
            const hasMenu = !!megaMenus[link.label];
            const isActive = activeMenu === link.label;
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  setHovered(link.label);
                  if (hasMenu) openMenu(link.label);
                  else setActiveMenu(null);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  scheduleClose();
                }}
              >
                <Link
                  href={link.href}
                  style={css(`font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; color: ${T.link}; padding: 6px 14px; border-radius: 999px; display: inline-flex; align-items: center; gap: 4px; background: ${hovered === link.label || isActive ? T.hoverBg : "transparent"}; transition: color 0.3s, background 0.15s`)}
                >
                  {link.label}
                  {hasMenu && (
                    <ChevronDown
                      className="bm-chevron"
                      style={css(`height: 13px; width: 13px; transition: transform 0.2s ease; transform: rotate(${isActive ? "180deg" : "0deg"})`)}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        <div style={css("display: flex; align-items: center; gap: 8px")}>
          {/* Nav style switcher (glass <-> white) */}
          <button
            onClick={toggleNavStyle}
            title={`Nav style: ${navStyle} — click to switch`}
            aria-label="Switch navigation style"
            style={css(`display: inline-flex; align-items: center; justify-content: center; height: 34px; width: 34px; border-radius: 999px; cursor: pointer; background: none; border: 1px solid ${T.ctaBorder}; color: ${T.text}; transition: all 0.3s`)}
          >
            {navStyle === "glass" ? (
              <Droplets style={css("height: 15px; width: 15px")} />
            ) : (
              <Square style={css("height: 15px; width: 15px")} />
            )}
          </button>
          <Link
            href="/c/contact"
            style={css(`align-items: center; padding: 8px 20px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: all 0.3s; background: ${T.ctaBg}; color: ${T.ctaColor}; border: 1px solid ${T.ctaBorder}`)}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Coda-style full-width expanding mega-menu panel. Always mounted so the
          max-height + opacity transition can play in BOTH directions; the
          `bm-mega-open` class drives the expand-down. */}
      <div
        className={`bm-mega-wrap hidden md:block ${panelOpen ? "bm-mega-open" : ""}`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        style={css("max-width: 1100px; margin: 8px auto 0")}
        aria-hidden={!panelOpen}
      >
        <div
          className="bm-mega-inner"
          style={css(`border-radius: 20px; backdrop-filter: ${PANEL.blur}; -webkit-backdrop-filter: ${PANEL.blur}; border: 1px solid ${PANEL.border}; border-top: 2px solid ${PANEL.border}; background: ${PANEL.bg}; box-shadow: ${PANEL.shadow}; overflow: hidden`)}
        >
          {menu && (
            <div style={css("padding: 30px 32px")}>
              {/* Section title with trailing arrow, e.g. "Learn →" */}
              <Link
                href={menu.titleHref}
                className="bm-mega-title"
                style={css(`display: inline-flex; align-items: center; gap: 8px; text-decoration: none; font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 700; color: ${PANEL.title}; margin: 0 0 22px`)}
              >
                {menu.title}
                <ArrowRight className="bm-mega-title-arrow" style={css("height: 16px; width: 16px; transition: transform 0.2s ease")} />
              </Link>

              <div style={css("display: flex; gap: 40px; align-items: flex-start")}>
                {/* Text-link columns grouped under uppercase headings */}
                {menu.columns.map((column, ci) => (
                  <div key={ci} style={css("flex: 0 0 auto; min-width: 180px")}>
                    {column.heading && (
                      <p style={css(`font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: ${PANEL.heading}; text-transform: uppercase; letter-spacing: 0.09em; margin: 0 0 12px`)}>
                        {column.heading}
                      </p>
                    )}
                    {column.links.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="bm-mega-link"
                          style={css(`display: flex; align-items: center; gap: 10px; text-decoration: none; padding: 8px 10px; margin: 0 -10px; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: ${PANEL.itemText}; transition: background 0.15s`)}
                        >
                          {Icon && <Icon style={css(`height: 16px; width: 16px; color: ${PANEL.itemIcon}; flex: 0 0 auto`)} strokeWidth={1.75} />}
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                    {column.seeAll && (
                      <Link
                        href={column.seeAll.href}
                        className="bm-mega-seeall"
                        style={css(`display: inline-flex; align-items: center; gap: 4px; text-decoration: none; margin-top: 10px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: ${PANEL.link}`)}
                      >
                        {column.seeAll.label}
                        <ArrowRight style={css("height: 13px; width: 13px")} />
                      </Link>
                    )}
                  </div>
                ))}

                {/* Right-hand visual column: product image cards (Products menu).
                    Separated by a subtle vertical divider. */}
                {menu.products && (
                  <div
                    style={css(`flex: 1 1 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding-left: 40px; border-left: 1px solid ${PANEL.divider}`)}
                  >
                    {menu.products.map((p) => (
                      <Link
                        key={p.label}
                        href={p.href}
                        className="bm-mega-card"
                        style={css(`display: block; text-decoration: none; border-radius: 12px; overflow: hidden; background: ${PANEL.cardBg}; border: 1px solid ${PANEL.cardBorder}; transition: transform 0.2s ease, box-shadow 0.2s ease`)}
                      >
                        <div className="bm-img-zoom" style={css("aspect-ratio: 3/4; overflow: hidden")}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={p.img} alt={p.label} style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
                        </div>
                        <div style={css("padding: 12px")}>
                          <p style={css(`font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: ${PANEL.cardTitle}; margin: 0; line-height: 1.3`)}>{p.label}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: single glass container that expands */}
      <div
        className={`mobile-shell md:hidden ${mobileOpen ? "open" : ""}`}
        style={css(`backdrop-filter: ${T.blur}; -webkit-backdrop-filter: ${T.blur}; border: 1px solid ${pillBorder}; background: ${pillBg}; box-shadow: ${pillShadow}`)}
      >
        {/* Top row: logo + switcher + hamburger */}
        <div style={css("display: flex; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px")}>
          <Link href="/c" style={css("display: flex; align-items: center; gap: 10px; text-decoration: none")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
              alt="Being Muslim"
              style={css(`height: 28px; width: 28px; filter: ${T.logoFilter}; transition: filter 0.3s`)}
            />
            <span style={css(`font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: ${T.text}; transition: color 0.3s`)}>
              Being Muslim
            </span>
          </Link>
          <div style={css("display: flex; align-items: center; gap: 4px")}>
            <button
              onClick={toggleNavStyle}
              aria-label="Switch navigation style"
              style={css(`padding: 8px; border: none; background: none; cursor: pointer; color: ${T.text}`)}
            >
              {navStyle === "glass" ? <Droplets className="h-5 w-5" /> : <Square className="h-5 w-5" />}
            </button>
            <button
              style={css(`padding: 8px; border: none; background: none; cursor: pointer; color: ${T.text}`)}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Expandable links */}
        <div className="mobile-links">
          <div style={css("padding: 4px 20px 16px")}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={css(`display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: ${T.text}; text-decoration: none`)}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/c/contact"
              style={css(`display: block; margin-top: 8px; text-align: center; background: ${T.ctaBg}; color: ${T.ctaColor}; padding: 10px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid ${T.ctaBorder}`)}
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
