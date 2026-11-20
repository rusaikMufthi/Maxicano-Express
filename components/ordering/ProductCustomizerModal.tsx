"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MenuItem, UPGRADE_MEAL, EXTRA_TOPPINGS, EXTRA_PROTEINS, EXTRA_SAUCES_CHEESE } from "@/data/menu";
import { useCart, CartItem } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { X, Plus, Minus, Check, Flame } from "lucide-react";

interface ProductCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function ProductCustomizerModal({ item, onClose }: ProductCustomizerModalProps) {
  const { addItem, addItems } = useCart();

  // Multi-flavor drink detection (e.g. Jarritos Mexican Soda, Can Drinks)
  const isMultiFlavorDrink =
    Boolean(item?.category === "drinks" && item?.options && item.options.length > 0);

  // State
  const [selectedOption, setSelectedOption] = useState<string>(
    item?.options && item.options.length > 0 ? item.options[0].name : ""
  );

  // Multi-flavor quantities for drinks (e.g. Mango: 2, Guava: 1, Mandarin: 3)
  const [flavorQuantities, setFlavorQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    if (item?.options && item?.category === "drinks") {
      item.options.forEach((opt) => {
        initial[opt.name] = 0;
      });
    }
    return initial;
  });

  // Group selections for bundle items / selectionChoices: mapping choice group index to array of selected options
  const [groupSelections, setGroupSelections] = useState<Record<number, string[]>>(() => {
    const initial: Record<number, string[]> = {};
    if (item?.selectionChoices) {
      item.selectionChoices.forEach((choice, idx) => {
        if (choice.requiredCount === 1 && choice.options.length > 0) {
          initial[idx] = [choice.options[0]];
        } else {
          initial[idx] = [];
        }
      });
    }
    return initial;
  });

  const [selectedFillings, setSelectedFillings] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedProteins, setSelectedProteins] = useState<string[]>([]);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);

  const [upgradeActive, setUpgradeActive] = useState<boolean>(false);
  const [upgradeSide, setUpgradeSide] = useState<string>(UPGRADE_MEAL.sides[0]);
  const [upgradeDrink, setUpgradeDrink] = useState<string>(UPGRADE_MEAL.drinks[0]);

  const [quantity, setQuantity] = useState<number>(1);

  // Re-sync when modal opens with a different item
  useEffect(() => {
    if (item?.category === "drinks" && item?.options) {
      const initialFlavors: Record<string, number> = {};
      item.options.forEach((opt) => {
        initialFlavors[opt.name] = 0;
      });
      setFlavorQuantities(initialFlavors);
    } else {
      setFlavorQuantities({});
    }

    if (item?.selectionChoices) {
      const initial: Record<number, string[]> = {};
      item.selectionChoices.forEach((choice, idx) => {
        if (choice.requiredCount === 1 && choice.options.length > 0) {
          initial[idx] = [choice.options[0]];
        } else {
          initial[idx] = [];
        }
      });
      setGroupSelections(initial);
    } else {
      setGroupSelections({});
    }

    if (item?.options && item.options.length > 0) {
      setSelectedOption(item.options[0].name);
    } else {
      setSelectedOption("");
    }

    setSelectedFillings([]);
    setSelectedToppings([]);
    setSelectedProteins([]);
    setSelectedSauces([]);
    setUpgradeActive(false);
    setQuantity(1);
  }, [item]);

  if (!item) return null;

  // Flavor stepper controls
  const updateFlavorQuantity = (flavorName: string, delta: number) => {
    setFlavorQuantities((prev) => {
      const current = prev[flavorName] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [flavorName]: next };
    });
  };

  // Calculations for multi-flavor drinks
  const totalFlavorQty =
    isMultiFlavorDrink && item.options
      ? item.options.reduce((sum, opt) => sum + (flavorQuantities[opt.name] || 0), 0)
      : 0;

  const totalFlavorPrice =
    isMultiFlavorDrink && item.options
      ? item.options.reduce(
          (sum, opt) => sum + (flavorQuantities[opt.name] || 0) * opt.price,
          0
        )
      : 0;

  // Calculate dynamic unit price for standard items
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

  // Add sauces & cheese
  selectedSauces.forEach((sName) => {
    const sauce = EXTRA_SAUCES_CHEESE.find((s) => s.name === sName);
    if (sauce) currentUnitPrice += sauce.price;
  });

  // Add upgrade
  if (upgradeActive) {
    currentUnitPrice += UPGRADE_MEAL.price;
  }

  const totalPrice = currentUnitPrice * quantity;

  // Handle choice selection for multi-choice bundle items
  const handleToggleGroupChoice = (groupIndex: number, option: string, requiredCount: number = 1) => {
    setGroupSelections((prev) => {
      const current = prev[groupIndex] || [];
      if (requiredCount === 1) {
        // Single choice: select this option
        return { ...prev, [groupIndex]: [option] };
      } else {
        // Multi-choice: toggle up to requiredCount
        if (current.includes(option)) {
          return { ...prev, [groupIndex]: current.filter((o) => o !== option) };
        } else {
          if (current.length < requiredCount) {
            return { ...prev, [groupIndex]: [...current, option] };
          } else {
            // Replace oldest selection
            return { ...prev, [groupIndex]: [...current.slice(1), option] };
          }
        }
      }
    });
  };

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

  const toggleSauce = (name: string) => {
    setSelectedSauces((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  // Check if all required choices across all groups are selected
  const isBundleComplete =
    !item.selectionChoices ||
    item.selectionChoices.every((choice, idx) => {
      const selected = groupSelections[idx] || [];
      const needed = choice.requiredCount || 1;
      return selected.length >= needed;
    });

  const handleAddToCart = () => {
    // Multi-flavor drink submission (e.g. 2 Mango, 1 Guava, 3 Mandarin)
    if (isMultiFlavorDrink) {
      if (totalFlavorQty === 0) return;

      const itemsToAdd: Omit<CartItem, "id">[] = [];

      item.options?.forEach((opt) => {
        const qty = flavorQuantities[opt.name] || 0;
        if (qty > 0) {
          itemsToAdd.push({
            menuItemId: `${item.id}-${opt.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
            name: `${item.name} - ${opt.name}`,
            price: opt.price,
            quantity: qty,
            image: item.image,
            categoryName: item.categoryName,
            customization: {
              selectedOption: opt.name,
            },
          });
        }
      });

      addItems(itemsToAdd);
      onClose();
      return;
    }

    if (!isBundleComplete) return;

    // Collect bundle selections for each choice group
    const bundleSelections: { title: string; choice: string }[] = [];
    const flatFillings: string[] = [];

    if (item.selectionChoices) {
      item.selectionChoices.forEach((choice, idx) => {
        const selected = groupSelections[idx] || [];
        selected.forEach((val) => {
          bundleSelections.push({ title: choice.title, choice: val });
          flatFillings.push(`${choice.title}: ${val}`);
        });
      });
    }

    addItem({
      menuItemId: item.id,
      name: item.name,
      price: currentUnitPrice,
      quantity,
      image: item.image,
      categoryName: item.categoryName,
      customization: {
        selectedOption: selectedOption || undefined,
        bundleSelections: bundleSelections.length > 0 ? bundleSelections : undefined,
        fillings:
          flatFillings.length > 0
            ? flatFillings
            : selectedFillings.length > 0
            ? selectedFillings
            : undefined,
        toppings: selectedToppings.length > 0 ? selectedToppings : undefined,
        extraProteins: selectedProteins.length > 0 ? selectedProteins : undefined,
        sauces: selectedSauces.length > 0 ? selectedSauces : undefined,
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

          {/* Portion/Size Options or Multi-Flavor Drink Cards */}
          {item.options && item.options.length > 0 && (
            isMultiFlavorDrink ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800">
                    Select Flavours &amp; Quantities
                  </label>
                  <span className="text-[11px] font-semibold text-[#058A92] bg-[#F0FAF9] border border-[#D2EEF1] px-2.5 py-0.5 rounded-full">
                    Choose Multiple
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.options.map((opt) => {
                    const qty = flavorQuantities[opt.name] || 0;
                    const isSelected = qty > 0;

                    return (
                      <div
                        key={opt.name}
                        onClick={() => {
                          if (qty === 0) {
                            updateFlavorQuantity(opt.name, 1);
                          }
                        }}
                        className={`p-3 rounded-xl border transition-all flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#E6F7F8] border-2 border-[#08D8E5] text-[#171717] shadow-sm ring-1 ring-[#08D8E5]/30"
                            : "bg-white border-[#CBD5E1] text-gray-700 hover:border-gray-400 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="font-bold text-sm text-[#171717]">{opt.name}</div>
                          <div className="text-xs text-[#058A92] font-extrabold">
                            {formatPrice(opt.price)}
                          </div>
                        </div>

                        {/* Flavor Quantity Stepper */}
                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#D2EEF1]/60">
                          <span className="text-[11px] text-gray-500 font-medium">
                            {isSelected ? `${qty} selected` : "Tap to add"}
                          </span>

                          <div
                            className="flex items-center gap-1 bg-white border border-[#CBD5E1] rounded-lg p-0.5 shadow-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateFlavorQuantity(opt.name, -1);
                              }}
                              disabled={qty === 0}
                              className="w-6 h-6 rounded flex items-center justify-center hover:bg-slate-100 text-gray-700 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                              aria-label={`Decrease ${opt.name} quantity`}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-5 text-center font-bold text-xs text-[#171717]">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateFlavorQuantity(opt.name, 1);
                              }}
                              className="w-6 h-6 rounded flex items-center justify-center hover:bg-slate-100 text-gray-700 hover:text-black transition-colors"
                              aria-label={`Increase ${opt.name} quantity`}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
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
            )
          )}

          {/* Selection Choices (e.g. Kids meal, TODO trays, Platters) */}
          {item.selectionChoices && (
            <div className="space-y-4">
              <div className="bg-[#E6F7F8] border border-[#08D8E5]/40 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#058A92]">
                    Meal Bundle • All Included
                  </span>
                  <p className="text-xs font-bold text-[#171717]">
                    {item.id === "kids-mini-luchadores"
                      ? "Choose 1 Main Choice + 1 Side Choice + 1 Drink Choice — all for £5.99"
                      : "Choose your bundle options below — included in bundle price"}
                  </p>
                </div>
                <span className="shrink-0 bg-[#08D8E5] text-black font-extrabold text-xs px-2.5 py-1 rounded-full shadow-sm">
                  Included
                </span>
              </div>

              {item.selectionChoices.map((choice, idx) => {
                const groupSelected = groupSelections[idx] || [];
                const reqCount = choice.requiredCount || 1;
                const isSingle = reqCount === 1;

                return (
                  <div key={idx} className="space-y-3 bg-[#F8FCFD] p-4 rounded-2xl border border-[#D2EEF1]">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#171717]">
                        {choice.title}
                      </label>
                      <span className="text-[11px] font-semibold text-[#058A92] bg-white border border-[#D2EEF1] px-2.5 py-0.5 rounded-full">
                        {isSingle ? "Choose 1 (Included)" : `Choose ${reqCount} (Included)`}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {choice.options.map((opt) => {
                        const isSelected = groupSelected.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleToggleGroupChoice(idx, opt, reqCount)}
                            className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                              isSelected
                                ? "bg-[#08D8E5] text-black border-[#08D8E5] font-bold shadow-sm ring-2 ring-[#08D8E5]/40"
                                : "bg-white text-gray-700 border-[#CBD5E1] hover:border-gray-400 hover:bg-slate-50"
                            }`}
                          >
                            <span className="leading-snug">{opt}</span>
                            {isSelected && <Check className="w-4 h-4 stroke-[3] shrink-0 ml-2" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

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
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
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

              {/* Extra Sauces & Cheese */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  <span>Extra Sauces &amp; Cheese</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {EXTRA_SAUCES_CHEESE.map((sauce) => {
                    const isSelected = selectedSauces.includes(sauce.name);
                    return (
                      <button
                        key={sauce.id}
                        type="button"
                        onClick={() => toggleSauce(sauce.name)}
                        className={`p-2 rounded-lg border text-left text-xs transition-colors ${
                          isSelected
                            ? "bg-[#E6F7F8] border-[#08D8E5] text-black font-semibold"
                            : "bg-white border-[#CBD5E1] text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        <div className="font-semibold truncate text-[#171717]">{sauce.name}</div>
                        <div className="text-[#058A92] font-bold text-[11px] mt-0.5">
                          +{formatPrice(sauce.price)}
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
        <div className="p-3.5 sm:p-5 border-t border-[#D2EEF1] bg-[#F8FCFD]">
          {isMultiFlavorDrink ? (
            <button
              onClick={handleAddToCart}
              disabled={totalFlavorQty === 0}
              className={`w-full font-extrabold uppercase py-3.5 px-6 rounded-xl flex items-center justify-between tracking-wide shadow-md transition-all active:scale-[0.98] ${
                totalFlavorQty > 0
                  ? "bg-[#08D8E5] hover:bg-[#07c2ce] text-black shadow-[#08D8E5]/20 cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
              }`}
            >
              <span className="whitespace-nowrap text-xs sm:text-sm font-black tracking-wide">
                {totalFlavorQty > 0
                  ? `ADD ${totalFlavorQty} TO BASKET`
                  : "SELECT FLAVOURS TO ADD"}
              </span>
              <span className="font-heading font-black text-xs sm:text-base shrink-0 whitespace-nowrap ml-2">
                {formatPrice(totalFlavorPrice)}
              </span>
            </button>
          ) : (
            <div className="flex items-center justify-between gap-2.5 sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2 bg-white border border-[#CBD5E1] rounded-xl p-1 sm:p-1.5 shadow-sm shrink-0">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 text-gray-600 hover:text-black transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <span className="w-6 sm:w-8 text-center font-bold text-[#171717] text-xs sm:text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 text-gray-600 hover:text-black transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!isBundleComplete}
                className={`flex-1 font-extrabold uppercase py-3 sm:py-3.5 px-3.5 sm:px-5 rounded-xl flex items-center justify-between tracking-wide shadow-md transition-all active:scale-[0.98] min-w-0 ${
                  isBundleComplete
                    ? "bg-[#08D8E5] hover:bg-[#07c2ce] text-black shadow-[#08D8E5]/20 cursor-pointer"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed shadow-none"
                }`}
              >
                <span className="whitespace-nowrap text-xs sm:text-sm font-black tracking-wide">
                  {isBundleComplete ? "ADD TO BASKET" : "CHOOSE OPTIONS"}
                </span>
                <span className="font-heading font-black text-xs sm:text-base shrink-0 whitespace-nowrap ml-2">
                  {formatPrice(totalPrice)}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
