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

// Doc §3.2.1.1: multi-select checkboxes (background is not mutually exclusive).
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
  "width: 100%; border: 1px solid #d8d2c8; border-radius: 8px; padding: 10px 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; outline: none; box-sizing: border-box;";

const labelStyle =
  "display: flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 6px;";

export default function ConceptBStagingConvert() {
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

  const submitDisabled = isSubmitting || !name || !email;

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
      <section style={css("background: #faf9f5; padding: 100px 0 64px;")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("max-width: 680px; margin: 0 auto; text-align: center;")}>
            <div style={css("display: inline-flex; align-items: center; gap: 8px; background: #f4f1eb; border-radius: 999px; padding: 6px 16px; margin-bottom: 24px;")}>
              <Heart className="h-4 w-4" style={css("color: #c8b8a0;")} />
              <span style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #8a7e70;")}>You are welcome here</span>
            </div>

            <h1 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(40px, 6vw, 64px); font-weight: 400; color: #2a2018; margin: 0 0 16px; line-height: 1.05;")}>
              Your Journey to Islam
            </h1>

            <p style={css("font-family: 'DM Sans', sans-serif; font-size: 17px; color: #8a7e70; max-width: 540px; line-height: 1.65; margin: 0 auto 40px;")}>
              Whether you have been exploring Islam for years or are just beginning to wonder, there is no rush and no pressure. This is a deeply personal journey, and we are honored to walk it with you — at whatever pace feels right.
            </p>

            <div style={css("display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;")}>
              <a href="#ready-form" className="bm-btn-dark" style={css("padding: 12px 28px;")}>
                I&apos;m Ready to Connect <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#faq" className="bm-btn-outline" style={css("padding: 12px 28px;")}>
                I Have Questions <ChevronDown className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* KEY POINTS — WHAT ISLAM OFFERS */}
      {/* ============================== */}
      <section className="bm-section-padding" style={css("background: #f4f1eb;")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("text-align: center; margin-bottom: 40px;")}>
            <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 8px;")}>
              What draws people to Islam
            </h2>
            <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; max-width: 540px; margin: 0 auto; line-height: 1.6;")}>
              Every person&apos;s path is unique, but these are some of the things that resonate most deeply with those exploring the faith.
            </p>
          </div>

          <div className="bm-grid-4">
            {keyPoints.map(({ Icon, title, description }) => (
              <div key={title} style={css("background: #faf9f5; border-radius: 12px; padding: 28px;")}>
                <div style={css("width: 44px; height: 44px; border-radius: 10px; background: rgba(200,184,160,0.25); display: flex; align-items: center; justify-content: center;")}>
                  <Icon className="h-5 w-5" style={css("color: #c8b8a0;")} />
                </div>
                <h3 style={css("font-family: 'Source Serif 4', serif; font-size: 17px; font-weight: 400; color: #2a2018; margin: 16px 0 8px; line-height: 1.3;")}>
                  {title}
                </h3>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.6; margin: 0;")}>
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
      <section id="ready-form" className="bm-section-padding" style={css("background: #faf9f5;")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("max-width: 680px; margin: 0 auto;")}>
            <div style={css("text-align: center; margin-bottom: 40px;")}>
              <div style={css("display: inline-flex; align-items: center; gap: 8px; background: #f4f1eb; border-radius: 999px; padding: 6px 16px; margin-bottom: 16px;")}>
                <Send className="h-4 w-4" style={css("color: #c8b8a0;")} />
                <span style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #8a7e70;")}>Take the next step</span>
              </div>
              <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 8px;")}>
                Ready to Convert?
              </h2>
              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 0;")}>
                Fill out the form below and someone from our team will email you within 48 hours. There is absolutely no obligation — we are simply here to help.
              </p>
            </div>

            {isSubmitted ? (
              /* Success State */
              <div style={css("background: #f4f1eb; border-radius: 12px; padding: 48px 32px; text-align: center;")}>
                <div style={css("width: 56px; height: 56px; border-radius: 999px; background: rgba(45, 106, 79, 0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;")}>
                  <Heart className="h-7 w-7" style={css("color: #2d6a4f;")} />
                </div>
                <h3 style={css("font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0 0 10px;")}>
                  Thank you for reaching out
                </h3>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; max-width: 420px; margin: 0 auto;")}>
                  We have received your information and someone from our team will email you at the address provided within the next 48 hours. In the meantime, feel free to explore our resources and articles.
                </p>
              </div>
            ) : (
              /* Form */
              <form style={css("background: #f4f1eb; border-radius: 12px; padding: 32px;")} onSubmit={handleSubmit}>
                {/* Name & Email */}
                <div className="bm-grid-stats">
                  <div>
                    <label htmlFor="convert-name" style={css(labelStyle)}>
                      <User className="h-3.5 w-3.5" style={css("color: #8a7e70;")} />
                      Name <span style={css("color: #c8b8a0;")}>*</span>
                    </label>
                    <input
                      id="convert-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      style={css(inputStyle)}
                    />
                  </div>
                  <div>
                    <label htmlFor="convert-email" style={css(labelStyle)}>
                      <Mail className="h-3.5 w-3.5" style={css("color: #8a7e70;")} />
                      Email <span style={css("color: #c8b8a0;")}>*</span>
                    </label>
                    <input
                      id="convert-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      style={css(inputStyle)}
                    />
                  </div>
                </div>

                {/* Phone & Location */}
                <div className="bm-grid-3" style={css("gap: 16px; margin-top: 16px;")}>
                  <div>
                    <label htmlFor="convert-phone" style={css(labelStyle)}>
                      <Phone className="h-3.5 w-3.5" style={css("color: #8a7e70;")} />
                      Phone <span style={css("font-size: 12px; color: #8a7e70; font-weight: 400;")}>(optional)</span>
                    </label>
                    <input
                      id="convert-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      style={css(inputStyle)}
                    />
                  </div>
                  <div>
                    <label htmlFor="convert-city" style={css(labelStyle)}>
                      <MapPin className="h-3.5 w-3.5" style={css("color: #8a7e70;")} />
                      City
                    </label>
                    <input
                      id="convert-city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Your city"
                      style={css(inputStyle)}
                    />
                  </div>
                  <div>
                    <label htmlFor="convert-state" style={css(labelStyle)}>
                      <span style={css("width: 14px;")} />
                      State
                    </label>
                    <input
                      id="convert-state"
                      type="text"
                      value={stateField}
                      onChange={(e) => setStateField(e.target.value)}
                      placeholder="Your state"
                      style={css(inputStyle)}
                    />
                  </div>
                </div>

                {/* Background Selection */}
                <div style={css("margin-top: 24px;")}>
                  <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin: 0 0 10px;")}>
                    Which best describes where you are right now?
                  </p>
                  <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; margin: 0 0 10px;")}>
                    Select all that apply.
                  </p>
                  <div style={css("display: flex; flex-direction: column; gap: 8px;")}>
                    {backgroundOptions.map((option) => {
                      const checked = selectedBackgrounds.includes(option);
                      return (
                        <label
                          key={option}
                          style={css(
                            `display: flex; align-items: flex-start; gap: 10px; border: 1px solid ${checked ? "#2a2018" : "#d8d2c8"}; border-radius: 8px; padding: 12px 14px; cursor: pointer; background: ${checked ? "rgba(42,32,24,0.03)" : "#fff"}; transition: all 0.15s;`,
                          )}
                        >
                          <input
                            type="checkbox"
                            name="background"
                            value={option}
                            checked={checked}
                            onChange={() => toggleBackground(option)}
                            style={css("margin-top: 2px; accent-color: #2a2018;")}
                          />
                          <span style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; line-height: 1.5;")}>
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Info */}
                <div style={css("margin-top: 24px;")}>
                  <label htmlFor="convert-info" style={css(labelStyle)}>
                    <MessageSquare className="h-3.5 w-3.5" style={css("color: #8a7e70;")} />
                    Is there anything else you would like to share?
                  </label>
                  <textarea
                    id="convert-info"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    rows={4}
                    placeholder="Feel free to share anything on your mind — questions, concerns, or just a bit about your journey so far..."
                    style={css(inputStyle + " resize: vertical;")}
                  />
                </div>

                {/* Note */}
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; text-align: center; margin: 16px 0 0;")}>
                  Someone from our team will email you at the address provided within the next 48 hours. Your information is kept completely private.
                </p>

                {/* Submit */}
                <div style={css("text-align: center; margin-top: 20px;")}>
                  <button
                    type="submit"
                    disabled={submitDisabled}
                    className="bm-btn-dark"
                    style={css(`padding: 12px 32px; opacity: ${submitDisabled ? "0.5" : "1"}; cursor: ${submitDisabled ? "not-allowed" : "pointer"};`)}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit <ArrowRight className="h-3.5 w-3.5" />
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
      <section id="faq" className="bm-section-padding" style={css("background: #f4f1eb;")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("max-width: 800px; margin: 0 auto;")}>
            <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 8px; text-align: center;")}>
              Conversion FAQ
            </h2>
            <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; text-align: center; margin: 0 0 32px; line-height: 1.6;")}>
              We hear these questions often from people exploring Islam. There are no wrong questions — and no judgment.
            </p>

            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => toggleFaq(i)}
                  style={css("width: 100%; text-align: left; padding: 20px 0; border: none; border-top: 1px solid #e8e3da; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;")}
                >
                  <span style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; color: #2a2018; line-height: 1.4;")}>{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 mt-1 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} style={css("color: #8a7e70;")} />
                </button>
                {openFaq === i && (
                  <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px; padding-right: 40px;")}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* CLOSING CTA                    */}
      {/* ============================== */}
      <section style={css("background: #f4f1eb; padding: 0 0 64px;")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("background: #2a2018; border-radius: 16px; padding: 56px; display: flex; align-items: center; gap: 48px; flex-wrap: wrap;")}>
            <div style={css("width: 64px; height: 64px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0;")}>
              <Heart className="h-8 w-8" style={css("color: #c8b8a0;")} />
            </div>
            <div style={css("flex: 1; min-width: 260px;")}>
              <h2 style={css("font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.2;")}>
                Wherever you are on this path, you belong
              </h2>
              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.55); margin: 0; line-height: 1.6;")}>
                The Prophet Muhammad (peace be upon him) said: <em>&quot;God is more merciful to His servants than a mother is to her child.&quot;</em> Whatever questions you carry, whatever doubts you hold — you are already taking a brave and beautiful step.
              </p>
            </div>
            <a href="#ready-form" className="bm-btn-white" style={css("flex-shrink: 0; padding: 12px 28px;")}>
              Reach Out to Us <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
