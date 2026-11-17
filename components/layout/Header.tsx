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
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-[#222222] shadow-xl py-3"
            : "bg-black border-b border-[#1b1b1b] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08D8E5] rounded-lg"
            aria-label="Mexi Cano Express Home"
          >
            <div className="relative w-44 h-12 sm:w-56 sm:h-14">
              <Image
                src="/images/logo.png"
                alt="Mexi Cano Express Logo"
                fill
                priority
                sizes="(max-width: 640px) 176px, 224px"
                className="object-contain object-left group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm uppercase tracking-wider font-semibold transition-colors duration-200 py-1 border-b-2 ${
                    isActive
                      ? "text-[#08D8E5] border-[#08D8E5]"
                      : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              onClick={openCart}
              type="button"
              className="relative p-2.5 sm:px-4 sm:py-2.5 rounded-full bg-[#181818] hover:bg-[#252525] border border-[#2a2a2a] text-white flex items-center gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08D8E5]"
              aria-label={`View your order basket with ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5 text-[#08D8E5]" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Basket</span>
              {totalItems > 0 && (
                <span className="bg-[#08D8E5] text-black font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>

            {/* ORDER NOW Turquoise Button */}
            <Link
              href="/menu"
              className="bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider px-4 sm:px-6 py-2.5 rounded-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#08D8E5]/20 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>ORDER NOW</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </Link>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="lg:hidden p-2 rounded-lg bg-[#181818] border border-[#2a2a2a] text-white hover:text-[#08D8E5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08D8E5]"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
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
                  href="/menu"
                  className="w-full bg-[#08D8E5] text-black font-extrabold uppercase py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-wider shadow-lg shadow-[#08D8E5]/20"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>START YOUR ORDER</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCart();
                  }}
                  className="w-full bg-[#1c1c1c] hover:bg-[#252525] text-white font-bold uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 border border-[#2a2a2a] tracking-wider text-sm"
                >
                  <ShoppingBag className="w-4 h-4 text-[#08D8E5]" />
                  <span>VIEW BASKET ({totalItems})</span>
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
