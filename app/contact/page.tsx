"use client";

import React, { useState } from "react";
import { RESTAURANT_INFO } from "@/data/restaurant";
import {
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info,
} from "lucide-react";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("General Enquiry");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!fullName.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setError("Please write your message.");
      return;
    }

    setSubmitting(true);

    // Simulated frontend acknowledgement
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="relative py-16 sm:py-20 bg-[#0d0d0d] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="bg-[#08D8E5]/20 text-[#08D8E5] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            We Value Your Feedback
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading uppercase tracking-tight">
            CONTACT <span className="text-[#08D8E5]">US</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Got a question about our menu, event catering, or dining in? Send us an enquiry or visit
            us on Bridge Street.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase text-white">
                Send Us An Enquiry
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Fill in the details below and we will get back to you as soon as possible.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#08D8E5]/20 text-[#08D8E5] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Message Recorded!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{fullName}</strong>. Your message regarding &ldquo;{enquiryType}&rdquo; has been received.
                </p>

                <div className="p-4 bg-[#181818] border border-[#2a2a2a] rounded-xl text-xs text-gray-400 max-w-md mx-auto text-left space-y-1">
                  <div className="flex items-center gap-2 text-[#08D8E5] font-semibold">
                    <Info className="w-4 h-4 shrink-0" />
                    <span>Backend Notice:</span>
                  </div>
                  <p>
                    This contact form is currently in demonstration mode. Connect an email dispatch service (such as Resend, SendGrid, or AWS SES) to forward enquiries to your restaurant inbox.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="py-2.5 px-6 rounded-full bg-[#202020] hover:bg-[#2a2a2a] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error && (
                  <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2.5 text-xs text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Full Name <span className="text-[#08D8E5]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Maya Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#181818] border border-[#2e2e2e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#08D8E5] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Email Address <span className="text-[#08D8E5]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. maya@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#181818] border border-[#2e2e2e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#08D8E5] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full bg-[#181818] border border-[#2e2e2e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#08D8E5] transition-colors"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Food / Menu Enquiry">Food / Menu Enquiry</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Message <span className="text-[#08D8E5]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us what's on your mind..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#181818] border border-[#2e2e2e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#08D8E5] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-4 px-6 rounded-xl flex items-center justify-center gap-2 tracking-wider shadow-lg shadow-[#08D8E5]/20 transition-all transform active:scale-[0.98] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "Sending..." : "Submit Message"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold font-heading uppercase text-white">
                Restaurant Contact Information
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#181818] border border-[#282828]">
                  <MapPin className="w-5 h-5 text-[#08D8E5] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white text-sm block">Location:</span>
                    <p className="text-gray-300 mt-0.5">{RESTAURANT_INFO.address.full}</p>
                    <p className="text-gray-500 mt-1">Plus Code: {RESTAURANT_INFO.address.plusCode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#181818] border border-[#282828]">
                  <Clock className="w-5 h-5 text-[#FFC43D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white text-sm block">Hours of Operation:</span>
                    <p className="text-gray-300 mt-0.5">Monday to Sunday: 11:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-2 border-t border-[#222222] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  Connect On Social Media
                </span>
                <div className="flex flex-col gap-2 text-xs">
                  <a
                    href={RESTAURANT_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#282828] text-gray-300 hover:text-[#08D8E5] flex items-center justify-between transition-colors"
                  >
                    <span>Instagram: @mexicanoexpress_</span>
                    <span>→</span>
                  </a>
                  <a
                    href={RESTAURANT_INFO.socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#282828] text-gray-300 hover:text-[#08D8E5] flex items-center justify-between transition-colors"
                  >
                    <span>TikTok: @mexicanoexpress_</span>
                    <span>→</span>
                  </a>
                  <a
                    href={RESTAURANT_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#282828] text-gray-300 hover:text-[#08D8E5] flex items-center justify-between transition-colors"
                  >
                    <span>Facebook: Mexi Cano Express</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
