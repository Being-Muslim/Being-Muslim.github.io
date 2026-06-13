import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Star, Heart, Globe } from "lucide-react";
import { css } from "@/lib/css";

const languageLinks = [
  { badge: "English", href: "/b/shop/book", current: true },
  { badge: "Español", href: "/b/shop/book/spanish", current: false },
  { badge: "Português", href: "/b/shop/book/portuguese", current: false },
];

export const metadata: Metadata = {
  title: "Being Muslim: A Practical Guide — Being Muslim Shop",
  description:
    "The essential guide for new Muslims by Dr. Asad Tarsin. Clear, warm, and comprehensive — covering beliefs, prayer, fasting, and daily Muslim life.",
};

const relatedProducts = [
  { title: "The Complete Boxed Set", price: "$85.00", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg", href: "/b/shop/boxed-set" },
  { title: "Prayer Reference Cards", price: "$37.50", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg", href: "/b/shop/prayer-cards" },
  { title: "Digital Edition (eBook)", price: "$9.00", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png", href: "/b/shop/ebook" },
];

export default function ConceptBStagingShopBook() {
  return (
    <>
      {/* ============ BREADCRUMB ============ */}
      <section style={css("background: #f4f1eb; padding-top: 110px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10" style={css("padding-top: 16px; padding-bottom: 16px")}>
          <nav style={css("display: flex; align-items: center; gap: 8px; font-family: 'DM Sans', sans-serif; font-size: 14px")}>
            <Link href="/b/shop" style={css("color: #8a7e70; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: color 0.2s")} className="bm-view-all">
              <ArrowLeft style={css("width: 16px; height: 16px")} />
              Back to Products
            </Link>
          </nav>
        </div>
      </section>

      {/* ============ PRODUCT DETAIL ============ */}
      <section style={css("background: #f4f1eb; padding: 0 0 64px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Language switcher row (doc §4.1.1) */}
          <div style={css("display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 24px")}>
            <span style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 6px; margin-right: 4px")}>
              <Globe style={css("width: 14px; height: 14px")} />
              Languages
            </span>
            {languageLinks.map((lang) => (
              <Link
                key={lang.href}
                href={lang.href}
                className="bm-btn-outline"
                style={css(
                  `padding: 6px 16px; font-size: 13px; ${lang.current ? "background: #2a2018; color: #fff; border-color: #2a2018" : ""}`,
                )}
              >
                {lang.badge}
              </Link>
            ))}
            <Link href="/b/shop/languages" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; margin-left: 4px")} className="bm-view-all">
              All languages
            </Link>
          </div>

          <div style={css("display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start")} className="md:!grid-cols-2 md:!gap-12">
            {/* Image */}
            <div style={css("background: #e2dcd2; border-radius: 12px; overflow: hidden; aspect-ratio: 3/4")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
                alt="Being Muslim: A Practical Guide"
                style={css("width: 100%; height: 100%; object-fit: cover; display: block")}
              />
            </div>

            {/* Details */}
            <div>
              <span style={css("font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2a2018; background: rgba(200,184,160,0.25); padding: 4px 12px; border-radius: 999px; display: inline-block; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px")}>
                Bestseller
              </span>

              <h1 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(28px, 4vw, 36px); font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.15")}>
                Being Muslim: A Practical Guide
              </h1>

              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; margin: 0 0 16px")}>By Dr. Asad Tarsin</p>

              {/* Rating */}
              <div style={css("display: flex; align-items: center; gap: 6px; margin-bottom: 16px")}>
                <div style={css("display: flex; gap: 2px")}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} style={idx < 5 ? css("width: 14px; height: 14px; fill: #d4a843; color: #d4a843") : css("width: 14px; height: 14px; color: #d8d2c8")} />
                  ))}
                </div>
                <span style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70")}>4.9 (127 reviews)</span>
              </div>

              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 28px; font-weight: 600; color: #2a2018; margin: 0 0 24px")}>
                $14.95
              </p>

              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.7; margin: 0 0 24px")}>
                The essential guide for new Muslims and anyone seeking a clear, warm, and comprehensive introduction to Islam. Written by acclaimed Islamic educator Dr. Asad Tarsin, this beautifully designed book covers the core beliefs and practices of Islam — from the five pillars and daily prayer to fasting, charity, and building a meaningful relationship with God. Whether you are a new convert, someone returning to the faith, or simply curious, this book meets you where you are.
              </p>

              <ul style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #5a5248; line-height: 2; margin: 0 0 32px; padding-left: 20px")}>
                <li>Full-color illustrations throughout</li>
                <li>Step-by-step prayer guide</li>
                <li>Covers the five pillars in depth</li>
                <li>Written for new Muslims and reconnectors</li>
                <li>Available in multiple languages</li>
              </ul>

              <div style={css("display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px")}>
                <button className="bm-btn-dark" style={css("padding: 14px 32px; font-size: 15px")}>
                  <ShoppingCart style={css("width: 16px; height: 16px")} />
                  Add to Cart
                </button>
                <button className="bm-btn-outline" style={css("padding: 14px 32px; font-size: 15px")}>
                  Buy Now
                </button>
              </div>

              <div style={css("border-top: 1px solid #d8d2c8; padding-top: 20px; display: flex; flex-wrap: wrap; gap: 24px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70")}>
                <span>Free shipping over $50</span>
                <span>30-day returns</span>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED PRODUCTS ============ */}
      <section style={css("background: #faf9f5; padding: 64px 0")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 style={css("font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #2a2018; margin: 0 0 32px")}>
            You might also like
          </h2>
          <div style={css("display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px")} className="max-md:!grid-cols-1 max-lg:!grid-cols-2">
            {relatedProducts.map((product) => (
              <Link key={product.href} href={product.href} style={css("text-decoration: none; display: block")} className="bm-title-underline-parent group">
                <div className="bm-card-hover" style={css("background: #fff; border-radius: 12px; overflow: hidden; height: 100%; display: flex; flex-direction: column")}>
                  <div style={css("aspect-ratio: 4/3; background: #e2dcd2; position: relative; overflow: hidden")}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.img} alt={product.title} className="transition-transform duration-500 group-hover:scale-105" style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
                  </div>
                  <div style={css("padding: 20px; flex: 1; display: flex; flex-direction: column")}>
                    <h3 className="bm-title-underline" style={css("font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 8px; line-height: 1.3")}>
                      {product.title}
                    </h3>
                    <span style={css("font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 600; color: #2a2018; margin-top: auto")}>
                      {product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SPONSOR CALLOUT BANNER ============ */}
      <section style={css("background: #2a2018; padding: 64px 0")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("display: flex; align-items: center; gap: 48px; flex-wrap: wrap; justify-content: center")}>
            <div style={css("width: 80px; height: 80px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0")}>
              <Heart style={css("width: 40px; height: 40px; color: #c8b8a0")} />
            </div>
            <div style={css("flex: 1; min-width: 280px")}>
              <h2 style={css("font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.2")}>
                Sponsor this for a new Muslim
              </h2>
              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0")}>
                Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands — a gift that transforms lives.
              </p>
            </div>
            <Link href="/b/support" className="bm-btn-white" style={css("flex-shrink: 0")}>
              Sponsor Now <Heart style={css("width: 14px; height: 14px")} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
