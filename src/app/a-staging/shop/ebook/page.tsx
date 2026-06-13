import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { css } from "@/lib/css";

export const metadata = {
  title: "Digital Edition (eBook) — Being Muslim Shop",
  description:
    "The complete Being Muslim guide in digital format — read on any device, anywhere.",
};

const related = [
  { title: "Being Muslim: A Practical Guide", price: "$14.95", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg", href: "/a-staging/shop/book" },
  { title: "The Complete Boxed Set", price: "$85.00", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg", href: "/a-staging/shop/boxed-set" },
  { title: "Prayer Reference Cards", price: "$37.50", img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg", href: "/a-staging/shop/prayer-cards" },
];

export default function ConceptAStagingShopEbook() {
  return (
    <>
      {/* Breadcrumb */}
      <section style={css("background: #e9e3da; padding-top: 72px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-4">
          <Link
            href="/a-staging/shop"
            style={css("color: #8a7e70; font-family: 'DM Sans', sans-serif")}
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#2a2018]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
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
                src="https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png"
                alt="Digital Edition (eBook)"
                style={css("width: 100%; height: 100%; object-fit: cover; display: block")}
              />
            </div>

            {/* Details */}
            <div style={css("font-family: 'DM Sans', sans-serif")}>
              <h1 style={css("font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.15")}>
                Digital Edition (eBook)
              </h1>

              <p style={css("font-family: 'Source Serif 4', serif; font-size: 32px; font-weight: 400; color: #2a2018; margin: 0 0 24px")}>
                $9.00
              </p>

              <p style={css("font-size: 15px; color: #5a5248; line-height: 1.7; margin: 0 0 24px")}>
                The complete Being Muslim: A Practical Guide in a convenient digital format. Read on your phone, tablet, or computer — perfect for learning on the go. The eBook includes the same beautifully formatted content as the print edition, with full-color illustrations, bookmarkable chapters, and a searchable index. Get instant access immediately after purchase.
              </p>

              <ul style={css("font-size: 14px; color: #5a5248; line-height: 2; margin: 0 0 32px; padding-left: 20px")}>
                <li>Instant digital delivery — start reading immediately</li>
                <li>Compatible with all major e-readers and devices</li>
                <li>Full-color illustrations preserved</li>
                <li>Searchable text and bookmarkable chapters</li>
                <li>Lifetime access — download as many times as you need</li>
              </ul>

              <div style={css("display: flex; gap: 12px; margin-bottom: 24px")}>
                <button className="bm-btn-dark" style={css("padding: 14px 32px; font-size: 15px")}>
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
                <button className="bm-btn-outline" style={css("padding: 14px 32px; font-size: 15px")}>
                  Buy Now
                </button>
              </div>

              <div style={css("border-top: 1px solid #d8d2c8; padding-top: 20px; display: flex; gap: 24px; font-size: 13px; color: #8a7e70")}>
                <span>Instant delivery</span>
                <span>All devices</span>
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
