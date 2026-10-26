"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addLine, prepareCheckout, updateLine } from "@/lib/shopify/cart";
import { getSession } from "@/lib/auth";

export async function addToCart(formData: FormData) {
  const variantId = String(formData.get("variantId") ?? "");
  const quantity = Math.max(1, Math.min(99, Number(formData.get("quantity") ?? 1) || 1));
  if (!variantId.startsWith("gid://shopify/ProductVariant/")) throw new Error("Invalid product");
  await addLine(variantId, quantity);
  redirect("/cart/");
}

export async function setLineQuantity(formData: FormData) {
  const lineId = String(formData.get("lineId") ?? "");
  const quantity = Math.max(0, Math.min(99, Number(formData.get("quantity") ?? 0) || 0));
  await updateLine(lineId, quantity);
  revalidatePath("/cart/");
}

export async function checkout() {
  const session = await getSession();
  const url = await prepareCheckout(session ? { id: session.user.id, email: session.user.email } : null);
  if (!url) redirect("/cart/");
  redirect(url);
}
