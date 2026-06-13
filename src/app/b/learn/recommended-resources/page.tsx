import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "Recommended Resources — Being Muslim",
  description:
    "A curated collection of trusted articles, books, and organizations to support new Muslims, converts, and the curious on their journey.",
};

const internalResources = [
  {
    title: "Brief Overview of Islam",
    description:
      "A concise introduction to the core beliefs, practices, and history of Islam — perfect for anyone beginning to explore the faith.",
    href: "/b/learn/brief-overview-of-islam",
  },
  {
    title: "A Beginner's Guide to Being a Muslim",
    description:
      "Practical guidance for new Muslims covering daily prayers, fasting, community life, and building a meaningful relationship with God.",
    href: "/b/learn/beginners-guide",
  },
  {
    title: "Islam and Other Faiths",
    description:
      "Understanding how Islam relates to Christianity, Judaism, and other religious traditions — and the shared values that connect them.",
    href: "/b/learn/islam-and-other-faiths",
  },
];

const externalResources = [
  {
    title: "New Beginnings (UK)",
    description:
      "A warm, welcoming charity offering mentorship, classes, and community for new Muslims in the United Kingdom.",
    url: "https://beginnings.org.uk/",
  },
  {
    title: "iERA — New Muslim Support",
    description:
      "Guidance, care packages, and ongoing support designed specifically for those who have recently embraced Islam.",
    url: "https://newmuslim.iera.org/",
  },
  {
    title: "Yaqeen Institute",
    description:
      "Research-backed articles, papers, and videos addressing modern questions about Islam and faith.",
    url: "https://yaqeeninstitute.org",
  },
  {
    title: "SeekersGuidance",
    description:
      "Free online Islamic courses taught by qualified scholars, from beginner to advanced.",
    url: "https://seekersguidance.org",
  },
];

export default function RecommendedResources() {
  return (
    <>
      {/* Hero */}
      <section style={css("position: relative; min-height: 360px; display: flex; align-items: flex-end; overflow: hidden; background: #2a2018")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10" style={css("position: relative; z-index: 1; width: 100%; padding-bottom: 48px; padding-top: 140px")}>
          <Link
            href="/b/learn"
            style={css("color: rgba(240,235,227,0.6); font-family: 'DM Sans', sans-serif")}
            className="mb-6 inline-flex items-center gap-2 text-sm transition-colors hover:text-[#f0ebe3]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Learn
          </Link>
          <h1 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(40px, 6vw, 64px); font-weight: 400; color: #fff; margin: 0 0 12px; line-height: 1.05")}>
            Recommended Resources
          </h1>
          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 17px; color: rgba(255,255,255,0.8); max-width: 520px; line-height: 1.6; margin: 0")}>
            A handpicked collection of articles, books, and trusted organizations to accompany you on your journey — wherever you are starting from.
          </p>
        </div>
      </section>

      {/* Start With Our Articles */}
      <section className="bm-section-padding" style={css("background: #faf9f5")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 8px")}>
            Start with our articles
          </h2>
          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.55; margin: 0 0 32px")}>
            Three short, welcoming articles that introduce the essentials of Islam.
          </p>

          <div className="bm-grid-3" style={css("gap: 16px")}>
            {internalResources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="bm-card-hover bm-title-underline-parent"
                style={css("display: block; padding: 28px; border-radius: 12px; text-decoration: none; background: #f4f1eb")}
              >
                <h3 className="bm-title-underline" style={css("font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0 0 10px; line-height: 1.3")}>
                  {resource.title}
                </h3>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.5; margin: 0 0 16px")}>
                  {resource.description}
                </p>
                <span style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; display: inline-flex; align-items: center; gap: 6px")}>
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* From Around the Web */}
      <section className="bm-section-padding" style={css("background: #f4f1eb")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 8px")}>
            Trusted organizations &amp; further reading
          </h2>
          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.55; margin: 0 0 32px")}>
            External resources from scholars, educators, and support networks we trust. These open in a new tab.
          </p>

          <div className="bm-grid-3" style={css("gap: 16px")}>
            {externalResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bm-card-hover"
                style={css("display: block; padding: 28px; border-radius: 12px; text-decoration: none; background: #faf9f5")}
              >
                <div style={css("display: flex; justify-content: space-between; align-items: start; gap: 12px; margin-bottom: 8px")}>
                  <h3 style={css("font-family: 'Source Serif 4', serif; font-size: 17px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.3")}>
                    {resource.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 flex-shrink-0" style={css("color: #c8b8a0; margin-top: 2px")} />
                </div>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.5; margin: 0")}>
                  {resource.description}
                </p>
              </a>
            ))}
          </div>

          <div style={css("margin-top: 32px")}>
            <Link href="/b/learn/ask-a-question" className="bm-btn-outline" style={css("padding: 10px 24px")}>
              Still have a question? Ask us <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
