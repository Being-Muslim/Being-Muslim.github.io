import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Star, Heart } from "lucide-react";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "The Complete Boxed Set — Being Muslim Shop",
  description:
    "Everything you need in one beautiful package — the Being Muslim book, prayer cards, and supplementary materials.",
};

const relatedProducts = [
  { title: "Being Muslim: A Practical Guide", price: "$14.95", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg", href: "/b-staging/shop/book" },
  { title: "Prayer Reference Cards", price: "$37.50", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg", href: "/b-staging/shop/prayer-cards" },
  { title: "Digital Edition (eBook)", price: "$9.00", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png", href: "/b-staging/shop/ebook" },
];

export default function ConceptBStagingShopBoxedSet() {
  return (
    <>
      {/* ============ BREADCRUMB ============ */}
      <section style={css("background: #f4f1eb; padding-top: 110px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10" style={css("padding-top: 16px; padding-bottom: 16px")}>
          <nav style={css("display: flex; align-items: center; gap: 8px; font-family: 'DM Sans', sans-serif; font-size: 14px")}>
            <Link href="/b-staging/shop" style={css("color: #8a7e70; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: color 0.2s")} className="bm-view-all">
              <ArrowLeft style={css("width: 16px; height: 16px")} />
              Back to Shop
            </Link>
          </nav>
        </div>
      </section>

      {/* ============ PRODUCT DETAIL ============ */}
      <section style={css("background: #f4f1eb; padding: 0 0 64px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start")} className="md:!grid-cols-2 md:!gap-12">
            {/* Image */}
            <div style={css("background: #e2dcd2; border-radius: 12px; overflow: hidden; aspect-ratio: 3/4")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg"
                alt="The Complete Boxed Set"
                style={css("width: 100%; height: 100%; object-fit: cover; display: block")}
              />
            </div>

            {/* Details */}
            <div>
              <span style={css("font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2a2018; background: rgba(200,184,160,0.25); padding: 4px 12px; border-radius: 999px; display: inline-block; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px")}>
                Most Popular
              </span>

              <h1 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(28px, 4vw, 36px); font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.15")}>
                The Complete Boxed Set
              </h1>

              {/* Rating */}
              <div style={css("display: flex; align-items: center; gap: 6px; margin-bottom: 16px")}>
                <div style={css("display: flex; gap: 2px")}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} style={idx < 5 ? css("width: 14px; height: 14px; fill: #d4a843; color: #d4a843") : css("width: 14px; height: 14px; color: #d8d2c8")} />
                  ))}
                </div>
                <span style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70")}>5.0 (89 reviews)</span>
              </div>

              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 28px; font-weight: 600; color: #2a2018; margin: 0 0 24px")}>
                $85.00
              </p>

              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.7; margin: 0 0 24px")}>
                The ultimate Being Muslim collection — everything a new Muslim needs in one beautifully packaged set. Includes the bestselling Being Muslim book, the complete set of prayer reference cards, a Ramadan guide, a daily dhikr (remembrance) booklet, and supplementary materials covering common questions and practical daily guidance. This boxed set makes the perfect gift for someone beginning their Islamic journey.
              </p>

              <ul style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #5a5248; line-height: 2; margin: 0 0 32px; padding-left: 20px")}>
                <li>Being Muslim: A Practical Guide (book)</li>
                <li>Complete Prayer Reference Cards set</li>
                <li>Ramadan guide and daily dhikr booklet</li>
                <li>Supplementary Q&amp;A materials</li>
                <li>Premium gift-quality packaging</li>
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
            <Link href="/b-staging/support" className="bm-btn-white" style={css("flex-shrink: 0")}>
              Sponsor Now <Heart style={css("width: 14px; height: 14px")} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
