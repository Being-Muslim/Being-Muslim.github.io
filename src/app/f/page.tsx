"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, ShoppingBag, ChevronDown } from "lucide-react";
import { css } from "@/lib/css";

const featureBoxes = [
  { label: "Learn", desc: "Explore articles, guides, and resources on Islamic faith and practice", href: "/f/learn", Icon: BookOpen, color: "maroon" as const },
  { label: "Convert", desc: "Take the next step on your journey with guidance and support", href: "/f/convert", Icon: Compass, color: "green" as const },
  { label: "Buy", desc: "Books, prayer cards, and resources for your journey", href: "/f/shop", Icon: ShoppingBag, color: "deep" as const },
];

const articles = [
  { title: "Brief Overview of Islam", category: "Foundations", time: "10 min read", href: "/f/learn/brief-overview-of-islam", img: "https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png" },
  { title: "A Beginner's Guide to Being a Muslim", category: "New Muslims", time: "12 min read", href: "/f/learn/beginners-guide", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" },
  { title: "Islam and Other Faiths", category: "Belief", time: "8 min read", href: "/f/learn/islam-and-other-faiths", img: "https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg" },
];

const articleColors = ["gold", "maroon", "green"] as const;

const products = [
  { title: "Being Muslim: A Practical Guide", price: "$14.95", badge: "Bestseller", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg", href: "/f/shop/book" },
  { title: "The Complete Boxed Set", price: "$85.00", badge: "Most Popular", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg", href: "/f/shop/boxed-set" },
  { title: "Prayer Reference Cards", price: "$37.50", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg", href: "/f/shop/prayer-cards" },
  { title: "Digital Edition (eBook)", price: "$9.00", badge: "", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png", href: "/f/shop/ebook" },
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

export default function ConceptFHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq((cur) => (cur === i ? null : i));

  return (
    <>
      {/* ============ 1. HERO — Dark rounded panel ============ */}
      <section style={css("padding: 96px 0 24px")}>
        <div className="bm-container">
          <div className="bm-hero-panel">
            {/* Organic blob accents */}
            <div className="bm-blob" style={css("width: 280px; height: 280px; background: rgba(139,46,54,0.35); top: -90px; right: -60px")} />
            <div className="bm-blob" style={css("width: 220px; height: 220px; background: rgba(45,106,79,0.30); bottom: -90px; left: 40%")} />
            {/* Gold dotted-circle motifs */}
            <div className="bm-dots" style={css("top: 24px; right: 30px")} />
            <div className="bm-dots-arc" style={css("bottom: 16px; left: 16px; opacity: 0.8")} />

            {/* Left: text */}
            <div style={css("position: relative; z-index: 1")}>
              <h1 className="bm-lower" style={css("font-family: 'Inter', sans-serif; font-size: clamp(38px, 5.5vw, 66px); font-weight: 800; line-height: 1.04; letter-spacing: -0.02em; color: #ffffff; margin: 0 0 22px")}>
                Navigating the <span style={css("color: #c4a35a")}>Path</span> to Islam
              </h1>

              <p style={css("font-family: 'Inter', sans-serif; font-size: 17px; line-height: 1.65; color: rgba(255,255,255,0.82); max-width: 480px; margin: 0 0 32px")}>
                Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
              </p>

              <div style={css("display: flex; flex-wrap: wrap; align-items: center; gap: 14px")}>
                <Link href="/f/learn" className="bm-btn-gold">
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/f/learn" className="bm-btn-glass">
                  Explore Resources
                </Link>
              </div>
            </div>

            {/* Right: photo */}
            <div style={css("position: relative; z-index: 1")}>
              <div className="bm-hero-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hero-bg.jpg" alt="Islamic journey" style={css("width: 100%; height: auto; display: block; aspect-ratio: 4/3; object-fit: cover")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. EXPLORE YOUR PATH — color-block cards ============ */}
      <section className="bm-section-padding">
        <div className="bm-container">
          <div style={css("max-width: 640px; margin: 0 0 36px")}>
            <h2 className="bm-lower" style={css("font-family: 'Inter', sans-serif; font-size: clamp(30px, 4vw, 44px); font-weight: 800; color: #2d3748; margin: 0 0 14px; line-height: 1.1; letter-spacing: -0.02em")}>explore your path</h2>
            <p style={css("font-family: 'Inter', sans-serif; font-size: 16px; color: #666; line-height: 1.6; margin: 0")}>
              Discover Islam through courses, articles, and guides. Whether you&apos;re curious, converting, or deepening your practice — find resources made for you.
            </p>
          </div>

          <div className="bm-grid-3">
            {featureBoxes.map(({ label, desc, href, Icon, color }) => (
              <Link key={label} href={href} className={`bm-block-card bm-block-${color}`}>
                <div style={css("position: relative; z-index: 1")}>
                  <Icon className="h-8 w-8" style={css("margin-bottom: 18px")} />
                  <p className="bm-lower" style={css("font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 800; margin: 0 0 10px; line-height: 1.1; letter-spacing: -0.01em")}>{label}</p>
                  <p style={css("font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.5; margin: 0; opacity: 0.92")}>{desc}</p>
                </div>
                <div style={css("position: relative; z-index: 1; margin-top: 24px; display: inline-flex; align-items: center; gap: 6px; font-weight: 600; font-size: 14px")}>
                  Get started <ArrowRight className="h-4 w-4 bm-arrow-icon" />
                </div>
              </Link>
            ))}
          </div>

          <div style={css("margin-top: 28px")}>
            <Link href="/f/learn" className="bm-btn-outline">See all resources <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* ============ 3. FEATURED ARTICLES — color-block cards ============ */}
      <section className="bm-section-padding">
        <div className="bm-container">
          <div style={css("display: flex; justify-content: space-between; align-items: end; flex-wrap: wrap; gap: 16px; margin-bottom: 32px")}>
            <h2 className="bm-lower" style={css("font-family: 'Inter', sans-serif; font-size: clamp(28px, 3.8vw, 40px); line-height: 1.1; color: #2d3748; font-weight: 800; margin: 0; letter-spacing: -0.02em")}>latest resources</h2>
            <Link href="/f/learn" className="bm-view-all" style={css("font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: #2d3748; text-decoration: none; display: inline-flex; align-items: center; gap: 4px")}>
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bm-grid-3">
            {articles.map((article, i) => (
              <Link key={article.title} href={article.href} className={`bm-block-card bm-block-${articleColors[i]} bm-title-underline-parent`} style={css("min-height: 320px; padding: 0; justify-content: flex-end")}>
                <div style={css("position: absolute; inset: 0; z-index: 0")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.img} alt={article.title} style={css("width: 100%; height: 100%; object-fit: cover; display: block; opacity: 0.4")} />
                </div>
                <div style={css("position: relative; z-index: 1; padding: 28px")}>
                  <div style={css("display: flex; align-items: center; gap: 10px; margin-bottom: 10px")}>
                    <span style={css("font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700; color: #fff; background: rgba(0,0,0,0.25); padding: 4px 12px; border-radius: 999px")}>{article.category}</span>
                    <span style={css("font-family: 'Inter', sans-serif; font-size: 12px; color: rgba(255,255,255,0.9)")}>{article.time}</span>
                  </div>
                  <h3 className="bm-title-underline" style={css("font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 700; color: #fff; margin: 0; line-height: 1.2")}>{article.title}</h3>
                  <span style={css("display: inline-flex; align-items: center; gap: 6px; margin-top: 14px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: #fff")}>
                    Read article <ArrowRight className="h-4 w-4 bm-arrow-icon" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={css("text-align: center; margin-top: 32px")}>
            <Link href="/f/learn" className="bm-btn-outline">
              Additional Resources <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 4. PRODUCTS — warm rounded carousel ============ */}
      <section className="bm-section-padding">
        <div className="bm-container">
          <h2 className="bm-lower" style={css("font-family: 'Inter', sans-serif; font-size: clamp(28px, 3.8vw, 40px); line-height: 1.1; color: #2d3748; font-weight: 800; margin: 0 0 32px; text-align: center; letter-spacing: -0.02em")}>
            everything you need to begin
          </h2>

          <div className="bm-carousel-wrapper">
            <div style={css("display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 16px; -webkit-overflow-scrolling: touch")}>
              {products.map((product) => (
                <Link key={product.title} href={product.href} className="bm-product-card bm-title-underline-parent" style={css("flex: 0 0 280px; scroll-snap-align: start; text-decoration: none; display: block")}>
                  <div style={css("aspect-ratio: 1; background: #fff; border-radius: 20px; overflow: hidden; margin-bottom: 16px; position: relative; box-shadow: 0 6px 20px rgba(29,43,41,0.08)")}>
                    {product.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={product.img} alt={product.title} className="product-img" style={css("width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 500ms")} />
                    ) : (
                      <div style={css("width: 100%; height: 100%; display: flex; align-items: center; justify-content: center")}>
                        <BookOpen className="h-10 w-10" style={css("color: #c8c0b4")} />
                      </div>
                    )}
                    {product.badge && (
                      <span style={css("position: absolute; top: 12px; left: 12px; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; color: #2d3748; background: #c4a35a; padding: 4px 12px; border-radius: 999px; z-index: 2")}>{product.badge}</span>
                    )}
                  </div>
                  <h3 className="bm-title-underline" style={css("font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; color: #2d3748; margin: 0 0 6px; line-height: 1.3")}>{product.title}</h3>
                  <span style={css("font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; color: #8b2e36")}>{product.price}</span>
                </Link>
              ))}
            </div>
          </div>

          <div style={css("text-align: center; margin-top: 32px")}>
            <Link href="/f/shop" className="bm-btn-outline">
              See All Store Items <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 5. FAQ — soft white cards on cream ============ */}
      <section className="bm-section-padding">
        <div className="bm-container">
          <div style={css("max-width: 820px; margin: 0 auto")}>
            <h2 className="bm-lower" style={css("font-family: 'Inter', sans-serif; font-size: clamp(28px, 3.8vw, 40px); line-height: 1.1; color: #2d3748; font-weight: 800; margin: 0 0 32px; text-align: center; letter-spacing: -0.02em")}>
              frequently asked questions
            </h2>

            {faqs.map((faq, i) => (
              <div key={i} className="bm-faq-item">
                <button
                  onClick={() => toggleFaq(i)}
                  style={css("width: 100%; text-align: left; padding: 20px 24px; border: none; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px")}
                >
                  <span style={css("font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; color: #2d3748; line-height: 1.4")}>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 mt-0.5 bm-faq-chevron ${openFaq === i ? "open" : ""}`} style={css("color: #8b2e36")} />
                </button>
                <div className={`bm-faq-answer ${openFaq === i ? "open" : ""}`}>
                  <p style={css("font-family: 'Inter', sans-serif; font-size: 15px; color: #666; line-height: 1.65; margin: 0; padding: 0 24px 22px")}>{faq.a}</p>
                </div>
              </div>
            ))}

            <div style={css("margin-top: 28px; display: flex; flex-wrap: wrap; justify-content: center; gap: 14px")}>
              <Link href="/f/learn/ask-a-question" className="bm-btn-outline">Ask a Question</Link>
              <Link href="/f/convert" className="bm-btn-dark">Ready to Convert <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
