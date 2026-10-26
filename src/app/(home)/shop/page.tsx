import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/shopify/catalog";
import { formatMoney, sized } from "@/lib/shopify/money";

export const metadata: Metadata = { title: "Shop · Being Muslim" };

export default async function ShopPage() {
  const products = await getProducts();
  return (
    <div className="st-page">
      <p className="st-kicker">Shop</p>
      <h1 className="st-title">Books, prayer cards and resources</h1>
      {products.length === 0 ? (
        <p className="st-muted">No products are available right now.</p>
      ) : (
        <div className="st-grid">
          {products.map((p) => {
            const price = p.priceRange.minVariantPrice;
            const compare = p.compareAtPriceRange.minVariantPrice;
            return (
              <Link key={p.id} href={`/shop/${p.handle}/`} className="st-card bm-title-underline-parent">
                <div className="im">
                  {p.featuredImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={sized(p.featuredImage.url, 600)} alt={p.featuredImage.altText ?? p.title} loading="lazy" />
                  ) : null}
                </div>
                <h3 className="bm-title-underline">{p.title}</h3>
                <div className="st-price">
                  {Number(compare.amount) > Number(price.amount) ? <s>{formatMoney(compare)}</s> : null}
                  {formatMoney(price)}
                  {!p.availableForSale ? <span className="st-tag">Sold out</span> : null}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
