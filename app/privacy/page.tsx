import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurant";

export default function PrivacyPage() {
  return (
    <div className="bg-[#F0FAF9] text-[#171717] min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-white border border-[#D2EEF1] p-8 sm:p-12 rounded-3xl shadow-sm">
        <div className="border-b border-[#D2EEF1] pb-6">
          <span className="text-[#058A92] text-xs font-bold uppercase tracking-widest">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase text-[#171717] mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mt-2">Last updated: November 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">1. Introduction</h2>
            <p>
              MEXI CANO EXPRESS (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates
              the website for our restaurant located at 41 Bridge St, Peterborough PE1 1HA, United
              Kingdom. We are committed to safeguarding the privacy and personal data of our visitors
              and customers in compliance with the UK General Data Protection Regulation (UK GDPR) and
              the Data Protection Act 2018.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              2. Information We Collect
            </h2>
            <p>We may collect and process information when you interact with our website:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>
                <strong className="text-[#171717]">Contact Information:</strong> Name, email address,
                and details submitted through our contact form.
              </li>
              <li>
                <strong className="text-[#171717]">Usage & Session Data:</strong> Technical details such
                as browser type, device information, and anonymous usage metrics to improve website
                performance.
              </li>
              <li>
                <strong className="text-[#171717]">Local Basket Data:</strong> Items added to your online
                order basket are stored locally on your device (via browser localStorage) so that your
                selections persist between visits.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              3. Online Ordering & Payment Data
            </h2>
            <p>
              Please note that this website currently features an interactive menu basket and
              demonstration checkout. We do not collect, process, or store credit card details or
              financial payment information on this website. When live ordering is implemented,
              payments will be handled securely by accredited payment gateways.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              4. How We Use Your Information
            </h2>
            <p>Information collected is used solely to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Respond directly to customer inquiries and feedback.</li>
              <li>Maintain and optimise website performance, security, and accessibility.</li>
              <li>Comply with applicable legal or regulatory requirements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">
              5. Your Legal Rights
            </h2>
            <p>
              Under UK data protection laws, you possess rights including the right to access,
              rectify, or erase your personal information held by us, or to restrict or object to its
              processing. To exercise any of these rights, please reach out to us at our restaurant
              premises on 41 Bridge St, Peterborough.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#171717] uppercase">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please visit us at 41 Bridge St,
              Peterborough PE1 1HA, United Kingdom.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
