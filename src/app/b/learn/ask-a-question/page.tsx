"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Send } from "lucide-react";
import { css } from "@/lib/css";

const categoryOptions = [
  "Conversion Related Questions",
  "Questions about Belief",
  "About Islamic Guidelines (devotions, dos/don'ts, etc.)",
  "Other",
];

export default function AskAQuestion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCategory("");
    setQuestion("");
    setSubmitted(false);
  };

  return (
    <>
      {/* Hero */}
      <section style={css("position: relative; min-height: 360px; display: flex; align-items: flex-end; overflow: hidden; background: #2a2018")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10" style={css("position: relative; z-index: 1; width: 100%; padding-bottom: 48px; padding-top: 140px")}>
          <Link
            href="/b/learn"
            style={css("color: rgba(240,235,227,0.6); font-family: 'DM Sans', sans-serif")}
            className="mb-6 inline-flex items-center gap-2 text-sm transition-colors hover:text-[#f0ebe3]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Learn
          </Link>
          <div style={css("width: 56px; height: 56px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; margin-bottom: 20px")}>
            <MessageCircle className="h-7 w-7" style={css("color: #c8b8a0")} />
          </div>
          <h1 style={css("font-family: 'Source Serif 4', serif; font-size: clamp(40px, 6vw, 64px); font-weight: 400; color: #fff; margin: 0 0 12px; line-height: 1.05")}>
            Ask a Question
          </h1>
          <p style={css("font-family: 'DM Sans', sans-serif; font-size: 17px; color: rgba(255,255,255,0.8); max-width: 520px; line-height: 1.6; margin: 0")}>
            No question is too simple or too small. Share what is on your mind and we will get back to you with a thoughtful, reliable answer.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bm-section-padding" style={css("background: #f0ebe3")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <div style={css("text-align: center; padding: 56px 24px; background: #faf9f5; border-radius: 16px")}>
                <div style={css("width: 56px; height: 56px; border-radius: 999px; background: #2a2018; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px")}>
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h3 style={css("font-family: 'Source Serif 4', serif; font-size: 22px; font-weight: 400; color: #2a2018; margin: 0 0 8px")}>
                  Question Sent!
                </h3>
                <p style={css("font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; margin: 0")}>
                  Thank you for reaching out. We will review your question and get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  style={css("margin-top: 20px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; background: none; border: none; cursor: pointer; text-decoration: underline; text-underline-offset: 4px")}
                >
                  Ask another question
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={css("display: flex; flex-direction: column; gap: 20px")}>
                {/* Name */}
                <div>
                  <label htmlFor="name" style={css("display: block; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 8px")}>
                    Name <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    style={css("width: 100%; padding: 12px 16px; background: #fff; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={css("display: block; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 8px")}>
                    Email <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    style={css("width: 100%; padding: 12px 16px; background: #fff; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="phone" style={css("display: block; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 8px")}>
                    Phone <span style={css("color: #a8a29e")}>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    style={css("width: 100%; padding: 12px 16px; background: #fff; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" style={css("display: block; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 8px")}>
                    Category <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    style={css(`width: 100%; padding: 12px 16px; background: #fff; font-family: 'DM Sans', sans-serif; font-size: 14px; border: 1px solid #d8d2c8; border-radius: 8px; cursor: pointer; color: ${category ? "#2a2018" : "#a8a29e"}`)}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categoryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Question */}
                <div>
                  <label htmlFor="question" style={css("display: block; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 8px")}>
                    Question <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    rows={5}
                    placeholder="What would you like to ask?"
                    style={css("width: 100%; padding: 12px 16px; background: #fff; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; border: 1px solid #d8d2c8; border-radius: 8px; resize: vertical")}
                  />
                </div>

                {/* Submit */}
                <div>
                  <button type="submit" className="bm-btn-dark" style={css("padding: 12px 28px")}>
                    Send Question
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
