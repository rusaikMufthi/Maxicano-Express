"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ALL_MENU_ITEMS, MenuItem } from "@/data/menu";
import { ProductCustomizerModal } from "@/components/ordering/ProductCustomizerModal";

export default function MealDealsPage() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  return (
    <div className="bg-[#F0FAF9] text-[#171717] min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#DCF4F6] via-[#E8F8F9] to-[#F0FAF9] border-b border-[#D2EEF1] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="bg-white border border-[#BDE8EC] text-[#D97706] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm">
            Family & Group Feasts
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading uppercase tracking-tight text-[#171717]">
            MEAL DEALS & <span className="text-[#058A92]">SHARING</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From the kid-friendly Mini Luchadores box to massive TODO Trays and 12-Taco platters,
            explore our authentic sharing spreads built for great company.
          </p>
        </div>
      </section>

      {/* Main Deals Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Deal 1: Mini Luchadores (Kids Meal) Feature Card */}
        <div className="bg-white border border-[#D2EEF1] rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#E6F7F8] text-[#058A92] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                Children&apos;s Favourite
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase text-[#171717]">
                Mini Luchadores Kids Meal
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                A complete meal made specially for smaller champions. Choose between crispy chicken
                strips or a melted cheese mini quesadilla, accompanied by rice, fries or tots, and a
                refreshing drink.
              </p>

              <div className="space-y-2 text-xs text-gray-700 bg-[#F7FCFD] p-4 rounded-2xl border border-[#D2EEF1]">
                <p className="font-bold text-[#D97706] uppercase tracking-wider">Includes:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>3 Chicken Strips OR 1 Cheese Mini Quesadilla</li>
                  <li>Mexican Rice OR Fries OR Potato Tots</li>
                  <li>Fruit Shoot OR Water</li>
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-3xl font-black font-heading text-[#058A92]">
                  £5.99
                </span>
                <button
                  onClick={() =>
                    setSelectedProduct(
                      ALL_MENU_ITEMS.find((i) => i.id === "kids-mini-luchadores") || null
                    )
                  }
                  className="bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs tracking-wider px-5 sm:px-6 py-3 rounded-full transition-transform transform active:scale-95 shadow-md shadow-[#08D8E5]/20 whitespace-nowrap shrink-0"
                >
                  Configure & Add
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border-2 border-[#D2EEF1] bg-slate-100">
                <Image
                  src="/images/food/real/los-ninos-kids-3pcs-chicken-stripc-meal-png.png"
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
          <div className="border-b border-[#D2EEF1] pb-4">
            <span className="text-xs uppercase text-[#058A92] font-bold tracking-widest">
              Signature Group Feasts
            </span>
            <h2 className="text-3xl font-extrabold font-heading uppercase text-[#171717] mt-1">
              TODO Trays & Birria Feasts
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              All-in-one feast trays featuring tacos, loaded fries, wings, poppers, dips and Jarritos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard TODO Trays */}
            <div className="bg-white border border-[#D2EEF1] hover:border-[#08D8E5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between p-6 sm:p-8 space-y-6 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="bg-[#FFC43D] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                      Feast For 2–3
                    </span>
                    <h3 className="text-2xl font-bold font-heading uppercase text-[#171717] mt-2">
                      TODO Trays
                    </h3>
                  </div>
                  <span className="text-2xl font-black font-heading text-[#058A92]">
                    £33.49
                  </span>
                </div>

                <div className="relative h-56 w-full rounded-xl overflow-hidden border border-[#D2EEF1] bg-slate-100">
                  <Image
                    src="/images/food/real/cartel-trays-meaty-cartel-tray-jpg.jpg"
                    alt="TODO Trays Feast"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2 text-xs text-gray-700">
                  <p className="font-bold text-[#171717] uppercase tracking-wider">What&apos;s Included:</p>
                  <ul className="grid grid-cols-2 gap-1.5 text-gray-600">
                    <li>• 2 × Street Tacos</li>
                    <li>• 1 × Loaded Fries</li>
                    <li>• 5 × Chicken Wings</li>
                    <li>• 1 × Sour Cream/Cilantro</li>
                    <li>• 2 × Jarritos Drinks</li>
                    <li>• 1 × Cheesy Nachos</li>
                    <li>• 5 × Jalapeño Poppers</li>
                    <li>• 1 × Fresh Salsa</li>
                  </ul>
                  <p className="text-[11px] text-[#D97706] pt-2 font-medium">
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
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-4 rounded-xl text-xs sm:text-sm tracking-wider transition-all shadow-md shadow-[#08D8E5]/20 whitespace-nowrap text-center flex items-center justify-center"
              >
                Configure & Add TODO Tray
              </button>
            </div>

            {/* Birria TODO Trays */}
            <div className="bg-white border border-[#D2EEF1] hover:border-[#08D8E5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between p-6 sm:p-8 space-y-6 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="bg-[#08D8E5] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                      Slow-Cooked Birria Upgrade
                    </span>
                    <h3 className="text-2xl font-bold font-heading uppercase text-[#171717] mt-2">
                      Birria TODO Trays
                    </h3>
                  </div>
                  <span className="text-2xl font-black font-heading text-[#058A92]">
                    £36.99
                  </span>
                </div>

                <div className="relative h-56 w-full rounded-xl overflow-hidden border border-[#D2EEF1] bg-slate-100">
                  <Image
                    src="/images/food/real/cartel-trays-veggie-cartel-tray-jpg.jpg"
                    alt="Birria TODO Trays"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2 text-xs text-gray-700">
                  <p className="font-bold text-[#171717] uppercase tracking-wider">What&apos;s Included:</p>
                  <ul className="grid grid-cols-2 gap-1.5 text-gray-600">
                    <li>• 2 × Birria Pulled Beef Tacos</li>
                    <li>• 1 × Loaded Fries</li>
                    <li>• 5 × Chicken Wings</li>
                    <li>• 1 × Sour Cream/Cilantro</li>
                    <li>• 2 × Jarritos Drinks</li>
                    <li>• 1 × Cheesy Nachos</li>
                    <li>• 5 × Jalapeño Poppers</li>
                    <li>• 1 × Fresh Salsa</li>
                  </ul>
                  <p className="text-[11px] text-[#058A92] pt-2 font-semibold">
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
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-4 rounded-xl text-xs sm:text-sm tracking-wider transition-all shadow-md shadow-[#08D8E5]/20 whitespace-nowrap text-center flex items-center justify-center"
              >
                Configure & Add Birria Tray
              </button>
            </div>
          </div>
        </div>

        {/* Deal 4: EL GRANDE – 12 TACOS */}
        <div className="bg-white border border-[#D2EEF1] rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-[#FFC43D] text-black text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Party Platter
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase text-[#171717]">
                EL GRANDE – 12 TACOS
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                The ultimate taco celebration box! 12 authentic street tacos packed with bold fillings,
                fresh coriander, onions and signature toppings. Perfect for sharing with friends and
                family.
              </p>

              <div className="space-y-2 text-xs text-gray-700 bg-[#F7FCFD] p-4 rounded-2xl border border-[#D2EEF1]">
                <div className="flex justify-between items-center text-[#171717] font-bold">
                  <span>Standard 12 Tacos (Choose 4 Flavour Fillings):</span>
                  <span className="text-[#058A92] text-base">£33.49</span>
                </div>
                <div className="flex justify-between items-center text-[#171717] font-bold border-t border-[#D2EEF1] pt-2">
                  <span>All 12 Beef Birria Platter:</span>
                  <span className="text-[#058A92] text-base">£39.99</span>
                </div>
                <p className="text-[11px] text-gray-500 pt-1">
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
                  className="bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider px-6 sm:px-8 py-3.5 rounded-full transition-transform transform active:scale-95 shadow-lg shadow-[#08D8E5]/20 whitespace-nowrap text-center inline-flex items-center justify-center"
                >
                  Configure & Add EL GRANDE
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-[#D2EEF1] bg-slate-100">
                <Image
                  src="/images/food/real/muchos-tacos-muchos-tacos-jpg.jpg"
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
