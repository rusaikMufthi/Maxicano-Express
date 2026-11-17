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
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-[#111111] border border-[#282828] rounded-2xl shadow-2xl overflow-hidden z-10 text-white my-8 max-h-[90vh] flex flex-col">
        {/* Product Image Header */}
        {item.image && (
          <div className="relative h-48 w-full shrink-0 bg-neutral-900 border-b border-[#222222]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, 512px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/60" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-gray-300 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="bg-[#08D8E5] text-black text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1">
                {item.categoryName}
              </span>
              <h2 id="modal-product-title" className="text-2xl font-bold font-heading">
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
                <span className="text-xs uppercase text-[#08D8E5] font-bold tracking-wider">
                  {item.categoryName}
                </span>
                <h2 id="modal-product-title" className="text-2xl font-bold font-heading">
                  {item.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#1c1c1c] text-gray-400 hover:text-white"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Description */}
          {item.description && (
            <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
          )}

          {item.servedWith && (
            <div className="bg-[#181818] border border-[#2a2a2a] p-3 rounded-lg text-xs text-gray-300">
              <strong className="text-[#08D8E5]">Included: </strong>
              {item.servedWith}
            </div>
          )}

          {item.toppingsInfo && (
            <div className="bg-[#181818] border border-[#2a2a2a] p-3 rounded-lg text-xs text-gray-300">
              <strong className="text-[#FFC43D]">Chef&apos;s Toppings: </strong>
              {item.toppingsInfo}
            </div>
          )}

          {/* Portion/Size Options (e.g. 3, 5, 7 Pieces or Regular, Large) */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
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
                          ? "bg-[#08D8E5]/15 border-[#08D8E5] text-white"
                          : "bg-[#181818] border-[#292929] text-gray-400 hover:border-gray-500"
                      }`}
                    >
                      <div className="font-bold text-sm text-white">{opt.name}</div>
                      <div className="text-xs text-[#08D8E5] font-semibold mt-1">
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
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
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
                            : "bg-[#181818] text-gray-300 border-[#2a2a2a] hover:border-gray-500"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#FFC43D]" />
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
                            ? "bg-[#08D8E5]/20 border-[#08D8E5] text-white"
                            : "bg-[#181818] border-[#292929] text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-white">{prot.name}</div>
                          <div className="text-[#08D8E5] text-xs font-semibold">
                            +{formatPrice(prot.price)}
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#08D8E5]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Extra Toppings */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#08D8E5]" />
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
                            ? "bg-[#08D8E5]/20 border-[#08D8E5] text-white"
                            : "bg-[#181818] border-[#282828] text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        <div className="font-semibold truncate">{top.name}</div>
                        <div className="text-[#08D8E5] font-bold text-[11px] mt-0.5">
                          +{formatPrice(top.price)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upgrade Your Meal Promotion */}
              <div className="bg-gradient-to-r from-[#181818] to-[#141414] border border-[#2b2b2b] rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#FFC43D] text-[11px] font-extrabold uppercase tracking-widest">
                      Special Upgrade
                    </span>
                    <h4 className="text-sm font-bold text-white font-heading">
                      Upgrade Your Meal (+£3.99)
                    </h4>
                    <p className="text-xs text-gray-400">
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
                  <div className="pt-3 border-t border-[#262626] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-gray-400 font-semibold mb-1">Choose Side:</label>
                      <select
                        value={upgradeSide}
                        onChange={(e) => setUpgradeSide(e.target.value)}
                        className="w-full bg-[#202020] border border-[#333333] rounded-lg px-2.5 py-1.5 text-white text-xs focus:outline-none focus:border-[#08D8E5]"
                      >
                        {UPGRADE_MEAL.sides.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-400 font-semibold mb-1">Choose Drink:</label>
                      <select
                        value={upgradeDrink}
                        onChange={(e) => setUpgradeDrink(e.target.value)}
                        className="w-full bg-[#202020] border border-[#333333] rounded-lg px-2.5 py-1.5 text-white text-xs focus:outline-none focus:border-[#08D8E5]"
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
        <div className="p-5 border-t border-[#222222] bg-black flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#1c1c1c] border border-[#2b2b2b] rounded-xl p-1.5">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#2c2c2c] text-gray-300 hover:text-white"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-white text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#2c2c2c] text-gray-300 hover:text-white"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-6 rounded-xl flex items-center justify-between tracking-wider shadow-lg shadow-[#08D8E5]/20 transition-transform active:scale-[0.98]"
          >
            <span>ADD TO BASKET</span>
            <span className="font-heading text-base">{formatPrice(totalPrice)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
