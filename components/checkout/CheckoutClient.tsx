"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { RESTAURANT_INFO } from "@/data/restaurant";
import {
  ShoppingBag,
  MapPin,
  Clock,
  ArrowRight,
  Plus,
  Minus,
  Trash2,
  AlertCircle,
  CreditCard,
  Building2,
  CheckCircle2,
  Printer,
  ChevronLeft,
  ExternalLink,
  Info,
} from "lucide-react";

// Generate available collection time slots (15-min intervals between 11:30 AM and 10:30 PM)
const TIME_SLOTS: string[] = [];
for (let hour = 11; hour <= 22; hour++) {
  const startMinute = hour === 11 ? 30 : 0;
  const endMinute = hour === 22 ? 30 : 45;
  for (let min = startMinute; min <= endMinute; min += 15) {
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour;
    const displayMin = min === 0 ? "00" : min.toString();
    TIME_SLOTS.push(`${displayHour}:${displayMin} ${period}`);
  }
}

interface OrderConfirmationData {
  orderRef: string;
  fullName: string;
  email: string;
  phone: string;
  collectionType: "asap" | "scheduled";
  collectionTime: string;
  paymentMethod: "counter" | "online_preview";
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    customization?: any;
  }>;
  total: number;
  submittedAt: string;
}

