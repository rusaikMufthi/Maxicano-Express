"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  MENU_CATEGORIES,
  ALL_MENU_ITEMS,
  MenuItem,
  UPGRADE_MEAL,
  CHICKEN_PROMOTION,
  EXTRA_TOPPINGS,
  EXTRA_PROTEINS,
} from "@/data/menu";
import { ProductCard } from "@/components/menu/ProductCard";
import { ProductCustomizerModal } from "@/components/ordering/ProductCustomizerModal";
import { formatPrice } from "@/lib/utils";
import { Search, Sparkles } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  // Filter items based on activeCategory and searchQuery
  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.toppingsInfo &&
          item.toppingsInfo.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#F0FAF9] text-[#171717] min-h-screen">
      {/* Menu Page Hero Banner */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#DCF4F6] via-[#E8F8F9] to-[#F0FAF9] border-b border-[#D2EEF1] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="bg-white border border-[#BDE8EC] text-[#058A92] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm">
            Fast-Casual Peterborough Menu
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading uppercase tracking-tight text-[#171717]">
            OUR COMPLETE <span className="text-[#058A92]">MENU</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every dish is made to order using vibrant Mexican spices, slow-braised meats, crisp
            tortillas and signature cremas.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search burritos, tacos, dips, churros..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#CBD5E1] rounded-full pl-12 pr-12 py-3.5 text-sm text-[#171717] placeholder-gray-400 focus:outline-none focus:border-[#08D8E5] transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Categories Navigation Bar */}
      <div className="sticky top-[73px] z-30 bg-[#F0FAF9]/95 backdrop-blur-md border-b border-[#D2EEF1] py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === "all"
                  ? "bg-[#08D8E5] text-black shadow-md shadow-[#08D8E5]/25"
                  : "bg-white text-gray-700 hover:bg-slate-50 hover:text-black border border-[#CBD5E1] shadow-sm"
              }`}
            >
              All Items
            </button>
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-[#08D8E5] text-black shadow-md shadow-[#08D8E5]/25"
                      : "bg-white text-gray-700 hover:bg-slate-50 hover:text-black border border-[#CBD5E1] shadow-sm"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Menu Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Promotional Banner: Upgrade Your Meal */}
        <div className="bg-white border-2 border-[#08D8E5]/50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#D97706] text-xs font-bold uppercase tracking-wider bg-[#FFC43D]/20 px-3 py-1 rounded-full w-fit">
              <Sparkles className="w-4 h-4" />
              <span>Special Menu Value</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase text-[#171717]">
              UPGRADE YOUR MEAL FOR <span className="text-[#058A92]">£3.99</span>
            </h2>
            <p className="text-sm text-gray-700 max-w-xl">
              Choose <strong>ONE side</strong> (Tortilla Chips, Skin-on Fries, or Tater Tots) +{" "}
              <strong>ONE drink</strong> (Any Jarritos Mexican Soda or Can Drink) with any main meal.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="bg-[#08D8E5] text-black font-extrabold text-sm uppercase px-6 py-3 rounded-full shadow-lg shadow-[#08D8E5]/25">
              Only +£3.99
            </span>
          </div>
        </div>

        {/* When viewing by specific category or all */}
        {activeCategory !== "all" ? (
          // Single Selected Category View
          <div className="space-y-8">
            {MENU_CATEGORIES.filter((c) => c.id === activeCategory).map((cat) => (
              <div key={cat.id} className="space-y-6">
                <div className="border-b border-[#D2EEF1] pb-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-extrabold font-heading uppercase text-[#171717]">
                      {cat.name}
                    </h2>
                    {cat.badge && (
                      <span className="bg-[#08D8E5] text-black text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1 max-w-2xl">{cat.description}</p>
                  {cat.servedWith && (
                    <p className="text-xs text-[#058A92] mt-1 font-semibold">{cat.servedWith}</p>
                  )}
                  {cat.toppingsGuide && (
                    <div className="mt-3 p-3.5 bg-white border border-[#D2EEF1] rounded-xl text-xs space-y-1.5 shadow-sm">
                      <span className="text-[#D97706] font-bold uppercase tracking-wider block">
                        {cat.toppingsGuide.title}:
                      </span>
                      <ul className="space-y-1 text-gray-700 list-disc list-inside">
                        {cat.toppingsGuide.items.map((guide, i) => (
                          <li key={i}>
                            <strong>{guide.fillings}:</strong> {guide.toppings}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <ProductCard
                      key={item.id}
                      item={item}
                      onSelect={(product) => setSelectedProduct(product)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // All Categories View with Distinct Sections
          <div className="space-y-20">
            {MENU_CATEGORIES.map((cat) => {
              const categoryItems = filteredItems.filter(
                (item) => item.category === cat.id
              );
              if (categoryItems.length === 0) return null;

              return (
                <section
                  key={cat.id}
                  id={cat.id}
                  className="space-y-8 scroll-mt-36"
                >
                  <div className="border-b border-[#D2EEF1] pb-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase text-[#171717]">
                          {cat.name}
                        </h2>
                        {cat.badge && (
                          <span className="bg-[#08D8E5] text-black text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                            {cat.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {categoryItems.length} {categoryItems.length === 1 ? "Option" : "Options"}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-1 max-w-2xl">{cat.description}</p>
                    {cat.servedWith && (
                      <p className="text-xs text-[#058A92] mt-1 font-semibold">
                        {cat.servedWith}
                      </p>
                    )}

                    {cat.id === "chicken-bites" && (
                      <div className="mt-3 p-3 bg-[#FEF3C7] border border-[#FDE68A] rounded-xl text-xs text-[#92400E] font-bold">
                        Special: {CHICKEN_PROMOTION.description}
                      </div>
                    )}

                    {cat.toppingsGuide && (
                      <div className="mt-3 p-3.5 bg-white border border-[#D2EEF1] rounded-xl text-xs space-y-1 shadow-sm">
                        <span className="text-[#D97706] font-bold uppercase tracking-wider block">
                          {cat.toppingsGuide.title}:
                        </span>
                        <ul className="space-y-0.5 text-gray-700">
                          {cat.toppingsGuide.items.map((guide, i) => (
                            <li key={i} className="text-xs">
                              <span className="text-[#171717] font-semibold">• {guide.fillings}:</span>{" "}
                              {guide.toppings}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryItems.map((item) => (
                      <ProductCard
                        key={item.id}
                        item={item}
                        onSelect={(product) => setSelectedProduct(product)}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Extra Toppings and Proteins Summary Card */}
        <div className="bg-white border border-[#D2EEF1] rounded-3xl p-8 space-y-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-[#058A92] text-xs font-bold uppercase tracking-widest">
              Customise Any Meal
            </span>
            <h3 className="text-2xl font-bold font-heading uppercase text-[#171717]">
              EXTRA TOPPINGS & PROTEIN ADD-ONS
            </h3>
            <p className="text-xs text-gray-600">
              Customise your burritos, tacos, bowls and loaded sides with any extra toppings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Extra Toppings Table */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#D97706]">
                Extra Toppings
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {EXTRA_TOPPINGS.map((top) => (
                  <div
                    key={top.id}
                    className="p-2.5 rounded-lg bg-[#F7FCFD] border border-[#D2EEF1] flex items-center justify-between"
                  >
                    <span className="text-gray-700 font-medium">{top.name}</span>
                    <span className="font-bold text-[#058A92]">{formatPrice(top.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Protein */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#D97706]">
                Extra Protein Portions
              </h4>
              <div className="space-y-2 text-xs">
                {EXTRA_PROTEINS.map((prot) => (
                  <div
                    key={prot.id}
                    className="p-3 rounded-lg bg-[#F7FCFD] border border-[#D2EEF1] flex items-center justify-between"
                  >
                    <span className="text-gray-800 font-semibold">{prot.name}</span>
                    <span className="font-bold text-[#058A92] text-sm">
                      {formatPrice(prot.price)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-gray-500 pt-1">
                Also applies to loaded fries, tots and nachos (+£3.49 for beef or chicken).
              </p>
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
