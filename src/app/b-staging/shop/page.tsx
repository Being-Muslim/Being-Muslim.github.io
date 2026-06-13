"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Heart, BookOpen, ArrowRight, Package, Search } from "lucide-react";
import { css } from "@/lib/css";
import { products } from "@/lib/data/mock";

const productImages: Record<string, string> = {
  "being-muslim-book": "https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg",
  "being-muslim-boxed-set": "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x563.jpeg",
  "prayer-cards": "https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg",
  "being-muslim-ebook": "https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png",
  "being-muslim-spanish": "https://www.beingmuslim.org/wp-content/uploads/2021/08/Spanish-E-Book-900x1200.png",
};

// Out-of-set dynamic /shop/[handle] links are retargeted to the nearest static product page.
const productHrefs: Record<string, string> = {
  "being-muslim-book": "/b-staging/shop/book",
  "being-muslim-boxed-set": "/b-staging/shop/boxed-set",
  "prayer-cards": "/b-staging/shop/prayer-cards",
  "being-muslim-ebook": "/b-staging/shop/ebook",
  "being-muslim-spanish": "/b-staging/shop/ebook",
};

const categories = ["All", "Books", "Boxed Sets", "Cards", "Digital"] as const;

export default function ConceptBStagingShop() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ============ HERO ============ */}
      <section style={css("background: #2a2018; padding: 80px 0 64px; position: relative; overflow: hidden")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10" style={css("text-align: center; position: relative; z-index: 1")}>
          <span style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px; display: inline-flex; align-items: center; gap: 6px")}>
            <Package className="h-3 w-3" />
            Free shipping on orders over $50
          </span>
          <h1 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(32px, 5vw, 48px); font-weight: 400; color: #fff; margin: 20px 0 16px; line-height: 1.1")}>
            Shop
          </h1>
          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); max-width: 520px; margin: 0 auto; line-height: 1.6")}>
            Beautifully crafted resources to support your journey — from bestselling books to prayer essentials.
          </p>
          <div style={css("margin-top: 20px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap")}>
            <Link href="/b-staging/contact" className="bm-btn-glass" style={css("padding: 10px 24px; font-size: 13px")}>
              Bulk &amp; Institutional Orders <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/b-staging/shop/languages" className="bm-btn-glass" style={css("padding: 10px 24px; font-size: 13px")}>
              View All Languages <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FILTERS & SEARCH ============ */}
      <section style={css("background: #faf9f5; padding: 48px 0 0")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; align-items: center")}>
            {/* Category Pills */}
            <div style={css("display: flex; flex-wrap: wrap; gap: 8px")}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={css(
                    `font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; padding: 8px 18px; border-radius: 999px; cursor: pointer; transition: all 0.2s; border: 1px solid ${activeCategory === category ? "#2a2018" : "#d8d2c8"}; background: ${activeCategory === category ? "#2a2018" : "transparent"}; color: ${activeCategory === category ? "#fff" : "#2a2018"}`
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div style={css("position: relative")}>
              <Search className="h-4 w-4" style={css("position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70")} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; height: 40px; width: 240px; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; padding-left: 36px; padding-right: 16px; color: #2a2018; outline: none")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT GRID ============ */}
      <section style={css("background: #faf9f5; padding: 32px 0 64px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {filteredProducts.length === 0 ? (
            <div style={css("text-align: center; padding: 64px 0")}>
              <Package className="h-16 w-16" style={css("color: #d8d2c8; margin: 0 auto")} />
              <h3 style={css("font-family: 'Source Serif 4', serif; font-size: 20px; color: #2a2018; margin: 16px 0 8px")}>No products found</h3>
              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70")}>Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="bm-btn-outline"
                style={css("margin-top: 20px; padding: 10px 24px")}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="bm-grid-4" style={css("gap: 24px; margin-top: 8px")}>
              {filteredProducts.map((product, i) => (
                <div key={product.handle} style={css("display: contents")}>
                  {/* Sponsor Banner (after 2nd product) */}
                  {i === 2 && (
                    <div style={css("display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 12px; background: #f4f1eb; padding: 32px; text-align: center")}>
                      <div style={css("width: 48px; height: 48px; border-radius: 999px; background: rgba(200,184,160,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 12px")}>
                        <Heart className="h-6 w-6" style={css("color: #c8b8a0")} />
                      </div>
                      <h3 style={css("font-family: 'Source Serif 4', serif; font-size: 18px; color: #2a2018; margin: 0 0 8px")}>Sponsor a New Muslim</h3>
                      <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.5; margin: 0 0 16px")}>Gift a boxed set to someone beginning their journey.</p>
                      <Link href="/b-staging/support" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px")} className="bm-view-all">
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}

                  {/* Product Card */}
                  <Link href={productHrefs[product.handle] ?? "/b-staging/shop"} style={css("text-decoration: none; display: block")} className="bm-title-underline-parent group">
                    <div className="bm-card-hover" style={css("background: #fff; border-radius: 12px; overflow: hidden; height: 100%; display: flex; flex-direction: column")}>
                      {/* Image */}
                      <div style={css("aspect-ratio: 4/3; background: #e2dcd2; position: relative; overflow: hidden")}>
                        {productImages[product.handle] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={productImages[product.handle]} alt={product.title} className="transition-transform duration-500 group-hover:scale-105" style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
                        ) : (
                          <div style={css("width: 100%; height: 100%; display: flex; align-items: center; justify-content: center")}>
                            <BookOpen className="h-12 w-12" style={css("color: #c8c0b4")} />
                          </div>
                        )}
                        {product.badge && (
                          <span style={css("position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 3px 10px; border-radius: 999px")}>{product.badge}</span>
                        )}
                        {!product.inStock && (
                          <div style={css("position: absolute; inset: 0; background: rgba(42,32,24,0.5); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center")}>
                            <span style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #fff; background: rgba(42,32,24,0.8); padding: 4px 14px; border-radius: 999px")}>Out of Stock</span>
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div style={css("padding: 20px; flex: 1; display: flex; flex-direction: column")}>
                        <h3 className="bm-title-underline" style={css("font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 8px; line-height: 1.3")}>
                          {product.title}
                        </h3>

                        {/* Rating */}
                        <div style={css("display: flex; align-items: center; gap: 6px; margin-bottom: 10px")}>
                          <div style={css("display: flex; gap: 2px")}>
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                className={`h-3.5 w-3.5 ${idx < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : ""}`}
                                style={idx >= Math.floor(product.rating) ? css("color: #d8d2c8") : undefined}
                              />
                            ))}
                          </div>
                          <span style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70")}>
                            {product.rating} ({product.reviewCount})
                          </span>
                        </div>

                        {/* Price */}
                        <div style={css("display: flex; align-items: center; gap: 8px; margin-top: auto")}>
                          <span style={css("font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 600; color: #2a2018")}>
                            ${product.price.toFixed(2)}
                          </span>
                          {product.compareAtPrice && (
                            <span style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; text-decoration: line-through")}>
                              ${product.compareAtPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ SPONSOR CALLOUT BANNER ============ */}
      <section className="bm-section-padding" style={css("background: #2a2018")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("display: flex; align-items: center; gap: 48px; flex-wrap: wrap; justify-content: center")}>
            <div style={css("width: 80px; height: 80px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0")}>
              <Heart className="h-10 w-10" style={css("color: #c8b8a0")} />
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
              Sponsor Now <Heart className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
