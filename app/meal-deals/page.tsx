"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ALL_MENU_ITEMS, MenuItem } from "@/data/menu";
import { ProductCard } from "@/components/menu/ProductCard";
import { ProductCustomizerModal } from "@/components/ordering/ProductCustomizerModal";
import { formatPrice } from "@/lib/utils";
import { Users, Sparkles, Flame, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function MealDealsPage() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  const mealDealItems = ALL_MENU_ITEMS.filter(
    (item) => item.category === "kids-sharing"
  );

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 bg-[#0d0d0d] border-b border-[#222222] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/food/hero-spread.jpg"
            alt="Feast sharing spread"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-[#0d0d0d]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="bg-[#FFC43D]/20 text-[#FFC43D] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Family & Group Feasts
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading uppercase tracking-tight">
            MEAL DEALS & <span className="text-[#08D8E5]">SHARING</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From the kid-friendly Mini Luchadores box to massive TODO Trays and 12-Taco platters,
            explore our authentic sharing spreads built for great company.
          </p>
        </div>
      </section>

      {/* Main Deals Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Deal 1: Mini Luchadores (Kids Meal) Feature Card */}
        <div className="bg-gradient-to-br from-[#141414] to-[#0f0f0f] border border-[#2b2b2b] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#08D8E5]/20 text-[#08D8E5] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Children&apos;s Favourite
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase text-white">
                Mini Luchadores Kids Meal
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                A complete meal made specially for smaller champions. Choose between crispy chicken
                strips or a melted cheese mini quesadilla, accompanied by rice, fries or tots, and a
                refreshing drink.
              </p>

              <div className="space-y-2 text-xs text-gray-300 bg-[#1a1a1a] p-4 rounded-2xl border border-[#262626]">
                <p className="font-bold text-[#FFC43D] uppercase tracking-wider">Includes:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>3 Chicken Strips OR 1 Cheese Mini Quesadilla</li>
                  <li>Mexican Rice OR Fries OR Potato Tots</li>
                  <li>Fruit Shoot OR Cano Water</li>
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-3xl font-black font-heading text-[#08D8E5]">
                  £5.99
                </span>
                <button
                  onClick={() =>
                    setSelectedProduct(
                      ALL_MENU_ITEMS.find((i) => i.id === "kids-mini-luchadores") || null
                    )
                  }
                  className="bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs tracking-wider px-6 py-3 rounded-full transition-transform transform active:scale-95 shadow-lg shadow-[#08D8E5]/20"
                >
                  Configure & Add
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/food/cat-sharing.jpg"
                  alt="Mini Luchadores Kids Meal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Deal 2 & 3: TODO Trays & Birria TODO Trays */}
        <div className="space-y-8">
          <div className="border-b border-[#242424] pb-4">
            <span className="text-xs uppercase text-[#08D8E5] font-bold tracking-widest">
              Signature Group Feasts
            </span>
            <h2 className="text-3xl font-extrabold font-heading uppercase text-white mt-1">
              TODO Trays & Birria Feasts
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              All-in-one feast trays featuring tacos, loaded fries, wings, poppers, dips and Jarritos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard TODO Trays */}
            <div className="bg-[#121212] border border-[#262626] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="bg-[#FFC43D] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                      Feast For 2–3
                    </span>
                    <h3 className="text-2xl font-bold font-heading uppercase text-white mt-2">
                      TODO Trays
                    </h3>
                  </div>
                  <span className="text-2xl font-black font-heading text-[#08D8E5]">
                    £33.49
                  </span>
                </div>

                <div className="relative h-56 w-full rounded-xl overflow-hidden border border-[#222222]">
                  <Image
                    src="/images/food/hero-spread.jpg"
                    alt="TODO Trays Feast"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2 text-xs text-gray-300">
                  <p className="font-bold text-white uppercase tracking-wider">What&apos;s Included:</p>
                  <ul className="grid grid-cols-2 gap-1.5 text-gray-400">
                    <li>• 2 × Street Tacos</li>
                    <li>• 1 × Loaded Fries</li>
                    <li>• 5 × Chicken Wings</li>
                    <li>• 1 × Sour Cream/Cilantro</li>
                    <li>• 2 × Jarritos Drinks</li>
                    <li>• 1 × Cheesy Nachos</li>
                    <li>• 5 × Jalapeño Poppers</li>
                    <li>• 1 × Fresh Salsa</li>
                  </ul>
                  <p className="text-[11px] text-[#FFC43D] pt-2">
                    Choice of Taco Topping: BBQ Chicken, Chicken Tinga, Chilli, Fajita Veg, or Halloumi.
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedProduct(
                    ALL_MENU_ITEMS.find((i) => i.id === "todo-trays") || null
                  )
                }
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-4 rounded-xl text-xs tracking-wider transition-all"
              >
                Configure & Add TODO Tray
              </button>
            </div>

            {/* Birria TODO Trays */}
            <div className="bg-[#121212] border border-[#262626] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="bg-[#08D8E5] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                      Slow-Cooked Birria Upgrade
                    </span>
                    <h3 className="text-2xl font-bold font-heading uppercase text-white mt-2">
                      Birria TODO Trays
                    </h3>
                  </div>
                  <span className="text-2xl font-black font-heading text-[#08D8E5]">
                    £36.99
                  </span>
                </div>

                <div className="relative h-56 w-full rounded-xl overflow-hidden border border-[#222222]">
                  <Image
                    src="/images/food/hero-spread.jpg"
                    alt="Birria TODO Trays"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2 text-xs text-gray-300">
                  <p className="font-bold text-white uppercase tracking-wider">What&apos;s Included:</p>
                  <ul className="grid grid-cols-2 gap-1.5 text-gray-400">
                    <li>• 2 × Birria Pulled Beef Tacos</li>
                    <li>• 1 × Loaded Fries</li>
                    <li>• 5 × Chicken Wings</li>
                    <li>• 1 × Sour Cream/Cilantro</li>
                    <li>• 2 × Jarritos Drinks</li>
                    <li>• 1 × Cheesy Nachos</li>
                    <li>• 5 × Jalapeño Poppers</li>
                    <li>• 1 × Fresh Salsa</li>
                  </ul>
                  <p className="text-[11px] text-[#08D8E5] pt-2">
                    Featuring authentic slow-braised Mexican birria pulled beef tacos.
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedProduct(
                    ALL_MENU_ITEMS.find((i) => i.id === "birria-todo-trays") || null
                  )
                }
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-4 rounded-xl text-xs tracking-wider transition-all"
              >
                Configure & Add Birria Tray
              </button>
            </div>
          </div>
        </div>

        {/* Deal 4: EL GRANDE – 12 TACOS */}
        <div className="bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-[#FFC43D] text-black text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                Party Platter
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase text-white">
                EL GRANDE – 12 TACOS
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                The ultimate taco celebration box! 12 authentic street tacos packed with bold fillings,
                fresh coriander, onions and signature toppings. Perfect for sharing with friends and
                family.
              </p>

              <div className="space-y-2 text-xs text-gray-300 bg-[#181818] p-4 rounded-xl border border-[#242424]">
                <div className="flex justify-between items-center text-white font-bold">
                  <span>Standard 12 Tacos (Choose 3 Flavour Fillings):</span>
                  <span className="text-[#08D8E5] text-base">£33.49</span>
                </div>
                <div className="flex justify-between items-center text-white font-bold border-t border-[#262626] pt-2">
                  <span>All 12 Beef Birria Platter:</span>
                  <span className="text-[#08D8E5] text-base">£39.99</span>
                </div>
                <p className="text-[11px] text-gray-400 pt-1">
                  Flavour fillings: Chicken Tinga, BBQ Chicken, Chilli, Fajita Vegetables, Halloumi,
                  Beef Birria.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() =>
                    setSelectedProduct(
                      ALL_MENU_ITEMS.find((i) => i.id === "el-grande-12-tacos") || null
                    )
                  }
                  className="bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-full transition-transform transform active:scale-95 shadow-lg shadow-[#08D8E5]/20"
                >
                  Configure & Add EL GRANDE
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/food/cat-sharing.jpg"
                  alt="EL GRANDE 12 Tacos Platter"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for item customisation */}
      {selectedProduct && (
        <ProductCustomizerModal
          item={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
