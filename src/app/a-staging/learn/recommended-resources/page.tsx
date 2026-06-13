import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
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
    href: "/a-staging/learn/brief-overview-of-islam",
  },
  {
    title: "A Beginner's Guide to Being a Muslim",
    description:
      "Practical guidance for new Muslims covering daily prayers, fasting, community life, and building a meaningful relationship with God.",
    href: "/a-staging/learn/beginners-guide",
  },
  {
    title: "Islam and Other Faiths",
    description:
      "Understanding how Islam relates to Christianity, Judaism, and other religious traditions — and the shared values that connect them.",
    href: "/a-staging/learn/islam-and-other-faiths",
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
      <section
        style={css("background-color: #2a2018; font-family: 'DM Sans', sans-serif")}
        className="pt-[72px]"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Link
              href="/a-staging/learn"
              style={css("color: rgba(240,235,227,0.6); font-family: 'DM Sans', sans-serif")}
              className="mb-6 inline-flex items-center gap-2 text-sm transition-colors hover:text-[#f0ebe3]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Learn
            </Link>
            <h1
              style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1]"
            >
              Recommended Resources
            </h1>
            <p style={css("color: #f0ebe3")} className="mt-5 text-lg leading-relaxed opacity-70 max-w-lg mx-auto">
              A handpicked collection of articles, books, and trusted organizations to accompany you on your journey — wherever you are starting from.
            </p>
          </div>
        </div>
      </section>

      {/* Start with our articles */}
      <section style={css("background-color: #f0ebe3; font-family: 'DM Sans', sans-serif")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <p style={css("color: #8a7e70; letter-spacing: 0.08em")} className="text-sm font-medium uppercase mb-3">
            &#9670; Start With Our Articles
          </p>
          <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-3xl sm:text-4xl font-bold">
            Foundational reading
          </h2>
          <p style={css("color: #8a7e70")} className="mt-3 text-base max-w-xl leading-relaxed">
            Three short, welcoming articles that introduce the essentials of Islam.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {internalResources.map((resource) => (
              <Link key={resource.title} href={resource.href} className="group block">
                <article
                  style={css("background: #e9e3da; border-radius: 10px")}
                  className="flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div
                    style={css("background: linear-gradient(135deg, #d4ccc0 0%, #c4b9aa 100%)")}
                    className="aspect-[16/10] flex items-center justify-center"
                  >
                    <BookOpen style={css("color: #8a7e70")} className="h-10 w-10 opacity-40" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}
                      className="text-xl font-bold leading-snug group-hover:opacity-80 transition-opacity"
                    >
                      {resource.title}
                    </h3>
                    <p style={css("color: #8a7e70")} className="mt-3 text-sm leading-relaxed flex-1">
                      {resource.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5" style={css("color: #2a2018")}>
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* External resources */}
      <section style={css("background-color: #e9e3da; font-family: 'DM Sans', sans-serif")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <p style={css("color: #8a7e70; letter-spacing: 0.08em")} className="text-sm font-medium uppercase mb-3">
            &#9670; From Around the Web
          </p>
          <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-3xl sm:text-4xl font-bold">
            Trusted organizations &amp; further reading
          </h2>
          <p style={css("color: #8a7e70")} className="mt-3 text-base max-w-xl leading-relaxed">
            External resources from scholars, educators, and support networks we trust. These open in a new tab.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {externalResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                style={css("background: #f0ebe3; border-radius: 10px")}
              >
                <div className="flex-1 min-w-0">
                  <h3
                    style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}
                    className="text-lg font-bold group-hover:opacity-80 transition-opacity"
                  >
                    {resource.title}
                  </h3>
                  <p style={css("color: #8a7e70")} className="mt-1 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <div
                  style={css("color: #8a7e70")}
                  className="flex-shrink-0 transition-colors group-hover:text-[#2a2018]"
                >
                  <ExternalLink className="h-5 w-5" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/a-staging/learn/ask-a-question" className="bm-btn-outline" style={css("padding: 10px 24px")}>
              Still have a question? Ask us <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
