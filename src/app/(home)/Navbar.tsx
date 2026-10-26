"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, User, X } from "lucide-react";
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
          { label: "Articles", href: "/learn", desc: "In-depth guides on faith and practice" },
          { label: "Courses", href: "/learn", desc: "Structured learning at your own pace" },
          { label: "Brief Overview of Islam", href: "/learn/brief-overview-of-islam", desc: "Core beliefs, practices, and history" },
        ],
      },
      {
        heading: "Popular Topics",
        links: [
          { label: "Beginner's Guide", href: "/learn/beginners-guide", desc: "First steps for new Muslims" },
          { label: "Islam and Other Faiths", href: "/learn/islam-and-other-faiths", desc: "Common ground and key differences" },
          { label: "View All Resources", href: "/learn" },
        ],
      },
    ],
    featured: {
      title: "Foundations of Faith",
      desc: "A 24-lesson course covering the essentials.",
      href: "/learn",
      img: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=80&auto=format&fit=crop",
    },
  },
  Convert: {
    columns: [
      {
        heading: "Your Journey",
        links: [
          { label: "Ready to Convert?", href: "/convert", desc: "Take the next step with guidance and support" },
          { label: "What to Expect", href: "/convert", desc: "Understanding the process and what comes after" },
          { label: "FAQ for New Muslims", href: "/convert", desc: "Answers to the most common questions" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Find a Community", href: "/convert", desc: "Connect with Muslims near you" },
          { label: "Mentorship Program", href: "/convert", desc: "One-on-one guidance from experienced Muslims" },
          { label: "Start Your Journey", href: "/convert" },
        ],
      },
    ],
  },
  Products: {
    columns: [
      {
        heading: "Products",
        links: [
          { label: "Being Muslim: A Practical Guide", href: "/shop/book", desc: "The bestselling book" },
          { label: "The Complete Boxed Set", href: "/shop/boxed-set", desc: "Book, prayer cards, and more" },
          { label: "Prayer Reference Cards", href: "/shop/prayer-cards", desc: "Keep by your prayer mat" },
          { label: "Digital Edition (eBook)", href: "/shop/ebook", desc: "Read anywhere, instantly" },
        ],
      },
    ],
    featured: {
      title: "The Complete Boxed Set",
      desc: "Everything you need in one beautiful package.",
      href: "/shop/boxed-set",
      img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg",
    },
  },
  Support: {
    columns: [
      {
        heading: "Get Involved",
        links: [
          { label: "Donate", href: "/support", desc: "Help fund resources for new Muslims" },
          { label: "Sponsor a Boxed Set", href: "/support", desc: "Gift a set to someone in need" },
          { label: "Volunteer", href: "/support", desc: "Join our team of contributors" },
          { label: "Support the Mission", href: "/support" },
        ],
      },
    ],
  },
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Convert", href: "/convert" },
  { label: "Products", href: "/shop" },
  { label: "Support", href: "/support" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
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

  // Only the homepage has a photo hero for the header to float over.
  const raised = scrolled || pathname !== "/";
  const solid = raised || !!activeMenu || mobileOpen;
  const menu = activeMenu ? megaMenus[activeMenu] : null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        solid ? "backdrop-blur-md shadow-sm border-border" : "bg-transparent border-transparent"
      }`}
      style={solid ? css("background: rgba(250,245,235,0.97)") : undefined}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
            alt="Being Muslim"
            className={`h-8 w-8 ${raised || activeMenu || mobileOpen ? "invert" : ""}`}
            style={css("transition: filter 0.3s")}
          />
          <span
            className={`text-lg font-bold transition-colors font-display ${
              raised || activeMenu || mobileOpen ? "text-text-primary" : "text-white"
            }`}
          >
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
                className={`text-[14px] font-medium transition-colors py-6 inline-block ${
                  raised || activeMenu ? "text-text-primary hover:text-black" : "text-white/80 hover:text-white"
                }`}
                style={css("font-family: 'DM Sans', sans-serif")}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Account + cart */}
          {[
            { href: "/account/", label: "Account", Icon: User },
            { href: "/cart/", label: "Cart", Icon: ShoppingBag },
          ].map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={`rounded-full p-2.5 transition-colors ${
                raised || activeMenu ? "text-text-primary hover:bg-black/5" : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </Link>
          ))}

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`inline-flex items-center px-6 py-2.5 rounded-full text-[14px] font-medium transition-all ${
            raised || activeMenu ? "" : "bg-white text-text-primary hover:bg-white/90"
          }`}
          style={css(`font-family: 'DM Sans', sans-serif;${raised || activeMenu ? " background: #2a2018; color: #fff;" : ""}`)}
        >
          Contact
        </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`rounded-lg p-2 md:hidden ${raised || activeMenu || mobileOpen ? "text-text-primary" : "text-white"}`}
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
          <Link href="/account/" className="block py-2.5 text-text-primary font-medium" onClick={() => setMobileOpen(false)}>
            Account
          </Link>
          <Link href="/cart/" className="block py-2.5 text-text-primary font-medium" onClick={() => setMobileOpen(false)}>
            Cart
          </Link>
          <Link href="/contact" className="block mt-3 text-center bg-text-primary text-white py-2.5 rounded-full font-medium">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
