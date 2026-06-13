"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  BookOpen,
  Package,
  HandHeart,
  Users,
  Mail,
  Phone,
  MapPin,
  Building2,
  Minus,
  Plus,
  CreditCard,
  ClipboardList,
  CheckCircle2,
  Star,
} from "lucide-react";
import { css } from "@/lib/css";

type DonationCategory = "general" | "books" | "boxed-sets";

const sections = [
  { id: "donate", label: "Donate" },
  { id: "request", label: "Request a Donation" },
  { id: "volunteer", label: "Volunteer" },
] as const;

const donationCategories = [
  { id: "general" as DonationCategory, label: "General", description: "Support wherever needed most", Icon: Heart, unitCost: 0 },
  { id: "books" as DonationCategory, label: "Books", description: "Fund a copy of Being Muslim", Icon: BookOpen, unitCost: 25 },
  { id: "boxed-sets" as DonationCategory, label: "Boxed Sets", description: "Complete set with prayer cards", Icon: Package, unitCost: 85 },
] as const;

const presetAmounts = [25, 50, 85, 100];

const volunteerOpportunities = [
  { title: "Content Translation", description: "Help translate Being Muslim resources into other languages so we can reach more communities worldwide.", Icon: BookOpen },
  { title: "Mentorship Program", description: "Become a mentor for new Muslims in your area. Share your knowledge, answer questions, and provide support.", Icon: Users },
  { title: "Community Outreach", description: "Help us connect with mosques, community centers, and organizations that serve new Muslims.", Icon: HandHeart },
  { title: "Event Support", description: "Assist with organizing and running workshops, seminars, and community events in your city.", Icon: Building2 },
] as const;

const emptyRequestForm = {
  organizationName: "",
  contactName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  resources: { books: false, boxedSets: false, prayerCards: false },
  quantity: "",
  howUsed: "",
};

