"use client";

import React, { useState } from "react";
import { RESTAURANT_INFO } from "@/data/restaurant";
import {
  MapPin,
  Clock,
  Navigation,
  Copy,
  Check,
} from "lucide-react";

export default function LocationPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#F0FAF9] text-[#171717] min-h-screen">
      {/* Header */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#DCF4F6] via-[#E8F8F9] to-[#F0FAF9] border-b border-[#D2EEF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="bg-white border border-[#BDE8EC] text-[#058A92] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm">
            Peterborough Location
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading uppercase tracking-tight text-[#171717]">
            FIND <span className="text-[#058A92]">US</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base max-w-xl mx-auto">
            Visit Mexi Cano Express in central Peterborough for dine-in and takeaway.
          </p>
        </div>
      </section>

      {/* Main Location Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Restaurant Card */}
            <div className="bg-white border border-[#D2EEF1] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#058A92]">
                  Fast-Casual Restaurant
                </span>
                <h2 className="text-3xl font-extrabold font-heading uppercase text-[#171717] mt-1">
                  {RESTAURANT_INFO.name}
                </h2>
                <p className="text-xs text-gray-500 mt-1">{RESTAURANT_INFO.type}</p>
              </div>

              {/* Address with copy button */}
              <div className="p-4 rounded-2xl bg-[#F7FCFD] border border-[#D2EEF1] space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#058A92] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Street Address
                    </span>
                    <p className="text-sm font-semibold text-[#171717] mt-0.5 leading-snug">
                      {RESTAURANT_INFO.address.street}
                      <br />
                      {RESTAURANT_INFO.address.city} {RESTAURANT_INFO.address.postcode}
                      <br />
                      {RESTAURANT_INFO.address.country}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 font-mono">
                      Plus Code: {RESTAURANT_INFO.address.plusCode}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#171717] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#058A92]" />
                      <span className="text-[#058A92]">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-400" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Opening Hours Schedule */}
              <div className="p-4 rounded-2xl bg-[#F7FCFD] border border-[#D2EEF1] space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#D97706] shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Opening Hours
                    </span>
                    <p className="text-sm font-semibold text-[#171717] mt-0.5">
                      Open Every Day: 11:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#D2EEF1] space-y-1.5 text-xs text-gray-700">
                  {RESTAURANT_INFO.openingHours.schedule.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span className="text-gray-500">{item.day}</span>
                      <span className="font-semibold text-[#171717]">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={RESTAURANT_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-4 px-6 rounded-2xl flex items-center justify-center gap-2 tracking-wider shadow-md shadow-[#08D8E5]/20 transition-transform active:scale-[0.98]"
              >
                <Navigation className="w-5 h-5" />
                <span>OPEN DIRECTIONS IN GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-100 h-[450px] sm:h-[580px] w-full">
              <iframe
                title="Mexi Cano Express Location - 41 Bridge St, Peterborough"
                src={RESTAURANT_INFO.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Local Context Notice */}
            <div className="p-4 rounded-2xl bg-white border border-[#D2EEF1] flex items-center justify-between text-xs text-gray-600 shadow-sm">
              <div className="flex items-center gap-2">
                <span>Convenient central Peterborough location on Bridge Street</span>
              </div>
              <a
                href={RESTAURANT_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#058A92] font-bold hover:underline shrink-0"
              >
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
