import Link from "next/link";
import { ArrowRight, BookOpen, Globe } from "lucide-react";
import { css } from "@/lib/css";

export const metadata = {
  title: "Products — Being Muslim",
  description:
    "Browse books, boxed sets, prayer cards, and digital resources to support your journey.",
};

const products = [
  {
    title: "Being Muslim: A Practical Guide",
    price: "$14.95",
    badge: "Bestseller",
    img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg",
    href: "/a-staging/shop/book",
    description:
      "The essential guide for new Muslims by Dr. Asad Tarsin — clear, warm, and beautifully designed.",
  },
  {
    title: "The Complete Boxed Set",
    price: "$85.00",
    badge: "Most Popular",
    img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg",
    href: "/a-staging/shop/boxed-set",
    description:
      "Everything you need in one beautiful package — the book, prayer cards, and supplementary materials.",
  },
  {
    title: "Prayer Reference Cards (25-Pack)",
    price: "$37.50",
    badge: "",
    img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg",
    href: "/a-staging/shop/prayer-cards",
    description:
      "Beautifully illustrated, step-by-step prayer cards you can keep beside your prayer mat.",
  },
  {
    title: "Digital Edition (eBook)",
    price: "$9.00",
    badge: "",
    img: "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png",
    href: "/a-staging/shop/ebook",
    description:
      "The complete Being Muslim guide in digital format — read on any device, anywhere.",
  },
];

export default function ConceptAStagingShop() {
  return (
    <>
      {/* Hero Section */}
      <section style={css("background-color: #2a2018")} className="pt-[72px]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p
              style={css("color: #c4a97d; font-family: 'DM Sans', sans-serif; letter-spacing: 0.08em")}
              className="text-sm font-medium uppercase mb-4"
            >
              &#9670; Resources &amp; Materials
            </p>
            <h1
              style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1]"
            >
              Products
            </h1>
            <p
              style={css("color: #f0ebe3; font-family: 'DM Sans', sans-serif")}
              className="mt-5 text-lg leading-relaxed opacity-70 max-w-lg mx-auto"
            >
              Beautifully crafted resources to support your journey — from bestselling books to prayer essentials.
            </p>
            <div className="mt-6">
              <Link
                href="/a-staging/shop/languages"
                className="inline-flex items-center gap-1.5"
                style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #c4a97d; text-decoration: none")}
              >
                <Globe className="h-4 w-4" />
                View all languages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={css("background-color: #f0ebe3")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <div className="bm-grid-4" style={css("gap: 24px")}>
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                style={css("text-decoration: none; display: block")}
                className="bm-title-underline-parent group"
              >
                <div style={css("aspect-ratio: 1; background: #e2dcd2; border-radius: 12px; overflow: hidden; margin-bottom: 16px; position: relative")}>
                  {product.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={product.img}
                      alt={product.title}
                      className="transition-transform duration-500 group-hover:scale-105"
                      style={css("width: 100%; height: 100%; object-fit: cover; display: block")}
                    />
                  ) : (
                    <div style={css("width: 100%; height: 100%; display: flex; align-items: center; justify-content: center")}>
                      <BookOpen className="h-10 w-10" style={css("color: #c8c0b4")} />
                    </div>
                  )}
                  {product.badge && (
                    <span style={css("position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 3px 10px; border-radius: 999px; z-index: 2")}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="bm-title-underline" style={css("font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0 0 6px; line-height: 1.3")}>
                  {product.title}
                </h3>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.5; margin: 0 0 8px")}>
                  {product.description}
                </p>
                <span style={css("font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 600; color: #2a2018")}>
                  {product.price}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor CTA */}
      <section style={css("background: #fff")} className="bm-section-padding">
        <div className="mx-auto max-w-2xl px-6 lg:px-10 text-center">
          <h2 style={css("font-family: 'Source Serif 4', serif; font-size: 36px; line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 16px")}>
            Sponsor a new Muslim
          </h2>
          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 0 0 28px")}>
            Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands — a gift that transforms lives.
          </p>
          <Link href="/a-staging/support" className="bm-btn-dark" style={css("padding: 12px 28px")}>
            Support the Mission <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
