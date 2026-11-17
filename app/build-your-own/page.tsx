"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_MEAL_TYPES, FILLING_CHOICES } from "@/data/buildYourOwn";
import { EXTRA_TOPPINGS, EXTRA_PROTEINS, UPGRADE_MEAL } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import {
  Sparkles,
  Check,
  Plus,
  ArrowRight,
  Info,
  Flame,
  Layers,
  UtensilsCrossed,
} from "lucide-react";

export default function BuildYourOwnPage() {
  const { addItem } = useCart();

  // Configurator state
  const [selectedBase, setSelectedBase] = useState(BASE_MEAL_TYPES[0]);
  const [selectedFilling, setSelectedFilling] = useState(FILLING_CHOICES[0]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedProteins, setSelectedProteins] = useState<string[]>([]);
  const [upgradeActive, setUpgradeActive] = useState<boolean>(false);
  const [upgradeSide, setUpgradeSide] = useState<string>(UPGRADE_MEAL.sides[0]);
  const [upgradeDrink, setUpgradeDrink] = useState<string>(UPGRADE_MEAL.drinks[0]);
  const [addedNotice, setAddedNotice] = useState(false);

  // Price calculation
  let calculatedPrice = selectedBase.basePrice + selectedFilling.extraCost;

  selectedToppings.forEach((topName) => {
    const t = EXTRA_TOPPINGS.find((item) => item.name === topName);
    if (t) calculatedPrice += t.price;
  });

  selectedProteins.forEach((protName) => {
    const p = EXTRA_PROTEINS.find((item) => item.name === protName);
    if (p) calculatedPrice += p.price;
  });

  if (upgradeActive) {
    calculatedPrice += UPGRADE_MEAL.price;
  }

  const toggleTopping = (name: string) => {
    setSelectedToppings((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const toggleProtein = (name: string) => {
    setSelectedProteins((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const handleAddConfiguredItem = () => {
    addItem({
      menuItemId: `byo-${selectedBase.id}-${selectedFilling.id}`,
      name: `Custom ${selectedBase.name} (${selectedFilling.name})`,
      price: calculatedPrice,
      quantity: 1,
      image: selectedBase.image,
      categoryName: "Build Your Own",
      customization: {
        fillings: [selectedFilling.name],
        toppings: selectedToppings.length > 0 ? selectedToppings : undefined,
        extraProteins: selectedProteins.length > 0 ? selectedProteins : undefined,
        upgradeMeal: upgradeActive
          ? {
              side: upgradeSide,
              drink: upgradeDrink,
              price: UPGRADE_MEAL.price,
            }
          : undefined,
      },
    });

    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-14 sm:py-20 bg-[#0d0d0d] border-b border-[#222222] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#08D8E5]/20 text-[#08D8E5] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Customise Every Bite
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading uppercase tracking-tight">
            BUILD YOUR <span className="text-[#08D8E5]">OWN</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Follow our 5-step customisation journey: choose your base, pick your filling, explore
            authentic Mexican toppings, and upgrade your meal.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive 5-Step Configurator */}
          <div className="lg:col-span-8 space-y-12">
            {/* STEP 1: Meal Type */}
            <section className="space-y-4 p-6 sm:p-8 bg-[#121212] border border-[#262626] rounded-3xl shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#08D8E5] text-black font-heading font-black text-sm flex items-center justify-center">
                  1
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase">
                    Choose Your Meal Type
                  </h2>
                  <p className="text-xs text-gray-400">
                    All bases start from £8.99 with included Mexican rice, queso and cheese where noted.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {BASE_MEAL_TYPES.map((b) => {
                  const isSelected = selectedBase.id === b.id;
                  return (
                    <div
                      key={b.id}
                      onClick={() => setSelectedBase(b)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#08D8E5]/15 border-[#08D8E5] shadow-lg shadow-[#08D8E5]/10"
                          : "bg-[#181818] border-[#292929] hover:border-gray-500"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h3 className="font-heading font-bold text-base uppercase text-white">
                            {b.name}
                          </h3>
                          <span className="font-heading font-bold text-sm text-[#08D8E5]">
                            {formatPrice(b.basePrice)}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{b.description}</p>
                      </div>
                      <div className="pt-3 mt-2 border-t border-[#252525] flex items-center justify-between text-[11px]">
                        <span className="text-gray-400">Included: {b.includedBase}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#08D8E5] shrink-0" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* STEP 2: Select Your Filling */}
            <section className="space-y-4 p-6 sm:p-8 bg-[#121212] border border-[#262626] rounded-3xl shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#08D8E5] text-black font-heading font-black text-sm flex items-center justify-center">
                  2
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase">
                    Select Your Flavour Filling
                  </h2>
                  <p className="text-xs text-gray-400">
                    Choose 1 protein or vegetarian filling. Standard items included at base price.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {FILLING_CHOICES.map((f) => {
                  const isSelected = selectedFilling.id === f.id;
                  return (
                    <div
                      key={f.id}
                      onClick={() => setSelectedFilling(f)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? "bg-[#08D8E5]/15 border-[#08D8E5]"
                          : "bg-[#181818] border-[#292929] hover:border-gray-500"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white font-heading uppercase">
                          {f.name}
                        </span>
                        <span className="text-xs font-bold text-[#FFC43D]">
                          {f.extraCost > 0 ? `+${formatPrice(f.extraCost)}` : "Included"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{f.description}</p>
                      <div className="mt-2 text-[11px] text-gray-400 pt-1.5 border-t border-[#252525]">
                        <span className="text-[#FFC43D] font-semibold">Chef Toppings: </span>
                        {f.chefToppings}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* STEP 3: Explore Toppings */}
            <section className="space-y-4 p-6 sm:p-8 bg-[#121212] border border-[#262626] rounded-3xl shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#08D8E5] text-black font-heading font-black text-sm flex items-center justify-center">
                  3
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase">
                    Explore Extra Toppings
                  </h2>
                  <p className="text-xs text-gray-400">
                    Add extra dollops of guacamole, nacho cheese, salsa or pickled onions.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {EXTRA_TOPPINGS.map((top) => {
                  const isSelected = selectedToppings.includes(top.name);
                  return (
                    <button
                      key={top.id}
                      type="button"
                      onClick={() => toggleTopping(top.name)}
                      className={`p-3 rounded-xl border text-left text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? "bg-[#08D8E5]/20 border-[#08D8E5] text-white"
                          : "bg-[#181818] border-[#282828] text-gray-300 hover:border-gray-500"
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-white">{top.name}</div>
                        <div className="text-[#08D8E5] font-bold text-[11px] mt-0.5">
                          +{formatPrice(top.price)}
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#08D8E5]" />}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* STEP 4: Add Extra Protein */}
            <section className="space-y-4 p-6 sm:p-8 bg-[#121212] border border-[#262626] rounded-3xl shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#08D8E5] text-black font-heading font-black text-sm flex items-center justify-center">
                  4
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase">
                    Add Extra Protein
                  </h2>
                  <p className="text-xs text-gray-400">
                    Double up on meat for maximum fullness and protein.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {EXTRA_PROTEINS.map((prot) => {
                  const isSelected = selectedProteins.includes(prot.name);
                  return (
                    <button
                      key={prot.id}
                      type="button"
                      onClick={() => toggleProtein(prot.name)}
                      className={`p-4 rounded-xl border text-left text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? "bg-[#08D8E5]/20 border-[#08D8E5] text-white"
                          : "bg-[#181818] border-[#282828] text-gray-300 hover:border-gray-500"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white">{prot.name}</div>
                        <div className="text-[#08D8E5] font-bold text-xs mt-0.5">
                          +{formatPrice(prot.price)}
                        </div>
                      </div>
                      {isSelected && <Check className="w-5 h-5 text-[#08D8E5]" />}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* STEP 5: Choose Sides & Drink (Upgrade Your Meal) */}
            <section className="space-y-4 p-6 sm:p-8 bg-[#121212] border border-[#262626] rounded-3xl shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#08D8E5] text-black font-heading font-black text-sm flex items-center justify-center">
                  5
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase">
                    Upgrade Your Meal (+£3.99)
                  </h2>
                  <p className="text-xs text-gray-400">
                    Add 1 Side + 1 Drink to complete your meal experience.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#181818] border border-[#2b2b2b] space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="space-y-0.5">
                    <span className="font-bold text-white text-sm">
                      Include Side & Drink Upgrade
                    </span>
                    <span className="block text-xs text-gray-400">
                      Add 1 Side (Chips, Fries or Tots) and 1 Drink (Jarritos or Can)
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={upgradeActive}
                    onChange={(e) => setUpgradeActive(e.target.checked)}
                    className="w-5 h-5 accent-[#08D8E5] cursor-pointer"
                  />
                </label>

                {upgradeActive && (
                  <div className="pt-3 border-t border-[#262626] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">
                        Select 1 Side:
                      </label>
                      <select
                        value={upgradeSide}
                        onChange={(e) => setUpgradeSide(e.target.value)}
                        className="w-full bg-[#222222] border border-[#333333] rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#08D8E5]"
                      >
                        {UPGRADE_MEAL.sides.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">
                        Select 1 Drink:
                      </label>
                      <select
                        value={upgradeDrink}
                        onChange={(e) => setUpgradeDrink(e.target.value)}
                        className="w-full bg-[#222222] border border-[#333333] rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#08D8E5]"
                      >
                        {UPGRADE_MEAL.drinks.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Live Summary & Add to Cart */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-[#121212] border border-[#2b2b2b] rounded-3xl p-6 shadow-2xl space-y-5">
              <div className="border-b border-[#242424] pb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#08D8E5]">
                  Your Custom Order
                </span>
                <h3 className="text-2xl font-bold font-heading uppercase text-white mt-0.5">
                  Live Summary
                </h3>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Base: {selectedBase.name}</span>
                  <span className="font-semibold text-white">
                    {formatPrice(selectedBase.basePrice)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-gray-300">
                  <span>Filling: {selectedFilling.name}</span>
                  <span className="font-semibold text-white">
                    {selectedFilling.extraCost > 0
                      ? `+${formatPrice(selectedFilling.extraCost)}`
                      : "Included"}
                  </span>
                </div>

                {selectedToppings.length > 0 && (
                  <div className="pt-2 border-t border-[#222222] space-y-1">
                    <span className="text-gray-400 font-medium block">Extra Toppings:</span>
                    {selectedToppings.map((tName) => {
                      const t = EXTRA_TOPPINGS.find((i) => i.name === tName);
                      return (
                        <div
                          key={tName}
                          className="flex justify-between items-center text-gray-300 pl-2"
                        >
                          <span>• {tName}</span>
                          <span>+{formatPrice(t?.price || 0)}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {selectedProteins.length > 0 && (
                  <div className="pt-2 border-t border-[#222222] space-y-1">
                    <span className="text-gray-400 font-medium block">Extra Protein:</span>
                    {selectedProteins.map((pName) => {
                      const p = EXTRA_PROTEINS.find((i) => i.name === pName);
                      return (
                        <div
                          key={pName}
                          className="flex justify-between items-center text-gray-300 pl-2"
                        >
                          <span>• {pName}</span>
                          <span>+{formatPrice(p?.price || 0)}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {upgradeActive && (
                  <div className="pt-2 border-t border-[#222222] space-y-1 text-gray-300">
                    <div className="flex justify-between items-center text-[#08D8E5] font-semibold">
                      <span>Meal Upgrade</span>
                      <span>+{formatPrice(UPGRADE_MEAL.price)}</span>
                    </div>
                    <p className="text-[11px] text-gray-400 pl-2">
                      Side: {upgradeSide} | Drink: {upgradeDrink}
                    </p>
                  </div>
                )}

                {/* Total */}
                <div className="pt-4 border-t border-[#242424] flex items-center justify-between text-base font-bold text-white">
                  <span>Calculated Total</span>
                  <span className="text-2xl font-black font-heading text-[#08D8E5]">
                    {formatPrice(calculatedPrice)}
                  </span>
                </div>
              </div>

              {/* Add to basket CTA */}
              <button
                onClick={handleAddConfiguredItem}
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-4 px-6 rounded-2xl flex items-center justify-center gap-2 tracking-wider shadow-xl shadow-[#08D8E5]/20 transition-all transform active:scale-[0.98]"
              >
                <Plus className="w-5 h-5" />
                <span>ADD CUSTOM ITEM TO BASKET</span>
              </button>

              {addedNotice && (
                <div className="p-3 bg-[#08D8E5]/20 border border-[#08D8E5]/40 rounded-xl text-center text-xs text-[#08D8E5] font-bold animate-fade-in">
                  Added to your order basket!
                </div>
              )}

              <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                Prices calculated strictly using confirmed restaurant menu rules.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
