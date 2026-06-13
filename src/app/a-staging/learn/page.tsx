import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, MessageCircle } from "lucide-react";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "Learn — Explore Islam | Being Muslim",
  description:
    "Explore articles, guides, and curated resources to deepen your understanding of Islam. Written for new Muslims, converts, and the curious.",
};

const featuredArticles = [
  {
    title: "Brief Overview of Islam",
    excerpt:
      "A concise introduction to the core beliefs, practices, and history of Islam — perfect for anyone beginning to explore the faith.",
    href: "/a-staging/learn/brief-overview-of-islam",
  },
  {
    title: "A Beginner's Guide to Being a Muslim",
    excerpt:
      "Practical guidance for new Muslims covering daily prayers, fasting, community life, and building a meaningful relationship with God.",
    href: "/a-staging/learn/beginners-guide",
  },
  {
    title: "The Final Testament: Islam and Other Faiths",
    excerpt:
      "Understanding how Islam relates to Christianity, Judaism, and other religious traditions — and the shared values that connect them.",
    href: "/a-staging/learn/islam-and-other-faiths",
  },
];

const resources = [
  {
    title: "Being Muslim: A Practical Guide",
    description:
      "Dr. Asad Tarsin's essential book for new Muslims — clear, warm, and comprehensive.",
    url: "https://www.beingmuslim.org",
  },
  {
    title: "Yaqeen Institute",
    description:
      "Research-backed articles, papers, and videos addressing modern questions about Islam.",
    url: "https://yaqeeninstitute.org",
  },
  {
    title: "SeekersGuidance",
    description:
      "Free online Islamic courses taught by qualified scholars, from beginner to advanced.",
    url: "https://seekersguidance.org",
  },
  {
    title: "Bayyinah TV",
    description:
      "Arabic and Quran education through engaging video content by Ustadh Nouman Ali Khan.",
    url: "https://www.bayyinahtv.com",
  },
  {
    title: "Salam (New Muslim Support)",
    description:
      "Mentorship and community support specifically designed for converts and new Muslims.",
    url: "https://www.newsalam.com",
  },
];

export default function ConceptAStagingLearn() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={css("background-color: #2a2018; font-family: 'DM Sans', sans-serif")}
        className="pt-[72px]"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p
              style={css("color: #c4a97d; font-family: 'DM Sans', sans-serif; letter-spacing: 0.08em")}
              className="text-sm font-medium uppercase mb-4"
            >
              &#9670; Knowledge &amp; Guidance
            </p>
            <h1
              style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1]"
            >
              Learn
            </h1>
            <p style={css("color: #f0ebe3")} className="mt-5 text-lg leading-relaxed opacity-70 max-w-lg mx-auto">
              Explore thoughtful articles, curated resources, and answers to your questions about Islam — written with clarity, warmth, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section style={css("background-color: #f0ebe3; font-family: 'DM Sans', sans-serif")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <p
            style={css("color: #8a7e70; letter-spacing: 0.08em")}
            className="text-sm font-medium uppercase mb-3"
          >
            &#9670; Featured Articles
          </p>
          <h2
            style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}
            className="text-3xl sm:text-4xl font-bold"
          >
            Start here
          </h2>
          <p style={css("color: #8a7e70")} className="mt-3 text-base max-w-xl leading-relaxed">
            Whether you&apos;re just curious or taking your first steps, these articles offer a welcoming introduction.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {featuredArticles.map((article) => (
              <Link key={article.title} href={article.href} className="group block">
                <article
                  style={css("background: #e9e3da; border-radius: 10px")}
                  className="flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {/* Image Placeholder */}
                  <div
                    style={css("background: linear-gradient(135deg, #d4ccc0 0%, #c4b9aa 100%)")}
                    className="aspect-[16/10] flex items-center justify-center"
                  >
                    <BookOpen style={css("color: #8a7e70")} className="h-10 w-10 opacity-40" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}
                      className="text-xl font-bold leading-snug group-hover:opacity-80 transition-opacity"
                    >
                      {article.title}
                    </h3>
                    <p style={css("color: #8a7e70")} className="mt-3 text-sm leading-relaxed flex-1">
                      {article.excerpt}
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

      {/* Recommended Resources Section */}
      <section style={css("background-color: #e9e3da; font-family: 'DM Sans', sans-serif")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <p
            style={css("color: #8a7e70; letter-spacing: 0.08em")}
            className="text-sm font-medium uppercase mb-3"
          >
            &#9670; Recommended Resources
          </p>
          <h2
            style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}
            className="text-3xl sm:text-4xl font-bold"
          >
            Trusted learning from around the web
          </h2>
          <p style={css("color: #8a7e70")} className="mt-3 text-base max-w-xl leading-relaxed">
            Handpicked resources from scholars and educators we trust, to complement your journey.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {resources.map((resource) => (
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
            <Link href="/a-staging/learn/recommended-resources" className="bm-btn-outline" style={css("padding: 10px 24px")}>
              See all recommended resources <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ask a Question CTA */}
      <section style={css("background-color: #2a2018; font-family: 'DM Sans', sans-serif")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full"
              style={css("background: rgba(196, 169, 125, 0.2)")}
            >
              <MessageCircle style={css("color: #c4a97d")} className="h-7 w-7" />
            </div>
            <h2
              style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}
              className="text-3xl sm:text-4xl font-bold"
            >
              Have a question about Islam?
            </h2>
            <p style={css("color: #f0ebe3")} className="mt-4 text-lg leading-relaxed opacity-70 max-w-lg mx-auto">
              No question is too simple or too small. We&apos;re here to help you find thoughtful, reliable answers.
            </p>
            <Link
              href="/a-staging/learn/ask-a-question"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:shadow-lg hover:scale-[1.02]"
              style={css("background: #f0ebe3; color: #2a2018")}
            >
              Ask a Question
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