export function CheckoutClient() {
  const {
    items,
    subtotal,
    totalItems,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  // Customer form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");

  // Collection state
  const [collectionType, setCollectionType] = useState<"asap" | "scheduled">("asap");
  const [preferredTime, setPreferredTime] = useState(TIME_SLOTS[0] || "12:00 PM");

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<"counter" | "online_preview">("counter");

  // Form errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Order confirmation state
  const [confirmedOrder, setConfirmedOrder] = useState<OrderConfirmationData | null>(null);

  // Validate form inputs
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address for your order confirmation.";
    }

    const phoneDigits = phone.replace(/[^0-9]/g, "");
    if (!phone.trim() || phoneDigits.length < 8) {
      newErrors.phone = "Please enter a valid contact phone number (minimum 8 digits).";
    }

    if (items.length === 0) {
      newErrors.cart = "Your basket is empty. Please add items before placing your order.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate backend submission / demonstration order generation
    setTimeout(() => {
      const generatedRef = `MXC-COLLECT-${Math.floor(1000 + Math.random() * 9000)}`;
      const confirmation: OrderConfirmationData = {
        orderRef: generatedRef,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        collectionType,
        collectionTime: collectionType === "asap" ? "As Soon As Possible (approx. 15–25 mins)" : preferredTime,
        paymentMethod,
        items: [...items],
        total: subtotal,
        submittedAt: new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setConfirmedOrder(confirmation);
      clearCart();
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  };

  // -------------------------------------------------------------
  // VIEW: ORDER CONFIRMATION
  // -------------------------------------------------------------
  if (confirmedOrder) {
    return (
      <div className="min-h-screen bg-[#F0FAF9] py-12 px-4 sm:px-6 lg:px-8 text-[#171717]">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Success Banner */}
          <div className="bg-white border-2 border-[#08D8E5] rounded-3xl p-6 sm:p-10 shadow-xl text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-[#E8F8F9] border-2 border-[#08D8E5] text-[#058A92] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10 text-[#058A92]" />
            </div>

            <div className="space-y-1">
              <span className="inline-block bg-[#08D8E5]/15 text-[#058A92] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Click &amp; Collect Takeaway
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase tracking-tight text-[#171717]">
                THANK YOU FOR YOUR ORDER!
              </h1>
              <p className="text-base text-gray-600 max-w-lg mx-auto">
                Your order summary has been generated for collection at our Peterborough restaurant.
              </p>
            </div>

            {/* DEMONSTRATION MODE NOTICE (As requested) */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-left text-xs sm:text-sm text-[#92400E] space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-base text-[#B45309]">
                <Info className="w-5 h-5 shrink-0" />
                <span>Demonstration Mode Active</span>
              </div>
              <p className="leading-relaxed">
                Mexi Cano Express online ordering is currently running in demonstration mode. No live payment was charged and this order has not been transmitted to a live kitchen EPOS printer.
              </p>
              <p className="font-semibold pt-1">
                To complete this order in person, please show this summary or order directly at our restaurant counter: <strong>41 Bridge St, Peterborough PE1 1HA</strong>.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="inline-flex items-center gap-3 bg-[#F0FAF9] border border-[#D2EEF1] rounded-2xl px-6 py-3 mt-2">
              <span className="text-xs uppercase font-bold text-gray-600 tracking-wider">
                Order Reference:
              </span>
              <span className="font-mono text-xl font-extrabold text-[#058A92]">
                {confirmedOrder.orderRef}
              </span>
            </div>
          </div>

          {/* Detailed Order Breakdown Card */}
          <div className="bg-white border border-[#D2EEF1] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-bold font-heading uppercase text-[#171717] pb-3 border-b border-[#EDF6F7]">
              Order &amp; Collection Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Customer Information
                </span>
                <p className="font-bold text-[#171717]">{confirmedOrder.fullName}</p>
                <p className="text-gray-600">{confirmedOrder.email}</p>
                <p className="text-gray-600">{confirmedOrder.phone}</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Collection Point
                </span>
                <p className="font-bold text-[#171717]">{RESTAURANT_INFO.name}</p>
                <p className="text-gray-600">{RESTAURANT_INFO.address.full}</p>
                <p className="text-xs text-[#058A92] font-semibold">
                  Requested Timing: {confirmedOrder.collectionTime}
                </p>
              </div>
            </div>

            {/* Ordered Items Table */}
            <div className="pt-4 border-t border-[#EDF6F7] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                Ordered Items
              </span>
              <div className="divide-y divide-[#EDF6F7]">
                {confirmedOrder.items.map((item) => (
                  <div key={item.id} className="py-3 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="font-heading font-bold text-sm text-[#171717] uppercase">
                        {item.quantity}x {item.name}
                      </p>
                      {item.customization && (
                        <div className="text-xs text-gray-600 space-y-0.5">
                          {item.customization.selectedOption && (
                            <p>Option: {item.customization.selectedOption}</p>
                          )}
                          {item.customization.bundleSelections && item.customization.bundleSelections.length > 0 ? (
                            item.customization.bundleSelections.map((b: any, bIdx: number) => (
                              <p key={bIdx}>
                                <span className="font-semibold text-gray-700">{b.title}:</span> {b.choice}
                              </p>
                            ))
                          ) : (
                            item.customization.fillings && item.customization.fillings.length > 0 && (
                              <p>Selections: {item.customization.fillings.join(", ")}</p>
                            )
                          )}
                          {item.customization.toppings && item.customization.toppings.length > 0 && (
                            <p>Toppings: {item.customization.toppings.join(", ")}</p>
                          )}
                          {item.customization.extraProteins && item.customization.extraProteins.length > 0 && (
                            <p className="text-[#D97706]">+ Extra: {item.customization.extraProteins.join(", ")}</p>
                          )}
                          {item.customization.upgradeMeal && (
                            <p className="text-[#058A92]">
                              Meal Deal: {item.customization.upgradeMeal.side} + {item.customization.upgradeMeal.drink}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    <span className="font-heading font-bold text-sm text-[#058A92] shrink-0">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Due */}
              <div className="pt-4 border-t-2 border-[#D2EEF1] flex items-center justify-between text-base font-bold">
                <span className="font-heading text-lg text-[#171717]">Total Due (Pay at Counter):</span>
                <span className="font-heading text-2xl text-[#058A92]">
                  {formatPrice(confirmedOrder.total)}
                </span>
              </div>
            </div>

            {/* Actions: Directions & Print */}
            <div className="pt-6 border-t border-[#EDF6F7] flex flex-col sm:flex-row items-center gap-3">
              <a
                href={RESTAURANT_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-6 rounded-full flex items-center justify-center gap-2 tracking-wider shadow-md text-xs sm:text-sm transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions to Restaurant</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto bg-white border border-[#CBD5E1] hover:bg-slate-50 text-gray-700 font-bold uppercase py-3.5 px-6 rounded-full flex items-center justify-center gap-2 tracking-wider text-xs sm:text-sm transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print Summary</span>
              </button>

              <Link
                href="/menu"
                className="w-full sm:w-auto bg-black hover:bg-[#1a1a1a] text-white font-bold uppercase py-3.5 px-6 rounded-full flex items-center justify-center gap-2 tracking-wider text-xs sm:text-sm transition-all"
              >
                <span>Back to Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW: EMPTY BASKET
  // -------------------------------------------------------------
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F0FAF9] py-16 px-4 sm:px-6 lg:px-8 text-[#171717]">
        <div className="max-w-2xl mx-auto text-center space-y-6 bg-white border border-[#D2EEF1] rounded-3xl p-8 sm:p-14 shadow-sm">
          <div className="w-24 h-24 rounded-full bg-[#E8F8F9] border-2 border-[#D2EEF1] flex items-center justify-center text-gray-400 mx-auto shadow-inner">
            <ShoppingBag className="w-12 h-12 text-[#058A92]" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase tracking-tight text-[#171717]">
              YOUR BASKET IS EMPTY
            </h1>
            <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
              You haven&apos;t added any Mexican favourites to your order yet. Explore our loaded burritos, tacos, quesadillas, and sweet churros to get started!
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={RESTAURANT_INFO.ordering.clickAndCollectUrl}
              className="w-full sm:w-auto bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#08D8E5]/25 flex items-center justify-center gap-2"
            >
              <span>EXPLORE OUR MENU</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/meal-deals"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#171717] font-bold uppercase text-xs sm:text-sm tracking-wider px-6 py-4 rounded-full transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>VIEW MEAL DEALS &amp; SHARING</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW: CHECKOUT FORM & LIVE SUMMARY
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#F0FAF9] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-[#171717]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-[#058A92] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Menu</span>
          </Link>

          <span className="text-xs font-semibold uppercase tracking-wider text-[#058A92] bg-[#E8F8F9] px-3 py-1 rounded-full border border-[#BDE8EC]">
            Click &amp; Collect Takeaway
          </span>
        </div>

        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase tracking-tight text-[#171717]">
            COMPLETE YOUR ORDER
          </h1>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            Your Mexican favourites are almost ready! Review your items, select your collection preference, and confirm your order details.
          </p>
        </div>

        {/* Global Error Banner */}
        {errors.cart && (
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{errors.cart}</span>
          </div>
        )}

        {/* Two-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Customer, Collection & Payment Forms */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handlePlaceOrder} id="checkout-form" className="space-y-8">
              {/* SECTION 1: Customer Information */}
              <div className="bg-white border border-[#D2EEF1] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-[#EDF6F7]">
                  <div className="w-9 h-9 rounded-full bg-[#08D8E5] text-black font-extrabold font-heading flex items-center justify-center text-sm">
                    1
                  </div>
                  <div>
                    <h2 className="text-lg font-bold font-heading uppercase text-[#171717]">
                      Customer Information
                    </h2>
                    <p className="text-xs text-gray-500">
                      We will use these details to notify you regarding your collection.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) {
                          setErrors((prev) => ({ ...prev, fullName: "" }));
                        }
                      }}
                      placeholder="e.g. Alex Smith"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`w-full bg-[#F7FCFD] border rounded-xl px-4 py-3 text-sm text-[#171717] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#08D8E5] focus:border-[#08D8E5] transition-all ${
                        errors.fullName ? "border-red-500 bg-red-50/50" : "border-[#CBD5E1]"
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) {
                            setErrors((prev) => ({ ...prev, email: "" }));
                          }
                        }}
                        placeholder="alex@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full bg-[#F7FCFD] border rounded-xl px-4 py-3 text-sm text-[#171717] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#08D8E5] focus:border-[#08D8E5] transition-all ${
                          errors.email ? "border-red-500 bg-red-50/50" : "border-[#CBD5E1]"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) {
                            setErrors((prev) => ({ ...prev, phone: "" }));
                          }
                        }}
                        placeholder="e.g. 07123 456789"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full bg-[#F7FCFD] border rounded-xl px-4 py-3 text-sm text-[#171717] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#08D8E5] focus:border-[#08D8E5] transition-all ${
                          errors.phone ? "border-red-500 bg-red-50/50" : "border-[#CBD5E1]"
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Special Order Notes (Optional) */}
                  <div>
                    <label
                      htmlFor="customerNotes"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      Special Instructions / Dietary Notes (Optional)
                    </label>
                    <textarea
                      id="customerNotes"
                      rows={2}
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      placeholder="e.g. Extra napkins, sauce on the side, or allergy notice"
                      className="w-full bg-[#F7FCFD] border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#08D8E5] focus:border-[#08D8E5] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Collection Information */}
              <div className="bg-white border border-[#D2EEF1] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#EDF6F7]">
                  <div className="w-9 h-9 rounded-full bg-[#08D8E5] text-black font-extrabold font-heading flex items-center justify-center text-sm">
                    2
                  </div>
                  <div>
                    <h2 className="text-lg font-bold font-heading uppercase text-[#171717]">
                      COLLECTION LOCATION
                    </h2>
                    <p className="text-xs text-gray-500">
                      Pick up your fresh order directly at our restaurant counter.
                    </p>
                  </div>
                </div>

                {/* Location Details Card */}
                <div className="bg-[#F8FCFD] border border-[#D2EEF1] rounded-2xl p-5 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#058A92]" />
                        <h3 className="font-heading font-bold text-base uppercase text-[#171717]">
                          {RESTAURANT_INFO.name}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-600 pl-6 leading-relaxed">
                        41 Bridge St, Peterborough PE1 1HA, United Kingdom.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-600 pl-6 pt-1">
                        <Clock className="w-3.5 h-3.5 text-[#058A92]" />
                        <span>Opening hours: Every day, 11:00 AM – 11:00 PM</span>
                      </div>
                    </div>

                    <a
                      href={RESTAURANT_INFO.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#058A92] hover:text-[#046e74] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>

                {/* Collection Preference Selection */}
                <div className="space-y-3">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Select Collection Preference:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* ASAP */}
                    <label
                      className={`cursor-pointer rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                        collectionType === "asap"
                          ? "bg-[#E8F8F9] border-[#08D8E5] ring-2 ring-[#08D8E5]"
                          : "bg-[#F8FCFD] border-[#CBD5E1] hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-sm uppercase text-[#171717]">
                          As Soon As Possible
                        </span>
                        <input
                          type="radio"
                          name="collectionType"
                          value="asap"
                          checked={collectionType === "asap"}
                          onChange={() => setCollectionType("asap")}
                          className="w-4 h-4 text-[#08D8E5] focus:ring-[#08D8E5]"
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Freshly prepared when you arrive (approx. 15–25 mins).
                      </p>
                    </label>

                    {/* Preferred Time */}
                    <label
                      className={`cursor-pointer rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                        collectionType === "scheduled"
                          ? "bg-[#E8F8F9] border-[#08D8E5] ring-2 ring-[#08D8E5]"
                          : "bg-[#F8FCFD] border-[#CBD5E1] hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-sm uppercase text-[#171717]">
                          Preferred Time Today
                        </span>
                        <input
                          type="radio"
                          name="collectionType"
                          value="scheduled"
                          checked={collectionType === "scheduled"}
                          onChange={() => setCollectionType("scheduled")}
                          className="w-4 h-4 text-[#08D8E5] focus:ring-[#08D8E5]"
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Select a target time window within opening hours.
                      </p>
                    </label>
                  </div>

                  {/* Preferred Time Dropdown (Visible only when scheduled) */}
                  {collectionType === "scheduled" && (
                    <div className="p-4 bg-[#F8FCFD] border border-[#BDE8EC] rounded-2xl space-y-2 animate-fade-in">
                      <label
                        htmlFor="preferredTime"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                      >
                        Choose Preferred Collection Time Today:
                      </label>
                      <select
                        id="preferredTime"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#171717] font-semibold focus:outline-none focus:ring-2 focus:ring-[#08D8E5]"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Realistic Restaurant Notice (Mandatory per prompt) */}
                  <div className="p-3.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E] flex items-start gap-2.5">
                    <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#B45309]" />
                    <p className="leading-relaxed">
                      <strong>Collection Confirmation Notice:</strong> Requested collection times are subject to kitchen confirmation upon arrival. Orders are prepared fresh to order at our 41 Bridge St counter. Automated kitchen slot guarantees require integrated EPOS software.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Payment Section (Gateway Ready & Documented) */}
              <div className="bg-white border border-[#D2EEF1] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#EDF6F7]">
                  <div className="w-9 h-9 rounded-full bg-[#08D8E5] text-black font-extrabold font-heading flex items-center justify-center text-sm">
                    3
                  </div>
                  <div>
                    <h2 className="text-lg font-bold font-heading uppercase text-[#171717]">
                      Payment Method
                    </h2>
                    <p className="text-xs text-gray-500">
                      Select your preferred payment arrangement.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Method 1: Pay at Counter (Active) */}
                  <label
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all flex items-start justify-between gap-4 ${
                      paymentMethod === "counter"
                        ? "bg-[#E8F8F9] border-[#08D8E5] ring-2 ring-[#08D8E5]"
                        : "bg-[#F8FCFD] border-[#CBD5E1]"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-[#058A92]" />
                        <span className="font-heading font-bold text-sm uppercase text-[#171717]">
                          Pay at Counter on Collection
                        </span>
                        <span className="bg-[#08D8E5]/20 text-[#058A92] text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Pay by card (Contactless, Chip &amp; PIN, Apple Pay, Google Pay) or cash when you pick up your order at 41 Bridge St.
                      </p>
                    </div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="counter"
                      checked={paymentMethod === "counter"}
                      onChange={() => setPaymentMethod("counter")}
                      className="w-4 h-4 text-[#08D8E5] focus:ring-[#08D8E5] mt-1 shrink-0"
                    />
                  </label>

                  {/* Method 2: Online Card Payment (Architecture Integration Point) */}
                  <div className="rounded-2xl p-4 sm:p-5 border border-dashed border-gray-300 bg-[#F9FAFB] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-gray-400" />
                        <span className="font-heading font-bold text-sm uppercase text-gray-500">
                          Online Card Payment (Stripe / Dojo Integration Point)
                        </span>
                      </div>
                      <span className="bg-slate-200 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                        Gateway Ready
                      </span>
                    </div>

                    <div className="text-xs text-gray-500 leading-relaxed space-y-1 bg-white p-3.5 rounded-xl border border-gray-200">
                      <p className="font-semibold text-gray-700">
                        Developer &amp; Integration Documentation:
                      </p>
                      <p>
                        This interface is architected to mount live payment components (such as <code>@stripe/react-stripe-js</code> <code>&lt;PaymentElement /&gt;</code>) directly here when the restaurant provides live merchant credentials.
                      </p>
                      <p className="italic text-gray-500">
                        In accordance with PCI-DSS compliance and customer security, live card numbers are never accepted or stored without a configured gateway provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Sticky Order Summary & Submission CTA */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white border border-[#D2EEF1] rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EDF6F7]">
                <div>
                  <h2 className="text-xl font-bold font-heading uppercase text-[#171717]">
                    Order Summary
                  </h2>
                  <p className="text-xs text-gray-500">
                    {totalItems} {totalItems === 1 ? "item" : "items"} in basket
                  </p>
                </div>
                <Link
                  href="/menu"
                  className="text-xs font-bold uppercase tracking-wider text-[#058A92] hover:underline"
                >
                  + Add More Items
                </Link>
              </div>

              {/* Items List */}
              <div className="max-h-80 overflow-y-auto space-y-4 pr-1 divide-y divide-[#EDF6F7]">
                {items.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      {item.image && (
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[#D2EEF1] bg-slate-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-sm text-[#171717] uppercase truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-mono">
                          {formatPrice(item.price)} each
                        </p>

                        {/* Customizations */}
                        {item.customization && (
                          <div className="mt-1 text-[11px] text-gray-600 border-l border-[#08D8E5] pl-2 space-y-0.5">
                            {item.customization.selectedOption && (
                              <p>
                                <span className="font-semibold">Option:</span> {item.customization.selectedOption}
                              </p>
                            )}
                            {item.customization.bundleSelections && item.customization.bundleSelections.length > 0 ? (
                              item.customization.bundleSelections.map((b: any, bIdx: number) => (
                                <p key={bIdx}>
                                  <span className="font-semibold">{b.title}:</span> {b.choice}
                                </p>
                              ))
                            ) : (
                              item.customization.fillings && item.customization.fillings.length > 0 && (
                                <p>
                                  <span className="font-semibold">Selections:</span> {item.customization.fillings.join(", ")}
                                </p>
                              )
                            )}
                            {item.customization.toppings && item.customization.toppings.length > 0 && (
                              <p>
                                <span className="font-semibold">Toppings:</span> {item.customization.toppings.join(", ")}
                              </p>
                            )}
                            {item.customization.extraProteins && item.customization.extraProteins.length > 0 && (
                              <p className="text-[#D97706]">
                                + Extra: {item.customization.extraProteins.join(", ")}
                              </p>
                            )}
                            {item.customization.upgradeMeal && (
                              <p className="text-[#058A92]">
                                Meal: {item.customization.upgradeMeal.side} + {item.customization.upgradeMeal.drink}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      <span className="font-heading font-bold text-sm text-[#058A92] shrink-0">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <div className="flex items-center gap-1.5 bg-[#F7FCFD] border border-[#CBD5E1] rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 text-gray-700 transition-colors"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center font-bold text-[#171717]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 text-gray-700 transition-colors"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 p-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Pricing Summary */}
              <div className="pt-4 border-t border-[#D2EEF1] space-y-2 text-sm">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="text-[#171717] font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Click &amp; Collect Service Fee</span>
                  <span className="text-[#058A92] font-semibold">£0.00 (Free)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>VAT (20% UK Standard)</span>
                  <span>Included</span>
                </div>
                <div className="flex items-center justify-between text-lg font-bold text-[#171717] pt-3 border-t-2 border-[#D2EEF1]">
                  <span className="font-heading">Total Due:</span>
                  <span className="text-[#058A92] text-2xl font-heading">
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>

              {/* PLACE YOUR ORDER Button */}
              <button
                type="submit"
                form="checkout-form"
                disabled={isSubmitting || items.length === 0}
                className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-extrabold uppercase py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 tracking-wider shadow-xl shadow-[#08D8E5]/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Processing Order...</span>
                  </span>
                ) : (
                  <>
                    <span>PLACE YOUR ORDER</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Reassurance notes */}
              <div className="text-[11px] text-gray-500 text-center space-y-1">
                <p>No card charges will be made in demonstration mode.</p>
                <p>Collect at 41 Bridge St, Peterborough PE1 1HA.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
