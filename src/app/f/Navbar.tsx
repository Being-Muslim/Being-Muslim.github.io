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
          { label: "Articles", href: "/f/learn", desc: "In-depth guides on faith and practice" },
          { label: "Courses", href: "/f/learn", desc: "Structured learning at your own pace" },
          { label: "Brief Overview of Islam", href: "/f/learn/brief-overview-of-islam", desc: "Core beliefs, practices, and history" },
        ],
      },
      {
        heading: "Popular Topics",
        links: [
          { label: "Beginner's Guide", href: "/f/learn/beginners-guide", desc: "First steps for new Muslims" },
          { label: "Islam and Other Faiths", href: "/f/learn/islam-and-other-faiths", desc: "Common ground and key differences" },
          { label: "View All Resources", href: "/f/learn" },
        ],
      },
    ],
    featured: {
      title: "Foundations of Faith",
      desc: "A 24-lesson course covering the essentials.",
      href: "/f/learn",
      img: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=80&auto=format&fit=crop",
    },
  },
  Convert: {
    columns: [
      {
        heading: "Your Journey",
        links: [
          { label: "Ready to Convert?", href: "/f/convert", desc: "Take the next step with guidance and support" },
          { label: "What to Expect", href: "/f/convert", desc: "Understanding the process and what comes after" },
          { label: "FAQ for New Muslims", href: "/f/convert", desc: "Answers to the most common questions" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Find a Community", href: "/f/convert", desc: "Connect with Muslims near you" },
          { label: "Mentorship Program", href: "/f/convert", desc: "One-on-one guidance from experienced Muslims" },
          { label: "Start Your Journey", href: "/f/convert" },
        ],
      },
    ],
  },
  Products: {
    columns: [
      {
        heading: "Products",
        links: [
          { label: "Being Muslim: A Practical Guide", href: "/f/shop/book", desc: "The bestselling book" },
          { label: "The Complete Boxed Set", href: "/f/shop/boxed-set", desc: "Book, prayer cards, and more" },
          { label: "Prayer Reference Cards", href: "/f/shop/prayer-cards", desc: "Keep by your prayer mat" },
          { label: "Digital Edition (eBook)", href: "/f/shop/ebook", desc: "Read anywhere, instantly" },
        ],
      },
    ],
    featured: {
      title: "The Complete Boxed Set",
      desc: "Everything you need in one beautiful package.",
      href: "/f/shop/boxed-set",
      img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg",
    },
  },
  Support: {
    columns: [
      {
        heading: "Get Involved",
        links: [
          { label: "Donate", href: "/f/support", desc: "Help fund resources for new Muslims" },
          { label: "Sponsor a Boxed Set", href: "/f/support", desc: "Gift a set to someone in need" },
          { label: "Volunteer", href: "/f/support", desc: "Join our team of contributors" },
          { label: "Support the Mission", href: "/f/support" },
        ],
      },
    ],
  },
};

const navLinks = [
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
  const menu = activeMenu ? megaMenus[activeMenu] : null;

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
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => (megaMenus[link.label] ? openMenu(link.label) : setActiveMenu(null))}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={link.href}
                className="bm-link-animated text-[15px] font-medium transition-colors py-6 inline-block"
                style={css("font-family: 'Inter', sans-serif; color: #1d2b29")}
              >
                {link.label}
              </Link>
            </div>
          ))}
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

      {/* Mega Menu Dropdown */}
      {menu && (
        <div
          className="hidden md:block absolute left-0 right-0 top-[72px] shadow-lg"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={css("animation: megaFadeIn 0.15s ease-out; background: #fff; border-top: 1px solid #ece7dd; border-radius: 0 0 20px 20px")}
        >
          <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-8">
            <div style={css("display: flex; gap: 48px")}>
              {menu.columns.map((column, ci) => (
                <div key={ci} style={css("flex: 1; min-width: 200px")}>
                  {column.heading && (
                    <p style={css("font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; color: #1f8a70; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px")}>
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
                      <span style={css("font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: #1d2b29; display: block")}>
                        {item.label}
                      </span>
                      {item.desc && (
                        <span style={css("font-family: 'Inter', sans-serif; font-size: 12px; color: #666; display: block; margin-top: 2px")}>
                          {item.desc}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}

              {menu.featured && (
                <div style={css("flex: 0 0 260px")}>
                  <Link href={menu.featured.href} style={css("display: block; text-decoration: none; border-radius: 16px; overflow: hidden; background: #f9f7f2")}>
                    <div style={css("aspect-ratio: 16/10; overflow: hidden")}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={menu.featured.img} alt={menu.featured.title} style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
                    </div>
                    <div style={css("padding: 16px")}>
                      <p style={css("font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; color: #1d2b29; margin: 0 0 4px")}>{menu.featured.title}</p>
                      <p style={css("font-family: 'Inter', sans-serif; font-size: 12px; color: #666; margin: 0")}>{menu.featured.desc}</p>
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
