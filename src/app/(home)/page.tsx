"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, ShoppingBag, ChevronDown } from "lucide-react";
import { css } from "@/lib/css";

const featureBoxes = [
  { label: "Learn", desc: "Explore articles, guides, and resources on Islamic faith and practice", href: "/learn", Icon: BookOpen },
  { label: "Convert", desc: "Take the next step on your journey with guidance and support", href: "/convert", Icon: Compass },
  { label: "Buy", desc: "Books, prayer cards, and resources for your journey", href: "/shop", Icon: ShoppingBag },
];

const articles = [
  { title: "Brief Overview of Islam", category: "Foundations", time: "10 min read", href: "/learn/brief-overview-of-islam", img: "https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png" },
  { title: "A Beginner's Guide to Being a Muslim", category: "New Muslims", time: "12 min read", href: "/learn/beginners-guide", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" },
  { title: "Islam and Other Faiths", category: "Belief", time: "8 min read", href: "/learn/islam-and-other-faiths", img: "https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg" },
];

const products = [
  { title: "Being Muslim: A Practical Guide", price: "$14.95", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg", href: "/shop/being-muslim-a-practical-guide-paperback/" },
  { title: "The Complete Boxed Set", price: "$85.00", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg", href: "/shop/the-boxed-set/" },
  { title: "Prayer Reference Cards", price: "$37.50", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg", href: "/shop/the-daily-prayer-pocket-reference-card-25-pack-1/" },
  { title: "Digital Edition (eBook)", price: "$9.00", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png", href: "/shop/being-muslim-a-practical-guide-ebook/" },
];

// Verbatim from Drive "Website: Conversion FAQs" (source of truth). Q5 is left
// out until Drive names its article ("TITLE HERE WITH LINK").
const faqs = [
  { q: "What is required to become a Muslim?", a: "The process itself is quite simple. You only have to believe in and declare the Testimony of Faith: “I bear witness that there is nothing worthy of worship except Allah (God) and that Muhammad is the messenger of Allah (God).” This declaration means that you affirm the truth of everything that the Prophet Muhammad ﷺ brought and taught, including the Quran. If you want to arrange for someone to officiate your declaration of faith, let us know!" },
  { q: "What should I learn about Islam before converting?", a: "If you properly understand what the absolute oneness of God without division or partner and the finality of Prophet Muhammad ﷺ mean, that is sufficient. However, it is also important to have a basic understanding of Islamic beliefs and how they may vary from other belief systems, as well a familiarity with the duties of each believer, such as the Five Pillars of Islamic practice." },
  { q: "My family is not supportive of my conversion. What do you advise?", a: "It can be challenging when family members are not supportive of your decision. Remember, this was the case with the first community of believers, as well. Try to be wise and use your best judgment, while also having a degree of compassion for how challenging it must be for your family to feel like their loved one is changing or choosing another path. When possible, try to have open and respectful conversations with them about your beliefs and reasons for converting, while resisting the temptation to preach to them too soon. Remember to seek support from the Muslim community and find strength in your faith." },
  { q: "My previous faith was very dear to me. If I am now a Muslim, do I have to reject it entirely?", a: "Islam teaches respect for all religions and holds that many of the world’s great religions were originally based in divine guidance through prophets, even if unknown to us. You do not need to reject all of the wisdom from your previous faith and can appreciate its positive aspects while embracing Islam as the perfect and ultimate criterion of truth to help you sift out any problematic aspects." },
  { q: "I know Islam to be true and revealed by God, but I feel like I can’t live up to its teachings. What should I do?", a: "Keep in mind that the Islamic conception of humanity acknowledges inherent imperfection and the continuous struggle for self-improvement. One should not be discouraged from beginning the journey out of a false spiritual perfectionism. God’s most central attributes are found in the opening of essentially every chapter in the Quran, In the name of God, the Compassionate, the Merciful. As long as we continuously seek forgiveness for our shortcomings and work to improve, we are promised to be met with divine mercy. At the same time, it is critical to surround yourself with good company who can provide guidance and encouragement." },
  { q: "Do I need to change my name now that I have become Muslim?", a: "No. Unless your name has a negative or inappropriate meaning, there is no imperative to change one’s name. You are free to keep your name although some may choose a new one with a positive meaning for various reasons, sometimes treating it as a second or unofficial name." },
];

export default function ConceptAHome() {
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
              <Link href="/learn" className="bm-btn-white" style={css("padding: 14px 28px; font-weight: 600")}>
                Start Learning <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/learn" className="bm-btn-glass" style={css("padding: 14px 28px; font-weight: 600")}>
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
                  Discover Islam through courses, articles, and guides. Whether you&apos;re curious, converting, or deepening your practice, find resources made for you.
                </p>
              </div>
              <div style={css("margin-top: 24px")}>
                <Link href="/learn" className="bm-btn-outline" style={css("padding: 10px 24px")}>See all resources</Link>
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
            <Link href="/learn" className="bm-view-all" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px")}>
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
            <Link href="/learn" className="bm-btn-outline" style={css("padding: 10px 24px")}>
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
            <Link href="/shop" className="bm-btn-outline" style={css("padding: 10px 24px")}>
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
              <Link href="/learn/ask-a-question" className="bm-btn-outline" style={css("padding: 10px 24px")}>Ask a Question</Link>
              <Link href="/convert" className="bm-btn-dark" style={css("padding: 10px 24px")}>Ready to Convert</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
