import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Heart, Utensils, Clock } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurant";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-[#0d0d0d] border-b border-[#222222] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/food/hero-burrito.jpg"
            alt="Mexi Cano Express Burritos"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-[#0d0d0d]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="bg-[#08D8E5]/20 text-[#08D8E5] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Our Story & Food
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading uppercase tracking-tight">
            BIG FLAVOURS. <span className="text-[#08D8E5]">MEXICAN SOUL.</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to Mexi Cano Express, your fast-casual Mexican food destination in Peterborough.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase text-white leading-tight">
              A Fresh Take On Fast-Casual Mexican Dining
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p className="text-lg text-white font-medium">
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
                className="bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-full transition-transform transform active:scale-95 shadow-lg shadow-[#08D8E5]/20 flex items-center gap-2"
              >
                <span>Explore The Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/location"
                className="bg-[#181818] hover:bg-[#252525] border border-[#333333] text-white font-bold uppercase text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-full transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#08D8E5]" />
                <span>Visit Our Restaurant</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#2e2e2e] shadow-2xl bg-[#121212]">
              <div className="relative h-96 sm:h-[450px] w-full">
                <Image
                  src="/images/food/tacos-street.jpg"
                  alt="Street tacos with cilantro, onions, and limes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-[#2e2e2e] text-center">
                <p className="font-heading font-bold text-base uppercase text-white">
                  Peterborough • 41 Bridge St
                </p>
                <p className="text-xs text-[#08D8E5] font-semibold mt-0.5">
                  Every Day: 11:00 AM – 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-8 rounded-3xl bg-[#121212] border border-[#242424] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#08D8E5]/15 text-[#08D8E5] flex items-center justify-center font-heading font-bold text-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading uppercase text-white">
              Expressly Prepared
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Fast-casual service designed for speed and convenience, with hot meals rolled and
              assembled directly in front of you.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#121212] border border-[#242424] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFC43D]/15 text-[#FFC43D] flex items-center justify-center font-heading font-bold text-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading uppercase text-white">
              Generous Portions
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Hearty burritos, full rice bowls, loaded fries, and multi-piece sharing feasts that
              guarantee satisfaction.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#121212] border border-[#242424] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#08D8E5]/15 text-[#08D8E5] flex items-center justify-center font-heading font-bold text-xl">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading uppercase text-white">
              Open 7 Days A Week
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Serving continuous dining from 11:00 AM through 11:00 PM every day of the week in
              central Peterborough.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
