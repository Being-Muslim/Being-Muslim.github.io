import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe } from "lucide-react";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "Available Languages — Being Muslim Shop",
  description:
    "Browse Being Muslim: A Practical Guide across languages. English is available now; Spanish (Español) and Portuguese (Português) editions are forthcoming.",
};

type LanguageEntry = {
  name: string;
  badge: string;
  available: boolean;
  note: string;
  href?: string;
};

const languages: LanguageEntry[] = [
  {
    name: "English",
    badge: "English",
    available: true,
    note: "Available now — paperback, boxed set, prayer cards, and eBook.",
    href: "/b-staging/shop/book",
  },
  {
    name: "Spanish",
    badge: "Español",
    available: false,
    note: "Translation forthcoming. Not yet available for purchase online.",
    href: "/b-staging/shop/book/spanish",
  },
  {
    name: "Portuguese",
    badge: "Português",
    available: false,
    note: "Translation forthcoming. Not yet available for purchase online.",
    href: "/b-staging/shop/book/portuguese",
  },
  {
    name: "Arabic",
    badge: "العربية",
    available: false,
    note: "Coming soon — not yet available.",
  },
  {
    name: "French",
    badge: "Français",
    available: false,
    note: "Coming soon — not yet available.",
  },
];

export default function ConceptBStagingShopLanguages() {
  return (
    <>
      {/* ============ BREADCRUMB ============ */}
      <section style={css("background: #f4f1eb; padding-top: 110px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10" style={css("padding-top: 16px; padding-bottom: 16px")}>
          <nav style={css("display: flex; align-items: center; gap: 8px; font-family: 'DM Sans', sans-serif; font-size: 14px")}>
            <Link href="/b-staging/shop/book" style={css("color: #8a7e70; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: color 0.2s")} className="bm-view-all">
              <ArrowLeft style={css("width: 16px; height: 16px")} />
              Back to the Book
            </Link>
          </nav>
        </div>
      </section>

      {/* ============ HEADER ============ */}
      <section style={css("background: #f4f1eb; padding: 8px 0 40px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <span style={css("font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 1.5px; display: inline-flex; align-items: center; gap: 6px")}>
            <Globe style={css("width: 12px; height: 12px")} />
            Available Languages
          </span>
          <h1 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(28px, 4vw, 40px); font-weight: 400; color: #2a2018; margin: 16px 0 12px; line-height: 1.1")}>
            Read Being Muslim in your language
          </h1>
          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 16px; color: #8a7e70; max-width: 600px; line-height: 1.6; margin: 0")}>
            The English edition is available now. Additional translations are in progress — explore each language below.
          </p>
        </div>
      </section>

      {/* ============ LANGUAGE GRID ============ */}
      <section style={css("background: #faf9f5; padding: 40px 0 64px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="bm-grid-4" style={css("gap: 20px")}>
            {languages.map((lang) => {
              const card = (
                <div className="bm-card-hover" style={css("background: #fff; border-radius: 12px; padding: 24px; height: 100%; display: flex; flex-direction: column; gap: 12px")}>
                  <div style={css("display: flex; align-items: center; justify-content: space-between; gap: 12px")}>
                    <span style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #2a2018; background: rgba(200,184,160,0.25); padding: 4px 12px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px")}>
                      <Globe style={css("width: 12px; height: 12px")} />
                      {lang.badge}
                    </span>
                    <span
                      style={css(
                        `font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 999px; ${
                          lang.available
                            ? "color: #2d6a4f; background: rgba(45,106,79,0.12)"
                            : "color: #8a7e70; background: #f4f1eb"
                        }`,
                      )}
                    >
                      {lang.available ? "Available" : "Coming soon"}
                    </span>
                  </div>
                  <h2 style={css("font-family: 'Source Serif 4', serif; font-size: 20px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2")}>
                    {lang.name}
                  </h2>
                  <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.6; margin: 0; flex: 1")}>
                    {lang.note}
                  </p>
                  {lang.href ? (
                    <span style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: inline-flex; align-items: center; gap: 4px")} className="bm-view-all">
                      {lang.available ? "View edition" : "View details"} <ArrowRight style={css("width: 14px; height: 14px")} />
                    </span>
                  ) : (
                    <span style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #a09888")}>
                      Not yet available
                    </span>
                  )}
                </div>
              );

              return lang.href ? (
                <Link key={lang.name} href={lang.href} style={css("text-decoration: none; display: block")} className="bm-title-underline-parent">
                  {card}
                </Link>
              ) : (
                <div key={lang.name}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
