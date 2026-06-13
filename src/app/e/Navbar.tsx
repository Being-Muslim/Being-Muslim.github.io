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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        solid ? "backdrop-blur-md shadow-sm border-border" : "border-transparent"
      }`}
      style={
        solid
          ? css("background: rgba(250,249,245,0.97)")
          : css("background: rgba(250,249,245,0.6); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)")
      }
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/e" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
            alt="Being Muslim"
            className="h-8 w-8 invert"
            style={css("transition: filter 0.3s")}
          />
          <span className="text-lg font-bold transition-colors font-display text-text-primary">
            Being Muslim
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => (megaMenus[link.label] ? openMenu(link.label) : setActiveMenu(null))}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={link.href}
                className="bm-link-animated text-[14px] font-medium transition-colors py-6 inline-block text-text-primary hover:text-black"
                style={css("font-family: 'DM Sans', sans-serif")}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/e/contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-[14px] font-medium transition-all"
          style={css("font-family: 'DM Sans', sans-serif; background: #2a2018; color: #fff")}
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 md:hidden text-text-primary"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mega Menu Dropdown */}
      {menu && (
        <div
          className="hidden md:block absolute left-0 right-0 top-[72px] bg-white shadow-lg border-t border-border"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={css("animation: megaFadeIn 0.15s ease-out")}
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-8">
            <div style={css("display: flex; gap: 48px")}>
              {menu.columns.map((column, ci) => (
                <div key={ci} style={css("flex: 1; min-width: 200px")}>
                  {column.heading && (
                    <p style={css("font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px")}>
                      {column.heading}
                    </p>
                  )}
                  {column.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="mega-link"
                      style={css("display: block; text-decoration: none; padding: 8px 0; transition: opacity 0.15s")}
                    >
                      <span style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; display: block")}>
                        {item.label}
                      </span>
                      {item.desc && (
                        <span style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; display: block; margin-top: 2px")}>
                          {item.desc}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}

              {menu.featured && (
                <div style={css("flex: 0 0 260px")}>
                  <Link href={menu.featured.href} style={css("display: block; text-decoration: none; border-radius: 12px; overflow: hidden; background: #f4f1eb")}>
                    <div style={css("aspect-ratio: 16/10; overflow: hidden")}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={menu.featured.img} alt={menu.featured.title} style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
                    </div>
                    <div style={css("padding: 16px")}>
                      <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018; margin: 0 0 4px")}>{menu.featured.title}</p>
                      <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; margin: 0")}>{menu.featured.desc}</p>
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
        <div className="border-t border-border px-6 py-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="block py-2.5 text-text-primary font-medium" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/e/contact" className="block mt-3 text-center bg-text-primary text-white py-2.5 rounded-full font-medium">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
