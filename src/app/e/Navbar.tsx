"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
          { label: "Articles", href: "/e/learn", desc: "In-depth guides on faith and practice" },
          { label: "Courses", href: "/e/learn", desc: "Structured learning at your own pace" },
          { label: "Brief Overview of Islam", href: "/e/learn/brief-overview-of-islam", desc: "Core beliefs, practices, and history" },
        ],
      },
      {
        heading: "Popular Topics",
        links: [
          { label: "Beginner's Guide", href: "/e/learn/beginners-guide", desc: "First steps for new Muslims" },
          { label: "Islam and Other Faiths", href: "/e/learn/islam-and-other-faiths", desc: "Common ground and key differences" },
          { label: "View All Resources", href: "/e/learn" },
        ],
      },
    ],
    featured: {
      title: "Foundations of Faith",
      desc: "A 24-lesson course covering the essentials.",
      href: "/e/learn",
      img: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=80&auto=format&fit=crop",
    },
  },
  Convert: {
    columns: [
      {
        heading: "Your Journey",
        links: [
          { label: "Ready to Convert?", href: "/e/convert", desc: "Take the next step with guidance and support" },
          { label: "What to Expect", href: "/e/convert", desc: "Understanding the process and what comes after" },
          { label: "FAQ for New Muslims", href: "/e/convert", desc: "Answers to the most common questions" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Find a Community", href: "/e/convert", desc: "Connect with Muslims near you" },
          { label: "Mentorship Program", href: "/e/convert", desc: "One-on-one guidance from experienced Muslims" },
          { label: "Start Your Journey", href: "/e/convert" },
        ],
      },
    ],
  },
  Products: {
    columns: [
      {
        heading: "Products",
        links: [
          { label: "Being Muslim: A Practical Guide", href: "/e/shop/book", desc: "The bestselling book" },
          { label: "The Complete Boxed Set", href: "/e/shop/boxed-set", desc: "Book, prayer cards, and more" },
          { label: "Prayer Reference Cards", href: "/e/shop/prayer-cards", desc: "Keep by your prayer mat" },
          { label: "Digital Edition (eBook)", href: "/e/shop/ebook", desc: "Read anywhere, instantly" },
        ],
      },
    ],
    featured: {
      title: "The Complete Boxed Set",
      desc: "Everything you need in one beautiful package.",
      href: "/e/shop/boxed-set",
      img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg",
    },
  },
  Support: {
    columns: [
      {
        heading: "Get Involved",
        links: [
          { label: "Donate", href: "/e/support", desc: "Help fund resources for new Muslims" },
          { label: "Sponsor a Boxed Set", href: "/e/support", desc: "Gift a set to someone in need" },
          { label: "Volunteer", href: "/e/support", desc: "Join our team of contributors" },
          { label: "Support the Mission", href: "/e/support" },
        ],
      },
    ],
  },
};

const navLinks = [
  { label: "Home", href: "/e" },
  { label: "Learn", href: "/e/learn" },
  { label: "Convert", href: "/e/convert" },
  { label: "Products", href: "/e/shop" },
  { label: "Support", href: "/e/support" },
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
  const menu = activeMenu ? megaMenus[activeMenu] : null;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      style={css(
        `border-color: rgba(255,255,255,0.16); ${
          solid ? "background: #000;" : "background: rgba(0,0,0,0.35); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);"
        }`
      )}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/e" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
            alt="Being Muslim"
            className="h-7 w-7"
            style={css("filter: brightness(0) invert(1)")}
          />
          <span
            style={css("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: -0.01em; font-size: 16px; color: #fff")}
          >
            Being Muslim
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => (megaMenus[link.label] ? openMenu(link.label) : setActiveMenu(null))}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={link.href}
                className="py-6 inline-block transition-colors"
                style={css("font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.7)")}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/e/contact"
          className="hidden md:inline-flex items-center transition-all"
          style={css("font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; padding: 10px 22px; border: 1px solid rgba(255,255,255,0.32); color: #fff")}
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          style={css("color: #fff")}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mega Menu Dropdown */}
      {menu && (
        <div
          className="hidden md:block absolute left-0 right-0 top-[68px] border-t"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={css("animation: megaFadeIn 0.15s ease-out; background: #000; border-color: rgba(255,255,255,0.16); border-bottom: 1px solid rgba(255,255,255,0.16)")}
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10">
            <div style={css("display: flex; gap: 56px")}>
              {menu.columns.map((column, ci) => (
                <div key={ci} style={css("flex: 1; min-width: 200px")}>
                  {column.heading && (
                    <p style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 18px")}>
                      {column.heading}
                    </p>
                  )}
                  {column.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="mega-link"
                      style={css("display: block; text-decoration: none; padding: 9px 0; transition: color 0.15s")}
                    >
                      <span style={css("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: -0.01em; font-size: 14px; color: #fff; display: block")}>
                        {item.label}
                      </span>
                      {item.desc && (
                        <span style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.45); display: block; margin-top: 4px")}>
                          {item.desc}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}

              {menu.featured && (
                <div style={css("flex: 0 0 260px")}>
                  <Link href={menu.featured.href} style={css("display: block; text-decoration: none; overflow: hidden; border: 1px solid rgba(255,255,255,0.16); background: #050505")}>
                    <div style={css("aspect-ratio: 16/10; overflow: hidden")}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={menu.featured.img} alt={menu.featured.title} style={css("width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(0.2)")} />
                    </div>
                    <div style={css("padding: 16px")}>
                      <p style={css("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: -0.01em; font-size: 14px; color: #fff; margin: 0 0 6px")}>{menu.featured.title}</p>
                      <p style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.45); margin: 0; line-height: 1.5")}>{menu.featured.desc}</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div className={`mobile-menu md:hidden ${mobileOpen ? "open" : ""}`}>
        <div className="px-6 py-4" style={css("border-top: 1px solid rgba(255,255,255,0.16)")}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3"
              style={css("font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #fff")}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/e/contact"
            className="block mt-3 text-center py-3"
            style={css("font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; background: #fff; color: #000")}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
