import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";

export function BuildYourOwnPromo() {
  const steps = [
    { num: "01", title: "Choose Meal", desc: "Burrito, Naked Bowl, 2 Tacos or Quesadilla" },
    { num: "02", title: "Select Filling", desc: "BBQ Chicken, Tinga, Pulled Beef, Chilli, Veg or Halloumi" },
    { num: "03", title: "Pick Toppings", desc: "Pico de gallo, queso, jalapeños, sour cream & cremas" },
    { num: "04", title: "Upgrade Meal", desc: "Add Fries or Tots + Jarritos or Can for just £3.99" },
  ];

  return (
    <section className="py-20 bg-white text-[#171717] border-b border-[#D2EEF1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#E4F7F8] via-[#F0FAF9] to-[#E8F8F9] border border-[#D2EEF1] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BDE8EC] text-xs font-bold uppercase tracking-wider text-[#058A92] shadow-sm">
                <Layers className="w-3.5 h-3.5" />
                <span>Customisation at Its Best</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase leading-tight text-[#171717]">
                MAKE IT <span className="text-[#058A92]">YOUR WAY.</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Choose your favourite fillings, explore delicious toppings and create a meal that
                hits just right. Every bowl and burrito is built to order.
              </p>

              {/* Step Process Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-left">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="p-3.5 rounded-xl bg-white border border-[#D2EEF1] shadow-sm"
                  >
                    <span className="font-heading font-black text-xl text-[#058A92]">
                      {step.num}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#171717] uppercase mt-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/build-your-own"
                  className="inline-flex items-center justify-center gap-2 bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#08D8E5]/20 transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">EXPLORE YOUR OPTIONS</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            {/* Right Column Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <div className="relative h-72 sm:h-80 w-full bg-slate-100">
                  <Image
                    src="/images/food/real/main-attractions-naked-burrito-hd.jpg"
                    alt="Customizable Mexican rice bowl with fresh toppings and salsa"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D2EEF1] shadow-md">
                  <p className="text-xs text-[#058A92] font-bold uppercase tracking-wider">
                    Build Your Own
                  </p>
                  <p className="text-sm font-bold text-[#171717] mt-0.5">
                    Burritos, Bowls, Tacos & Quesadillas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
