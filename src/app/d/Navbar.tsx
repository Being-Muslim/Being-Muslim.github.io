"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { css } from "@/lib/css";

type DropdownLink = { label: string; href: string; desc?: string };
type DropdownColumn = { heading?: string; links: DropdownLink[] };
type DropdownItem = { label: string; href: string; columns: DropdownColumn[] };

// Coda-style nav: dropdown items first, then a divider, then plain links
const dropdownItems: DropdownItem[] = [
  {
    label: "Learn",
    href: "/d/learn",
    columns: [
      {
        heading: "Resources",
        links: [
          { label: "Articles", href: "/d/learn", desc: "In-depth guides on faith and practice" },
          { label: "Courses", href: "/d/learn", desc: "Structured learning at your own pace" },
          { label: "Brief Overview of Islam", href: "/d/learn/brief-overview-of-islam", desc: "Core beliefs, practices, and history" },
        ],
      },
      {
        heading: "Popular Topics",
        links: [
          { label: "Beginner's Guide", href: "/d/learn/beginners-guide", desc: "First steps for new Muslims" },
          { label: "Islam and Other Faiths", href: "/d/learn/islam-and-other-faiths", desc: "Common ground and key differences" },
          { label: "View All Resources", href: "/d/learn" },
        ],
      },
    ],
  },
  {
    label: "Convert",
    href: "/d/convert",
    columns: [
      {
        heading: "Your Journey",
        links: [
          { label: "Ready to Convert?", href: "/d/convert", desc: "Take the next step with guidance" },
          { label: "What to Expect", href: "/d/convert", desc: "The process and what comes after" },
          { label: "FAQ for New Muslims", href: "/d/convert", desc: "Answers to common questions" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Find a Community", href: "/d/convert", desc: "Connect with Muslims near you" },
          { label: "Mentorship Program", href: "/d/convert", desc: "One-on-one guidance" },
          { label: "Start Your Journey", href: "/d/convert" },
        ],
      },
    ],
  },
  {
    label: "Products",
    href: "/d/shop",
    columns: [
      {
        heading: "Products",
        links: [
          { label: "Being Muslim: A Practical Guide", href: "/d/shop/book", desc: "The bestselling book" },
          { label: "The Complete Boxed Set", href: "/d/shop/boxed-set", desc: "Book, prayer cards, and more" },
          { label: "Prayer Reference Cards", href: "/d/shop/prayer-cards", desc: "Keep by your prayer mat" },
          { label: "Digital Edition (eBook)", href: "/d/shop/ebook", desc: "Read anywhere, instantly" },
        ],
      },
    ],
  },
];

const plainLinks = [{ label: "Support", href: "/d/support" }];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={css(
        `background: #faf9f5; border-bottom: 1px solid ${scrolled || activeMenu ? "#e6e0d6" : "transparent"}; box-shadow: ${scrolled && !activeMenu ? "0 1px 12px rgba(42,32,24,0.05)" : "none"}; transition: border-color 0.2s, box-shadow 0.2s`
      )}
    >
      <nav style={css("max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 64px; padding: 0 24px")}>
        {/* Left: logo + nav links (Coda-style left-aligned group) */}
        <div style={css("display: flex; align-items: center; gap: 28px; min-width: 0")}>
          <Link href="/d" style={css("display: flex; align-items: center; gap: 9px; text-decoration: none; flex-shrink: 0")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
              alt="Being Muslim"
              style={css("height: 26px; width: 26px; filter: invert(1)")}
            />
            <span style={css("font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #2a2018; white-space: nowrap")}>
              Being Muslim
            </span>
          </Link>

          <div className="hidden lg:flex" style={css("align-items: center; gap: 2px")}>
            {dropdownItems.map((item) => (
              <div
                key={item.label}
                style={css("position: relative")}
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                <Link href={item.href} className={`bm-nav-item ${activeMenu === item.label ? "active" : ""}`}>
                  {item.label}
                  <ChevronDown
                    style={css(`height: 13px; width: 13px; transition: transform 0.15s;${activeMenu === item.label ? " transform: rotate(180deg);" : ""}`)}
                  />
                </Link>

                {activeMenu === item.label && (
                  <div
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                    style={css("position: absolute; top: calc(100% + 6px); left: 0; display: flex; gap: 8px; background: #fff; border: 1px solid #ece6dc; border-radius: 14px; box-shadow: 0 12px 32px rgba(42,32,24,0.10); padding: 8px; animation: navDropIn 0.15s ease-out")}
                  >
                    {item.columns.map((column, ci) => (
                      <div key={ci} style={css("min-width: 250px")}>
                        {column.heading && (
                          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 0.08em; margin: 6px 12px 4px")}>
                            {column.heading}
                          </p>
                        )}
                        {column.links.map((link) => (
                          <Link key={link.label} href={link.href} className="bm-dropdown-link">
                            <span style={css("display: block; font-size: 14px; font-weight: 500; color: #2a2018; white-space: nowrap")}>{link.label}</span>
                            {link.desc && (
                              <span style={css("display: block; font-size: 12px; color: #8a7e70; margin-top: 1px; white-space: nowrap")}>{link.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Divider between dropdowns and plain links */}
            <div style={css("width: 1px; height: 18px; background: #d8d2c8; margin: 0 10px")} />

            {plainLinks.map((link) => (
              <Link key={link.label} href={link.href} className="bm-nav-item">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: dual CTAs (outline + solid) */}
        <div style={css("display: flex; align-items: center; gap: 10px")}>
          <Link href="/d/support" className="hidden md:inline-flex bm-cta-outline">Donate</Link>
          <Link href="/d/contact" className="hidden md:inline-flex bm-cta-solid">Contact</Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            style={css("padding: 8px; border: none; background: none; cursor: pointer; color: #2a2018")}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden" style={css("background: #faf9f5; border-top: 1px solid #e6e0d6; padding: 12px 24px 20px")}>
          {dropdownItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={css("display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; text-decoration: none")}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div style={css("height: 1px; background: #e6e0d6; margin: 8px 0")} />
          {plainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={css("display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; text-decoration: none")}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={css("display: flex; gap: 10px; margin-top: 12px")}>
            <Link href="/d/support" className="bm-cta-outline" style={css("flex: 1; justify-content: center")} onClick={() => setMobileOpen(false)}>Donate</Link>
            <Link href="/d/contact" className="bm-cta-solid" style={css("flex: 1; justify-content: center")} onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
