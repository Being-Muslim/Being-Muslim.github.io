"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, ShoppingBag, ChevronDown } from "lucide-react";
import { css } from "@/lib/css";

const featureBoxes = [
  { label: "Learn", desc: "Explore articles, guides, and resources on Islamic faith and practice", href: "/b/learn", Icon: BookOpen },
  { label: "Convert", desc: "Take the next step on your journey with guidance and support", href: "/b/convert", Icon: Compass },
  { label: "Buy", desc: "Books, prayer cards, and resources for your journey", href: "/b/shop", Icon: ShoppingBag },
];

const products = [
  { title: "Being Muslim: A Practical Guide", price: "$14.95", badge: "Bestseller", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg", href: "/b/shop/book" },
  { title: "The Complete Boxed Set", price: "$85.00", badge: "Most Popular", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg", href: "/b/shop/boxed-set" },
  { title: "Prayer Reference Cards", price: "$37.50", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg", href: "/b/shop/prayer-cards" },
  { title: "Digital Edition (eBook)", price: "$9.00", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png", href: "/b/shop/ebook" },
];

const faqs = [
  { q: "My family is not supportive of my conversion. What do you advise?", a: "This is a common challenge many new Muslims face. We recommend patience, maintaining loving relationships, and leading by positive example. Our community forum has many discussions from people who have navigated this successfully." },
  { q: "Can you help me find a mosque or community of Muslims near me?", a: "We can help connect you with local communities. Reach out through our Contact page and we will do our best to help you find a welcoming community in your area." },
  { q: "My previous faith was very dear to me. If I am now a Muslim, do I have to reject it entirely?", a: "Islam acknowledges and respects the earlier prophets and scriptures. Many of the values you cherished in your previous faith are shared in Islam. Your journey enriches rather than erases your spiritual history." },
  { q: "My spouse or significant other is not a Muslim. How does becoming Muslim impact my marriage?", a: "This is a nuanced topic that depends on your specific situation. We recommend speaking with a knowledgeable scholar who can provide guidance tailored to your circumstances. Reach out through our Contact page." },
  { q: "I just converted, what do I do next?", a: "Congratulations and may God bless your path ahead! We have written an article that offers some advice and important first steps: “A Beginner's Guide to Being a Muslim.” You can find it on our Learn page." },
  { q: "I believe Islam to be true and revealed by God, but I can't live up to its teachings. What should I do?", a: "This feeling is more common than you might think. Islam teaches that God is the Most Merciful and that no one is expected to be perfect. Begin with what you can, be sincere in your intention, and trust that growth comes with time. The door to God is always open." },
  { q: "I want to convert, but I am finding it difficult to change my lifestyle including the way that I dress, what I eat/drink, relationships. Can I still become Muslim?", a: "Absolutely. Islam teaches that faith is a journey, not a destination. You do not need to be perfect to begin. Start with the essentials and grow at your own pace — God is patient and merciful." },
  { q: "Do I need to change my name now that I have become Muslim?", a: "No, changing your name is not required in Islam. Many Muslims keep their birth names. Some choose to adopt a new name as a personal expression of their new identity, but this is entirely optional." },
];

export default function ConceptBStagingHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq((cur) => (cur === i ? null : i));

  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-bg.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={css("background: linear-gradient(180deg, rgba(40,35,28,0.3) 0%, rgba(40,35,28,0.1) 40%, rgba(40,35,28,0.55) 100%)")} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-32 lg:px-10">
          <div className="max-w-[680px]">
            <h1 className="font-display text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[68px]">
              Navigating the <span className="italic font-normal text-amber-200/90">Path</span> to Islam
            </h1>
            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.65] text-white/80">
              Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
            </p>
          </div>
        </div>

        {/* ============ 2. LEARN / CONVERT / BUY (glass nav cards) ============ */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10 mt-10 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl overflow-hidden">
            {featureBoxes.map(({ label, desc, href, Icon }, i) => (
              <Link
                key={label}
                href={href}
                className={`group flex items-start justify-between gap-4 p-6 sm:p-8 hover:bg-white/5 transition-colors ${
                  i < featureBoxes.length - 1 ? "border-b sm:border-b-0 sm:border-r border-white/10" : ""
                }`}
              >
                <div>
                  <Icon className="h-5 w-5 text-white/70 mb-3" />
                  <h3 className="font-display text-xl font-bold text-white mb-2">{label}</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed max-w-[260px]">{desc}</p>
                </div>
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/25 text-white/70 group-hover:bg-white/10 group-hover:text-white transition-all">
                  <ArrowRight className="h-4 w-4 -rotate-45" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. FEATURED ARTICLES (bento) ============ */}
      <section className="bm-section-padding" style={css("background: #f4f1eb")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px")}>
            <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0")}>
              Latest Resources
            </h2>
            <Link href="/b/learn" className="bm-view-all" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px")}>
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Bento grid: left image spans 2 rows, right cards share those rows, left text in row 3 */}
          <div className="bm-grid-bento">
            {/* Left: featured image spanning rows 1–2 */}
            <Link href="/b/learn/brief-overview-of-islam" style={css("display: block; text-decoration: none; border-radius: 12px; overflow: hidden; background: #e2dcd2")} className="bm-title-underline-parent">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png" alt="Brief Overview of Islam" style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
            </Link>

            {/* Right top card (row 1) */}
            <Link href="/b/learn/beginners-guide" className="bm-grid-article-card bm-title-underline-parent" style={css("text-decoration: none")}>
              <div style={css("background: #e2dcd2; border-radius: 10px; overflow: hidden; height: 100%")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" alt="A Beginner's Guide to Being a Muslim" style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
              </div>
              <div>
                <h3 className="bm-title-underline" style={css("font-size: 22px; color: #2a2018; margin: 0 0 14px; line-height: 1.3")}>A Beginner&apos;s Guide to Being a Muslim</h3>
                <p style={css("font-size: 15px; color: #8a7e70; line-height: 1.45; margin: 0 0 16px")}>Practical advice and important first steps for those who have recently embraced Islam.</p>
                <div style={css("display: flex; align-items: center; gap: 8px")}>
                  <span style={css("font-size: 15px; font-weight: 500; color: #2a2018")}>New Muslims</span>
                  <span style={css("font-size: 15px; color: #a09888")}>12 min read</span>
                </div>
              </div>
            </Link>

            {/* Right bottom card (row 2) */}
            <Link href="/b/learn/islam-and-other-faiths" className="bm-grid-article-card bm-title-underline-parent" style={css("text-decoration: none")}>
              <div style={css("background: #e2dcd2; border-radius: 10px; overflow: hidden; height: 100%")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.beingmuslim.org/wp-content/uploads/2022/02/foundationsofIsam_YT.jpeg" alt="Islam and Other Faiths" style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
              </div>
              <div>
                <h3 className="bm-title-underline" style={css("font-size: 22px; color: #2a2018; margin: 0 0 14px; line-height: 1.3")}>Islam and Other Faiths</h3>
                <p style={css("font-size: 15px; color: #8a7e70; line-height: 1.45; margin: 0 0 16px")}>Understanding common ground and key differences with Christianity, Judaism, and other faiths.</p>
                <div style={css("display: flex; align-items: center; gap: 8px")}>
                  <span style={css("font-size: 15px; font-weight: 500; color: #2a2018")}>Belief</span>
                  <span style={css("font-size: 15px; color: #a09888")}>8 min read</span>
                </div>
              </div>
            </Link>

            {/* Left: text below image (row 3) */}
            <Link href="/b/learn/brief-overview-of-islam" style={css("display: block; text-decoration: none")} className="bm-title-underline-parent">
              <h3 className="bm-title-underline" style={css("font-size: 24px; color: #2a2018; margin: 0 0 6px; line-height: 1.3")}>Brief Overview of Islam</h3>
              <p style={css("font-size: 15px; color: #8a7e70; line-height: 1.5; margin: 0 0 8px")}>A clear and accessible introduction to the core beliefs, practices, and history of Islam for those just beginning to learn.</p>
              <div style={css("display: flex; align-items: center; gap: 10px")}>
                <span style={css("font-size: 15px; font-weight: 500; color: #2a2018")}>Foundations</span>
                <span style={css("font-size: 15px; color: #a09888")}>10 min read</span>
              </div>
            </Link>
          </div>

          <div style={css("text-align: center; margin-top: 32px")}>
            <Link href="/b/learn/recommended-resources" className="bm-btn-outline" style={css("padding: 10px 24px")}>
              Additional Resources <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 4. PRODUCTS (carousel) ============ */}
      <section className="bm-section-padding" style={css("background: #faf9f5")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px; text-align: center")}>
            Everything you need to begin
          </h2>

          <div style={css("display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 16px; -webkit-overflow-scrolling: touch")}>
            {products.map((product) => (
              <Link key={product.title} href={product.href} style={css("flex: 0 0 280px; scroll-snap-align: start; text-decoration: none; display: block")} className="bm-title-underline-parent group">
                <div style={css("aspect-ratio: 1; background: #e2dcd2; border-radius: 12px; overflow: hidden; margin-bottom: 16px; position: relative")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.img} alt={product.title} className="transition-transform duration-500 group-hover:scale-105" style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
                  {product.badge && (
                    <span style={css("position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 3px 10px; border-radius: 999px; z-index: 2")}>{product.badge}</span>
                  )}
                </div>
                <h3 className="bm-title-underline" style={css("font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 6px; line-height: 1.3")}>{product.title}</h3>
                <span style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018")}>{product.price}</span>
              </Link>
            ))}
          </div>

          <div style={css("text-align: center; margin-top: 32px")}>
            <Link href="/b/shop" className="bm-btn-outline" style={css("padding: 10px 24px")}>
              See All Store Items <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 5. FAQ ============ */}
      <section className="bm-section-padding" style={css("background: #f4f1eb")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("max-width: 800px; margin: 0 auto")}>
            <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px; text-align: center")}>
              Frequently Asked Questions
            </h2>

            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => toggleFaq(i)}
                  style={css("width: 100%; text-align: left; padding: 20px 0; border: none; border-top: 1px solid #e8e3da; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px")}
                >
                  <span style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; color: #2a2018; line-height: 1.4")}>{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 mt-1 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} style={css("color: #8a7e70")} />
                </button>
                {openFaq === i && (
                  <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px; padding-right: 40px")}>{faq.a}</p>
                )}
              </div>
            ))}

            <div style={css("margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px; justify-content: center")}>
              <Link href="/b/learn/ask-a-question" className="bm-btn-outline" style={css("padding: 10px 24px")}>Ask a Question</Link>
              <Link href="/b/convert" className="bm-btn-dark" style={css("padding: 10px 24px")}>Ready to Convert</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
