import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe, Check } from "lucide-react";
import { css } from "@/lib/css";

export const metadata = {
  title: "Available Languages — Being Muslim Shop",
  description:
    "Being Muslim: A Practical Guide is available in multiple languages. Browse all editions, including those not yet available for online purchase.",
};

type LanguageStatus = "available" | "view" | "soon";

const languages: {
  name: string;
  native: string;
  href?: string;
  status: LanguageStatus;
}[] = [
  { name: "English", native: "English", href: "/a-staging/shop/book", status: "available" },
  { name: "Spanish", native: "Español", href: "/a-staging/shop/book/spanish", status: "available" },
  { name: "Portuguese", native: "Português", href: "/a-staging/shop/book/portuguese", status: "view" },
  { name: "French", native: "Français", status: "soon" },
  { name: "Arabic", native: "العربية", status: "soon" },
  { name: "Urdu", native: "اردو", status: "soon" },
  { name: "Indonesian", native: "Bahasa Indonesia", status: "soon" },
  { name: "Turkish", native: "Türkçe", status: "soon" },
];

const statusLabel: Record<LanguageStatus, string> = {
  available: "Available online",
  view: "Not yet available for purchase online",
  soon: "Coming soon",
};

export default function ConceptAStagingShopLanguages() {
  return (
    <>
      {/* Breadcrumb */}
      <section style={css("background: #e9e3da; padding-top: 72px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-4">
          <Link
            href="/a-staging/shop/book"
            style={css("color: #8a7e70; font-family: 'DM Sans', sans-serif")}
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#2a2018]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to the Book
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section style={css("background-color: #2a2018")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p
              style={css("color: #c4a97d; font-family: 'DM Sans', sans-serif; letter-spacing: 0.08em")}
              className="text-sm font-medium uppercase mb-4 inline-flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              Editions &amp; Translations
            </p>
            <h1
              style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}
              className="text-4xl sm:text-5xl font-bold leading-[1.1]"
            >
              Available Languages
            </h1>
            <p
              style={css("color: #f0ebe3; font-family: 'DM Sans', sans-serif")}
              className="mt-5 text-lg leading-relaxed opacity-70 max-w-lg mx-auto"
            >
              Being Muslim: A Practical Guide reaches readers across the world. Some editions are available to purchase online today; others are forthcoming.
            </p>
          </div>
        </div>
      </section>

      {/* Languages list */}
      <section style={css("background-color: #f0ebe3")}>
        <div className="mx-auto max-w-[900px] px-6 lg:px-10 py-16">
          <div style={css("display: flex; flex-direction: column; gap: 12px")}>
            {languages.map((lang) => {
              const isLinked = Boolean(lang.href);
              const inner = (
                <div
                  className={isLinked ? "transition-all hover:shadow-md" : ""}
                  style={css("background: #ffffff; border: 1px solid #e2dcd2; border-radius: 12px; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px")}
                >
                  <div>
                    <p style={css("font-family: 'Source Serif 4', serif; font-size: 20px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2")}>
                      {lang.native}
                    </p>
                    <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; margin: 4px 0 0")}>
                      {lang.name}
                    </p>
                  </div>

                  <div style={css("display: flex; align-items: center; gap: 14px")}>
                    {lang.status === "available" ? (
                      <span className="inline-flex items-center gap-1.5" style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #2d6a4f")}>
                        <Check className="h-4 w-4" />
                        {statusLabel.available}
                      </span>
                    ) : (
                      <span style={css(`font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: ${lang.status === "view" ? "#8b2e36" : "#a09888"}`)}>
                        {statusLabel[lang.status]}
                      </span>
                    )}
                    {isLinked && <ArrowRight className="h-4 w-4" style={css("color: #2a2018")} />}
                  </div>
                </div>
              );

              return isLinked ? (
                <Link key={lang.name} href={lang.href!} style={css("text-decoration: none; display: block")}>
                  {inner}
                </Link>
              ) : (
                <div key={lang.name}>{inner}</div>
              );
            })}
          </div>

          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.6; margin: 24px 0 0; text-align: center")}>
            Don&apos;t see your language?{" "}
            <Link href="/a-staging/contact" style={css("color: #2a2018; text-decoration: underline")}>
              Contact us
            </Link>{" "}
            — new translations are added as they become available.
          </p>
        </div>
      </section>
    </>
  );
}
