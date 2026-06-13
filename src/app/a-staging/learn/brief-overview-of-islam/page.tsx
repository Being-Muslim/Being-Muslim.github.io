import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "Brief Overview of Islam — Being Muslim",
  description:
    "A concise introduction to the core beliefs, practices, and history of Islam — perfect for anyone beginning to explore the faith.",
};

export default function BriefOverviewOfIslam() {
  return (
    <>
      {/* Hero */}
      <section style={css("background-color: #2a2018")} className="pt-[72px]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/a-staging/learn"
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
                Foundations
              </span>
              <span
                style={css("color: rgba(240,235,227,0.5); font-family: 'DM Sans', sans-serif")}
                className="flex items-center gap-1 text-sm"
              >
                <Clock className="h-4 w-4" />
                10 min read
              </span>
            </div>

            <h1
              style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              Brief Overview of Islam
            </h1>

            <p style={css("color: rgba(240,235,227,0.7); font-family: 'DM Sans', sans-serif")} className="mt-4 text-lg leading-relaxed">
              A concise introduction to the core beliefs, practices, and history of Islam — perfect for anyone beginning to explore the faith.
            </p>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={css("background-color: #f0ebe3")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <article className="mx-auto max-w-3xl" style={css("font-family: 'DM Sans', sans-serif")}>
            <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-2xl mb-4">
              What is Islam?
            </h2>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              Islam is one of the world&apos;s major religions, with over 1.8 billion followers worldwide. The word &quot;Islam&quot; comes from the Arabic root word meaning &quot;peace&quot; and &quot;submission&quot; — specifically, submission to the will of God (Allah in Arabic). A person who follows Islam is called a Muslim, meaning &quot;one who submits to God.&quot;
            </p>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              Islam teaches that there is one God, who is merciful, compassionate, and just. Muslims believe that God sent prophets throughout history — including Abraham, Moses, Jesus, and Muhammad (peace be upon them all) — to guide humanity. Muhammad is regarded as the final prophet, and the Quran is considered the last and most complete revelation from God.
            </p>

            <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-2xl mb-4 mt-10">
              The Five Pillars
            </h2>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              Islamic practice is built around five core pillars that provide structure and meaning to a Muslim&apos;s daily life. These pillars are not simply rituals — they are pathways to spiritual growth, community, and a deeper relationship with God. The Shahada (declaration of faith), Salah (five daily prayers), Zakat (charitable giving), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Makkah) together form the foundation of Muslim worship and identity.
            </p>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              Each pillar serves a unique purpose. Prayer cultivates mindfulness and gratitude throughout the day. Fasting teaches discipline, empathy for the less fortunate, and spiritual renewal. Charity purifies wealth and strengthens the bonds of community. The pilgrimage unites Muslims from every corner of the world in shared devotion. Together, they create a balanced life of worship, generosity, and self-improvement.
            </p>

            <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-2xl mb-4 mt-10">
              A Faith of Mercy and Knowledge
            </h2>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              One of the most emphasized themes in the Quran is God&apos;s mercy. The most frequently repeated phrase in the Quran is &quot;In the name of God, the Most Merciful, the Most Compassionate.&quot; Islam encourages seeking knowledge, showing kindness to all creation, and striving to be a positive force in the world. It is a faith that invites reflection, asks questions, and welcomes those who seek understanding with sincerity.
            </p>

            {/* Back to Learn */}
            <div style={css("border-top: 1px solid #d8d2c8")} className="mt-12 pt-8">
              <Link href="/a-staging/learn" className="bm-btn-outline" style={css("padding: 10px 24px")}>
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
