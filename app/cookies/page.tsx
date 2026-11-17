import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurant";

export default function CookiesPage() {
  return (
    <div className="bg-[#F0FAF9] text-[#171717] min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-white border border-[#D2EEF1] p-8 sm:p-12 rounded-3xl shadow-sm">
        <div className="border-b border-[#D2EEF1] pb-6">
          <span className="text-[#058A92] text-xs font-bold uppercase tracking-widest">
            Transparency & Consent
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase text-[#171717] mt-1">
            Cookie Policy
          </h1>
          <p className="text-xs text-gray-500 mt-2">Last updated: November 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies and local browser storage are small text files or key-value entries stored on
              your computer or mobile device when you browse websites. They help websites recognize
              your device, preserve your basket selections, and ensure smooth functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              2. How MEXI CANO EXPRESS Uses Storage & Cookies
            </h2>
            <p>We use essential technologies to support website functionality:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong className="text-[#171717]">Essential Local Storage:</strong> Used to maintain
                the contents of your ordering basket (such as chosen burritos, tacos, toppings, and
                quantities) across page navigation without requiring you to log in.
              </li>
              <li>
                <strong className="text-[#171717]">Performance & Optimization:</strong> Minimal session
                cookies to assist with fast loading times and preventing server errors.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              3. Managing Your Preferences
            </h2>
            <p>
              Most web browsers allow you to modify cookie and local storage settings, delete existing
              cookies, or block them entirely. If you choose to disable local storage, please note
              that your items in the order basket will reset when you refresh or navigate away.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">4. Questions</h2>
            <p>
              For enquiries regarding our cookie practices, please contact us in store at 41 Bridge
              St, Peterborough PE1 1HA, United Kingdom.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
