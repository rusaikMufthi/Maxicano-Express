import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils, Zap, Users } from "lucide-react";

export function ConceptSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#E6F6F7] text-[#171717] border-b border-[#D2EEF1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Concept */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-white border border-[#BDE8EC] text-[#058A92] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
              The Mexi Cano Experience
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase leading-tight text-[#171717]">
              YOUR MEXICAN CRAVINGS, <span className="text-[#058A92]">SORTED.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Whether you&apos;re grabbing a quick lunch, enjoying dinner with friends or sharing a
              feast with family, Mexi Cano Express brings together Mexican-inspired favourites,
              generous portions and bold flavours.
            </p>

            {/* Three key pillars */}
            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#D2EEF1] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8F9] text-[#058A92] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#171717] uppercase text-base">
                    Fast & Expressly Made
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    Quick service without compromising on flavour, heat or portion size. Made fresh to order every time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#D2EEF1] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#171717] uppercase text-base">
                    Endless Customisation
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    Build your own burrito, taco set, bowl or quesadilla with your choice of seasoned meats, zesty toppings and house cremas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#D2EEF1] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8F9] text-[#058A92] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#171717] uppercase text-base">
                    Dine-In, Takeaway & Feasting
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    Enjoy in our Peterborough dining room or take it away. Perfect for solo lunches or giant family sharing trays.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#058A92] hover:underline"
              >
                <span>Read More About Mexi Cano Express</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white">
              <div className="relative h-[480px] w-full bg-slate-100">
                <Image
                  src="/images/food/tacos-street.jpg"
                  alt="Street tacos loaded with fresh garnishes and spices"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D2EEF1] shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-lg font-bold text-[#171717] uppercase">
                      Street-Style Tacos
                    </h4>
                    <p className="text-xs text-gray-600">
                      Served as 2 loaded tacos per order with signature cremas & lime
                    </p>
                  </div>
                  <span className="font-heading text-xl font-bold text-[#D97706]">From £8.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
