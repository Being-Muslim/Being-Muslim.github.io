import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

// Better Auth core tables (user, session, account, verification).
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull().default(false),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

export const session = sqliteTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    token: text("token").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (t) => [index("session_user_idx").on(t.userId)],
);

export const account = sqliteTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: integer("access_token_expires_at", { mode: "timestamp_ms" }),
    refreshTokenExpiresAt: integer("refresh_token_expires_at", { mode: "timestamp_ms" }),
    scope: text("scope"),
    password: text("password"),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  },
  (t) => [index("account_user_idx").on(t.userId)],
);

export const verification = sqliteTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  },
  (t) => [index("verification_identifier_idx").on(t.identifier)],
);

// Shopify orders mirrored from webhooks. Shopify stays the source of truth;
// this copy powers the account area's order history.
export const shopOrder = sqliteTable(
  "shop_order",
  {
    // Shopify GraphQL id, e.g. gid://shopify/Order/123
    id: text("id").primaryKey(),
    name: text("name").notNull(), // "#1001"
    userId: text("user_id").references(() => user.id, { onDelete: "set null" }),
    email: text("email"),
    financialStatus: text("financial_status"),
    fulfillmentStatus: text("fulfillment_status"),
    totalAmount: text("total_amount").notNull(),
    currency: text("currency").notNull(),
    // Line items, shipping lines and tracking, as delivered by Shopify
    detail: text("detail", { mode: "json" }).notNull(),
    statusUrl: text("status_url"),
    cancelledAt: integer("cancelled_at", { mode: "timestamp_ms" }),
    placedAt: integer("placed_at", { mode: "timestamp_ms" }).notNull(),
    // Shopify's updated_at, used to ignore out-of-order deliveries
    shopifyUpdatedAt: integer("shopify_updated_at", { mode: "timestamp_ms" }).notNull(),
    syncedAt: integer("synced_at", { mode: "timestamp_ms" }).notNull(),
  },
  (t) => [index("shop_order_user_idx").on(t.userId), index("shop_order_email_idx").on(t.email)],
);

// Every webhook delivery is recorded before processing, so a failure can be
// retried and nothing Shopify sends is lost (Shopify also retries for 48h).
export const webhookEvent = sqliteTable(
  "webhook_event",
  {
    id: text("id").primaryKey(), // X-Shopify-Event-Id (falls back to webhook id)
    topic: text("topic").notNull(),
    payload: text("payload").notNull(),
    receivedAt: integer("received_at", { mode: "timestamp_ms" }).notNull(),
    processedAt: integer("processed_at", { mode: "timestamp_ms" }),
    attempts: integer("attempts").notNull().default(0),
    lastError: text("last_error"),
  },
  (t) => [index("webhook_event_pending_idx").on(t.processedAt)],
);
