import { storefront, storefrontConfigured } from "./storefront";
import { PRODUCT_QUERY, PRODUCTS_QUERY } from "./queries";
import type { Product, ProductCard } from "./types";

// Products published to the Headless channel. Archived and draft products
// are never returned by the Storefront API.
export async function getProducts(first = 50): Promise<ProductCard[]> {
  if (!storefrontConfigured) return [];
  const data = await storefront<{ products: { nodes: ProductCard[] } }>(PRODUCTS_QUERY, { first });
  return data.products.nodes;
}

export async function getProduct(handle: string): Promise<Product | null> {
  if (!storefrontConfigured) return null;
  const data = await storefront<{ product: Product | null }>(PRODUCT_QUERY, { handle });
  return data.product;
}
