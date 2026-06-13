import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import { css } from "@/lib/css";

export const metadata = {
  title: "Ser Muçulmano: Um Guia Prático (Português) — Being Muslim Shop",
  description:
    "Portuguese (Português) edition of Being Muslim: A Practical Guide by Dr. Asad Tarsin — the essential guide for new Muslims.",
};

const related = [
  { title: "The Complete Boxed Set", price: "$85.00", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg", href: "/a-staging/shop/boxed-set" },
  { title: "Prayer Reference Cards", price: "$37.50", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg", href: "/a-staging/shop/prayer-cards" },
  { title: "Digital Edition (eBook)", price: "$9.00", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png", href: "/a-staging/shop/ebook" },
];

export default function ConceptAStagingShopBookPortuguese() {
  return (
    <>
      {/* Breadcrumb */}
      <section style={css("background: #e9e3da; padding-top: 72px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-4">
          <Link
            href="/a-staging/shop/book"
            style={css("color: #8a7e70; font-family: 'DM Sans', sans-serif")}
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#2a2018]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to the Book
          </Link>
        </div>
      </section>

      {/* Language banner */}
      <section style={css("background: #2a2018")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-3 flex items-center gap-3">
          <Globe className="h-4 w-4" style={css("color: #c4a97d")} />
          <span style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #f0ebe3; letter-spacing: 0.04em")}>
            You are viewing the <strong>Português</strong> (Portuguese) edition.{" "}
            <Link href="/a-staging/shop/languages" style={css("color: #c4a97d; text-decoration: underline")}>
              View all languages
            </Link>
          </span>
        </div>
      </section>

      {/* Product Detail */}
      <section style={css("background: #f0ebe3")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
          <div className="bm-grid-detail">
            {/* Image */}
            <div style={css("background: #e2dcd2; border-radius: 16px; overflow: hidden; aspect-ratio: 3/4")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
                alt="Ser Muçulmano: Um Guia Prático"
                style={css("width: 100%; height: 100%; object-fit: cover; display: block")}
              />
            </div>

            {/* Details */}
            <div style={css("font-family: 'DM Sans', sans-serif")}>
              <span
                style={css("background: rgba(196,169,125,0.2); color: #c4a97d")}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-4"
              >
                <Globe className="h-3.5 w-3.5" />
                Português
              </span>

              <h1 style={css("font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.15")}>
                Being Muslim: A Practical Guide
              </h1>

              <p style={css("font-size: 14px; color: #8a7e70; margin: 0 0 16px")}>By Dr. Asad Tarsin — Portuguese (Português) edition</p>

              {/* Not-yet-purchasable state in place of a price */}
              <p
                style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; color: #8b2e36; background: rgba(139, 46, 54, 0.08); border-radius: 8px; padding: 12px 16px; display: inline-block; margin: 0 0 24px")}
              >
                Not yet available for purchase online
              </p>

              <p style={css("font-size: 15px; color: #5a5248; line-height: 1.7; margin: 0 0 12px")}>
                The essential guide for new Muslims and anyone seeking a clear, warm, and comprehensive introduction to Islam. Written by acclaimed Islamic educator Dr. Asad Tarsin, this beautifully designed book covers the core beliefs and practices of Islam — from the five pillars and daily prayer to fasting, charity, and building a meaningful relationship with God. Whether you are a new convert, someone returning to the faith, or simply curious, this book meets you where you are.
              </p>

              <p style={css("font-size: 13px; color: #8a7e70; font-style: italic; line-height: 1.6; margin: 0 0 24px")}>
                A full description in Portuguese (Português) is forthcoming.
              </p>

              <ul style={css("font-size: 14px; color: #5a5248; line-height: 2; margin: 0 0 32px; padding-left: 20px")}>
                <li>Full-color illustrations throughout</li>
                <li>Step-by-step prayer guide</li>
                <li>Covers the five pillars in depth</li>
                <li>Written for new Muslims and reconnectors</li>
                <li>Portuguese (Português) language edition</li>
              </ul>

              <div style={css("margin-bottom: 24px")}>
                <Link href="/a-staging/contact" className="bm-btn-outline" style={css("padding: 14px 32px; font-size: 15px")}>
                  Contact us about this edition
                </Link>
              </div>

              <div style={css("border-top: 1px solid #d8d2c8; padding-top: 20px; display: flex; gap: 24px; font-size: 13px; color: #8a7e70")}>
                <span>Free shipping over $50</span>
                <span>30-day returns</span>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section style={css("background: #fff")} className="bm-section-padding">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 style={css("font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #2a2018; margin: 0 0 24px")}>
            You might also like
          </h2>
          <div className="bm-grid-3">
            {related.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                style={css("text-decoration: none")}
                className="bm-title-underline-parent group"
              >
                <div style={css("aspect-ratio: 1; background: #e2dcd2; border-radius: 12px; overflow: hidden; margin-bottom: 12px")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.img}
                    alt={product.title}
                    className="transition-transform duration-500 group-hover:scale-105"
                    style={css("width: 100%; height: 100%; object-fit: cover; display: block")}
                  />
                </div>
                <h3 className="bm-title-underline" style={css("font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 4px")}>
                  {product.title}
                </h3>
                <span style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018")}>
                  {product.price}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
