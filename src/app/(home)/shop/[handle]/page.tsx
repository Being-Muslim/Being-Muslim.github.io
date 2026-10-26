import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/shopify/catalog";
import { formatMoney, sized } from "@/lib/shopify/money";
import { addToCart } from "../../actions";

type Props = { params: Promise<{ handle: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct((await params).handle);
  return { title: product ? `${product.title} · Being Muslim` : "Shop · Being Muslim" };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct((await params).handle);
  if (!product) notFound();
  const variants = product.variants.nodes;
  const first = variants.find((v) => v.availableForSale) ?? variants[0];
  const images = product.images.nodes;

  return (
    <div className="st-page">
      <div className="st-product">
        <div className="gallery">
          {images[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={sized(images[0].url, 1000)} alt={images[0].altText ?? product.title} />
          ) : null}
          {images.length > 1 ? (
            <div className="thumbs">
              {images.slice(1, 5).map((im) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={im.url} src={sized(im.url, 300)} alt={im.altText ?? ""} loading="lazy" />
              ))}
            </div>
          ) : null}
        </div>
        <div>
          <p className="st-kicker">Shop</p>
          <h1 className="st-title" style={{ marginBottom: 12 }}>
            {product.title}
          </h1>
          <p className="st-price" style={{ fontSize: 20, margin: "0 0 24px" }}>
            {first?.compareAtPrice && Number(first.compareAtPrice.amount) > Number(first.price.amount) ? (
              <s>{formatMoney(first.compareAtPrice)}</s>
            ) : null}
            {first ? formatMoney(first.price) : null}
          </p>
          {product.availableForSale && first ? (
            <form action={addToCart} className="st-form" style={{ maxWidth: 360, marginBottom: 32 }}>
              {variants.length > 1 ? (
                <label>
                  Option
                  <select name="variantId" className="st-input" defaultValue={first.id}>
                    {variants.map((v) => (
                      <option key={v.id} value={v.id} disabled={!v.availableForSale}>
                        {v.title} · {formatMoney(v.price)}
                        {v.availableForSale ? "" : " (sold out)"}
                      </option>
                    ))}
                  </select>
                </label>
              ) : (
                <input type="hidden" name="variantId" value={first.id} />
              )}
              <label>
                Quantity
                <input className="st-input" type="number" name="quantity" min={1} max={99} defaultValue={1} />
              </label>
              <button className="st-btn" type="submit">
                Add to cart
              </button>
            </form>
          ) : (
            <p className="st-note" style={{ marginBottom: 32 }}>
              This item is sold out right now.
            </p>
          )}
          <div className="st-desc" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </div>
      </div>
    </div>
  );
}
