"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { RESTAURANT_INFO } from "@/data/restaurant";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Info,
  MapPin,
  CheckCircle2,
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

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [orderType, setOrderType] = useState<"takeaway" | "dine-in">("takeaway");
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setCheckoutModalOpen(false);
    clearCart();
    closeCart();
  };

  return (
    <>
      {/* Drawer Overlay */}
      <div
        className="fixed inset-0 z-50 flex justify-end"
        role="dialog"
        aria-modal="true"
        aria-label="Your Order Basket"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
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

          {/* Ordering Demo Notice */}
          <div className="bg-[#E6F7F8] border-b border-[#BDE8EC] p-3 px-4 flex items-start gap-2.5 text-xs text-[#058A92]">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong>Order Preview Mode:</strong> Check your favourite meals and options. To place your
              order, please visit our restaurant counter at 41 Bridge St.
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
                        <h4 className="font-bold text-sm text-[#171717] truncate font-heading">
                          {item.name}
                        </h4>
                        <span className="font-bold text-sm text-[#058A92] shrink-0">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>

                      {item.customization?.selectedOption && (
                        <p className="text-xs text-[#D97706] font-medium">
                          Option: {item.customization.selectedOption}
                        </p>
                      )}

                      {item.customization?.fillings && item.customization.fillings.length > 0 && (
                        <p className="text-xs text-gray-600">
                          Filling: {item.customization.fillings.join(", ")}
                        </p>
                      )}

                      {item.customization?.extraProteins && item.customization.extraProteins.length > 0 && (
                        <p className="text-xs text-[#058A92] font-semibold">
                          + {item.customization.extraProteins.join(", ")}
                        </p>
                      )}

                      {item.customization?.toppings && item.customization.toppings.length > 0 && (
                        <p className="text-xs text-gray-600">
                          Toppings: {item.customization.toppings.join(", ")}
                        </p>
                      )}

                      {item.customization?.upgradeMeal && (
                        <p className="text-xs text-[#058A92] font-semibold">
                          Upgrade (+{formatPrice(item.customization.upgradeMeal.price)}):{" "}
                          {item.customization.upgradeMeal.side} + {item.customization.upgradeMeal.drink}
                        </p>
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

              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-wider shadow-md shadow-[#08D8E5]/25 transition-all transform active:scale-[0.98]"
              >
                <span>PROCEED TO DEMO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <button
                  onClick={clearCart}
                  className="hover:text-red-500 transition-colors"
                >
                  Clear Basket
                </button>
                <span>Fast-Casual Peterborough</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demo Checkout Modal */}
      {checkoutModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setCheckoutModalOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-white border border-[#D2EEF1] rounded-2xl shadow-2xl overflow-hidden z-10 text-[#171717] p-6 sm:p-8 animate-scale-in">
            {!confirmed ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="bg-[#E6F7F8] text-[#058A92] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      Demonstration Preview
                    </span>
                    <h3 id="checkout-title" className="text-xl font-bold font-heading mt-2 text-[#171717]">
                      Order Summary & Review
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCheckoutModalOpen(false)}
                    className="p-2 rounded-full bg-slate-100 text-gray-500 hover:text-black"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="bg-[#F7FCFD] border border-[#D2EEF1] rounded-xl p-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-[#171717] text-sm">
                    <span>Order Total ({totalItems} items):</span>
                    <span className="text-[#058A92]">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-gray-600">
                    Pickup: 41 Bridge St, Peterborough PE1 1HA (Every day 11 AM – 11 PM)
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#F7FCFD] border border-[#CBD5E1] rounded-lg px-3.5 py-2.5 text-sm text-[#171717] placeholder-gray-400 focus:outline-none focus:border-[#08D8E5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Dining Preference
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setOrderType("takeaway")}
                        className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-colors ${
                          orderType === "takeaway"
                            ? "bg-[#08D8E5] text-black border-[#08D8E5]"
                            : "bg-white text-gray-700 border-[#CBD5E1] hover:border-gray-400"
                        }`}
                      >
                        Takeaway
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType("dine-in")}
                        className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-colors ${
                          orderType === "dine-in"
                            ? "bg-[#08D8E5] text-black border-[#08D8E5]"
                            : "bg-white text-gray-700 border-[#CBD5E1] hover:border-gray-400"
                        }`}
                      >
                        Dine-In
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E] space-y-1">
                  <p className="font-bold">Live Fulfilment Integration Notice:</p>
                  <p className="text-gray-700 leading-relaxed">
                    This website is ready for online order processing. Currently, no live credit card or payment provider has been connected, so no payment details are requested.
                  </p>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCheckoutModalOpen(false)}
                    className="flex-1 py-3 px-4 rounded-xl border border-[#CBD5E1] text-gray-700 hover:text-black font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Back to Basket
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#08D8E5] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#07c2ce] transition-colors shadow-sm"
                  >
                    Confirm Demo Order
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-5 py-2">
                <div className="w-16 h-16 rounded-full bg-[#E6F7F8] text-[#058A92] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#171717]">
                    Order Preview Generated!
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Thank you, <span className="text-[#171717] font-bold">{customerName || "Customer"}</span>!
                  </p>
                </div>

                <div className="bg-[#F7FCFD] border border-[#D2EEF1] rounded-xl p-4 text-left text-xs space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Order Reference:</span>
                    <span className="font-mono text-[#171717] font-bold">
                      MXC-{(Math.random() * 9000 + 1000).toFixed(0)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Service:</span>
                    <span className="text-[#171717] font-bold uppercase">{orderType}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Restaurant:</span>
                    <span className="text-[#171717] font-bold">MEXI CANO EXPRESS</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Location:</span>
                    <span className="text-[#171717]">41 Bridge St, Peterborough</span>
                  </div>
                  <div className="flex justify-between text-gray-600 border-t border-[#D2EEF1] pt-2 font-bold text-sm">
                    <span className="text-[#171717]">Subtotal:</span>
                    <span className="text-[#058A92]">{formatPrice(subtotal)}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                  To enjoy this meal in Peterborough today, bring this order summary or simply order at our counter.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={RESTAURANT_INFO.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#08D8E5] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#07c2ce] flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3 px-4 rounded-xl border border-[#CBD5E1] text-gray-700 hover:text-black font-bold text-xs uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
