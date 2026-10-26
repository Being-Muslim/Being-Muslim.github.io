export function orderStatus(o: { cancelledAt: Date | null; financialStatus: string | null; fulfillmentStatus: string | null }) {
  if (o.cancelledAt) return "Cancelled";
  if (o.financialStatus === "refunded") return "Refunded";
  if (o.fulfillmentStatus === "fulfilled") return "Shipped";
  if (o.fulfillmentStatus === "partial") return "Partly shipped";
  if (o.financialStatus === "paid") return "Processing";
  return "Received";
}
