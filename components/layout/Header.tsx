"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu as MenuIcon, X, MapPin, Clock, ArrowRight } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurant";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Build Your Own", href: "/build-your-own" },
  { name: "Meal Deals", href: "/meal-deals" },
  { name: "About Us", href: "/about" },
  { name: "Find Us", href: "/location" },
];

export function Header() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full max-w-full overflow-x-clip ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-[#222222] shadow-2xl"
            : "bg-black border-b border-[#1b1b1b]"
        }`}
      >
        {/* Tier 1: Main Header Bar with Centered Logo */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center py-2 sm:py-2.5 lg:py-3 gap-2">
            {/* Left Column: Hamburger on Mobile/Tablet, Click & Collect on Desktop */}
            <div className="flex items-center justify-start">
              {/* Mobile/Tablet Hamburger Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                type="button"
                className="lg:hidden p-2 rounded-lg bg-[#181818] border border-[#2a2a2a] text-white hover:text-[#08D8E5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08D8E5] shrink-0"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Desktop Click & Collect Button */}
              <Link
                href={RESTAURANT_INFO.ordering.clickAndCollectUrl}
                className="hidden lg:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border-2 border-[#08D8E5] text-[#08D8E5] hover:bg-[#08D8E5] hover:text-black font-extrabold uppercase text-xs tracking-wider transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0 shadow-sm"
                aria-label="Click and Collect Takeaway"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#08D8E5] group-hover:text-black shrink-0" />
                <span className="whitespace-nowrap">CLICK &amp; COLLECT</span>
              </Link>
            </div>

            {/* Center Column: Perfectly Centered Logo */}
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08D8E5] rounded-lg"
                aria-label="Mexi Cano Express Home"
              >
                <div className="relative w-36 h-10 sm:w-48 sm:h-12 md:w-56 md:h-14 lg:w-64 lg:h-15">
                  <Image
                    src="/images/logo.png"
                    alt="Mexi Cano Express Logo"
                    fill
                    priority
                    sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 256px"
                    className="object-contain object-center group-hover:opacity-95 transition-opacity"
                  />
                </div>
              </Link>
            </div>

            {/* Right Column: Basket + Order Now CTA */}
            <div className="flex items-center justify-end gap-1.5 sm:gap-2.5 md:gap-3">
              {/* Cart Trigger */}
              <button
                onClick={openCart}
                type="button"
                className="relative p-2 sm:px-3.5 sm:py-2.5 rounded-full bg-[#181818] hover:bg-[#252525] border border-[#2a2a2a] text-white flex items-center gap-1.5 sm:gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08D8E5] shrink-0"
                aria-label={`View your order basket with ${totalItems} items`}
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#08D8E5]" />
                <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Basket
                </span>
                {totalItems > 0 && (
                  <span className="bg-[#08D8E5] text-black font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* ORDER NOW Turquoise Button */}
              <Link
                href={RESTAURANT_INFO.ordering.menuUrl}
                className="bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-[11px] sm:text-xs md:text-sm tracking-wider px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#08D8E5]/20 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0 whitespace-nowrap"
              >
                <span className="whitespace-nowrap">ORDER NOW</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline shrink-0" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tier 2: Sub-Navigation Bar (Desktop Centered Category / Page Links) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:block w-full border-t border-[#1e1e1e] bg-black/40 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-7 xl:gap-10 py-2.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs xl:text-sm uppercase tracking-widest font-bold transition-all duration-200 py-1 border-b-2 whitespace-nowrap ${
                      isActive
                        ? "text-[#08D8E5] border-[#08D8E5]"
                        : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 lg:hidden flex"
        >
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <div className="relative ml-auto w-full max-w-sm bg-[#0c0c0c] border-l border-[#222222] h-full shadow-2xl flex flex-col z-10 animate-slide-left">
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#222222] flex items-center justify-between">
              <div className="relative w-36 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Mexi Cano Express"
                  fill
                  sizes="144px"
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-[#1c1c1c] text-gray-400 hover:text-white transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <nav className="flex-1 overflow-y-auto p-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-[#08D8E5] text-black"
                        : "text-gray-200 hover:bg-[#1a1a1a] hover:text-[#08D8E5]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-6 mt-6 border-t border-[#222222] space-y-3">
                <Link
                  href={RESTAURANT_INFO.ordering.clickAndCollectUrl}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#161616] hover:bg-[#222222] text-[#08D8E5] border-2 border-[#08D8E5] font-extrabold uppercase py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-wider shadow-sm transition-colors"
                >
                  <ShoppingBag className="w-5 h-5 text-[#08D8E5]" />
                  <span>CLICK &amp; COLLECT</span>
                </Link>

                <Link
                  href={RESTAURANT_INFO.ordering.menuUrl}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-wider shadow-lg shadow-[#08D8E5]/20 transition-colors whitespace-nowrap text-sm"
                >
                  <ArrowRight className="w-5 h-5 shrink-0" />
                  <span className="whitespace-nowrap">START YOUR ORDER</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCart();
                  }}
                  className="w-full bg-[#1c1c1c] hover:bg-[#252525] text-white font-bold uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 border border-[#2a2a2a] tracking-wider text-sm whitespace-nowrap"
                >
                  <ShoppingBag className="w-4 h-4 text-[#08D8E5] shrink-0" />
                  <span className="whitespace-nowrap">VIEW BASKET ({totalItems})</span>
                </button>
              </div>
            </nav>

            {/* Drawer Footer Info */}
            <div className="p-6 bg-[#080808] border-t border-[#1e1e1e] space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#08D8E5] shrink-0 mt-0.5" />
                <span>41 Bridge St, Peterborough PE1 1HA</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#08D8E5] shrink-0" />
                <span>Every day: 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
