"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Heart,
  BookOpen,
  Users,
  Star,
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import { css } from "@/lib/css";

const keyPoints = [
  {
    Icon: Heart,
    title: "A Path of Peace",
    description:
      "Islam offers a direct, personal relationship with God — one built on mercy, love, and guidance for every aspect of life.",
  },
  {
    Icon: BookOpen,
    title: "Timeless Wisdom",
    description:
      "The Quran and the teachings of the Prophet Muhammad (peace be upon him) provide a comprehensive guide for living with purpose and clarity.",
  },
  {
    Icon: Users,
    title: "A Global Community",
    description:
      "By embracing Islam, you join a worldwide family of nearly two billion people united by shared values, prayer, and mutual support.",
  },
  {
    Icon: Star,
    title: "Your Own Pace",
    description:
      "There is no pressure, no timeline. Islam welcomes you wherever you are in your journey — curious, exploring, or ready to take the next step.",
  },
] as const;

const backgroundOptions = [
  "I have been studying Islam and am ready to convert.",
  "I haven't studied much, but I know I want to become a Muslim",
  "I am considering becoming Muslim, but have some questions first",
  "I am not interested in converting yet but would like to know more about Islam",
  "I already believe in Islam but would now like to embrace the faith formally",
] as const;

// Canonical 8 FAQs (reused verbatim from src/app/a/page.tsx).
const faqs = [
  { q: "My family is not supportive of my conversion. What do you advise?", a: "This is a common challenge many new Muslims face. We recommend patience, maintaining loving relationships, and leading by positive example. Our community forum has many discussions from people who have navigated this successfully." },
  { q: "Can you help me find a mosque or community of Muslims near me?", a: "We can help connect you with local communities. Reach out through our Contact page and we will do our best to help you find a welcoming community in your area." },
  { q: "My previous faith was very dear to me. If I am now a Muslim, do I have to reject it entirely?", a: "Islam acknowledges and respects the earlier prophets and scriptures. Many of the values you cherished in your previous faith are shared in Islam. Your journey enriches rather than erases your spiritual history." },
  { q: "My spouse or significant other is not a Muslim. How does becoming Muslim impact my marriage?", a: "This is a nuanced topic that depends on your specific situation. We recommend speaking with a knowledgeable scholar who can provide guidance tailored to your circumstances. Reach out through our Contact page." },
  { q: "I just converted, what do I do next?", a: "Congratulations and may God bless your path ahead! We have written an article that offers some advice and important first steps: “A Beginner's Guide to Being a Muslim.” You can find it on our Learn page." },
  { q: "I believe Islam to be true and revealed by God, but I can't live up to its teachings. What should I do?", a: "This feeling is more common than you might think. Islam teaches that God is the Most Merciful and that no one is expected to be perfect. Begin with what you can, be sincere in your intention, and trust that growth comes with time. The door to God is always open." },
  { q: "I want to convert, but I am finding it difficult to change my lifestyle including the way that I dress, what I eat/drink, relationships. Can I still become Muslim?", a: "Absolutely. Islam teaches that faith is a journey, not a destination. You do not need to be perfect to begin. Start with the essentials and grow at your own pace — God is patient and merciful." },
  { q: "Do I need to change my name now that I have become Muslim?", a: "No, changing your name is not required in Islam. Many Muslims keep their birth names. Some choose to adopt a new name as a personal expression of their new identity, but this is entirely optional." },
] as const;

const inputStyle =
  "border-color: #d4cec4; background: #ffffff; color: #2a2018; font-family: 'DM Sans', sans-serif; --tw-ring-color: rgba(139, 46, 54, 0.3);";