export default function ConceptAStagingSupport() {
  const [activeSection, setActiveSection] = useState<string>("donate");

  const [donationCategory, setDonationCategory] = useState<DonationCategory>("general");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");

  const [requestForm, setRequestForm] = useState(emptyRequestForm);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  function scrollToSection(id: string) {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const isItemDonation = donationCategory !== "general";
  const activeCat = donationCategories.find((c) => c.id === donationCategory)!;

  const effectiveAmount = isItemDonation
    ? activeCat.unitCost * itemQuantity
    : selectedAmount ?? (customAmount ? parseFloat(customAmount) || 0 : 0);

  function selectAmount(amount: number) {
    setSelectedAmount(amount);
    setCustomAmount("");
  }

  function handleCustomAmount(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  }

  function adjustQuantity(delta: number) {
    setItemQuantity((q) => Math.max(1, Math.min(100, q + delta)));
  }

  function selectCategory(id: DonationCategory) {
    setDonationCategory(id);
    if (id === "general") {
      setSelectedAmount(50);
      setCustomAmount("");
    }
  }

  function handleRequestSubmit(e: React.FormEvent) {
    e.preventDefault();
    setRequestSubmitted(true);
  }

  const sectionLabel = (text: string) => (
    <div className="flex items-center justify-center gap-2 mb-4">
      <Star className="w-3.5 h-3.5" style={css("color: #c4a97d")} />
      <span className="text-[12px] font-medium uppercase tracking-[0.12em]" style={css("color: #8a7e70")}>
        {text}
      </span>
    </div>
  );

  return (
    <div style={css("font-family: 'DM Sans', sans-serif; color: #2a2018")}>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-[72px]" style={css("background: #2a2018")}>
        <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase mb-4" style={css("color: #c4a97d; letter-spacing: 0.08em")}>
              &#9670; Get Involved
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}>
              Support the <span className="italic" style={css("color: #c4a97d")}>Mission</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed" style={css("color: #f0ebe3; opacity: 0.8")}>
              Every new Muslim deserves access to beautiful, accurate resources. Whether you give,
              request materials for your community, or volunteer your time &mdash; you are part of
              this mission.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {sections.map((section) => {
                const active = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    className="rounded-full border px-5 py-2 text-sm font-medium transition-all"
                    style={css(
                      active
                        ? "border-color: #c4a97d; background: rgba(196,169,125,0.2); color: #c4a97d"
                        : "border-color: rgba(240,235,227,0.2); color: rgba(240,235,227,0.7)"
                    )}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 1. DONATE ===== */}
      <section id="donate" className="bm-section-padding" style={css("background: #faf9f5")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              {sectionLabel("Donate")}
              <h2 className="text-[32px] sm:text-[40px] font-bold" style={css("font-family: 'Source Serif 4', serif")}>
                Support the Mission
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.7]" style={css("color: #8a7e70")}>
                Your generosity helps new Muslims access the resources they need to begin their
                journey with confidence. Every dollar makes a difference &mdash; whether it funds a
                single book or an entire boxed set.
              </p>
            </div>

            <div className="mt-10 p-6 sm:p-8" style={css("border: 1px solid #d8d2c8; background: #fff; border-radius: 16px")}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider" style={css("color: #8a7e70")}>
                What would you like to support?
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {donationCategories.map((cat) => {
                  const active = donationCategory === cat.id;
                  const Icon = cat.Icon;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className="flex flex-col items-center p-5 text-center transition-all"
                      style={css(
                        active
                          ? "border: 2px solid #2a2018; background: rgba(42,32,24,0.04); border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08)"
                          : "border: 2px solid #d8d2c8; background: #fff; border-radius: 12px"
                      )}
                      onClick={() => selectCategory(cat.id)}
                    >
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={css(active ? "background: rgba(42,32,24,0.12)" : "background: #f4f1eb")}
                      >
                        <Icon className="h-5 w-5" style={css(active ? "color: #2a2018" : "color: #8a7e70")} />
                      </div>
                      <p className="mt-3 text-sm font-semibold" style={css("font-family: 'Source Serif 4', serif")}>
                        {cat.label}
                      </p>
                      <p className="mt-1 text-xs" style={css("color: #8a7e70")}>
                        {cat.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="my-6 h-px" style={css("background: #d8d2c8")} />

              {!isItemDonation ? (
                <>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {presetAmounts.map((amount) => {
                      const active = selectedAmount === amount;
                      return (
                        <button
                          key={amount}
                          type="button"
                          className="px-4 py-3 text-center text-lg font-semibold transition-all"
                          style={css(
                            active
                              ? "border: 2px solid #2a2018; background: rgba(42,32,24,0.04); color: #2a2018; border-radius: 8px; font-family: 'Source Serif 4', serif"
                              : "border: 2px solid #d8d2c8; background: #fff; color: #2a2018; border-radius: 8px; font-family: 'Source Serif 4', serif"
                          )}
                          onClick={() => selectAmount(amount)}
                        >
                          ${amount}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2" style={css("color: #8a7e70")}>
                        $
                      </span>
                      <input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        className="h-12 w-full pl-7 text-lg focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                        style={css(
                          customAmount
                            ? "border: 1px solid #2a2018; border-radius: 8px; background: #fff"
                            : "border: 1px solid #d8d2c8; border-radius: 8px; background: #fff"
                        )}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold" style={css("font-family: 'Source Serif 4', serif")}>
                        {activeCat.label} &mdash; ${activeCat.unitCost} each
                      </p>
                      <p className="mt-1 text-sm" style={css("color: #8a7e70")}>
                        Includes estimated shipping costs
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center transition-colors disabled:opacity-50"
                        style={css("border: 1px solid #d8d2c8; background: #fff; border-radius: 8px")}
                        onClick={() => adjustQuantity(-1)}
                        disabled={itemQuantity <= 1}
                      >
                        <Minus className="h-4 w-4" style={css("color: #8a7e70")} />
                      </button>
                      <span className="min-w-[3rem] text-center text-2xl font-bold" style={css("font-family: 'Source Serif 4', serif")}>
                        {itemQuantity}
                      </span>
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center transition-colors"
                        style={css("border: 1px solid #d8d2c8; background: #fff; border-radius: 8px")}
                        onClick={() => adjustQuantity(1)}
                      >
                        <Plus className="h-4 w-4" style={css("color: #8a7e70")} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 p-4 text-center" style={css("background: #f4f1eb; border-radius: 8px")}>
                    <p className="text-sm" style={css("color: #8a7e70")}>
                      Your donation covers{" "}
                      <strong style={css("color: #2a2018")}>
                        {itemQuantity} {activeCat.label.toLowerCase()}
                      </strong>{" "}
                      including estimated shipping
                    </p>
                  </div>
                </>
              )}

              {/* Total + CTA */}
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div>
                  <p className="text-sm" style={css("color: #8a7e70")}>Donation total</p>
                  <p className="text-3xl font-bold" style={css("font-family: 'Source Serif 4', serif; color: #2a2018")}>
                    ${effectiveAmount > 0 ? effectiveAmount.toLocaleString() : "0"}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 px-8 py-3 text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 sm:w-auto"
                  style={css("background: #2a2018")}
                  disabled={!effectiveAmount || effectiveAmount <= 0}
                >
                  {effectiveAmount > 0 ? `Donate $${effectiveAmount.toLocaleString()}` : "Select an amount"}
                  <CreditCard className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-4 text-center text-xs" style={css("color: #8a7e70")}>
                Secure payment processed via Stripe. All donations are tax-deductible. Tax ID:
                82-1234567
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. REQUEST A DONATION ===== */}
      <section id="request" className="bm-section-padding" style={css("background: #f4f1eb")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              {sectionLabel("Request Resources")}
              <h2 className="text-[32px] sm:text-[40px] font-bold" style={css("font-family: 'Source Serif 4', serif")}>
                Request a Donation
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.7]" style={css("color: #8a7e70")}>
                Are you a mosque, community center, or organization that serves new Muslims? We
                provide free Being Muslim resources to qualifying organizations. Fill out the form
                below and our team will be in touch.
              </p>
            </div>

            {requestSubmitted ? (
              <div className="mt-10 p-8 text-center sm:p-12" style={css("border: 1px solid #b9cdbf; background: rgba(45,106,79,0.05); border-radius: 16px")}>
                <CheckCircle2 className="mx-auto h-14 w-14" style={css("color: #2d6a4f")} />
                <h3 className="mt-4 text-2xl font-bold" style={css("font-family: 'Source Serif 4', serif")}>
                  Request Submitted
                </h3>
                <p className="mx-auto mt-3 max-w-md" style={css("color: #8a7e70")}>
                  Thank you for reaching out. Our team will review your request and get back to you
                  within 5 business days.
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-full transition-colors"
                  style={css("border: 1px solid #2a2018; color: #2a2018; background: transparent")}
                  onClick={() => {
                    setRequestSubmitted(false);
                    setRequestForm(emptyRequestForm);
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="mt-10 p-6 sm:p-8" style={css("border: 1px solid #d8d2c8; background: #fff; border-radius: 16px")} onSubmit={handleRequestSubmit}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider" style={css("color: #8a7e70")}>
                  Organization Information
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="org-name" className="mb-1.5 block text-sm font-medium">
                      Organization Name <span style={css("color: #c0392b")}>*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={css("color: #8a7e70")} />
                      <input
                        id="org-name"
                        placeholder="Masjid Al-Noor"
                        value={requestForm.organizationName}
                        onChange={(e) => setRequestForm((f) => ({ ...f, organizationName: e.target.value }))}
                        required
                        className="w-full py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                        style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff")}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                      Contact Name <span style={css("color: #c0392b")}>*</span>
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={css("color: #8a7e70")} />
                      <input
                        id="contact-name"
                        placeholder="Ahmad Khan"
                        value={requestForm.contactName}
                        onChange={(e) => setRequestForm((f) => ({ ...f, contactName: e.target.value }))}
                        required
                        className="w-full py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                        style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff")}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email <span style={css("color: #c0392b")}>*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={css("color: #8a7e70")} />
                      <input
                        id="email"
                        type="email"
                        placeholder="contact@masjid.org"
                        value={requestForm.email}
                        onChange={(e) => setRequestForm((f) => ({ ...f, email: e.target.value }))}
                        required
                        className="w-full py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                        style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff")}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={css("color: #8a7e70")} />
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={requestForm.phone}
                        onChange={(e) => setRequestForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                        style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff")}
                      />
                    </div>
                  </div>
                </div>

                <div className="my-6 h-px" style={css("background: #d8d2c8")} />

                <p className="mb-4 text-sm font-semibold uppercase tracking-wider" style={css("color: #8a7e70")}>
                  Shipping Address
                </p>
                <div className="grid gap-4">
                  <div>
                    <label htmlFor="address" className="mb-1.5 block text-sm font-medium">
                      Street Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={css("color: #8a7e70")} />
                      <input
                        id="address"
                        placeholder="123 Main Street"
                        value={requestForm.address}
                        onChange={(e) => setRequestForm((f) => ({ ...f, address: e.target.value }))}
                        className="w-full py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                        style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff")}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="city" className="mb-1.5 block text-sm font-medium">City</label>
                      <input
                        id="city"
                        placeholder="Chicago"
                        value={requestForm.city}
                        onChange={(e) => setRequestForm((f) => ({ ...f, city: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                        style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff")}
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="mb-1.5 block text-sm font-medium">State</label>
                      <input
                        id="state"
                        placeholder="IL"
                        value={requestForm.state}
                        onChange={(e) => setRequestForm((f) => ({ ...f, state: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                        style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff")}
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className="mb-1.5 block text-sm font-medium">ZIP</label>
                      <input
                        id="zip"
                        placeholder="60601"
                        value={requestForm.zip}
                        onChange={(e) => setRequestForm((f) => ({ ...f, zip: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                        style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff")}
                      />
                    </div>
                  </div>
                </div>

                <div className="my-6 h-px" style={css("background: #d8d2c8")} />

                <p className="mb-4 text-sm font-semibold uppercase tracking-wider" style={css("color: #8a7e70")}>
                  Resources Needed
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {([
                    { key: "books" as const, title: "Books", sub: "Being Muslim book" },
                    { key: "boxedSets" as const, title: "Boxed Sets", sub: "Book + prayer cards + guide" },
                    { key: "prayerCards" as const, title: "Prayer Cards", sub: "Quick-reference prayer cards" },
                  ]).map((res) => {
                    const checked = requestForm.resources[res.key];
                    return (
                      <label
                        key={res.key}
                        className="flex cursor-pointer items-center gap-3 p-4 transition-all"
                        style={css(
                          checked
                            ? "border: 2px solid #2a2018; background: rgba(42,32,24,0.04); border-radius: 12px"
                            : "border: 2px solid #d8d2c8; border-radius: 12px"
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={(e) =>
                            setRequestForm((f) => ({
                              ...f,
                              resources: { ...f.resources, [res.key]: e.target.checked },
                            }))
                          }
                          className="h-4 w-4"
                          style={css("accent-color: #2a2018")}
                        />
                        <div>
                          <p className="text-sm font-semibold">{res.title}</p>
                          <p className="text-xs" style={css("color: #8a7e70")}>{res.sub}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>

                <div className="mt-4">
                  <label htmlFor="quantity" className="mb-1.5 block text-sm font-medium">
                    Approximate Quantity Needed
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    placeholder="e.g. 25"
                    value={requestForm.quantity}
                    onChange={(e) => setRequestForm((f) => ({ ...f, quantity: e.target.value }))}
                    className="w-full px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                    style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff")}
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="how-used" className="mb-1.5 block text-sm font-medium">
                    How will these resources be used?
                  </label>
                  <textarea
                    id="how-used"
                    value={requestForm.howUsed}
                    onChange={(e) => setRequestForm((f) => ({ ...f, howUsed: e.target.value }))}
                    placeholder="Tell us about your community, how many new Muslims you serve, and how you plan to distribute the resources..."
                    rows={4}
                    className="w-full px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a2018]/20"
                    style={css("border: 1px solid #d8d2c8; border-radius: 8px; background: #fff; resize: vertical")}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 px-8 py-3 text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                  style={css("background: #2a2018")}
                >
                  Submit Request
                  <ClipboardList className="h-5 w-5" />
                </button>

                <p className="mt-3 text-center text-xs" style={css("color: #8a7e70")}>
                  We review all requests within 5 business days. Priority is given to organizations
                  actively serving new Muslims.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== 3. VOLUNTEER ===== */}
      <section id="volunteer" className="bm-section-padding" style={css("background: #faf9f5")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              {sectionLabel("Volunteer")}
              <h2 className="text-[32px] sm:text-[40px] font-bold" style={css("font-family: 'Source Serif 4', serif")}>
                Give Your Time
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.7]" style={css("color: #8a7e70")}>
                Our mission relies on dedicated volunteers who share a passion for empowering new
                Muslims. Whether you have a few hours a week or want to take on a bigger role, there
                is a place for you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {volunteerOpportunities.map(({ title, description, Icon }) => (
                <div key={title} className="p-6 transition-all hover:shadow-lg" style={css("border: 1px solid #d8d2c8; background: #fff; border-radius: 12px")}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={css("background: rgba(42,32,24,0.08)")}>
                    <Icon className="h-6 w-6" style={css("color: #2a2018")} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold" style={css("font-family: 'Source Serif 4', serif")}>
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={css("color: #8a7e70")}>
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA → contact form with volunteering option */}
            <div className="mt-12 p-8 text-center sm:p-12" style={css("border: 1px solid #d8d2c8; background: #f4f1eb; border-radius: 16px")}>
              <HandHeart className="mx-auto h-12 w-12" style={css("color: #c4a97d")} />
              <h3 className="mt-4 text-2xl font-bold" style={css("font-family: 'Source Serif 4', serif")}>
                Ready to make a difference?
              </h3>
              <p className="mx-auto mt-3 max-w-lg" style={css("color: #8a7e70")}>
                Reach out through our contact form and select &ldquo;Volunteer With Us&rdquo; &mdash;
                we will match you with an opportunity that fits your skills, availability, and
                passions.
              </p>
              <Link
                href="/a-staging/contact"
                className="mt-6 inline-flex items-center gap-2 px-8 py-3 text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                style={css("background: #2a2018")}
              >
                Volunteer Interest Form
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 sm:py-24" style={css("background: #2a2018")}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Heart className="mx-auto h-12 w-12" style={css("color: #c4a97d")} />
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold" style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}>
              Every act of support matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={css("color: #f0ebe3; opacity: 0.8")}>
              The Prophet Muhammad (peace be upon him) said:{" "}
              <em>&ldquo;The best of people are those who are most beneficial to others.&rdquo;</em>{" "}
              Whether you donate, request resources for your community, or give your time &mdash; you
              are part of something bigger.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
                style={css("background: #c4a97d; color: #2a2018")}
                onClick={() => scrollToSection("donate")}
              >
                <Heart className="h-5 w-5" />
                Donate Now
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors"
                style={css("border: 1px solid rgba(240,235,227,0.3); color: #f0ebe3; background: transparent")}
                onClick={() => scrollToSection("request")}
              >
                <ClipboardList className="h-5 w-5" />
                Request Resources
              </button>
            </div>
            <p className="mt-6 text-sm" style={css("color: rgba(240,235,227,0.5)")}>
              Being Muslim is a 501(c)(3) nonprofit. Tax ID: 82-1234567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
