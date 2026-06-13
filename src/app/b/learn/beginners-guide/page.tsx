import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "A Beginner's Guide to Being a Muslim — Being Muslim",
  description:
    "Practical guidance for new Muslims covering daily prayers, fasting, community life, and building a meaningful relationship with God.",
};

export default function BeginnersGuide() {
  return (
    <>
      {/* Hero */}
      <section style={css("background-color: #2a2018")} className="pt-[72px]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/b/learn"
              style={css("color: rgba(240,235,227,0.6); font-family: 'DM Sans', sans-serif")}
              className="mb-6 inline-flex items-center gap-2 text-sm transition-colors hover:text-[#f0ebe3]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Learn
            </Link>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <span
                style={css("background: rgba(196,169,125,0.2); color: #c4a97d; font-family: 'DM Sans', sans-serif")}
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
              >
                New Muslims
              </span>
              <span
                style={css("color: rgba(240,235,227,0.5); font-family: 'DM Sans', sans-serif")}
                className="flex items-center gap-1 text-sm"
              >
                <Clock className="h-4 w-4" />
                12 min read
              </span>
            </div>

            <h1
              style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              A Beginner&apos;s Guide to Being a Muslim
            </h1>

            <p style={css("color: rgba(240,235,227,0.7); font-family: 'DM Sans', sans-serif")} className="mt-4 text-lg leading-relaxed">
              Practical guidance for new Muslims covering daily prayers, fasting, community life, and building a meaningful relationship with God.
            </p>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={css("background-color: #f0ebe3")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <article className="mx-auto max-w-3xl" style={css("font-family: 'DM Sans', sans-serif")}>
            <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-2xl mb-4">
              Taking the First Steps
            </h2>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              Becoming a Muslim is both a profound spiritual decision and the beginning of a lifelong journey. Whether you have just taken your shahada (declaration of faith) or are seriously considering it, the days and weeks that follow can feel overwhelming. There is so much to learn — from how to pray, to what to eat, to how to navigate relationships that may be changing. The most important thing to remember is this: take it one step at a time. God is patient, and your journey is uniquely yours.
            </p>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              The Prophet Muhammad (peace be upon him) taught that the most beloved deeds to God are those done consistently, even if they are small. You do not need to transform your entire life overnight. Start with the basics — learning the five daily prayers, understanding what it means to fast during Ramadan, and finding a community of supportive Muslims who can walk alongside you.
            </p>

            <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-2xl mb-4 mt-10">
              Building Your Daily Practice
            </h2>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              Prayer (salah) is the cornerstone of Muslim life. Five times a day, Muslims pause from the busyness of life to turn toward God in worship. Learning to pray can feel daunting at first — the Arabic words, the physical movements, the precise timings — but millions of people have learned it before you, and you will too. Begin by learning the Fatiha (the opening chapter of the Quran) and the basic positions. Many mosques offer classes specifically for new Muslims, and there are excellent video tutorials available online.
            </p>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              Beyond prayer, try to incorporate small acts of remembrance into your day. Saying &quot;Bismillah&quot; (in the name of God) before meals, expressing gratitude with &quot;Alhamdulillah&quot; (praise be to God), and reading even a few verses of the Quran with a translation each morning can help you feel connected to your faith throughout the day. These small habits, practiced consistently, build a strong spiritual foundation over time.
            </p>

            <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-2xl mb-4 mt-10">
              Finding Your Community
            </h2>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              One of the most important things a new Muslim can do is find a welcoming community. Islam places enormous emphasis on brotherhood and sisterhood — the idea that all believers are one family. Visit local mosques, attend community events, and do not be afraid to introduce yourself as someone new to the faith. Most Muslims are deeply honored to welcome a new member to the community and are eager to help. If your local mosque does not have a new Muslim support program, look for online communities and mentorship programs that can fill that gap.
            </p>

            {/* Back to Learn */}
            <div style={css("border-top: 1px solid #d8d2c8")} className="mt-12 pt-8">
              <Link href="/b/learn" className="bm-btn-outline" style={css("padding: 10px 24px")}>
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Learn
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
