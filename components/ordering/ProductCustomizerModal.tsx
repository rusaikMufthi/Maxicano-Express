"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MenuItem, UPGRADE_MEAL, EXTRA_TOPPINGS, EXTRA_PROTEINS } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { X, Plus, Minus, Check, Flame, Sparkles } from "lucide-react";

interface ProductCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function ProductCustomizerModal({ item, onClose }: ProductCustomizerModalProps) {
  const { addItem } = useCart();

  // State
  const [selectedOption, setSelectedOption] = useState<string>(
    item?.options && item.options.length > 0 ? item.options[0].name : ""
  );

  const [selectedFillings, setSelectedFillings] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedProteins, setSelectedProteins] = useState<string[]>([]);

  const [upgradeActive, setUpgradeActive] = useState<boolean>(false);
  const [upgradeSide, setUpgradeSide] = useState<string>(UPGRADE_MEAL.sides[0]);
  const [upgradeDrink, setUpgradeDrink] = useState<string>(UPGRADE_MEAL.drinks[0]);

  const [quantity, setQuantity] = useState<number>(1);

  if (!item) return null;

  // Calculate dynamic unit price
  let currentUnitPrice = item.price;

  // If size/option is selected
  if (item.options && item.options.length > 0) {
    const matched = item.options.find((o) => o.name === selectedOption);
    if (matched) {
      currentUnitPrice = matched.price;
    }
  }

  // Add toppings
  selectedToppings.forEach((tName) => {
    const top = EXTRA_TOPPINGS.find((t) => t.name === tName);
    if (top) currentUnitPrice += top.price;
  });

  // Add proteins
  selectedProteins.forEach((pName) => {
    const prot = EXTRA_PROTEINS.find((p) => p.name === pName);
    if (prot) currentUnitPrice += prot.price;
  });

  // Add upgrade
  if (upgradeActive) {
    currentUnitPrice += UPGRADE_MEAL.price;
  }

  const totalPrice = currentUnitPrice * quantity;

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

  const handleAddToCart = () => {
    addItem({
      menuItemId: item.id,
      name: item.name,
      price: currentUnitPrice,
      quantity,
      image: item.image,
      categoryName: item.categoryName,
      customization: {
        selectedOption: selectedOption || undefined,
        fillings: selectedFillings.length > 0 ? selectedFillings : undefined,
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
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white border border-[#D2EEF1] rounded-2xl shadow-2xl overflow-hidden z-10 text-[#171717] my-8 max-h-[90vh] flex flex-col">
        {/* Product Image Header */}
        {item.image && (
          <div className="relative h-48 w-full shrink-0 bg-slate-100 border-b border-[#D2EEF1]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, 512px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="bg-[#08D8E5] text-black text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1 shadow">
                {item.categoryName}
              </span>
              <h2 id="modal-product-title" className="text-2xl font-bold font-heading text-white">
                {item.name}
              </h2>
            </div>
          </div>
        )}

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!item.image && (
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs uppercase text-[#058A92] font-bold tracking-wider">
                  {item.categoryName}
                </span>
                <h2 id="modal-product-title" className="text-2xl font-bold font-heading text-[#171717]">
                  {item.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 text-gray-500 hover:text-black"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Description */}
          {item.description && (
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
          )}

          {item.servedWith && (
            <div className="bg-[#F0FAF9] border border-[#D2EEF1] p-3.5 rounded-xl text-xs text-gray-700">
              <strong className="text-[#058A92]">Included: </strong>
              {item.servedWith}
            </div>
          )}

          {item.toppingsInfo && (
            <div className="bg-[#FEF3C7] border border-[#FDE68A] p-3.5 rounded-xl text-xs text-gray-800">
              <strong className="text-[#92400E]">Chef&apos;s Toppings: </strong>
              {item.toppingsInfo}
            </div>
          )}

          {/* Portion/Size Options (e.g. 3, 5, 7 Pieces or Regular, Large) */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Select Option / Size
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {item.options.map((opt) => {
                  const isSel = selectedOption === opt.name;
                  return (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => setSelectedOption(opt.name)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSel
                          ? "bg-[#E6F7F8] border-[#08D8E5] text-[#171717] shadow-sm font-semibold"
                          : "bg-white border-[#CBD5E1] text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      <div className="font-bold text-sm text-[#171717]">{opt.name}</div>
                      <div className="text-xs text-[#058A92] font-semibold mt-1">
                        {formatPrice(opt.price)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Selection Choices (e.g. TODO trays, Kids meal) */}
          {item.selectionChoices &&
            item.selectionChoices.map((choice, idx) => (
              <div key={idx} className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  {choice.title}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {choice.options.map((opt) => {
                    const isSelected = selectedFillings.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          if (choice.requiredCount === 1) {
                            setSelectedFillings([opt]);
                          } else {
                            setSelectedFillings((prev) =>
                              prev.includes(opt) ? prev.filter((p) => p !== opt) : [...prev, opt]
                            );
                          }
                        }}
                        className={`p-2.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${
                          isSelected
                            ? "bg-[#08D8E5] text-black border-[#08D8E5] font-bold"
                            : "bg-white text-gray-700 border-[#CBD5E1] hover:border-gray-400"
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && <Check className="w-4 h-4" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

          {/* Customisable extras for Burritos, Tacos, Quesadillas */}
          {item.customizable && (
            <>
              {/* Extra Protein */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Add Extra Protein</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {EXTRA_PROTEINS.map((prot) => {
                    const isSelected = selectedProteins.includes(prot.name);
                    return (
                      <button
                        key={prot.id}
                        type="button"
                        onClick={() => toggleProtein(prot.name)}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center justify-between ${
                          isSelected
                            ? "bg-[#E6F7F8] border-[#08D8E5] text-black font-semibold"
                            : "bg-white border-[#CBD5E1] text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-[#171717]">{prot.name}</div>
                          <div className="text-[#058A92] text-xs font-semibold">
                            +{formatPrice(prot.price)}
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#058A92]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Extra Toppings */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#058A92]" />
                  <span>Extra Toppings</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {EXTRA_TOPPINGS.map((top) => {
                    const isSelected = selectedToppings.includes(top.name);
                    return (
                      <button
                        key={top.id}
                        type="button"
                        onClick={() => toggleTopping(top.name)}
                        className={`p-2 rounded-lg border text-left text-xs transition-colors ${
                          isSelected
                            ? "bg-[#E6F7F8] border-[#08D8E5] text-black font-semibold"
                            : "bg-white border-[#CBD5E1] text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        <div className="font-semibold truncate text-[#171717]">{top.name}</div>
                        <div className="text-[#058A92] font-bold text-[11px] mt-0.5">
                          +{formatPrice(top.price)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upgrade Your Meal Promotion */}
              <div className="bg-[#F0FAF9] border-2 border-[#D2EEF1] rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#D97706] text-[11px] font-extrabold uppercase tracking-widest">
                      Special Upgrade
                    </span>
                    <h4 className="text-sm font-bold text-[#171717] font-heading">
                      Upgrade Your Meal (+£3.99)
                    </h4>
                    <p className="text-xs text-gray-600">
                      Add 1 Side (Chips, Fries or Tots) + 1 Drink (Jarritos or Can)
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={upgradeActive}
                    onChange={(e) => setUpgradeActive(e.target.checked)}
                    className="w-5 h-5 accent-[#08D8E5] rounded cursor-pointer"
                  />
                </div>

                {upgradeActive && (
                  <div className="pt-3 border-t border-[#D2EEF1] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Choose Side:</label>
                      <select
                        value={upgradeSide}
                        onChange={(e) => setUpgradeSide(e.target.value)}
                        className="w-full bg-white border border-[#CBD5E1] rounded-lg px-2.5 py-1.5 text-gray-800 text-xs focus:outline-none focus:border-[#08D8E5]"
                      >
                        {UPGRADE_MEAL.sides.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Choose Drink:</label>
                      <select
                        value={upgradeDrink}
                        onChange={(e) => setUpgradeDrink(e.target.value)}
                        className="w-full bg-white border border-[#CBD5E1] rounded-lg px-2.5 py-1.5 text-gray-800 text-xs focus:outline-none focus:border-[#08D8E5]"
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
            </>
          )}
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-5 border-t border-[#D2EEF1] bg-[#F8FCFD] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-white border border-[#CBD5E1] rounded-xl p-1.5 shadow-sm">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 text-gray-600 hover:text-black"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-[#171717] text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 text-gray-600 hover:text-black"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-6 rounded-xl flex items-center justify-between tracking-wider shadow-md shadow-[#08D8E5]/20 transition-transform active:scale-[0.98]"
          >
            <span>ADD TO BASKET</span>
            <span className="font-heading text-base">{formatPrice(totalPrice)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
