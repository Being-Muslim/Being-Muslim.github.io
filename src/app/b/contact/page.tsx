"use client";

import { useState } from "react";
import {
  Star,
  Mic,
  CalendarDays,
  Briefcase,
  Send,
  Mail,
  ArrowRight,
} from "lucide-react";
import { css } from "@/lib/css";

const subjectOptions = [
  "Speaker Request",
  "Order Support",
  "Volunteer With Us",
  "Other",
] as const;

const speakerOfferings = [
  {
    Icon: Mic,
    title: "Speaker Request",
    description:
      "Dr. Asad Tarsin is available for speaking engagements at mosques, universities, conferences, and community events. Topics include new Muslim support, Islamic education methodology, and building welcoming communities.",
  },
  {
    Icon: CalendarDays,
    title: "Weekend Intensive",
    description:
      "Book an immersive weekend learning experience for your community. These programs cover the essentials of faith and practice in a supportive, interactive format designed for diverse audiences.",
  },
  {
    Icon: Briefcase,
    title: "Consulting and Training",
    description:
      "We offer consulting for mosques, organizations, and educators looking to improve their convert support programs, educational offerings, and community outreach strategies.",
  },
] as const;

const impactStats = [
  { value: "10,000+", label: "Books distributed worldwide" },
  { value: "50+", label: "Countries reached" },
  { value: "500+", label: "Communities and mosques served" },
  { value: "1,000+", label: "Hours of classes and programs delivered" },
] as const;

const testimonials = [
  {
    quote:
      "Being Muslim gave me the foundation I needed when I had no one to ask. It felt like a trusted friend walking beside me.",
    name: "Sarah A.",
    role: "New Muslim, 2022",
  },
  {
    quote:
      "We hand a boxed set to every person who takes their shahada at our masjid. The impact on our community has been profound.",
    name: "Imam Yusuf",
    role: "Community Center Director",
  },
  {
    quote:
      "Clear, warm, and never condescending. These are the resources I wish I had when I first embraced Islam.",
    name: "David M.",
    role: "Convert & Mentor",
  },
] as const;

