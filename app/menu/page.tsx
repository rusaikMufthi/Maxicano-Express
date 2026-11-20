"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  MENU_CATEGORIES,
  ALL_MENU_ITEMS,
  MenuItem,
  UPGRADE_MEAL,
  EL_CRUNCHITO_COMBO,
  MACHO_LOADED_NOTE,
  EXTRA_TOPPINGS,
  EXTRA_PROTEINS,
  EXTRA_SAUCES_CHEESE,
  MAINS_TABLE_DATA,
  ALLERGY_NOTICE,
} from "@/data/menu";
import { ProductCard } from "@/components/menu/ProductCard";
import { ProductCustomizerModal } from "@/components/ordering/ProductCustomizerModal";
import { formatPrice } from "@/lib/utils";
import { Search, Info, Flame, Sparkles, AlertCircle } from "lucide-react";

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

  const handleOpenItemById = (itemId?: string) => {
    if (!itemId) return;
    const found = ALL_MENU_ITEMS.find((i) => i.id === itemId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const isMainsActive =
    activeCategory === "all" ||
    activeCategory === "burritos" ||
    activeCategory === "naked-burritos" ||
    activeCategory === "tacos" ||
    activeCategory === "quesadillas";

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
            Every dish is made to order with vibrant Mexican spices, slow-braised meats, melted
            cheeses and signature house sauces.
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
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
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
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Upgrade Your Meal Banner */}
        <div className="bg-white border-2 border-[#08D8E5]/60 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#D97706] text-xs font-bold uppercase tracking-wider bg-[#FFC43D]/20 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Value Meal Upgrade</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase text-[#171717]">
              UPGRADE YOUR MEAL FOR <span className="text-[#058A92]">+£3.99</span>
            </h2>
            <p className="text-sm text-gray-700 max-w-2xl leading-relaxed">
              Pick <strong>1 Side</strong> (Tortilla chips, Skin-on fries, or Tater tots) +{" "}
              <strong>1 Drink</strong> (Jarritos or Any can drink) with any main dish.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="bg-[#08D8E5] text-black font-extrabold text-sm uppercase px-6 py-3.5 rounded-full shadow-lg shadow-[#08D8E5]/25">
              Only +£3.99
            </span>
          </div>
        </div>

        {/* 1. MAINS – CHOOSE YOUR FILLING (Responsive Table Matrix) */}
        {isMainsActive && searchQuery === "" && (
          <section className="space-y-6">
            <div className="border-b border-[#D2EEF1] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-[#058A92] text-xs font-bold uppercase tracking-widest block">
                  Step 1 • Choose Your Format &amp; Filling
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase text-[#171717] tracking-tight mt-1">
                  1. MAINS – CHOOSE YOUR FILLING
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Formats: <strong>Burrito</strong> | <strong>Naked Burrito</strong> | <strong>Tacos (2 pcs)</strong> | <strong>Quesadilla</strong>. Tap any price to order &amp; customize.
                </p>
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0 bg-white border border-[#CBD5E1] px-3 py-1 rounded-full shadow-sm w-fit">
                All Prices in £
              </span>
            </div>

            {/* Matrix Table with fixed columns so Halloumi and all rows align without wrapping */}
            <div className="w-full overflow-x-auto rounded-3xl border border-[#D2EEF1] bg-white shadow-md">
              <div className="min-w-[660px]">
                <table className="w-full table-fixed border-collapse text-left">
                  <colgroup>
                    <col className="w-[32%]" />
                    <col className="w-[17%]" />
                    <col className="w-[17%]" />
                    <col className="w-[17%]" />
                    <col className="w-[17%]" />
                  </colgroup>

                  <thead>
                    <tr className="bg-[#EBF7F8] border-b border-[#D2EEF1] text-xs font-extrabold uppercase tracking-wider text-[#171717]">
                      <th className="py-4 px-4 sm:px-6">Fillings</th>
                      <th className="py-4 px-3 text-center">Burrito</th>
                      <th className="py-4 px-3 text-center">Naked Burrito</th>
                      <th className="py-4 px-3 text-center">Tacos (2 pcs)</th>
                      <th className="py-4 px-3 text-center">Quesadilla</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#E2EEF0] text-sm">
                    {MAINS_TABLE_DATA.map((row, idx) => (
                      <tr
                        key={row.filling}
                        className={`hover:bg-[#F7FCFD] transition-colors ${
                          idx % 2 === 1 ? "bg-[#FAFDFD]" : "bg-white"
                        }`}
                      >
                        {/* Filling Name */}
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-[#171717] align-middle">
                          <div className="flex items-center gap-2">
                            <span className="text-sm sm:text-base font-heading tracking-wide">
                              {row.filling}
                            </span>
                            {row.isVegetarian && (
                              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0">
                                V
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Burrito Price */}
                        <td className="py-3.5 px-3 text-center align-middle">
                          <button
                            type="button"
                            onClick={() => handleOpenItemById(row.burritoId)}
                            className="inline-flex items-center justify-center font-extrabold text-xs sm:text-sm text-[#058A92] hover:text-black bg-[#E6F8F9] hover:bg-[#08D8E5] px-3.5 py-1.5 rounded-full transition-all shadow-sm w-full max-w-[96px]"
                            title={`Customize ${row.filling} Burrito`}
                          >
                            {formatPrice(row.burritoPrice)}
                          </button>
                        </td>

                        {/* Naked Burrito Price */}
                        <td className="py-3.5 px-3 text-center align-middle">
                          <button
                            type="button"
                            onClick={() => handleOpenItemById(row.nakedId)}
                            className="inline-flex items-center justify-center font-extrabold text-xs sm:text-sm text-[#058A92] hover:text-black bg-[#E6F8F9] hover:bg-[#08D8E5] px-3.5 py-1.5 rounded-full transition-all shadow-sm w-full max-w-[96px]"
                            title={`Customize ${row.filling} Naked Burrito`}
                          >
                            {formatPrice(row.nakedPrice)}
                          </button>
                        </td>

                        {/* Tacos (2 pcs) Price */}
                        <td className="py-3.5 px-3 text-center align-middle">
                          {row.tacosPrice !== null ? (
                            <button
                              type="button"
                              onClick={() => handleOpenItemById(row.tacosId)}
                              className="inline-flex items-center justify-center font-extrabold text-xs sm:text-sm text-[#058A92] hover:text-black bg-[#E6F8F9] hover:bg-[#08D8E5] px-3.5 py-1.5 rounded-full transition-all shadow-sm w-full max-w-[96px]"
                              title={`Customize ${row.filling} Tacos`}
                            >
                              {formatPrice(row.tacosPrice)}
                            </button>
                          ) : (
                            <span
                              className="text-gray-400 font-bold text-sm tracking-widest inline-block"
                              title="Not available for Tacos"
                            >
                              —
                            </span>
                          )}
                        </td>

                        {/* Quesadilla Price */}
                        <td className="py-3.5 px-3 text-center align-middle">
                          <button
                            type="button"
                            onClick={() => handleOpenItemById(row.quesadillaId)}
                            className="inline-flex items-center justify-center font-extrabold text-xs sm:text-sm text-[#058A92] hover:text-black bg-[#E6F8F9] hover:bg-[#08D8E5] px-3.5 py-1.5 rounded-full transition-all shadow-sm w-full max-w-[96px]"
                            title={`Customize ${row.filling} Quesadilla`}
                          >
                            {formatPrice(row.quesadillaPrice)}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* 2. EXTRA PROTEIN, TOPPINGS & SAUCES (3-Column Layout) */}
        <section className="bg-white border border-[#D2EEF1] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-[#058A92] text-xs font-bold uppercase tracking-widest">
              Customise Any Dish
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase text-[#171717]">
              2. EXTRA PROTEIN, TOPPINGS &amp; SAUCES
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Personalise your burritos, naked bowls, tacos, quesadillas, and loaded sides with extra portions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Column 1: Extra Protein */}
            <div className="space-y-3 bg-[#F9FDFE] p-4 rounded-2xl border border-[#D2EEF1]">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#D97706]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#D97706]">
                  Extra Protein
                </h3>
              </div>
              <div className="space-y-2">
                {EXTRA_PROTEINS.map((prot) => (
                  <div
                    key={prot.id}
                    className="p-2.5 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-between text-xs shadow-2xs"
                  >
                    <span className="font-semibold text-gray-800">{prot.name}</span>
                    <span className="font-extrabold text-[#058A92]">
                      {formatPrice(prot.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Toppings */}
            <div className="space-y-3 bg-[#F9FDFE] p-4 rounded-2xl border border-[#D2EEF1]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#D97706]">
                Toppings
              </h3>
              <div className="space-y-2">
                {EXTRA_TOPPINGS.map((top) => (
                  <div
                    key={top.id}
                    className="p-2.5 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-between text-xs shadow-2xs"
                  >
                    <span className="font-medium text-gray-800">{top.name}</span>
                    <span className="font-extrabold text-[#058A92]">
                      {formatPrice(top.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Sauces & Cheese */}
            <div className="space-y-3 bg-[#F9FDFE] p-4 rounded-2xl border border-[#D2EEF1]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#D97706]">
                Sauces &amp; Cheese
              </h3>
              <div className="space-y-2">
                {EXTRA_SAUCES_CHEESE.map((sauce) => (
                  <div
                    key={sauce.id}
                    className="p-2.5 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-between text-xs shadow-2xs"
                  >
                    <span className="font-medium text-gray-800">{sauce.name}</span>
                    <span className="font-extrabold text-[#058A92]">
                      {formatPrice(sauce.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category Sections (Filtered or All) */}
        {activeCategory !== "all" ? (
          // Single Selected Category View
          <div className="space-y-8">
            {MENU_CATEGORIES.filter((c) => c.id === activeCategory).map((cat) => {
              const categoryItems = filteredItems.filter(
                (item) => item.category === cat.id
              );

              return (
                <div key={cat.id} className="space-y-6">
                  <div className="border-b border-[#D2EEF1] pb-4">
                    <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 w-full">
                      <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold font-heading uppercase text-[#171717] tracking-tight whitespace-nowrap">
                        {cat.name}
                      </h2>
                      {cat.badge && (
                        <span className="shrink-0 whitespace-nowrap bg-[#08D8E5] text-black text-[10px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1.5 max-w-2xl">{cat.description}</p>
                    {cat.servedWith && (
                      <p className="text-xs text-[#058A92] mt-1 font-semibold">{cat.servedWith}</p>
                    )}

                    {cat.id === "el-crunchito" && (
                      <div className="mt-3 p-3 bg-[#FEF3C7] border border-[#FDE68A] rounded-xl text-xs text-[#92400E] font-bold">
                        Combo Add-on: {EL_CRUNCHITO_COMBO.description}
                      </div>
                    )}

                    {cat.id === "macho-loaded" && (
                      <div className="mt-3 p-3 bg-[#FEF3C7] border border-[#FDE68A] rounded-xl text-xs text-[#92400E] font-bold">
                        {MACHO_LOADED_NOTE.description}
                      </div>
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
                    {categoryItems.map((item) => (
                      <ProductCard
                        key={item.id}
                        item={item}
                        onSelect={(product) => setSelectedProduct(product)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
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
                    <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 w-full">
                      <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold font-heading uppercase text-[#171717] tracking-tight whitespace-nowrap">
                        {cat.name}
                      </h2>
                      {cat.badge && (
                        <span className="shrink-0 whitespace-nowrap bg-[#08D8E5] text-black text-[10px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                          {cat.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-1.5">
                      <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">{cat.description}</p>
                      <span className="text-xs text-gray-500 font-medium shrink-0 hidden sm:inline">
                        {categoryItems.length} {categoryItems.length === 1 ? "Option" : "Options"}
                      </span>
                    </div>
                    {cat.servedWith && (
                      <p className="text-xs text-[#058A92] mt-1 font-semibold">
                        {cat.servedWith}
                      </p>
                    )}

                    {cat.id === "el-crunchito" && (
                      <div className="mt-3 p-3 bg-[#FEF3C7] border border-[#FDE68A] rounded-xl text-xs text-[#92400E] font-bold">
                        Combo Add-on: {EL_CRUNCHITO_COMBO.description}
                      </div>
                    )}

                    {cat.id === "macho-loaded" && (
                      <div className="mt-3 p-3 bg-[#FEF3C7] border border-[#FDE68A] rounded-xl text-xs text-[#92400E] font-bold">
                        {MACHO_LOADED_NOTE.description}
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

        {/* Allergen & Dietary Notice Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#CBD5E1] shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#171717]">
              Food Allergies &amp; Intolerances
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {ALLERGY_NOTICE}
            </p>
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
