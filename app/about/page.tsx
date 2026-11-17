import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Flame, Utensils, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#F0FAF9] text-[#171717] min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#DCF4F6] via-[#E8F8F9] to-[#F0FAF9] border-b border-[#D2EEF1] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="bg-white border border-[#BDE8EC] text-[#058A92] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm">
            Our Story & Food
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading uppercase tracking-tight text-[#171717]">
            BIG FLAVOURS. <span className="text-[#058A92]">MEXICAN SOUL.</span>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to Mexi Cano Express, your fast-casual Mexican food destination in Peterborough.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase text-[#171717] leading-tight">
              A Fresh Take On Fast-Casual Mexican Dining
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p className="text-lg text-[#171717] font-medium">
                Mexi Cano Express brings Mexican-inspired fast-casual food to Peterborough. From
                flavour-packed burritos and tacos to loaded sides and sweet churros, we&apos;re here
                to make every meal a little more exciting.
              </p>
              <p>
                Whether you&apos;re grabbing a quick workday lunch on Bridge Street, stopping by for
                dinner with friends, or taking home a feast for the family, our kitchen prepares every
                item expressly to order.
              </p>
              <p>
                From tender chicken tinga and slow-cooked birria pulled beef to crispy halloumi, fresh
                pico de gallo, and house-made cilantro lime cremas, we make bold Mexican flavours
                approachable, generous, and fast.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-full transition-transform transform active:scale-95 shadow-md shadow-[#08D8E5]/20 flex items-center gap-2"
              >
                <span>Explore The Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/location"
                className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#171717] font-bold uppercase text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-full transition-colors flex items-center gap-2 shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#058A92]" />
                <span>Visit Our Restaurant</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
              <div className="relative h-96 sm:h-[450px] w-full bg-slate-100">
                <Image
                  src="/images/food/tacos-street.jpg"
                  alt="Street tacos with cilantro, onions, and limes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D2EEF1] text-center shadow-md">
                <p className="font-heading font-bold text-base uppercase text-[#171717]">
                  Peterborough • 41 Bridge St
                </p>
                <p className="text-xs text-[#058A92] font-semibold mt-0.5">
                  Every Day: 11:00 AM – 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-8 rounded-3xl bg-white border border-[#D2EEF1] space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8F9] text-[#058A92] flex items-center justify-center font-heading font-bold text-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading uppercase text-[#171717]">
              Expressly Prepared
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Fast-casual service designed for speed and convenience, with hot meals rolled and
              assembled directly in front of you.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#D2EEF1] space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-heading font-bold text-xl">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading uppercase text-[#171717]">
              Generous Portions
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Hearty burritos, full rice bowls, loaded fries, and multi-piece sharing feasts that
              guarantee satisfaction.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#D2EEF1] space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8F9] text-[#058A92] flex items-center justify-center font-heading font-bold text-xl">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading uppercase text-[#171717]">
              Open 7 Days A Week
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Serving continuous dining from 11:00 AM through 11:00 PM every day of the week in
              central Peterborough.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
