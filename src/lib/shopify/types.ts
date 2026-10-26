export type Money = { amount: string; currencyCode: string };
export type Image = { url: string; altText: string | null; width?: number; height?: number };

export type ProductCard = {
  id: string;
  handle: string;
  title: string;
  availableForSale: boolean;
  featuredImage: Image | null;
  priceRange: { minVariantPrice: Money };
  compareAtPriceRange: { minVariantPrice: Money };
};

export type Variant = {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number | null;
  price: Money;
  compareAtPrice: Money | null;
  selectedOptions: { name: string; value: string }[];
};

export type Product = ProductCard & {
  descriptionHtml: string;
  images: { nodes: Image[] };
  variants: { nodes: Variant[] };
};

export type CartLine = {
  id: string;
  quantity: number;
  cost: { totalAmount: Money };
  merchandise: {
    id: string;
    title: string;
    price: Money;
    image: Image | null;
    product: { handle: string; title: string };
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { subtotalAmount: Money; totalAmount: Money };
  lines: { nodes: CartLine[] };
};

export type UserError = { field: string[] | null; message: string };
