import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Flame, Clock } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurant";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E4F6F7] via-[#F0FAF9] to-[#E8F7F8] text-[#171717] pt-10 pb-16 lg:py-24 border-b border-[#D2EEF1]">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#08D8E5]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] bg-[#FFC43D]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BCE7EC] text-xs font-bold uppercase tracking-wider text-[#058A92] shadow-sm">
              <span>Peterborough&apos;s New Mexican Destination</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight uppercase text-[#171717]">
              TRUE MEXICAN FLAVOURS.{" "}
              <span className="text-[#058A92] block sm:inline">EXPRESSLY MADE.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              From loaded burritos and flavour-packed tacos to cheesy quesadillas and irresistible
              sides, discover your Mexican favourites at Mexi Cano Express.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/menu"
                className="w-full sm:w-auto bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#08D8E5]/25 flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">EXPLORE OUR MENU</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                href="/location"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#171717] font-bold uppercase text-xs sm:text-sm tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-sm flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <MapPin className="w-4 h-4 text-[#058A92] shrink-0" />
                <span className="whitespace-nowrap">FIND OUR RESTAURANT</span>
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-[#D2EEF1] grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div>
                <span className="block font-heading text-lg sm:text-2xl font-bold text-[#D97706]">
                  11 AM – 11 PM
                </span>
                <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Open 7 Days</span>
              </div>
              <div>
                <span className="block font-heading text-lg sm:text-2xl font-bold text-[#171717]">
                  41 BRIDGE ST
                </span>
                <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Peterborough</span>
              </div>
              <div>
                <span className="block font-heading text-lg sm:text-2xl font-bold text-[#058A92]">
                  FRESH DAILY
                </span>
                <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Dine-In &amp; Takeaway</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Food Feature Card */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white group">
                <div className="relative h-80 sm:h-96 w-full bg-slate-100">
                  <Image
                    src="/images/food/real/main-attractions-burrito-hd.jpg"
                    alt="Loaded Burrito with seasoned fillings, Mexican rice, cheese and pico de gallo"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Floating Badge on image */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#FFC43D]" />
                  <span className="text-xs font-bold tracking-wider uppercase text-white">
                    Signature Tinga Burrito
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#D2EEF1] p-4 rounded-2xl flex items-center justify-between shadow-lg">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#171717] uppercase">
                      Chicken Tinga Burrito
                    </h3>
                    <p className="text-xs text-gray-600">
                      Rice, Queso, Sour Cream, Cilantro Lime & Jalapeños
                    </p>
                  </div>
                  <span className="font-heading text-xl font-extrabold text-[#058A92]">
                    £8.99
                  </span>
                </div>
              </div>

              {/* Floating secondary badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#08D8E5] text-black p-4 rounded-2xl shadow-xl flex-col items-center justify-center border-2 border-white">
                <span className="font-heading font-black text-2xl leading-none">100%</span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-black/90">
                  Flavour Packed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
