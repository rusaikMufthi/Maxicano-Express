"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALL_MENU_ITEMS, MenuItem } from "@/data/menu";
import { ProductCard } from "@/components/menu/ProductCard";
import { ProductCustomizerModal } from "@/components/ordering/ProductCustomizerModal";
import { ArrowRight, Flame } from "lucide-react";

// Select prominent signature items
const FEATURED_IDS = [
  "burrito-chicken-tinga",
  "tacos-pulled-beef",
  "quesadilla-chicken-tinga",
  "todo-trays",
  "chicken-wings",
  "loaded-churros-biscoff",
];

export function FeaturedProducts() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const featuredList = ALL_MENU_ITEMS.filter((item) =>
    FEATURED_IDS.includes(item.id)
  );

  return (
    <section className="py-20 bg-black text-white border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[#FFC43D] text-xs font-bold uppercase tracking-widest">
              <Flame className="w-4 h-4 fill-[#FFC43D]" />
              <span>Customer Favourites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase">
              Featured Signatures
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Explore our most popular burritos, slow-braised birria tacos, crispy bites and sharing feasts.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#08D8E5] hover:text-[#07c2ce] transition-colors shrink-0"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredList.map((product) => (
            <ProductCard
              key={product.id}
              item={product}
              onSelect={(item) => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* Modal for item customization */}
        {selectedItem && (
          <ProductCustomizerModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </section>
  );
}
