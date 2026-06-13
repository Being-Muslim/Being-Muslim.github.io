"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, ShoppingBag, ChevronDown } from "lucide-react";
import { css } from "@/lib/css";

const featureBoxes = [
  { label: "Learn", desc: "Explore articles, guides, and resources on Islamic faith and practice", href: "/a-staging/learn", Icon: BookOpen },
  { label: "Convert", desc: "Take the next step on your journey with guidance and support", href: "/a-staging/convert", Icon: Compass },
  { label: "Buy", desc: "Books, prayer cards, and resources for your journey", href: "/a-staging/shop", Icon: ShoppingBag },
];

const articles = [
  { title: "Brief Overview of Islam", category: "Foundations", time: "10 min read", href: "/a-staging/learn/brief-overview-of-islam", img: "https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png" },
  { title: "A Beginner's Guide to Being a Muslim", category: "New Muslims", time: "12 min read", href: "/a-staging/learn/beginners-guide", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" },
  { title: "Islam and Other Faiths", category: "Belief", time: "8 min read", href: "/a-staging/learn/islam-and-other-faiths", img: "https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg" },
];

const products = [
  { title: "Being Muslim: A Practical Guide", price: "$14.95", badge: "Bestseller", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg", href: "/a-staging/shop/book" },
  { title: "The Complete Boxed Set", price: "$85.00", badge: "Most Popular", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg", href: "/a-staging/shop/boxed-set" },
  { title: "Prayer Reference Cards", price: "$37.50", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg", href: "/a-staging/shop/prayer-cards" },
  { title: "Digital Edition (eBook)", price: "$9.00", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png", href: "/a-staging/shop/ebook" },
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

export default function ConceptAStagingHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq((cur) => (cur === i ? null : i));

  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="relative flex min-h-[83vh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-bg.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={css("background: linear-gradient(180deg, rgba(40,35,28,0.3) 0%, rgba(40,35,28,0.1) 40%, rgba(40,35,28,0.55) 100%)")} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-32 pb-12 lg:px-10">
          <div className="max-w-[680px]">
            <h1 className="font-display text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[68px]">
              Navigating the <span className="italic font-normal text-amber-200/90">Path</span> to Islam
            </h1>
            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.65] text-white/80">
              Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/a-staging/learn" className="bm-btn-white" style={css("padding: 14px 28px; font-weight: 600")}>
                Start Learning <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/a-staging/learn" className="bm-btn-glass" style={css("padding: 14px 28px; font-weight: 600")}>
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. LEARN / CONVERT / BUY ============ */}
      <section style={css("background: #faf9f5; padding: 24px 0")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="bm-grid-explore" style={css("background: #e3dacc; border-radius: 16px; padding: 28px 20px")}>
            <div style={css("display: flex; flex-direction: column; justify-content: space-between; padding-right: 24px")}>
              <div>
                <h2 style={css("font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 400; color: #2a2018; margin: 0 0 16px; line-height: 1.15")}>Explore your path</h2>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.6; margin: 0")}>
                  Discover Islam through courses, articles, and guides. Whether you&apos;re curious, converting, or deepening your practice — find resources made for you.
                </p>
              </div>
              <div style={css("margin-top: 24px")}>
                <Link href="/a-staging/learn" className="bm-btn-outline" style={css("padding: 10px 24px")}>See all resources</Link>
              </div>
            </div>

            {featureBoxes.map(({ label, desc, href, Icon }) => (
              <Link key={label} href={href} className="bm-card-hover" style={css("background: #f0eee6; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none")}>
                <div>
                  <Icon className="h-6 w-6" style={css("color: #2a2018; margin-bottom: 14px")} />
                  <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #6a6258; margin: 0 0 8px; letter-spacing: 0.02em")}>{label}</p>
                  <p style={css("font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2")}>{desc}</p>
                </div>
                <div style={css("margin-top: 24px; text-align: right")}>
                  <ArrowRight className="h-5 w-5" style={css("color: #2a2018")} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. FEATURED ARTICLES ============ */}
      <section className="bm-section-padding" style={css("background: #f4f1eb")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px")}>
            <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0")}>Latest Resources</h2>
            <Link href="/a-staging/learn" className="bm-view-all" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px")}>
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="bm-grid-3">
            {articles.map((article) => (
              <Link key={article.title} href={article.href} style={css("text-decoration: none; display: block")} className="bm-title-underline-parent">
                <div style={css("aspect-ratio: 4/3; background: #e2dcd2; border-radius: 12px; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 16px")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.img} alt={article.title} style={css("width: 100%; height: 100%; object-fit: cover")} />
                </div>
                <h3 className="bm-title-underline" style={css("font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0 0 8px; line-height: 1.3")}>{article.title}</h3>
                <div style={css("display: flex; align-items: center; gap: 12px")}>
                  <span style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #2a2018")}>{article.category}</span>
                  <span style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; color: #a09888")}>{article.time}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={css("text-align: center; margin-top: 32px")}>
            <Link href="/a-staging/learn/recommended-resources" className="bm-btn-outline" style={css("padding: 10px 24px")}>
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
            <Link href="/a-staging/shop" className="bm-btn-outline" style={css("padding: 10px 24px")}>
              See All Store Items <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 5. FAQ ============ */}
      <section className="bm-section-padding" style={css("background: #f4f1eb")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("max-width: 800px")}>
            <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px")}>
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

            <div style={css("margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px")}>
              <Link href="/a-staging/learn/ask-a-question" className="bm-btn-outline" style={css("padding: 10px 24px")}>Ask a Question</Link>
              <Link href="/a-staging/convert" className="bm-btn-dark" style={css("padding: 10px 24px")}>Ready to Convert</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
