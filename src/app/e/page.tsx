"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, ShoppingBag, ChevronDown, Plus } from "lucide-react";
import { css } from "@/lib/css";

const featureBoxes = [
  { label: "Learn", desc: "Explore articles, guides, and resources on Islamic faith and practice", href: "/e/learn", Icon: BookOpen, reveal: "bm-reveal-up", stagger: "bm-stagger-2" },
  { label: "Convert", desc: "Take the next step on your journey with guidance and support", href: "/e/convert", Icon: Compass, reveal: "bm-reveal-up", stagger: "bm-stagger-3" },
  { label: "Buy", desc: "Books, prayer cards, and resources for your journey", href: "/e/shop", Icon: ShoppingBag, reveal: "bm-reveal-up", stagger: "bm-stagger-4" },
];

const articles = [
  { title: "Brief Overview of Islam", category: "Foundations", time: "10 min read", href: "/e/learn/brief-overview-of-islam", img: "https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png", reveal: "bm-reveal-left" },
  { title: "A Beginner's Guide to Being a Muslim", category: "New Muslims", time: "12 min read", href: "/e/learn/beginners-guide", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg", reveal: "bm-reveal-up" },
  { title: "Islam and Other Faiths", category: "Belief", time: "8 min read", href: "/e/learn/islam-and-other-faiths", img: "https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg", reveal: "bm-reveal-right" },
];

const products = [
  { title: "Being Muslim: A Practical Guide", price: "$14.95", badge: "Bestseller", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg", href: "/e/shop/book" },
  { title: "The Complete Boxed Set", price: "$85.00", badge: "Most Popular", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg", href: "/e/shop/boxed-set" },
  { title: "Prayer Reference Cards", price: "$37.50", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg", href: "/e/shop/prayer-cards" },
  { title: "Digital Edition (eBook)", price: "$9.00", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png", href: "/e/shop/ebook" },
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

export default function ConceptEHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq((cur) => (cur === i ? null : i));

  // Section reveal: add the visible class once each .bm-reveal scrolls into view.
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("bm-reveal-visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".bm-reveal").forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="bm-hero">
        <div className="bm-hero-frame">
          <div className="bm-hero-art" aria-hidden="true" />

          <div className="bm-hero-content">
            <p className="bm-eyebrow bm-eyebrow-light">Being Muslim — A Guide for New Muslims</p>
            <h1 style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 400; letter-spacing: -0.02em; line-height: 1.02; color: #fff; margin: 18px 0 0; font-size: clamp(40px, 7vw, 80px)")}>
              Navigating the Path to Islam
            </h1>
            <p style={css("margin: 24px auto 0; max-width: 560px; font-size: 18px; line-height: 1.6; color: rgba(255,255,255,0.78)")}>
              Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/e/learn" className="bm-btn-white">
                Start Learning <ArrowRight className="h-4 w-4 bm-arrow-slide" strokeWidth={2} />
              </Link>
              <Link href="/e/learn" className="bm-btn-glass">
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. LEARN / CONVERT / BUY ============ */}
      <section className="bm-section-padding bm-section-flow">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="bm-reveal bm-reveal-up" style={css("text-align: center; max-width: 680px; margin: 0 auto 48px")}>
            <p className="bm-eyebrow">Explore your path</p>
            <h2 style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 400; letter-spacing: -0.02em; font-size: clamp(30px, 4.5vw, 48px); color: #2b2256; margin: 14px 0 16px; line-height: 1.05")}>
              Three ways to begin
            </h2>
            <p style={css("font-size: 17px; color: #5b5470; line-height: 1.6; margin: 0")}>
              Discover Islam through courses, articles, and guides. Whether you&apos;re curious, converting, or deepening your practice — find resources made for you.
            </p>
          </div>

          <div className="bm-grid-explore">
            {featureBoxes.map(({ label, desc, href, Icon, reveal, stagger }) => (
              <Link key={label} href={href} className={`bm-cell bm-card-hover bm-title-underline-parent bm-reveal ${reveal} ${stagger}`} style={css("padding: 34px 30px 30px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none")}>
                <div>
                  <div className="bm-icon-chip" style={css("margin-bottom: 22px")}>
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="bm-title-underline" style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 22px; color: #2b2256; margin: 0 0 10px; line-height: 1.2")}>{label}</h3>
                  <p style={css("font-size: 16px; color: #5b5470; line-height: 1.55; margin: 0")}>{desc}</p>
                </div>
                <div style={css("margin-top: 26px; display: inline-flex; align-items: center; gap: 8px; color: #6c5ce7; font-weight: 600; font-size: 15px")}>
                  Get started <ArrowRight className="h-4 w-4 bm-arrow-slide" strokeWidth={2} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. FEATURED ARTICLES ============ */}
      <section className="bm-section-padding bm-section-flow">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div style={css("display: flex; justify-content: space-between; align-items: end; flex-wrap: wrap; gap: 16px; margin-bottom: 40px")}>
            <div className="bm-reveal bm-reveal-up">
              <p className="bm-eyebrow">Reading</p>
              <h2 style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 400; letter-spacing: -0.02em; font-size: clamp(30px, 4.5vw, 48px); line-height: 1.02; color: #2b2256; margin: 14px 0 0")}>Latest Resources</h2>
            </div>
            <Link href="/e/learn" className="bm-view-all bm-meta" style={css("text-decoration: none; display: inline-flex; align-items: center; gap: 8px; color: #6c5ce7")}>
              View all <ArrowRight className="h-4 w-4 bm-arrow-slide" strokeWidth={2} />
            </Link>
          </div>

          <div className="bm-grid-3">
            {articles.map((article) => (
              <Link key={article.title} href={article.href} style={css("text-decoration: none; display: block; padding: 16px; overflow: hidden")} className={`bm-cell bm-title-underline-parent bm-reveal ${article.reveal}`}>
                <div style={css("aspect-ratio: 4/3; background: #efecff; overflow: hidden; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.img} alt={article.title} className="bm-frame-img" style={css("width: 100%; height: 100%; object-fit: cover")} />
                </div>
                <div style={css("padding: 0 6px 6px")}>
                  <div style={css("display: flex; align-items: center; gap: 12px; margin-bottom: 10px")}>
                    <span className="bm-meta" style={css("color: #6c5ce7")}>{article.category}</span>
                    <span style={css("font-size: 13px; color: #9a93b3")}>{article.time}</span>
                  </div>
                  <h3 className="bm-title-underline" style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 20px; color: #2b2256; margin: 0; line-height: 1.25")}>{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div style={css("text-align: center; margin-top: 40px")}>
            <Link href="/e/learn" className="bm-btn-outline">
              Additional Resources <ArrowRight className="h-4 w-4 bm-arrow-slide" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 4. PRODUCTS (carousel) ============ */}
      <section className="bm-section-padding bm-section-flow">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="bm-reveal bm-reveal-up" style={css("text-align: center; margin-bottom: 40px")}>
            <p className="bm-eyebrow">The Store</p>
            <h2 style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 400; letter-spacing: -0.02em; font-size: clamp(30px, 4.5vw, 48px); line-height: 1.02; color: #2b2256; margin: 14px 0 0")}>
              Everything you need to begin
            </h2>
          </div>

          <div className="bm-reveal bm-reveal-right" style={css("display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; padding: 6px 2px 12px")}>
            {products.map((product) => (
              <Link key={product.title} href={product.href} style={css("flex: 0 0 270px; scroll-snap-align: start; text-decoration: none; display: block; padding: 16px")} className="bm-cell bm-title-underline-parent group">
                <div style={css("aspect-ratio: 1; background: #efecff; overflow: hidden; border-radius: 16px; margin-bottom: 16px; position: relative")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.img} alt={product.title} className="bm-frame-img" style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
                  {product.badge && (
                    <span style={css("position: absolute; top: 12px; left: 12px; font-size: 12px; font-weight: 600; color: #fff; background: #6c5ce7; padding: 5px 12px; border-radius: 999px; z-index: 2")}>{product.badge}</span>
                  )}
                </div>
                <div style={css("padding: 0 6px 6px")}>
                  <h3 className="bm-title-underline" style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 17px; color: #2b2256; margin: 0 0 8px; line-height: 1.3")}>{product.title}</h3>
                  <span style={css("font-size: 16px; font-weight: 600; color: #6c5ce7")}>{product.price}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={css("text-align: center; margin-top: 40px")}>
            <Link href="/e/shop" className="bm-btn-outline">
              See All Store Items <ArrowRight className="h-4 w-4 bm-arrow-slide" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 5. FAQ ============ */}
      <section className="bm-section-padding bm-section-flow">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div style={css("max-width: 860px; margin: 0 auto")}>
            <div className="bm-reveal bm-reveal-left" style={css("text-align: center; margin-bottom: 40px")}>
              <p className="bm-eyebrow">Questions</p>
              <h2 style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 400; letter-spacing: -0.02em; font-size: clamp(30px, 4.5vw, 48px); line-height: 1.02; color: #2b2256; margin: 14px 0 0")}>
                Frequently Asked Questions
              </h2>
            </div>

            {faqs.map((faq, i) => (
              <div key={i} className="bm-faq-item bm-reveal bm-reveal-up" style={css(`transition-delay: ${Math.min(i * 0.04, 0.24)}s`)}>
                <button
                  onClick={() => toggleFaq(i)}
                  style={css("width: 100%; text-align: left; padding: 22px 26px; border: none; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 18px")}
                >
                  <span style={css("font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; font-size: 17px; color: #2b2256; line-height: 1.4")}>{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 transition-transform duration-200 rotate-180" strokeWidth={2} style={css("color: #6c5ce7")} />
                  ) : (
                    <Plus className="h-5 w-5 flex-shrink-0" strokeWidth={2} style={css("color: #6c5ce7")} />
                  )}
                </button>
                <div className={`bm-faq-answer ${openFaq === i ? "bm-faq-open" : ""}`}>
                  <p style={css("font-size: 16px; color: #5b5470; line-height: 1.65; margin: 0; padding: 0 26px 24px")}>{faq.a}</p>
                </div>
              </div>
            ))}

            <div style={css("margin-top: 34px; display: flex; flex-wrap: wrap; justify-content: center; gap: 14px")}>
              <Link href="/e/learn/ask-a-question" className="bm-btn-outline">Ask a Question</Link>
              <Link href="/e/convert" className="bm-btn-dark">Ready to Convert</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
