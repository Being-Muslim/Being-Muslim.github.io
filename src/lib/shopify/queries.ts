const MONEY = `amount currencyCode`;

export const PRODUCT_CARD = `
  id handle title availableForSale
  featuredImage { url altText width height }
  priceRange { minVariantPrice { ${MONEY} } }
  compareAtPriceRange { minVariantPrice { ${MONEY} } }
`;

export const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first, sortKey: BEST_SELLING) {
      nodes { ${PRODUCT_CARD} }
    }
  }
`;

export const PRODUCT_QUERY = `
  query Product($handle: String!) {
    product(handle: $handle) {
      ${PRODUCT_CARD}
      descriptionHtml
      images(first: 8) { nodes { url altText width height } }
      variants(first: 20) {
        nodes {
          id title availableForSale quantityAvailable
          price { ${MONEY} }
          compareAtPrice { ${MONEY} }
          selectedOptions { name value }
        }
      }
    }
  }
`;

const CART_FIELDS = `
  id checkoutUrl totalQuantity
  cost { subtotalAmount { ${MONEY} } totalAmount { ${MONEY} } }
  lines(first: 50) {
    nodes {
      id quantity
      cost { totalAmount { ${MONEY} } }
      merchandise {
        ... on ProductVariant {
          id title
          price { ${MONEY} }
          image { url altText }
          product { handle title }
        }
      }
    }
  }
`;

export const CART_QUERY = `query Cart($id: ID!) { cart(id: $id) { ${CART_FIELDS} } }`;

export const CART_CREATE = `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) { cart { ${CART_FIELDS} } userErrors { field message } }
  }
`;

export const CART_LINES_ADD = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } userErrors { field message } }
  }
`;

export const CART_LINES_UPDATE = `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } userErrors { field message } }
  }
`;

export const CART_LINES_REMOVE = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { ${CART_FIELDS} } userErrors { field message } }
  }
`;

export const CART_BUYER_IDENTITY_UPDATE = `
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) { cart { id } userErrors { field message } }
  }
`;

export const CART_ATTRIBUTES_UPDATE = `
  mutation CartAttributesUpdate($cartId: ID!, $attributes: [AttributeInput!]!) {
    cartAttributesUpdate(cartId: $cartId, attributes: $attributes) { cart { id } userErrors { field message } }
  }
`;
