import Link from "next/link";
import { css } from "@/lib/css";

const socials = [
  { label: "Instagram", icon: "M12 2.2c2.7 0 3 0 4.1.1 1 .1 1.5.2 1.9.4.5.2.8.4 1.1.7.3.3.5.7.7 1.1.2.4.3.9.4 1.9 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.5-.4 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.5-1.1.7-.4.2-.9.3-1.9.4-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.5-.2-1.9-.4-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.7-.7-1.1-.2-.4-.3-.9-.4-1.9 0-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-1 .2-1.5.4-1.9.2-.5.4-.8.7-1.1.3-.3.7-.5 1.1-.7.4-.2.9-.3 1.9-.4 1.1 0 1.4-.1 4.1-.1M12 0C9.3 0 8.9 0 7.8.1 6.7.1 5.9.3 5.2.5c-.7.3-1.3.6-1.9 1.2C2.7 2.3 2.4 2.9 2.1 3.6c-.3.7-.4 1.5-.5 2.6C1.5 7.3 1.5 7.7 1.5 12s0 4.7.1 5.8c.1 1.1.2 1.9.5 2.6.3.7.6 1.3 1.2 1.9.6.6 1.2.9 1.9 1.2.7.3 1.5.4 2.6.5 1.1.1 1.5.1 5.8.1s4.7 0 5.8-.1c1.1-.1 1.9-.2 2.6-.5.7-.3 1.3-.6 1.9-1.2.6-.6.9-1.2 1.2-1.9.3-.7.4-1.5.5-2.6.1-1.1.1-1.5.1-5.8s0-4.7-.1-5.8c-.1-1.1-.2-1.9-.5-2.6-.3-.7-.6-1.3-1.2-1.9C19.7 1.1 19.1.8 18.4.5 17.7.3 16.9.1 15.8.1 14.7 0 14.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.5a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z" },
  { label: "YouTube", icon: "M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { label: "Facebook", icon: "M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12z" },
  { label: "X", icon: "M18.2 2.3h3.5l-7.6 8.7L23 21.7h-7l-5.5-7.2-6.3 7.2H.7l8.1-9.3L.4 2.3h7.2l5 6.6 5.6-6.6zm-1.2 17.4h1.9L6.4 4.3H4.3l12.7 15.4z" },
];

const columns = [
  { heading: "Learn", links: [{ label: "Articles", href: "/e/learn" }, { label: "Courses", href: "/e/learn" }, { label: "Resources", href: "/e/learn" }] },
  { heading: "Products", links: [{ label: "The Book", href: "/e/shop" }, { label: "Boxed Set", href: "/e/shop" }, { label: "Prayer Cards", href: "/e/shop" }, { label: "eBook", href: "/e/shop" }] },
  { heading: "Support", links: [{ label: "Donate", href: "/e/support" }, { label: "Request Donation", href: "/e/support" }, { label: "Volunteer", href: "/e/support" }] },
  { heading: "Company", links: [{ label: "About Us", href: "/e/contact" }, { label: "Contact", href: "/e/contact" }, { label: "Convert", href: "/e/convert" }, { label: "Privacy Policy", href: "/e" }] },
];

export default function Footer() {
  return (
    <footer style={css("padding: 0 16px 16px")}>
      <div
        style={css("background: #2b2256; border-radius: 32px; padding: 64px 0 0; overflow: hidden")}
      >
        <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
          <div className="bm-grid-footer">
            {/* Brand */}
            <div>
              <Link href="/e" style={css("display: flex; align-items: center; gap: 10px; text-decoration: none; margin-bottom: 18px")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style={css("height: 30px; width: 30px; filter: brightness(0) invert(1)")} />
                <span style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 18px; color: #fff")}>Being Muslim</span>
              </Link>
              <p style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.6; max-width: 280px; margin-bottom: 24px")}>
                Empowering converts and beginners on their Islamic journey through education, community, and support.
              </p>
              <div style={css("display: flex; gap: 10px")}>
                {socials.map((social) => (
                  <a key={social.label} href="#" aria-label={social.label} className="bm-social-icon">
                    <svg viewBox="0 0 24 24" style={css("width: 15px; height: 15px; fill: rgba(255,255,255,0.85)")}>
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.heading}>
                <h4 style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 13px; font-weight: 600; color: #ab9ff2; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 18px")}>
                  {col.heading}
                </h4>
                {col.links.map((link, i) => (
                  <Link key={i} href={link.href} className="bm-footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={css("border-top: 1px solid rgba(255,255,255,0.14); padding: 26px 0 30px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px")}>
            <p style={css("font-family: 'Hanken Grotesk', sans-serif; font-size: 14px; color: rgba(255,255,255,0.5)")}>&copy; 2026 The Being Muslim Project. All rights reserved.</p>
            <div style={css("display: flex; gap: 24px")}>
              <Link href="/e" className="bm-footer-link" style={css("font-size: 14px; padding: 0")}>Privacy</Link>
              <Link href="/e" className="bm-footer-link" style={css("font-size: 14px; padding: 0")}>Terms</Link>
              <Link href="/e/contact" className="bm-footer-link" style={css("font-size: 14px; padding: 0")}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
