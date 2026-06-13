import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Globe, Heart } from "lucide-react";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "Being Muslim: A Practical Guide (Português) — Being Muslim Shop",
  description:
    "The Portuguese (Português) edition of Being Muslim: A Practical Guide by Dr. Asad Tarsin. A full Portuguese translation is forthcoming.",
};

const otherLanguages = [
  { label: "English", badge: "English", href: "/b/shop/book" },
  { label: "Español", badge: "Español", href: "/b/shop/book/spanish" },
];

export default function ConceptBStagingShopBookPortuguese() {
  return (
    <>
      {/* ============ BREADCRUMB ============ */}
      <section style={css("background: #f4f1eb; padding-top: 110px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10" style={css("padding-top: 16px; padding-bottom: 16px")}>
          <nav style={css("display: flex; align-items: center; gap: 8px; font-family: 'DM Sans', sans-serif; font-size: 14px")}>
            <Link href="/b/shop/book" style={css("color: #8a7e70; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: color 0.2s")} className="bm-view-all">
              <ArrowLeft style={css("width: 16px; height: 16px")} />
              Back to the Book
            </Link>
          </nav>
        </div>
      </section>

      {/* ============ PRODUCT DETAIL ============ */}
      <section style={css("background: #f4f1eb; padding: 0 0 64px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Language switcher row */}
          <div style={css("display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px")}>
            {otherLanguages.map((lang) => (
              <Link
                key={lang.href}
                href={lang.href}
                className="bm-btn-outline"
                style={css("padding: 6px 16px; font-size: 13px")}
              >
                <Globe style={css("width: 14px; height: 14px")} />
                {lang.badge}
              </Link>
            ))}
            <Link href="/b/shop/languages" className="bm-btn-outline" style={css("padding: 6px 16px; font-size: 13px")}>
              All languages
            </Link>
          </div>

          <div style={css("display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start")} className="md:!grid-cols-2 md:!gap-12">
            {/* Image */}
            <div style={css("background: #e2dcd2; border-radius: 12px; overflow: hidden; aspect-ratio: 3/4; position: relative")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
                alt="Being Muslim: A Practical Guide — Portuguese edition"
                style={css("width: 100%; height: 100%; object-fit: cover; display: block")}
              />
              <span style={css("position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2a2018; background: #fff; padding: 4px 12px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px")}>
                <Globe style={css("width: 12px; height: 12px")} />
                Português
              </span>
            </div>

            {/* Details */}
            <div>
              <span style={css("font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2a2018; background: rgba(200,184,160,0.25); padding: 4px 12px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px")}>
                <Globe style={css("width: 12px; height: 12px")} />
                Português
              </span>

              <h1 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(28px, 4vw, 36px); font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.15")}>
                Being Muslim: A Practical Guide
              </h1>

              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; margin: 0 0 16px")}>By Dr. Asad Tarsin · Portuguese edition</p>

              {/* Availability note instead of price (not yet purchasable online) */}
              <div style={css("background: rgba(200,184,160,0.18); border-radius: 10px; padding: 16px 18px; margin: 0 0 24px")}>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018; margin: 0 0 4px")}>
                  Not yet available for purchase online
                </p>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.6; margin: 0")}>
                  A full Portuguese (Português) translation of <em>Being Muslim: A Practical Guide</em> is forthcoming. The English body copy below describes the edition while the translated text is being prepared.
                </p>
              </div>

              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.7; margin: 0 0 24px")}>
                The essential guide for new Muslims and anyone seeking a clear, warm, and comprehensive introduction to Islam. Written by acclaimed Islamic educator Dr. Asad Tarsin, this beautifully designed book covers the core beliefs and practices of Islam — from the five pillars and daily prayer to fasting, charity, and building a meaningful relationship with God. Whether you are a new convert, someone returning to the faith, or simply curious, this book meets you where you are.
              </p>

              <ul style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #5a5248; line-height: 2; margin: 0 0 32px; padding-left: 20px")}>
                <li>Full-color illustrations throughout</li>
                <li>Step-by-step prayer guide</li>
                <li>Covers the five pillars in depth</li>
                <li>Written for new Muslims and reconnectors</li>
                <li>Portuguese translation forthcoming</li>
              </ul>

              <div style={css("display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px")}>
                <button
                  className="bm-btn-outline"
                  disabled
                  style={css("padding: 14px 32px; font-size: 15px; opacity: 0.55; cursor: not-allowed")}
                >
                  Not yet available
                </button>
                <Link href="/b/shop/book" className="bm-btn-dark" style={css("padding: 14px 32px; font-size: 15px")}>
                  View the English edition
                </Link>
              </div>

              <div style={css("border-top: 1px solid #d8d2c8; padding-top: 20px; display: flex; flex-wrap: wrap; gap: 24px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70")}>
                <span>Translation in progress</span>
                <span>English edition available now</span>
                <Link href="/b/shop/languages" style={css("color: #8a7e70; text-decoration: none")} className="bm-view-all">
                  See all languages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SPONSOR CALLOUT BANNER ============ */}
      <section style={css("background: #2a2018; padding: 64px 0")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("display: flex; align-items: center; gap: 48px; flex-wrap: wrap; justify-content: center")}>
            <div style={css("width: 80px; height: 80px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0")}>
              <Heart style={css("width: 40px; height: 40px; color: #c8b8a0")} />
            </div>
            <div style={css("flex: 1; min-width: 280px")}>
              <h2 style={css("font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.2")}>
                Sponsor this for a new Muslim
              </h2>
              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0")}>
                Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands — a gift that transforms lives.
              </p>
            </div>
            <Link href="/b/support" className="bm-btn-white" style={css("flex-shrink: 0")}>
              Sponsor Now <Heart style={css("width: 14px; height: 14px")} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
