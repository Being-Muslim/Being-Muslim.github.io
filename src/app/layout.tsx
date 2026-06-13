import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Being Muslim — Your Guide to a Meaningful Islamic Journey",
  description:
    "Empowering converts and beginners on their Islamic journey through education, community, and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
