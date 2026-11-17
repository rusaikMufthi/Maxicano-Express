import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurant";

export default function TermsPage() {
  return (
    <div className="bg-[#F0FAF9] text-[#171717] min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-white border border-[#D2EEF1] p-8 sm:p-12 rounded-3xl shadow-sm">
        <div className="border-b border-[#D2EEF1] pb-6">
          <span className="text-[#058A92] text-xs font-bold uppercase tracking-widest">
            Terms of Service
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase text-[#171717] mt-1">
            Terms & Conditions
          </h1>
          <p className="text-xs text-gray-500 mt-2">Last updated: November 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to be bound by these Terms and
              Conditions. If you do not agree with any part of these terms, please refrain from using
              the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              2. Restaurant Information & Menu Pricing
            </h2>
            <p>
              All menu items, descriptions, and prices displayed on this website reflect our current
              restaurant offerings at 41 Bridge St, Peterborough PE1 1HA, United Kingdom. Prices are
              quoted in British Pounds Sterling (£) and include applicable UK VAT. While we strive to
              keep information completely up-to-date, in-store pricing and daily ingredient
              availability take precedence in case of any discrepancy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              3. Online Ordering Status
            </h2>
            <p>
              The digital basket on this website is currently provided for demonstration and
              planning purposes. Submitting an order preview on this website does not constitute a
              binding contract of sale or confirmation of kitchen fulfilment. To place orders, please
              visit our store counter in person.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              4. Food Allergies & Dietary Disclaimers
            </h2>
            <p>
              Our kitchen prepares a variety of dishes containing dairy (cheese, sour cream, queso),
              gluten (flour tortillas), and other potential allergens. If you or any member of your
              party has a food allergy or dietary intolerance, please inform our team directly at the
              counter before placing your order so we can take appropriate precautions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website, including logos, visual brand identities, graphics, text,
              and design layouts, is the property of MEXI CANO EXPRESS and protected under applicable
              copyright and trademark laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">6. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws
              of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
