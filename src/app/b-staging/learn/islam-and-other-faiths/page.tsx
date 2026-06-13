import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "Islam and Other Faiths — Being Muslim",
  description:
    "Understanding how Islam relates to Christianity, Judaism, and other religious traditions — and the shared values that connect them.",
};

export default function IslamAndOtherFaiths() {
  return (
    <>
      {/* Hero */}
      <section style={css("background-color: #2a2018")} className="pt-[72px]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/b-staging/learn"
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
                Belief
              </span>
              <span
                style={css("color: rgba(240,235,227,0.5); font-family: 'DM Sans', sans-serif")}
                className="flex items-center gap-1 text-sm"
              >
                <Clock className="h-4 w-4" />
                8 min read
              </span>
            </div>

            <h1
              style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              Islam and Other Faiths
            </h1>

            <p style={css("color: rgba(240,235,227,0.7); font-family: 'DM Sans', sans-serif")} className="mt-4 text-lg leading-relaxed">
              Understanding how Islam relates to Christianity, Judaism, and other religious traditions — and the shared values that connect them.
            </p>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={css("background-color: #f0ebe3")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <article className="mx-auto max-w-3xl" style={css("font-family: 'DM Sans', sans-serif")}>
            <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-2xl mb-4">
              A Shared Heritage
            </h2>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              Islam, Christianity, and Judaism are often called the Abrahamic faiths because they all trace their spiritual lineage back to the Prophet Abraham (Ibrahim in Arabic). This shared heritage is not merely historical — it carries deep theological significance. Muslims believe in the same God worshipped by Jews and Christians, and the Quran repeatedly affirms the messages brought by earlier prophets, including Moses, David, Solomon, and Jesus (peace be upon them all).
            </p>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              The Quran refers to Jews and Christians as &quot;People of the Book&quot; (Ahl al-Kitab), a title of respect acknowledging their reception of divine scripture. Muslims are taught to engage with people of other faiths with courtesy and mutual respect. The Quran states: &quot;There is no compulsion in religion&quot; (2:256), establishing a clear principle of religious freedom and coexistence.
            </p>

            <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-2xl mb-4 mt-10">
              Common Ground and Key Differences
            </h2>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              All three Abrahamic faiths share core moral teachings: honesty, compassion, charity, justice, and the sanctity of human life. They share many of the same prophets and stories. The differences lie primarily in theological concepts — such as the nature of God, the role of Jesus, and the means of salvation — but even here, the traditions engage with remarkably similar questions about purpose, morality, and the human relationship with the Divine.
            </p>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              For someone coming to Islam from another faith tradition, it is important to know that Islam does not ask you to reject the good you found in your previous faith. Many converts describe their experience as a continuation or completion of their spiritual journey, not a rejection of everything that came before. The values of love, mercy, and justice that drew you to faith in the first place are central to Islam as well.
            </p>

            <h2 style={css("font-family: 'Source Serif 4', serif; color: #2a2018")} className="text-2xl mb-4 mt-10">
              Building Bridges
            </h2>
            <p style={css("color: #5a5248; line-height: 1.8")} className="mb-6 text-base">
              In an increasingly interconnected world, understanding between faiths is more important than ever. Islam encourages dialogue, mutual learning, and cooperation on shared values. The Prophet Muhammad (peace be upon him) himself engaged respectfully with people of other faiths, honored treaties, and protected the rights of religious minorities in his community. As Muslims, we are called to be ambassadors of understanding — building bridges rather than walls, and recognizing the dignity God has granted to every human being.
            </p>

            {/* Back to Learn */}
            <div style={css("border-top: 1px solid #d8d2c8")} className="mt-12 pt-8">
              <Link href="/b-staging/learn" className="bm-btn-outline" style={css("padding: 10px 24px")}>
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
