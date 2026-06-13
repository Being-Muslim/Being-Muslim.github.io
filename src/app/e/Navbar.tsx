"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Heart, Gift, Users, Sparkles } from "lucide-react";
import { css } from "@/lib/css";

type MegaLink = { label: string; href: string; desc?: string };
type ProductCard = { title: string; href: string; desc: string; img: string };
type SupportItem = { title: string; href: string; desc: string; Icon: typeof Heart };
type MegaMenu = {
  columns?: { heading?: string; links: MegaLink[] }[];
  featured?: { title: string; desc: string; href: string; img: string };
  productCards?: ProductCard[];
  supportGrid?: SupportItem[];
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
    productCards: [
      { title: "Being Muslim: A Practical Guide", href: "/e/shop/book", desc: "The bestselling book", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" },
      { title: "The Complete Boxed Set", href: "/e/shop/boxed-set", desc: "Book, prayer cards, and more", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg" },
      { title: "Prayer Reference Cards", href: "/e/shop/prayer-cards", desc: "Keep by your prayer mat", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg" },
      { title: "Digital Edition (eBook)", href: "/e/shop/ebook", desc: "Read anywhere, instantly", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png" },
    ],
  },
  Support: {
    supportGrid: [
      { title: "Donate", href: "/e/support", desc: "Help fund resources for new Muslims", Icon: Heart },
      { title: "Sponsor a Boxed Set", href: "/e/support", desc: "Gift a set to someone in need", Icon: Gift },
      { title: "Volunteer", href: "/e/support", desc: "Join our team of contributors", Icon: Users },
      { title: "Support the Mission", href: "/e/support", desc: "Back the work for years to come", Icon: Sparkles },
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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // no-op effect retained for parity with scroll-aware variants; keeps menu clean on unmount
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
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

  const menu = activeMenu ? megaMenus[activeMenu] : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-6">
      <div className="relative mx-auto w-full max-w-[1180px]">
        {/* Floating white pill bar */}
        <nav
          className="flex items-center justify-between gap-4"
          style={css(
            "background: #ffffff; border-radius: 999px; padding: 10px 12px 10px 22px; box-shadow: 0 12px 36px rgba(45,55,72,0.12); border: 1px solid #e8e4de"
          )}
        >
          {/* Logo */}
          <Link href="/e" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
              alt="Being Muslim"
              className="h-7 w-7"
            />
            <span style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 17px; color: #2d3748")}>
              Being Muslim
            </span>
          </Link>

          {/* Desktop Nav (centered) */}
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
                  className="bm-nav-link py-2 inline-block"
                  style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 15px; font-weight: 500; color: #6b7a8d")}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop CTA — purple pill */}
          <Link
            href="/e/contact"
            className="bm-btn-dark hidden md:inline-flex"
            style={css("padding: 11px 24px; font-size: 15px")}
          >
            Get the Guide <ArrowRight className="h-4 w-4 bm-arrow-slide" strokeWidth={2} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            style={css("color: #2d3748")}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" strokeWidth={2} /> : <Menu className="h-6 w-6" strokeWidth={2} />}
          </button>
        </nav>

        {/* Mega Menu Dropdown */}
        {menu && (
          <div
            className="hidden md:block absolute left-1/2 top-[72px] -translate-x-1/2"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={css("animation: megaFadeIn 0.15s ease-out; background: #ffffff; border-radius: 24px; box-shadow: 0 24px 60px rgba(45,55,72,0.18); border: 1px solid #e8e4de; width: min(880px, 92vw)")}
          >
            <div className="px-8 py-8">
              {/* Products — row of image cards */}
              {menu.productCards && (
                <div className="bm-mega-products">
                  {menu.productCards.map((product) => (
                    <Link key={product.title} href={product.href} className="bm-mega-product-card">
                      <div className="bm-mega-product-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={product.img} alt={product.title} />
                      </div>
                      <div style={css("padding: 13px 14px 15px")}>
                        <span style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 14px; color: #2d3748; display: block; line-height: 1.25")}>
                          {product.title}
                        </span>
                        <span style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 12.5px; color: #6b7a8d; display: block; margin-top: 4px; line-height: 1.4")}>
                          {product.desc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Support — 2×2 grid */}
              {menu.supportGrid && (
                <div className="bm-mega-support">
                  {menu.supportGrid.map(({ title, href, desc, Icon }) => (
                    <Link
                      key={title}
                      href={href}
                      className="mega-link"
                      style={css("display: flex; gap: 14px; align-items: flex-start; text-decoration: none; padding: 14px 14px; transition: background 0.15s")}
                    >
                      <span style={css("flex: 0 0 40px; width: 40px; height: 40px; border-radius: 12px; background: #faf2e3; color: #8b2e36; display: flex; align-items: center; justify-content: center")}>
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span style={css("display: block")}>
                        <span style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 15px; color: #2d3748; display: block")}>
                          {title}
                        </span>
                        <span style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 13px; color: #6b7a8d; display: block; margin-top: 3px; line-height: 1.4")}>
                          {desc}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {/* Default — text columns + optional featured (Learn / Convert) */}
              {menu.columns && (
                <div style={css("display: flex; gap: 48px")}>
                  {menu.columns.map((column, ci) => (
                    <div key={ci} style={css("flex: 1; min-width: 190px")}>
                      {column.heading && (
                        <p style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 12px; font-weight: 600; color: #8b2e36; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 14px")}>
                          {column.heading}
                        </p>
                      )}
                      {column.links.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="mega-link"
                          style={css("display: block; text-decoration: none; padding: 10px 12px; transition: background 0.15s")}
                        >
                          <span style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 15px; color: #2d3748; display: block")}>
                            {item.label}
                          </span>
                          {item.desc && (
                            <span style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 13px; color: #6b7a8d; display: block; margin-top: 3px; line-height: 1.4")}>
                              {item.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  ))}

                  {menu.featured && (
                    <div style={css("flex: 0 0 240px")}>
                      <Link href={menu.featured.href} style={css("display: block; text-decoration: none; overflow: hidden; border-radius: 18px; background: #faf2e3")}>
                        <div style={css("aspect-ratio: 16/10; overflow: hidden")}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={menu.featured.img} alt={menu.featured.title} style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
                        </div>
                        <div style={css("padding: 16px")}>
                          <p style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 15px; color: #2d3748; margin: 0 0 5px")}>{menu.featured.title}</p>
                          <p style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 13px; color: #6b7a8d; margin: 0; line-height: 1.5")}>{menu.featured.desc}</p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile menu */}
        <div className={`mobile-menu md:hidden ${mobileOpen ? "open" : ""}`}>
          <div
            className="mt-3 px-4 py-3"
            style={css("background: #ffffff; border-radius: 24px; box-shadow: 0 16px 40px rgba(45,55,72,0.14); border: 1px solid #e8e4de")}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 px-3"
                style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 16px; font-weight: 500; color: #2d3748")}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/e/contact"
              className="bm-btn-dark mt-3 w-full justify-center"
              style={css("display: flex")}
              onClick={() => setMobileOpen(false)}
            >
              Get the Guide
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
