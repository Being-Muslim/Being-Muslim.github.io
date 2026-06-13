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

export default function ConceptBStagingSupport() {
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

  const eyebrow = (text: string) => (
    <span style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px")}>
      {text}
    </span>
  );

  return (
    <div style={css("font-family: 'DM Sans', sans-serif; color: #2a2018")}>
      {/* ===== HERO (light) ===== */}
      <section style={css("background: #faf9f5; padding: 100px 0 64px")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10" style={css("text-align: center")}>
          {eyebrow("Get Involved")}
          <h1 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(40px, 6vw, 64px); font-weight: 400; color: #2a2018; margin: 16px 0 0; line-height: 1.05")}>
            Support the Mission
          </h1>
          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 17px; color: #8a7e70; max-width: 600px; line-height: 1.65; margin: 20px auto 0")}>
            Every new Muslim deserves access to beautiful, accurate resources. Whether you give,
            request materials for your community, or volunteer your time &mdash; you are part of this
            mission.
          </p>

          {/* Anchor nav */}
          <div style={css("display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 36px")}>
            {sections.map((section) => {
              const active = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  style={css(
                    `font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; padding: 10px 24px; border-radius: 999px; cursor: pointer; transition: all 0.2s; ${
                      active
                        ? "background: #2a2018; color: #fff; border: 1px solid #2a2018"
                        : "background: transparent; color: #2a2018; border: 1px solid #d8d2c8"
                    }`
                  )}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 1. DONATE ===== */}
      <section id="donate" className="bm-section-padding" style={css("background: #f4f1eb")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("max-width: 720px; margin: 0 auto")}>
            <div style={css("text-align: center")}>
              {eyebrow("Donate")}
              <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 12px 0 0; line-height: 1.15")}>
                Support the Mission
              </h2>
              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 14px auto 0; max-width: 560px")}>
                Your generosity helps new Muslims access the resources they need to begin their
                journey with confidence. Every dollar makes a difference &mdash; whether it funds a
                single book or an entire boxed set.
              </p>
            </div>

            <div style={css("margin-top: 40px; background: #faf9f5; border-radius: 16px; border: 1px solid #e2dcd2; padding: 32px")}>
              {/* Categories: General / Books / Boxed Sets */}
              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px")}>
                What would you like to support?
              </p>
              <div className="bm-grid-3" style={css("gap: 12px")}>
                {donationCategories.map((cat) => {
                  const active = donationCategory === cat.id;
                  const Icon = cat.Icon;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      style={css(
                        `display: flex; flex-direction: column; align-items: center; padding: 20px 12px; border-radius: 12px; cursor: pointer; transition: all 0.2s; text-align: center; ${
                          active ? "background: #2a2018; border: 1px solid #2a2018" : "background: transparent; border: 1px solid #d8d2c8"
                        }`
                      )}
                      onClick={() => selectCategory(cat.id)}
                    >
                      <div style={css(`width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; ${active ? "background: rgba(200,184,160,0.2)" : "background: #f4f1eb"}`)}>
                        <Icon className="h-5 w-5" style={css(`color: ${active ? "#c8b8a0" : "#8a7e70"}`)} />
                      </div>
                      <p style={css(`font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; margin: 10px 0 0; color: ${active ? "#fff" : "#2a2018"}`)}>
                        {cat.label}
                      </p>
                      <p style={css(`font-family: 'DM Sans', sans-serif; font-size: 12px; margin: 4px 0 0; color: ${active ? "rgba(255,255,255,0.6)" : "#8a7e70"}`)}>
                        {cat.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div style={css("height: 1px; background: #e2dcd2; margin: 24px 0")} />

              {/* General → preset amounts + custom; Item → quantity selector */}
              {!isItemDonation ? (
                <>
                  <div className="bm-grid-4" style={css("gap: 12px")}>
                    {presetAmounts.map((amount) => {
                      const active = selectedAmount === amount;
                      return (
                        <button
                          key={amount}
                          type="button"
                          style={css(
                            `font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 600; padding: 14px; border-radius: 10px; cursor: pointer; transition: all 0.2s; text-align: center; ${
                              active ? "background: #2a2018; color: #fff; border: 1px solid #2a2018" : "background: transparent; color: #2a2018; border: 1px solid #d8d2c8"
                            }`
                          )}
                          onClick={() => selectAmount(amount)}
                        >
                          ${amount}
                        </button>
                      );
                    })}
                  </div>

                  <div style={css("margin-top: 16px; position: relative")}>
                    <span style={css("position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70")}>
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={handleCustomAmount}
                      style={css(`width: 100%; box-sizing: border-box; height: 48px; padding: 0 14px 0 30px; font-family: 'DM Sans', sans-serif; font-size: 15px; color: #2a2018; background: #fff; border: 1px solid ${customAmount ? "#2a2018" : "#d8d2c8"}; border-radius: 10px; outline: none`)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div style={css("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px")}>
                    <div>
                      <p style={css("font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0")}>
                        {activeCat.label} &mdash; ${activeCat.unitCost} each
                      </p>
                      <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; margin: 4px 0 0")}>
                        Includes estimated shipping costs
                      </p>
                    </div>

                    <div style={css("display: flex; align-items: center; gap: 16px")}>
                      <button
                        type="button"
                        style={css("width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; cursor: pointer; transition: all 0.2s")}
                        onClick={() => adjustQuantity(-1)}
                        disabled={itemQuantity <= 1}
                      >
                        <Minus className="h-4 w-4" style={css("color: #8a7e70")} />
                      </button>
                      <span style={css("font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 600; color: #2a2018; min-width: 48px; text-align: center")}>
                        {itemQuantity}
                      </span>
                      <button
                        type="button"
                        style={css("width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; cursor: pointer; transition: all 0.2s")}
                        onClick={() => adjustQuantity(1)}
                      >
                        <Plus className="h-4 w-4" style={css("color: #8a7e70")} />
                      </button>
                    </div>
                  </div>

                  <div style={css("margin-top: 16px; background: #f4f1eb; border-radius: 10px; padding: 16px; text-align: center")}>
                    <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; margin: 0")}>
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
              <div style={css("margin-top: 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px")}>
                <div>
                  <p style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; margin: 0")}>Donation total</p>
                  <p style={css("font-family: 'Source Serif 4', serif; font-size: 32px; font-weight: 600; color: #2a2018; margin: 4px 0 0")}>
                    ${effectiveAmount > 0 ? effectiveAmount.toLocaleString() : "0"}
                  </p>
                </div>
                <button
                  type="button"
                  className="bm-btn-dark"
                  style={css(`padding: 14px 32px; font-size: 15px; opacity: ${!effectiveAmount || effectiveAmount <= 0 ? "0.5" : "1"}; pointer-events: ${!effectiveAmount || effectiveAmount <= 0 ? "none" : "auto"}`)}
                  disabled={!effectiveAmount || effectiveAmount <= 0}
                >
                  {effectiveAmount > 0 ? `Donate $${effectiveAmount.toLocaleString()}` : "Select an amount"}
                  <CreditCard className="h-4 w-4" />
                </button>
              </div>

              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; text-align: center; margin: 16px 0 0")}>
                Secure payment processed via Stripe. All donations are tax-deductible. Tax ID: 82-1234567
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. REQUEST A DONATION ===== */}
      <section id="request" className="bm-section-padding" style={css("background: #faf9f5")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("max-width: 720px; margin: 0 auto")}>
            <div style={css("text-align: center")}>
              {eyebrow("Request Resources")}
              <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 12px 0 0; line-height: 1.15")}>
                Request a Donation
              </h2>
              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 14px auto 0; max-width: 560px")}>
                Are you a mosque, community center, or organization that serves new Muslims? We provide
                free Being Muslim resources to qualifying organizations. Fill out the form below and our
                team will be in touch.
              </p>
            </div>

            {requestSubmitted ? (
              <div style={css("margin-top: 40px; background: #f4f1eb; border-radius: 16px; border: 1px solid #e2dcd2; padding: 48px 32px; text-align: center")}>
                <CheckCircle2 className="mx-auto h-14 w-14" style={css("color: #7a8b6e")} />
                <h3 style={css("font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 16px 0 0")}>
                  Request Submitted
                </h3>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; max-width: 400px; margin: 12px auto 0; line-height: 1.6")}>
                  Thank you for reaching out. Our team will review your request and get back to you
                  within 5 business days.
                </p>
                <button
                  type="button"
                  className="bm-btn-outline"
                  style={css("margin-top: 24px")}
                  onClick={() => {
                    setRequestSubmitted(false);
                    setRequestForm(emptyRequestForm);
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form style={css("margin-top: 40px; background: #f4f1eb; border-radius: 16px; border: 1px solid #e2dcd2; padding: 32px")} onSubmit={handleRequestSubmit}>
                {/* Organization Info */}
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px")}>
                  Organization Information
                </p>
                <div className="bm-grid-stats">
                  <div>
                    <label htmlFor="org-name" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>
                      Organization Name <span style={css("color: #c0392b")}>*</span>
                    </label>
                    <div style={css("position: relative")}>
                      <Building2 className="h-4 w-4" style={css("position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70")} />
                      <input
                        id="org-name"
                        placeholder="Masjid Al-Noor"
                        value={requestForm.organizationName}
                        onChange={(e) => setRequestForm((f) => ({ ...f, organizationName: e.target.value }))}
                        required
                        style={css("width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none")}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-name" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>
                      Contact Name <span style={css("color: #c0392b")}>*</span>
                    </label>
                    <div style={css("position: relative")}>
                      <Users className="h-4 w-4" style={css("position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70")} />
                      <input
                        id="contact-name"
                        placeholder="Ahmad Khan"
                        value={requestForm.contactName}
                        onChange={(e) => setRequestForm((f) => ({ ...f, contactName: e.target.value }))}
                        required
                        style={css("width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none")}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>
                      Email <span style={css("color: #c0392b")}>*</span>
                    </label>
                    <div style={css("position: relative")}>
                      <Mail className="h-4 w-4" style={css("position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70")} />
                      <input
                        id="email"
                        type="email"
                        placeholder="contact@masjid.org"
                        value={requestForm.email}
                        onChange={(e) => setRequestForm((f) => ({ ...f, email: e.target.value }))}
                        required
                        style={css("width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none")}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>
                      Phone
                    </label>
                    <div style={css("position: relative")}>
                      <Phone className="h-4 w-4" style={css("position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70")} />
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={requestForm.phone}
                        onChange={(e) => setRequestForm((f) => ({ ...f, phone: e.target.value }))}
                        style={css("width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none")}
                      />
                    </div>
                  </div>
                </div>

                <div style={css("height: 1px; background: #e2dcd2; margin: 24px 0")} />

                {/* Shipping Address */}
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px")}>
                  Shipping Address
                </p>
                <div style={css("display: grid; gap: 16px")}>
                  <div>
                    <label htmlFor="address" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>
                      Street Address
                    </label>
                    <div style={css("position: relative")}>
                      <MapPin className="h-4 w-4" style={css("position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70")} />
                      <input
                        id="address"
                        placeholder="123 Main Street"
                        value={requestForm.address}
                        onChange={(e) => setRequestForm((f) => ({ ...f, address: e.target.value }))}
                        style={css("width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none")}
                      />
                    </div>
                  </div>
                  <div className="bm-grid-3" style={css("gap: 16px")}>
                    <div>
                      <label htmlFor="city" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>City</label>
                      <input
                        id="city"
                        placeholder="Chicago"
                        value={requestForm.city}
                        onChange={(e) => setRequestForm((f) => ({ ...f, city: e.target.value }))}
                        style={css("width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none")}
                      />
                    </div>
                    <div>
                      <label htmlFor="state" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>State</label>
                      <input
                        id="state"
                        placeholder="IL"
                        value={requestForm.state}
                        onChange={(e) => setRequestForm((f) => ({ ...f, state: e.target.value }))}
                        style={css("width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none")}
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>ZIP</label>
                      <input
                        id="zip"
                        placeholder="60601"
                        value={requestForm.zip}
                        onChange={(e) => setRequestForm((f) => ({ ...f, zip: e.target.value }))}
                        style={css("width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none")}
                      />
                    </div>
                  </div>
                </div>

                <div style={css("height: 1px; background: #e2dcd2; margin: 24px 0")} />

                {/* Resources Needed — quantities */}
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px")}>
                  Resources Needed
                </p>
                <div className="bm-grid-3" style={css("gap: 12px")}>
                  {([
                    { key: "books" as const, title: "Books", sub: "Being Muslim book" },
                    { key: "boxedSets" as const, title: "Boxed Sets", sub: "Book + prayer cards + guide" },
                    { key: "prayerCards" as const, title: "Prayer Cards", sub: "Quick-reference prayer cards" },
                  ]).map((res) => {
                    const checked = requestForm.resources[res.key];
                    return (
                      <label
                        key={res.key}
                        style={css(
                          `display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s; ${
                            checked ? "background: #2a2018; border: 1px solid #2a2018" : "background: transparent; border: 1px solid #d8d2c8"
                          }`
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
                          style={css("width: 16px; height: 16px; accent-color: #c8b8a0; flex-shrink: 0")}
                        />
                        <div>
                          <p style={css(`font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; margin: 0; color: ${checked ? "#fff" : "#2a2018"}`)}>{res.title}</p>
                          <p style={css(`font-family: 'DM Sans', sans-serif; font-size: 12px; margin: 2px 0 0; color: ${checked ? "rgba(255,255,255,0.6)" : "#8a7e70"}`)}>{res.sub}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>

                <div style={css("margin-top: 16px")}>
                  <label htmlFor="quantity" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>
                    Approximate Quantity Needed
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    placeholder="e.g. 25"
                    value={requestForm.quantity}
                    onChange={(e) => setRequestForm((f) => ({ ...f, quantity: e.target.value }))}
                    style={css("width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none")}
                  />
                </div>

                <div style={css("margin-top: 16px")}>
                  <label htmlFor="how-used" style={css("font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px")}>
                    How will these resources be used?
                  </label>
                  <textarea
                    id="how-used"
                    value={requestForm.howUsed}
                    onChange={(e) => setRequestForm((f) => ({ ...f, howUsed: e.target.value }))}
                    placeholder="Tell us about your community, how many new Muslims you serve, and how you plan to distribute the resources..."
                    rows={4}
                    style={css("width: 100%; box-sizing: border-box; padding: 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none; resize: vertical; line-height: 1.6")}
                  />
                </div>

                <button
                  type="submit"
                  className="bm-btn-dark"
                  style={css("width: 100%; justify-content: center; margin-top: 24px; padding: 14px 28px; font-size: 15px")}
                >
                  Submit Request
                  <ClipboardList className="h-4 w-4" />
                </button>

                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; text-align: center; margin: 12px 0 0")}>
                  We review all requests within 5 business days. Priority is given to organizations
                  actively serving new Muslims.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== 3. VOLUNTEER ===== */}
      <section id="volunteer" className="bm-section-padding" style={css("background: #f4f1eb")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("max-width: 900px; margin: 0 auto")}>
            <div style={css("text-align: center")}>
              {eyebrow("Volunteer")}
              <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 12px 0 0; line-height: 1.15")}>
                Give Your Time
              </h2>
              <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 14px auto 0; max-width: 560px")}>
                Our mission relies on dedicated volunteers who share a passion for empowering new
                Muslims. Whether you have a few hours a week or want to take on a bigger role, there is
                a place for you.
              </p>
            </div>

            <div className="bm-grid-stats" style={css("margin-top: 48px")}>
              {volunteerOpportunities.map(({ title, description, Icon }) => (
                <div key={title} className="bm-card-hover" style={css("background: #faf9f5; border-radius: 14px; padding: 28px; transition: all 0.2s")}>
                  <div style={css("width: 48px; height: 48px; border-radius: 12px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center")}>
                    <Icon className="h-5 w-5" style={css("color: #c8b8a0")} />
                  </div>
                  <h3 style={css("font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 16px 0 0; line-height: 1.3")}>
                    {title}
                  </h3>
                  <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 8px 0 0")}>
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA → contact form with volunteering option */}
            <div style={css("margin-top: 48px; background: #2a2018; border-radius: 16px; padding: 40px; display: flex; flex-wrap: wrap; align-items: center; gap: 32px")}>
              <div style={css("width: 64px; height: 64px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0")}>
                <HandHeart className="h-8 w-8" style={css("color: #c8b8a0")} />
              </div>
              <div style={css("flex: 1; min-width: 240px")}>
                <h3 style={css("font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.2")}>
                  Ready to make a difference?
                </h3>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.55); margin: 0; line-height: 1.6")}>
                  Reach out through our contact form and select &ldquo;Volunteer With Us&rdquo; &mdash; we
                  will match you with an opportunity that fits your skills, availability, and passions.
                </p>
              </div>
              <Link href="/b/contact" className="bm-btn-white" style={css("flex-shrink: 0; padding: 12px 28px")}>
                Volunteer Interest Form <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section style={css("background: #2a2018; padding: 80px 0")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div style={css("max-width: 600px; margin: 0 auto; text-align: center")}>
            <div style={css("width: 56px; height: 56px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto")}>
              <Heart className="h-7 w-7" style={css("color: #c8b8a0")} />
            </div>
            <h2 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #fff; margin: 24px 0 0; line-height: 1.15")}>
              Every act of support matters
            </h2>
            <p style={css("font-family: 'DM Sans', sans-serif; font-size: 16px; color: rgba(255,255,255,0.55); line-height: 1.65; margin: 16px 0 0")}>
              The Prophet Muhammad (peace be upon him) said:{" "}
              <em>&ldquo;The best of people are those who are most beneficial to others.&rdquo;</em>{" "}
              Whether you donate, request resources for your community, or give your time &mdash; you
              are part of something bigger.
            </p>
            <div style={css("display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 36px")}>
              <button type="button" className="bm-btn-white" onClick={() => scrollToSection("donate")}>
                <Heart className="h-4 w-4" />
                Donate Now
              </button>
              <button type="button" className="bm-btn-glass" onClick={() => scrollToSection("request")}>
                <ClipboardList className="h-4 w-4" />
                Request Resources
              </button>
            </div>
            <p style={css("font-family: 'DM Sans', sans-serif; font-size: 12px; color: rgba(255,255,255,0.35); margin: 24px 0 0")}>
              Being Muslim is a 501(c)(3) nonprofit. Tax ID: 82-1234567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
