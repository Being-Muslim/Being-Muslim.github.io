"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Droplets, Square } from "lucide-react";
import { css } from "@/lib/css";

type MegaLink = { label: string; href: string; desc?: string };
type MegaMenu = {
  columns: { heading?: string; links: MegaLink[] }[];
  featured?: { title: string; desc: string; href: string; img: string };
};

const megaMenus: Record<string, MegaMenu> = {
  Learn: {
    columns: [
      {
        heading: "Resources",
        links: [
          { label: "Articles", href: "/b/learn", desc: "In-depth guides on faith and practice" },
          { label: "Courses", href: "/b/learn", desc: "Structured learning at your own pace" },
          { label: "Brief Overview of Islam", href: "/b/learn/brief-overview-of-islam", desc: "Core beliefs, practices, and history" },
        ],
      },
      {
        heading: "Popular Topics",
        links: [
          { label: "Beginner's Guide", href: "/b/learn/beginners-guide", desc: "First steps for new Muslims" },
          { label: "Islam and Other Faiths", href: "/b/learn/islam-and-other-faiths", desc: "Common ground and key differences" },
          { label: "View All Resources", href: "/b/learn" },
        ],
      },
    ],
    featured: {
      title: "Foundations of Faith",
      desc: "A 24-lesson course covering the essentials.",
      href: "/b/learn",
      img: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=80&auto=format&fit=crop",
    },
  },
  Convert: {
    columns: [
      {
        heading: "Your Journey",
        links: [
          { label: "Ready to Convert?", href: "/b/convert", desc: "Take the next step with guidance and support" },
          { label: "What to Expect", href: "/b/convert", desc: "Understanding the process and what comes after" },
          { label: "FAQ for New Muslims", href: "/b/convert", desc: "Answers to the most common questions" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Find a Community", href: "/b/convert", desc: "Connect with Muslims near you" },
          { label: "Mentorship Program", href: "/b/convert", desc: "One-on-one guidance from experienced Muslims" },
          { label: "Start Your Journey", href: "/b/convert" },
        ],
      },
    ],
  },
  Products: {
    columns: [
      {
        heading: "Products",
        links: [
          { label: "Being Muslim: A Practical Guide", href: "/b/shop/book", desc: "The bestselling book" },
          { label: "The Complete Boxed Set", href: "/b/shop/boxed-set", desc: "Book, prayer cards, and more" },
          { label: "Prayer Reference Cards", href: "/b/shop/prayer-cards", desc: "Keep by your prayer mat" },
          { label: "Digital Edition (eBook)", href: "/b/shop/ebook", desc: "Read anywhere, instantly" },
        ],
      },
    ],
    featured: {
      title: "The Complete Boxed Set",
      desc: "Everything you need in one beautiful package.",
      href: "/b/shop/boxed-set",
      img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg",
    },
  },
  Support: {
    columns: [
      {
        heading: "Get Involved",
        links: [
          { label: "Donate", href: "/b/support", desc: "Help fund resources for new Muslims" },
          { label: "Sponsor a Boxed Set", href: "/b/support", desc: "Gift a set to someone in need" },
          { label: "Volunteer", href: "/b/support", desc: "Join our team of contributors" },
          { label: "Support the Mission", href: "/b/support" },
        ],
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
  menuBg: string;
  menuBorder: string;
  menuBlur: string;
  menuShadow: string;
  heading: string;
  itemText: string;
  itemDesc: string;
  cardBg: string;
  cardBorder: string;
  cardTitle: string;
  cardDesc: string;
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
    menuBg: "rgba(30,28,24,0.85)",
    menuBorder: "rgba(255,255,255,0.15)",
    menuBlur: "blur(24px)",
    menuShadow: "0 8px 32px rgba(0,0,0,0.3)",
    heading: "rgba(255,255,255,0.45)",
    itemText: "#fff",
    itemDesc: "rgba(255,255,255,0.45)",
    cardBg: "rgba(255,255,255,0.08)",
    cardBorder: "rgba(255,255,255,0.1)",
    cardTitle: "#fff",
    cardDesc: "rgba(255,255,255,0.45)",
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
    menuBg: "#ffffff",
    menuBorder: "rgba(0,0,0,0.08)",
    menuBlur: "none",
    menuShadow: "0 12px 32px rgba(0,0,0,0.12)",
    heading: "#8a7e70",
    itemText: "#2a2018",
    itemDesc: "#8a7e70",
    cardBg: "#f4f1eb",
    cardBorder: "rgba(0,0,0,0.05)",
    cardTitle: "#2a2018",
    cardDesc: "#8a7e70",
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [navStyle, setNavStyle] = useState<NavStyle>("glass");
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep window scroll listener parity with concept A (no visual binding here,
  // but preserved so the navbar mounts/unmounts the same effect lifecycle).
  useEffect(() => {
    const handleScroll = () => {};
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
  const menu = activeMenu ? megaMenus[activeMenu] : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={css("padding: 16px 24px")}>
      {/* Desktop: pill navbar (always visible on md+) */}
      <nav
        className="bm-navbar-pill hidden md:flex"
        style={css(
          `max-width: 1100px; margin: 0 auto; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px; border-radius: 999px; backdrop-filter: ${T.blur}; -webkit-backdrop-filter: ${T.blur}; border: 1px solid ${T.pillBorder}; background: ${T.pillBg}; box-shadow: ${T.pillShadow}; transition: all 0.3s`
        )}
      >
        <Link href="/b" style={css("display: flex; align-items: center; gap: 10px; text-decoration: none")}>
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
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => (megaMenus[link.label] ? openMenu(link.label) : setActiveMenu(null))}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={link.href}
                style={css(`font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; color: ${T.link}; padding: 6px 14px; border-radius: 999px; display: inline-block; transition: color 0.3s`)}
              >
                {link.label}
              </Link>
            </div>
          ))}
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
            href="/b/contact"
            style={css(`align-items: center; padding: 8px 20px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: all 0.3s; background: ${T.ctaBg}; color: ${T.ctaColor}; border: 1px solid ${T.ctaBorder}`)}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      {menu && (
        <div
          className="hidden md:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={css(`max-width: 1100px; margin: 8px auto 0; border-radius: 20px; backdrop-filter: ${T.menuBlur}; -webkit-backdrop-filter: ${T.menuBlur}; border: 1px solid ${T.menuBorder}; background: ${T.menuBg}; box-shadow: ${T.menuShadow}; animation: megaFadeIn 0.15s ease-out`)}
        >
          <div style={css("padding: 28px 32px")}>
            <div style={css("display: flex; gap: 48px")}>
              {/* Link columns */}
              {menu.columns.map((column, ci) => (
                <div key={ci} style={css("flex: 1; min-width: 200px")}>
                  {column.heading && (
                    <p style={css(`font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: ${T.heading}; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px`)}>
                      {column.heading}
                    </p>
                  )}
                  {column.links.map((item) => (
                    <Link key={item.label} href={item.href} className="mega-link" style={css("display: block; text-decoration: none; padding: 8px 0; transition: opacity 0.15s")}>
                      <span style={css(`font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: ${T.itemText}; display: block`)}>
                        {item.label}
                      </span>
                      {item.desc && (
                        <span style={css(`font-family: 'DM Sans', sans-serif; font-size: 12px; color: ${T.itemDesc}; display: block; margin-top: 2px`)}>
                          {item.desc}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}

              {/* Featured card (optional) */}
              {menu.featured && (
                <div style={css("flex: 0 0 260px")}>
                  <Link href={menu.featured.href} style={css(`display: block; text-decoration: none; border-radius: 12px; overflow: hidden; background: ${T.cardBg}; border: 1px solid ${T.cardBorder}`)}>
                    <div style={css("aspect-ratio: 16/10; overflow: hidden")}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={menu.featured.img} alt={menu.featured.title} style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
                    </div>
                    <div style={css("padding: 16px")}>
                      <p style={css(`font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: ${T.cardTitle}; margin: 0 0 4px`)}>{menu.featured.title}</p>
                      <p style={css(`font-family: 'DM Sans', sans-serif; font-size: 12px; color: ${T.cardDesc}; margin: 0`)}>{menu.featured.desc}</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile: single glass container that expands */}
      <div
        className={`mobile-shell md:hidden ${mobileOpen ? "open" : ""}`}
        style={css(`backdrop-filter: ${T.blur}; -webkit-backdrop-filter: ${T.blur}; border: 1px solid ${T.pillBorder}; background: ${T.pillBg}; box-shadow: ${T.pillShadow}`)}
      >
        {/* Top row: logo + switcher + hamburger */}
        <div style={css("display: flex; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px")}>
          <Link href="/b" style={css("display: flex; align-items: center; gap: 10px; text-decoration: none")}>
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
              href="/b/contact"
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
