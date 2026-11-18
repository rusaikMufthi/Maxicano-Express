"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Info,
} from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    totalItems,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Basket"
        className="fixed inset-0 z-50 flex justify-end animate-fade-in"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />

        {/* Drawer Content */}
        <div className="relative w-full max-w-md bg-white border-l border-[#D2EEF1] h-full shadow-2xl flex flex-col z-10 text-[#171717]">
          {/* Header */}
          <div className="p-5 border-b border-[#D2EEF1] flex items-center justify-between bg-[#F8FCFD]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8F8F9] border border-[#BDE8EC] flex items-center justify-center text-[#058A92]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold uppercase tracking-wider font-heading text-[#171717]">
                  Your Basket
                </h2>
                <p className="text-xs text-gray-500">
                  {totalItems} {totalItems === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full bg-slate-100 text-gray-500 hover:text-black hover:bg-slate-200 transition-colors"
              aria-label="Close basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Ordering Notice */}
          <div className="bg-[#E6F7F8] border-b border-[#BDE8EC] p-3 px-4 flex items-start gap-2.5 text-xs text-[#058A92]">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong>Click &amp; Collect Experience:</strong> Review your items below or proceed to the dedicated checkout page.
            </p>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F0FAF9]/50">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-white border border-[#D2EEF1] flex items-center justify-center text-gray-400 shadow-sm">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#171717]">
                    Your basket is empty
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs">
                    Explore our flavour-packed burritos, tacos, quesadillas and churros to get started!
                  </p>
                </div>
                <Link
                  href="/menu"
                  onClick={closeCart}
                  className="bg-[#08D8E5] text-black font-extrabold uppercase text-xs tracking-wider px-6 py-3 rounded-full hover:bg-[#07c2ce] transition-all shadow-md"
                >
                  Explore The Menu
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#D2EEF1] rounded-xl p-3.5 space-y-2.5 transition-colors hover:border-[#08D8E5] shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    {item.image && (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#D2EEF1] bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-heading font-bold text-sm text-[#171717] truncate uppercase">
                          {item.name}
                        </h4>
                        <span className="font-heading font-bold text-sm text-[#058A92] shrink-0">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 font-mono">
                        {formatPrice(item.price)} each
                      </p>

                      {/* Selected Customizations */}
                      {item.customization && (
                        <div className="mt-1.5 space-y-0.5 text-[11px] text-gray-600 border-l-2 border-[#08D8E5] pl-2">
                          {item.customization.selectedOption && (
                            <p>
                              <span className="font-semibold text-gray-700">Option:</span>{" "}
                              {item.customization.selectedOption}
                            </p>
                          )}
                          {item.customization.fillings &&
                            item.customization.fillings.length > 0 && (
                              <p>
                                <span className="font-semibold text-gray-700">Fillings:</span>{" "}
                                {item.customization.fillings.join(", ")}
                              </p>
                            )}
                          {item.customization.toppings &&
                            item.customization.toppings.length > 0 && (
                              <p>
                                <span className="font-semibold text-gray-700">Toppings:</span>{" "}
                                {item.customization.toppings.join(", ")}
                              </p>
                            )}
                          {item.customization.extraProteins &&
                            item.customization.extraProteins.length > 0 && (
                              <p className="text-[#D97706] font-medium">
                                + Extra: {item.customization.extraProteins.join(", ")}
                              </p>
                            )}
                          {item.customization.upgradeMeal && (
                            <p className="text-[#058A92] font-medium">
                              Meal Deal: {item.customization.upgradeMeal.side} +{" "}
                              {item.customization.upgradeMeal.drink}
                            </p>
                          )}
                          {item.customization.notes && (
                            <p className="italic text-gray-500">
                              Note: {item.customization.notes}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#EDF6F7] text-xs">
                    <div className="flex items-center gap-2 bg-[#F7FCFD] border border-[#CBD5E1] rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 text-gray-700 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center font-bold text-[#171717]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 text-gray-700 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500 flex items-center gap-1 transition-colors p-1"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#D2EEF1] bg-white space-y-4 shadow-lg">
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="text-[#171717] font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-gray-500 text-xs">
                  <span>Estimated VAT</span>
                  <span>Included</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-[#171717] pt-2 border-t border-[#D2EEF1]">
                  <span>Total Due</span>
                  <span className="text-[#058A92] text-xl font-heading">
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-wider shadow-md shadow-[#08D8E5]/25 transition-all transform active:scale-[0.98]"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <button
                  onClick={clearCart}
                  className="hover:text-red-500 transition-colors"
                >
                  Clear Basket
                </button>
                <span>Click &amp; Collect Peterborough</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}