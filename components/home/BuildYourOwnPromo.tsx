import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Layers, Sparkles } from "lucide-react";

export function BuildYourOwnPromo() {
  const steps = [
    { num: "01", title: "Choose Meal", desc: "Burrito, Naked Bowl, 2 Tacos or Quesadilla" },
    { num: "02", title: "Select Filling", desc: "BBQ Chicken, Tinga, Pulled Beef, Chilli, Veg or Halloumi" },
    { num: "03", title: "Pick Toppings", desc: "Pico de gallo, queso, jalapeños, sour cream & cremas" },
    { num: "04", title: "Upgrade Meal", desc: "Add Fries or Tots + Jarritos or Can for just £3.99" },
  ];

  return (
    <section className="py-20 bg-black text-white border-b border-[#222222] relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[300px] bg-[#08D8E5]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#121212] via-[#101010] to-[#0c0c0c] border border-[#262626] rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1e1e] border border-[#2e2e2e] text-xs font-bold uppercase tracking-wider text-[#08D8E5]">
                <Layers className="w-3.5 h-3.5" />
                <span>Customisation at Its Best</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase leading-tight">
                MAKE IT <span className="text-[#08D8E5]">YOUR WAY.</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Choose your favourite fillings, explore delicious toppings and create a meal that
                hits just right. Every bowl and burrito is built to order.
              </p>

              {/* Step Process Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-left">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="p-3.5 rounded-xl bg-[#161616] border border-[#262626]"
                  >
                    <span className="font-heading font-black text-xl text-[#08D8E5]">
                      {step.num}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-white uppercase mt-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/build-your-own"
                  className="inline-flex items-center justify-center gap-2 bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#08D8E5]/20 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>EXPLORE YOUR OPTIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#2e2e2e] shadow-xl">
                <div className="relative h-72 sm:h-80 w-full bg-neutral-900">
                  <Image
                    src="/images/food/cat-naked-burritos.jpg"
                    alt="Customizable Mexican rice bowl with fresh toppings and salsa"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-[#333333]">
                  <p className="text-xs text-[#08D8E5] font-bold uppercase tracking-wider">
                    Build Your Own
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
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