export default function ConceptBStagingContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const [newsletterName, setNewsletterName] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSuccess(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewsletterSuccess(true);
    setNewsletterName("");
    setNewsletterEmail("");
  }

  return (
    <div style={css("font-family: 'DM Sans', sans-serif; color: #2a2018")}>
      {/* ===== ABOUT US ===== */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-24" style={css("background: #faf9f5")}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-3.5 h-3.5" style={css("color: #c8b8a0")} />
            <span className="text-[12px] font-medium uppercase tracking-[0.12em]" style={css("color: #2a2018")}>
              About Us
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
            {/* Left: Story + How It Started */}
            <div>
              <h1 className="text-[36px] md:text-[48px] leading-[1.1] mb-6" style={css("font-family: 'Source Serif 4', serif")}>
                The Being Muslim <span className="italic" style={css("color: #2a2018")}>Project</span>
              </h1>

              <p className="text-[15px] leading-[1.75] mb-5" style={css("color: #8a7e70")}>
                The Being Muslim Project was founded following a 2006 conversion, born from a deeply
                personal recognition: there was a significant gap in beginner-friendly Islamic
                resources. Too many new Muslims were left to navigate their faith alone, with
                materials that were either too academic, too narrow, or simply unwelcoming.
              </p>

              <p className="text-[15px] leading-[1.75] mb-5" style={css("color: #8a7e70")}>
                Created by <strong style={css("color: #2a2018")}>Dr. Asad Tarsin</strong> &mdash;
                physician, educator, and author &mdash; Being Muslim exists to empower converts and
                beginner Muslims through practical, compassionate education. Dr. Tarsin envisioned
                resources that felt like a conversation with a trusted friend: comprehensive yet
                accessible, scholarly yet warm.
              </p>

              <p className="text-[15px] leading-[1.75] mb-8" style={css("color: #8a7e70")}>
                Our mission is to ensure that every person who embraces Islam has access to the
                knowledge, guidance, and community they need to practice their faith with confidence
                and joy.
              </p>

              {/* How It Started */}
              <h3 className="text-[22px] mb-4" style={css("font-family: 'Source Serif 4', serif")}>
                How It Started
              </h3>
              <p className="text-[15px] leading-[1.75]" style={css("color: #8a7e70")}>
                What began as a single book &mdash; <em>Being Muslim: A Practical Guide</em> &mdash;
                grew, through community demand, into boxed sets, prayer cards, weekend intensives, and
                a growing digital platform. From grassroots work across the United States to
                international programs, Being Muslim has expanded through the conviction that good
                education transforms lives.
              </p>
            </div>

            {/* Right: Impact Stats */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[22px] mb-8" style={css("font-family: 'Source Serif 4', serif")}>
                Our Impact
              </h3>

              <div>
                {impactStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between py-4"
                    style={css("border-bottom: 1px solid #d8d2c8")}
                  >
                    <span className="text-[28px] font-bold tracking-tight" style={css("font-family: 'Source Serif 4', serif")}>
                      {stat.value}
                    </span>
                    <span className="text-[13px]" style={css("color: #8a7e70")}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[14px] leading-[1.7]" style={css("color: #8a7e70")}>
                From grassroots work across the United States to international programs, Being Muslim
                has grown through classes, weekend intensives, books, videos, and a growing digital
                platform &mdash; all built on the belief that good education transforms lives.
              </p>
            </div>
          </div>

          {/* Impact — reviews / testimonials for credibility */}
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="p-7" style={css("background: #f4f1eb; border-radius: 10px")}>
                <div className="flex gap-1 mb-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5" style={css("color: #c8b8a0; fill: #c8b8a0")} />
                  ))}
                </div>
                <p className="text-[14px] leading-[1.7] mb-5" style={css("color: #2a2018")}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[13px] font-semibold" style={css("color: #2a2018")}>{t.name}</p>
                <p className="text-[12px]" style={css("color: #8a7e70")}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPEAKER REQUESTS ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-3.5 h-3.5" style={css("color: #c8b8a0")} />
            <span className="text-[12px] font-medium uppercase tracking-[0.12em]" style={css("color: #2a2018")}>
              Speaker Requests
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <h2 className="text-[36px] md:text-[44px] leading-[1.12]" style={css("font-family: 'Source Serif 4', serif")}>
              Bring Being Muslim <span className="italic" style={css("color: #2a2018")}>to Your Community</span>
            </h2>
            <p className="text-[14px] leading-[1.7] lg:pt-3 self-end" style={css("color: #8a7e70")}>
              We offer a range of speaking and educational programs designed to inspire, educate, and
              build stronger communities. Reach out to learn more about availability and scheduling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {speakerOfferings.map(({ Icon, title, description }) => (
              <div key={title} className="p-7 transition-all hover:shadow-lg" style={css("background: #f4f1eb; border-radius: 10px")}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={css("background: #2a2018")}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[18px] font-semibold mb-3" style={css("font-family: 'Source Serif 4', serif")}>
                  {title}
                </h3>
                <p className="text-[13px] leading-[1.7] mb-6" style={css("color: #8a7e70")}>
                  {description}
                </p>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-white text-[13px] font-medium rounded-full hover:opacity-90 transition-opacity"
                  style={css("background: #2a2018")}
                >
                  Inquire
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT US ===== */}
      <section id="contact-form" className="py-20 lg:py-24" style={css("background: #faf9f5")}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[780px] mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-3.5 h-3.5" style={css("color: #c8b8a0")} />
              <span className="text-[12px] font-medium uppercase tracking-[0.12em]" style={css("color: #2a2018")}>
                Contact Us
              </span>
            </div>

            <h2 className="text-[36px] md:text-[44px] leading-[1.12] mb-4" style={css("font-family: 'Source Serif 4', serif")}>
              Get in Touch
            </h2>
            <p className="text-[15px] leading-[1.7] mb-10" style={css("color: #8a7e70")}>
              Reach out to us with any questions and our dedicated team of volunteers will respond as
              soon as possible.
            </p>

            {formSuccess ? (
              <div className="p-8 text-center mb-10" style={css("background: #f4f1eb; border-radius: 10px")}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={css("background: #2a2018")}>
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[20px] font-semibold mb-2" style={css("font-family: 'Source Serif 4', serif")}>
                  Message Sent!
                </h3>
                <p className="text-[14px]" style={css("color: #8a7e70")}>
                  Thank you for reaching out. Our team will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  className="mt-5 text-[13px] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer"
                  style={css("color: #2a2018")}
                  onClick={() => setFormSuccess(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-[13px] font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                      className="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
                      style={css("border: 1px solid #d8d2c8; border-radius: 8px")}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[13px] font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Your last name"
                      className="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
                      style={css("border: 1px solid #d8d2c8; border-radius: 8px")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium mb-2">
                    Email <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
                    style={css("border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[13px] font-medium mb-2">
                    Subject <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow appearance-none cursor-pointer"
                    style={css(`border: 1px solid #d8d2c8; border-radius: 8px; color: ${subject ? "#2a2018" : "#a8a29e"}`)}
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium mb-2">
                    Message <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow resize-y"
                    style={css("border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 text-white text-[14px] font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer"
                  style={css("background: #2a2018")}
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Divider */}
            <div className="my-14 flex items-center gap-4">
              <div className="flex-1 h-px" style={css("background: #d8d2c8")} />
              <span className="text-[12px] uppercase tracking-[0.1em]" style={css("color: #8a7e70")}>
                Or
              </span>
              <div className="flex-1 h-px" style={css("background: #d8d2c8")} />
            </div>

            {/* Newsletter Signup */}
            <div className="p-8 md:p-10" style={css("background: #f4f1eb; border-radius: 10px")}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={css("background: #2a2018")}>
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-[20px]" style={css("font-family: 'Source Serif 4', serif")}>
                  Stay Connected
                </h3>
              </div>
              <p className="text-[14px] leading-[1.7] mb-6" style={css("color: #8a7e70")}>
                Subscribe to our newsletter for updates on new resources, community events, and
                inspiring stories from fellow Muslims on their journey.
              </p>

              {newsletterSuccess ? (
                <div className="text-center py-4">
                  <p className="text-[14px] font-medium" style={css("color: #2a2018")}>
                    You are subscribed! Welcome to the Being Muslim community.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={newsletterName}
                    onChange={(e) => setNewsletterName(e.target.value)}
                    placeholder="Your name"
                    className="flex-1 px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
                    style={css("border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
                    style={css("border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 text-white text-[13px] font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                    style={css("background: #2a2018")}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
