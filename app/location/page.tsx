"use client";

import React, { useState } from "react";
import { RESTAURANT_INFO } from "@/data/restaurant";
import {
  MapPin,
  Clock,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Phone,
  Sparkles,
} from "lucide-react";

export default function LocationPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="relative py-16 sm:py-20 bg-[#0d0d0d] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="bg-[#08D8E5]/20 text-[#08D8E5] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Peterborough Location
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading uppercase tracking-tight">
            FIND <span className="text-[#08D8E5]">US</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
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
            <div className="bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#08D8E5]">
                  Fast-Casual Restaurant
                </span>
                <h2 className="text-3xl font-extrabold font-heading uppercase text-white mt-1">
                  {RESTAURANT_INFO.name}
                </h2>
                <p className="text-xs text-gray-400 mt-1">{RESTAURANT_INFO.type}</p>
              </div>

              {/* Address with copy button */}
              <div className="p-4 rounded-2xl bg-[#181818] border border-[#282828] space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#08D8E5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Street Address
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
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
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-[#222222] hover:bg-[#2c2c2c] border border-[#333333] text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#08D8E5]" />
                      <span className="text-[#08D8E5]">Address Copied!</span>
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
              <div className="p-4 rounded-2xl bg-[#181818] border border-[#282828] space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FFC43D] shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Opening Hours
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Open Every Day: 11:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#262626] space-y-1.5 text-xs text-gray-300">
                  {RESTAURANT_INFO.openingHours.schedule.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span className="text-gray-400">{item.day}</span>
                      <span className="font-semibold text-white">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={RESTAURANT_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-4 px-6 rounded-2xl flex items-center justify-center gap-2 tracking-wider shadow-lg shadow-[#08D8E5]/20 transition-transform active:scale-[0.98]"
              >
                <Navigation className="w-5 h-5" />
                <span>OPEN DIRECTIONS IN GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] shadow-2xl bg-[#121212] h-[450px] sm:h-[580px] w-full">
              <iframe
                title="Mexi Cano Express Location - 41 Bridge St, Peterborough"
                src={RESTAURANT_INFO.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 invert-[0.88] hue-rotate-180 brightness-95"
              />
            </div>

            {/* Local Context Notice */}
            <div className="p-4 rounded-2xl bg-[#121212] border border-[#222222] flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#08D8E5]" />
                <span>Convenient central Peterborough location on Bridge Street</span>
              </div>
              <a
                href={RESTAURANT_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#08D8E5] font-bold hover:underline shrink-0"
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
