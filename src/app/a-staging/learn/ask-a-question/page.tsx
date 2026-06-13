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
      <section
        style={css("background-color: #2a2018; font-family: 'DM Sans', sans-serif")}
        className="pt-[72px]"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Link
              href="/a-staging/learn"
              style={css("color: rgba(240,235,227,0.6); font-family: 'DM Sans', sans-serif")}
              className="mb-6 inline-flex items-center gap-2 text-sm transition-colors hover:text-[#f0ebe3]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Learn
            </Link>
            <div
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full"
              style={css("background: rgba(196, 169, 125, 0.2)")}
            >
              <MessageCircle style={css("color: #c4a97d")} className="h-7 w-7" />
            </div>
            <h1
              style={css("font-family: 'Source Serif 4', serif; color: #f0ebe3")}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1]"
            >
              Ask a Question
            </h1>
            <p style={css("color: #f0ebe3")} className="mt-5 text-lg leading-relaxed opacity-70 max-w-lg mx-auto">
              No question is too simple or too small. Share what is on your mind and we will get back to you with a thoughtful, reliable answer.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={css("background-color: #f0ebe3; font-family: 'DM Sans', sans-serif")}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <div className="text-center py-12 px-6" style={css("background: #f4f1eb; border-radius: 10px")}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={css("background: #2a2018")}
                >
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[20px] font-semibold mb-2" style={css("font-family: 'Source Serif 4', serif")}>
                  Question Sent!
                </h3>
                <p className="text-[14px]" style={css("color: #8a7e70")}>
                  Thank you for reaching out. We will review your question and get back to you as soon as possible.
                </p>
                <button
                  className="mt-5 text-[13px] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer"
                  style={css("color: #2a2018")}
                  onClick={reset}
                >
                  Ask another question
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium mb-2">
                    Name <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
                    style={css("border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                </div>

                {/* Email */}
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

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="phone" className="block text-[13px] font-medium mb-2">
                    Phone <span style={css("color: #a8a29e")}>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
                    style={css("border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-[13px] font-medium mb-2">
                    Category <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow appearance-none cursor-pointer"
                    style={css(`border: 1px solid #d8d2c8; border-radius: 8px; color: ${category ? "#2a2018" : "#a8a29e"}`)}
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
                  <label htmlFor="question" className="block text-[13px] font-medium mb-2">
                    Question <span style={css("color: #c0392b")}>*</span>
                  </label>
                  <textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    rows={5}
                    placeholder="What would you like to ask?"
                    className="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow resize-y"
                    style={css("border: 1px solid #d8d2c8; border-radius: 8px")}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 text-white text-[14px] font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer"
                  style={css("background: #2a2018")}
                >
                  Send Question
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
