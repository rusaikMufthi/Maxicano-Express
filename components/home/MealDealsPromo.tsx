import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, UtensilsCrossed, Star } from "lucide-react";

export function MealDealsPromo() {
  return (
    <section className="py-20 bg-[#0a0a0a] text-white border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-[#FFC43D] text-xs font-bold uppercase tracking-widest">
            <Users className="w-4 h-4" />
            <span>Feast Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase leading-tight">
            GOOD FOOD. <span className="text-[#08D8E5]">GREAT COMPANY.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Planning a gathering, party or family dinner? Dive into our signature feast trays and taco
            platters designed for sharing.
          </p>
        </div>

        {/* Feature Sharing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: TODO Trays */}
          <div className="bg-[#121212] border border-[#262626] rounded-3xl overflow-hidden shadow-xl flex flex-col group hover:border-[#08D8E5]/40 transition-colors">
            <div className="relative h-64 sm:h-72 w-full bg-neutral-900 overflow-hidden">
              <Image
                src="/images/food/hero-spread.jpg"
                alt="TODO Trays Mexican Sharing Feast"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#FFC43D] text-black font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow">
                Signature Feast Box
              </div>
              <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full font-heading font-black text-xl text-[#08D8E5]">
                £33.49
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-heading uppercase text-white group-hover:text-[#08D8E5] transition-colors">
                    TODO Trays
                  </h3>
                  <span className="text-xs text-gray-400">Birria Option £36.99</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  The ultimate Mexican feast packed with 2 Tacos, 1 Loaded Fries, 5 Chicken Wings, 1
                  Sour Cream or Cilantro Lime, 2 Jarritos Drinks, 1 Cheesy Nachos, 5 Jalapeño Poppers
                  and Salsa.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/meal-deals"
                  className="w-full bg-[#1c1c1c] hover:bg-[#08D8E5] text-white hover:text-black font-extrabold uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs tracking-wider transition-all"
                >
                  <span>View Details & Options</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: EL GRANDE 12 Tacos */}
          <div className="bg-[#121212] border border-[#262626] rounded-3xl overflow-hidden shadow-xl flex flex-col group hover:border-[#08D8E5]/40 transition-colors">
            <div className="relative h-64 sm:h-72 w-full bg-neutral-900 overflow-hidden">
              <Image
                src="/images/food/cat-sharing.jpg"
                alt="EL GRANDE 12 Tacos Platter"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#08D8E5] text-black font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow">
                12 Tacos Party Platter
              </div>
              <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full font-heading font-black text-xl text-[#08D8E5]">
                £33.49
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-heading uppercase text-white group-hover:text-[#08D8E5] transition-colors">
                    EL GRANDE – 12 Tacos
                  </h3>
                  <span className="text-xs text-gray-400">All Birria £39.99</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Mix and match up to 3 flavour fillings across 12 fresh street tacos: Chicken Tinga,
                  BBQ Chicken, Chilli, Fajita Veg, Halloumi, or Beef Birria.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/meal-deals"
                  className="w-full bg-[#1c1c1c] hover:bg-[#08D8E5] text-white hover:text-black font-extrabold uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs tracking-wider transition-all"
                >
                  <span>View Details & Options</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <Link
            href="/meal-deals"
            className="inline-flex items-center gap-2 bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#08D8E5]/20 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>EXPLORE SHARING OPTIONS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
