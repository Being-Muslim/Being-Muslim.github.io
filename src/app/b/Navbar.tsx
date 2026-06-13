"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Compass,
  Sparkles,
  Globe,
  HelpCircle,
  MessageCircle,
  Heart,
  HandHeart,
  Users,
  Languages,
} from "lucide-react";
import { css } from "@/lib/css";

type MegaLink = { label: string; href: string; icon?: LucideIcon };
type MegaColumn = { heading?: string; links: MegaLink[]; seeAll?: { label: string; href: string } };
type ProductCard = { label: string; href: string; img: string };
type MegaMenu = {
  title: string;
  titleHref: string;
  blurb?: string;
  columns: MegaColumn[];
  // Optional right-hand visual column of product image cards (Products menu).
  products?: ProductCard[];
};

const megaMenus: Record<string, MegaMenu> = {
  Learn: {
    title: "Learn",
    titleHref: "/b/learn",
    columns: [
      {
        heading: "Articles",
        links: [
          { label: "Brief Overview of Islam", href: "/b/learn/brief-overview-of-islam", icon: Compass },
          { label: "Beginner's Guide", href: "/b/learn/beginners-guide", icon: Sparkles },
          { label: "Islam and Other Faiths", href: "/b/learn/islam-and-other-faiths", icon: Globe },
        ],
        seeAll: { label: "See all", href: "/b/learn" },
      },
      {
        heading: "More",
        links: [
          { label: "Recommended Resources", href: "/b/learn/recommended-resources", icon: BookOpen },
          { label: "Ask a Question", href: "/b/learn/ask-a-question", icon: HelpCircle },
        ],
        seeAll: { label: "See all", href: "/b/learn" },
      },
    ],
  },
  Convert: {
    title: "Convert",
    titleHref: "/b/convert",
    blurb: "Thinking about embracing Islam? Walk through the journey at your own pace, with clear guidance for every step.",
    columns: [
      {
        heading: "The Journey",
        links: [
          { label: "How to Convert", href: "/b/convert", icon: Compass },
          { label: "What to Expect", href: "/b/convert", icon: HelpCircle },
          { label: "Talk to Someone", href: "/b/convert", icon: MessageCircle },
        ],
        seeAll: { label: "Start your journey", href: "/b/convert" },
      },
    ],
  },
  Products: {
    title: "Products",
    titleHref: "/b/shop",
    columns: [
      {
        heading: "Browse",
        links: [
          { label: "All Products", href: "/b/shop", icon: BookOpen },
          { label: "Other Languages", href: "/b/shop/languages", icon: Languages },
        ],
        seeAll: { label: "See all", href: "/b/shop" },
      },
    ],
    products: [
      { label: "Being Muslim: A Practical Guide", href: "/b/shop/book", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" },
      { label: "The Complete Boxed Set", href: "/b/shop/boxed-set", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg" },
      { label: "Prayer Reference Cards", href: "/b/shop/prayer-cards", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg" },
      { label: "Digital Edition (eBook)", href: "/b/shop/ebook", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png" },
    ],
  },
  Support: {
    title: "Support",
    titleHref: "/b/support",
    columns: [
      {
        heading: "Get Involved",
        links: [
          { label: "Donate", href: "/b/support", icon: Heart },
          { label: "Request a Donation", href: "/b/support", icon: HandHeart },
          { label: "Volunteer", href: "/b/support", icon: Users },
        ],
        seeAll: { label: "See all", href: "/b/support" },
      },
    ],
  },
};

const navLinks = [
  { label: "Home", href: "/b" },
  { label: "Learn", href: "/b/learn" },
  { label: "Convert", href: "/b/convert" },
  { label: "Products", href: "/b/shop" },
  { label: "Support", href: "/b/support" },
];

// The expanding mega-menu panel is GLASS — a frosted dark translucent surface
// (backdrop-filter blur) consistent with concept B's glass/dark pill navbar.
// Text/heading/link colors are light so content stays legible on the dark
// frosted glass. The actual glass background + blur live in concept-b.css
// (.bm-mega-region); these are the foreground colors used inline.
const PANEL = {
  title: "#ffffff",
  heading: "rgba(255,255,255,0.55)",
  itemText: "rgba(255,255,255,0.88)",
  itemIcon: "rgba(255,255,255,0.6)",
  divider: "rgba(255,255,255,0.12)",
  link: "rgba(255,255,255,0.72)",
  blurbText: "rgba(255,255,255,0.7)",
  cardBg: "rgba(255,255,255,0.08)",
  cardBorder: "rgba(255,255,255,0.14)",
  cardTitle: "#ffffff",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Keep the last-opened menu mounted while the panel collapses so the
  // max-height/opacity transition has content to animate out against.
  const [lastMenuKey, setLastMenuKey] = useState<string | null>(null);
  useEffect(() => {
    if (activeMenu) setLastMenuKey(activeMenu);
  }, [activeMenu]);
  const menu = (activeMenu ?? lastMenuKey) ? megaMenus[activeMenu ?? lastMenuKey!] : null;
  const panelOpen = !!activeMenu;

  // Concept B's glass pill becomes a readable solid dark surface once scrolled
  // past the dark hero onto the light page body. The navbar surface stays
  // VISUALLY STABLE whether or not a menu is open — opening a menu does NOT
  // touch the top edge at all. The nav ROW is a fixed-height pill with FIXED
  // top corners; only the panel region BELOW it (.bm-mega-region) animates its
  // max-height to grow strictly downward. No transform/scale, no top-radius
  // change, no top-padding change, no shadow animation on the top edge.
  const pillBg = scrolled ? "rgba(30,28,24,0.92)" : "rgba(255,255,255,0.08)";
  const pillBorder = scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.15)";
  // Shadow is NOT animated on open (animating box-shadow visually nudges the
  // top edge). It only reflects scroll state and switches instantly.
  const pillShadow = scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none";
  // The surface is comfortably wide so the multi-column menu (incl. the 4
  // Products image cards) sits cleanly; it grows taller, not wider, on open.
  const pillMaxWidth = "1100px";

  // Nav row foreground colors stay constant — the row is always glass/dark, so
  // there's no jarring light-on-glass → dark-on-light color flip on open.
  const navText = "rgba(255,255,255,0.85)";
  const logoText = "#fff";
  const navItemHoverBg = "rgba(255,255,255,0.12)";
  const contactBg = "rgba(255,255,255,0.15)";
  const contactBorder = "rgba(255,255,255,0.25)";
  const contactText = "#fff";

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={css("padding: 16px 24px")}>
      {/* Desktop: ONE surface that morphs from a pill into an expanded panel.
          The nav row and the mega-menu content live INSIDE this single
          container, so opening a menu reads as the navbar itself expanding —
          no detached panel, no gap. */}
      <div
        className={`bm-navbar-surface hidden md:block ${panelOpen ? "bm-navbar-surface-open" : ""}`}
        onMouseLeave={() => {
          setHovered(null);
          scheduleClose();
        }}
        style={css(
          // Border-radius is CONSTANT — never animated, never changes on open —
          // so the top corners stay perfectly still. A roomy 26px radius reads
          // as a pill on the short nav row but tucks cleanly around the panel
          // when expanded. Only background/border-color transition (color only,
          // never geometry); box-shadow + radius are NOT transitioned so the top
          // edge cannot move. The downward growth is owned by .bm-mega-region.
          `max-width: ${pillMaxWidth}; margin: 0 auto; border-radius: 26px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid ${pillBorder}; background: ${pillBg}; box-shadow: ${pillShadow}; overflow: hidden; transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
        )}
      >
        {/* Top nav row */}
        <nav
          className="bm-navbar-pill"
          style={css(
            "display: flex; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px",
          )}
        >
          <Link href="/b" style={css("display: flex; align-items: center; gap: 10px; text-decoration: none")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style={css("height: 28px; width: 28px")} />
            <span style={css(`font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; transition: color 0.22s ease; color: ${logoText}`)}>Being Muslim</span>
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
                >
                  <Link
                    href={link.href}
                    style={css(`font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; color: ${navText}; padding: 6px 14px; border-radius: 999px; display: inline-flex; align-items: center; gap: 4px; background: ${hovered === link.label || isActive ? navItemHoverBg : "transparent"}; transition: background 0.15s, color 0.22s ease`)}
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

          <Link
            href="/b/contact"
            style={css(`align-items: center; padding: 8px 20px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease; background: ${contactBg}; color: ${contactText}; border: 1px solid ${contactBorder}`)}
          >
            Contact
          </Link>
        </nav>

        {/* Coda-style expanding region INSIDE the same surface. Always mounted so
            the max-height + opacity transition plays in BOTH directions; the
            `bm-mega-open` class drives the expand-down. */}
        <div
          className={`bm-mega-region ${panelOpen ? "bm-mega-open" : ""}`}
          onMouseEnter={cancelClose}
          aria-hidden={!panelOpen}
        >
          {menu && (
            <div style={css(`padding: 18px 32px 30px; border-top: 1px solid ${PANEL.divider}`)}>
              {/* Section title with trailing arrow, e.g. "Learn →" */}
              <Link
                href={menu.titleHref}
                className="bm-mega-title"
                style={css(`display: inline-flex; align-items: center; gap: 8px; text-decoration: none; font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 700; color: ${PANEL.title}; margin: 4px 0 22px`)}
              >
                {menu.title}
                <ArrowRight className="bm-mega-title-arrow" style={css("height: 16px; width: 16px; transition: transform 0.2s ease")} />
              </Link>

              <div style={css("display: flex; gap: 40px; align-items: flex-start")}>
                {/* Optional intro blurb (e.g. Convert) */}
                {menu.blurb && (
                  <p
                    style={css(`flex: 0 0 240px; margin: 0; font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.6; color: ${PANEL.blurbText}`)}
                  >
                    {menu.blurb}
                  </p>
                )}

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