export default function ConceptAStagingConvert() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [stateField, setStateField] = useState("");
  const [selectedBackgrounds, setSelectedBackgrounds] = useState<string[]>([]);
  const toggleBackground = (option: string) =>
    setSelectedBackgrounds((cur) =>
      cur.includes(option) ? cur.filter((o) => o !== option) : [...cur, option],
    );
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq((cur) => (cur === i ? null : i));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission (no backend).
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  }

  return (
    <>
      {/* ============================== */}
      {/* 1. HERO — CONSIDERING CONVERTING */}
      {/* ============================== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden" style={css("background: #f0ebe3")}>
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geo-convert" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" style={css("color: #2a2018")} />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.3" style={css("color: #2a2018")} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geo-convert)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
              style={css("background: #e9e3da; color: #8a7e70; font-family: 'DM Sans', sans-serif")}
            >
              <Heart className="h-4 w-4" style={css("color: #8b2e36")} />
              <span>You are welcome here</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}>
              Your Journey to Islam
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl" style={css("font-family: 'DM Sans', sans-serif; color: #8a7e70")}>
              Whether you have been exploring Islam for years or are just beginning to wonder, there is no rush and no pressure. This is a deeply personal journey, and we are honored to walk it with you — at whatever pace feels right.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#ready-form"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition-all hover:opacity-90"
                style={css("background: #8b2e36; color: #faf2e3; font-family: 'DM Sans', sans-serif")}
              >
                I&apos;m Ready to Connect
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-base font-medium transition-all hover:opacity-80"
                style={css("border-color: #2a2018; color: #2a2018; font-family: 'DM Sans', sans-serif")}
              >
                I Have Questions
                <ChevronDown className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* KEY POINTS — WHAT ISLAM OFFERS */}
      {/* ============================== */}
      <section className="py-16 md:py-24" style={css("background: #f0ebe3")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl" style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}>
              What draws people to Islam
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg" style={css("font-family: 'DM Sans', sans-serif; color: #8a7e70")}>
              Every person&apos;s path is unique, but these are some of the things that resonate most deeply with those exploring the faith.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyPoints.map(({ Icon, title, description }) => (
              <div key={title} className="rounded-[10px] p-6 transition-all hover:shadow-md" style={css("background: #e9e3da")}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={css("background: rgba(139, 46, 54, 0.1)")}>
                  <Icon className="h-6 w-6" style={css("color: #8b2e36")} />
                </div>
                <h3 className="mt-4 text-lg font-bold" style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}>
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={css("font-family: 'DM Sans', sans-serif; color: #8a7e70")}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* 2. READY TO CONVERT — FORM     */}
      {/* ============================== */}
      <section id="ready-form" className="py-16 md:py-24" style={css("background: #e9e3da")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
                style={css("background: rgba(139, 46, 54, 0.1); color: #8b2e36; font-family: 'DM Sans', sans-serif")}
              >
                <Send className="h-4 w-4" />
                <span>Take the next step</span>
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl" style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}>
                Ready to Convert?
              </h2>
              <p className="mt-4 text-lg leading-relaxed" style={css("font-family: 'DM Sans', sans-serif; color: #8a7e70")}>
                Fill out the form below and someone from our team will email you within 48 hours. There is absolutely no obligation — we are simply here to help.
              </p>
            </div>

            {isSubmitted ? (
              /* Success State */
              <div className="mt-10 rounded-[10px] p-8 text-center sm:p-12" style={css("background: #f0ebe3")}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={css("background: rgba(45, 106, 79, 0.1)")}>
                  <Heart className="h-8 w-8" style={css("color: #2d6a4f")} />
                </div>
                <h3 className="mt-6 text-2xl font-bold" style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}>
                  Thank you for reaching out
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={css("font-family: 'DM Sans', sans-serif; color: #8a7e70")}>
                  We have received your information and someone from our team will email you at the address provided within the next 48 hours. In the meantime, feel free to explore our resources and articles.
                </p>
              </div>
            ) : (
              /* Form */
              <form className="mt-10 rounded-[10px] p-6 sm:p-8" style={css("background: #f0ebe3")} onSubmit={handleSubmit}>
                {/* Name & Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="convert-name" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={css("color: #2a2018; font-family: 'DM Sans', sans-serif")}>
                      <User className="h-4 w-4" style={css("color: #8a7e70")} />
                      Name <span style={css("color: #8b2e36")}>*</span>
                    </label>
                    <input
                      id="convert-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
                      style={css(inputStyle)}
                    />
                  </div>
                  <div>
                    <label htmlFor="convert-email" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={css("color: #2a2018; font-family: 'DM Sans', sans-serif")}>
                      <Mail className="h-4 w-4" style={css("color: #8a7e70")} />
                      Email <span style={css("color: #8b2e36")}>*</span>
                    </label>
                    <input
                      id="convert-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
                      style={css(inputStyle)}
                    />
                  </div>
                </div>

                {/* Phone & Location */}
                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  <div>
                    <label htmlFor="convert-phone" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={css("color: #2a2018; font-family: 'DM Sans', sans-serif")}>
                      <Phone className="h-4 w-4" style={css("color: #8a7e70")} />
                      Phone <span className="text-xs" style={css("color: #8a7e70")}>(optional)</span>
                    </label>
                    <input
                      id="convert-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
                      style={css(inputStyle)}
                    />
                  </div>
                  <div>
                    <label htmlFor="convert-city" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={css("color: #2a2018; font-family: 'DM Sans', sans-serif")}>
                      <MapPin className="h-4 w-4" style={css("color: #8a7e70")} />
                      City
                    </label>
                    <input
                      id="convert-city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Your city"
                      className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
                      style={css(inputStyle)}
                    />
                  </div>
                  <div>
                    <label htmlFor="convert-state" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={css("color: #2a2018; font-family: 'DM Sans', sans-serif")}>
                      <MapPin className="h-4 w-4 opacity-0" />
                      State
                    </label>
                    <input
                      id="convert-state"
                      type="text"
                      value={stateField}
                      onChange={(e) => setStateField(e.target.value)}
                      placeholder="Your state"
                      className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
                      style={css(inputStyle)}
                    />
                  </div>
                </div>

                {/* Background Selection */}
                <div className="mt-6">
                  <p className="mb-3 text-sm font-medium" style={css("color: #2a2018; font-family: 'DM Sans', sans-serif")}>
                    Which best describes where you are right now? <span className="text-xs font-normal" style={css("color: #8a7e70")}>(select all that apply)</span>
                  </p>
                  <div className="space-y-2.5">
                    {backgroundOptions.map((option) => {
                      const checked = selectedBackgrounds.includes(option);
                      return (
                      <label
                        key={option}
                        className="flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-all"
                        style={css(
                          `border-color: ${checked ? "#8b2e36" : "#d4cec4"}; background: ${checked ? "rgba(139, 46, 54, 0.05)" : "#ffffff"}`,
                        )}
                      >
                        <input
                          type="checkbox"
                          name="background"
                          value={option}
                          checked={checked}
                          onChange={() => toggleBackground(option)}
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={css("accent-color: #8b2e36")}
                        />
                        <span className="text-sm leading-relaxed" style={css("color: #2a2018; font-family: 'DM Sans', sans-serif")}>
                          {option}
                        </span>
                      </label>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6">
                  <label htmlFor="convert-info" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={css("color: #2a2018; font-family: 'DM Sans', sans-serif")}>
                    <MessageSquare className="h-4 w-4" style={css("color: #8a7e70")} />
                    Is there anything else you would like to share?
                  </label>
                  <textarea
                    id="convert-info"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    rows={4}
                    placeholder="Feel free to share anything on your mind — questions, concerns, or just a bit about your journey so far..."
                    className="w-full resize-y rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
                    style={css(inputStyle)}
                  />
                </div>

                {/* Note */}
                <p className="mt-4 text-center text-xs" style={css("color: #8a7e70; font-family: 'DM Sans', sans-serif")}>
                  Someone from our team will email you at the address provided within the next 48 hours. Your information is kept completely private.
                </p>

                {/* Submit */}
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || !name || !email}
                    className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-base font-medium transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    style={css("background: #8b2e36; color: #faf2e3; font-family: 'DM Sans', sans-serif")}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* 3. CONVERSION FAQ              */}
      {/* ============================== */}
      <section id="faq" className="py-16 md:py-24" style={css("background: #f0ebe3")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl" style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}>
                Conversion FAQ
              </h2>
              <p className="mt-4 text-lg" style={css("font-family: 'DM Sans', sans-serif; color: #8a7e70")}>
                We hear these questions often from people exploring Islam. There are no wrong questions — and no judgment.
              </p>
            </div>

            <div className="mt-10 rounded-[10px] p-6 sm:p-8" style={css("background: #e9e3da")}>
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => toggleFaq(i)}
                    style={css("width: 100%; text-align: left; padding: 20px 0; border: none; border-top: 1px solid #d4cec4; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px")}
                  >
                    <span style={css("font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 600; color: #2a2018; line-height: 1.4")}>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 flex-shrink-0 mt-1 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} style={css("color: #8a7e70")} />
                  </button>
                  {openFaq === i && (
                    <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px; padding-right: 40px")}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* CLOSING CTA                    */}
      {/* ============================== */}
      <section className="py-16 sm:py-20" style={css("background: #2a2018")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Heart className="mx-auto h-10 w-10" style={css("color: #c4a35a")} />
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl" style={css("font-family: 'Source Serif 4', serif; color: #faf2e3")}>
              Wherever you are on this path, you belong
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={css("font-family: 'DM Sans', sans-serif; color: rgba(250, 242, 227, 0.75)")}>
              The Prophet Muhammad (peace be upon him) said: <em>&quot;God is more merciful to His servants than a mother is to her child.&quot;</em> Whatever questions you carry, whatever doubts you hold — you are already taking a brave and beautiful step.
            </p>
            <div className="mt-8">
              <a
                href="#ready-form"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-base font-medium transition-all hover:opacity-90"
                style={css("background: #8b2e36; color: #faf2e3; font-family: 'DM Sans', sans-serif")}
              >
                Reach Out to Us
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
