"use client";

import React from "react";
import Image from "next/image";
import { MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/utils";
import { Plus, Sparkles, Flame } from "lucide-react";

interface ProductCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export function ProductCard({ item, onSelect }: ProductCardProps) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group bg-[#111111] hover:bg-[#161616] border border-[#222222] hover:border-[#383838] rounded-2xl overflow-hidden shadow-lg transition-all duration-200 flex flex-col cursor-pointer transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#08D8E5]"
    >
      {/* Product Image */}
      {item.image && (
        <div className="relative w-full h-48 sm:h-52 bg-neutral-900 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {item.popular && (
              <span className="bg-[#FFC43D] text-black font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                <Flame className="w-3 h-3 fill-black" />
                Popular
              </span>
            )}
            {item.category === "tacos" && (
              <span className="bg-[#08D8E5] text-black font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md">
                2 Tacos
              </span>
            )}
          </div>

          {/* Price Tag Overlay */}
          <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-white font-extrabold font-heading text-sm text-[#08D8E5]">
            {formatPrice(item.price)}
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg text-white font-heading tracking-wide group-hover:text-[#08D8E5] transition-colors leading-snug">
              {item.name}
            </h3>
            {!item.image && (
              <span className="font-bold font-heading text-[#08D8E5] shrink-0 text-base">
                {formatPrice(item.price)}
              </span>
            )}
          </div>

          {item.description && (
            <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          )}

          {item.toppingsInfo && (
            <div className="pt-1 text-[11px] text-gray-400">
              <span className="text-[#FFC43D] font-bold">Toppings: </span>
              {item.toppingsInfo}
            </div>
          )}

          {item.options && (
            <div className="flex flex-wrap gap-1 pt-1">
              {item.options.map((opt) => (
                <span
                  key={opt.name}
                  className="bg-[#1c1c1c] border border-[#2c2c2c] text-[10px] text-gray-300 font-medium px-2 py-0.5 rounded-md"
                >
                  {opt.name}: {formatPrice(opt.price)}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card CTA */}
        <div className="pt-2 border-t border-[#1e1e1e] flex items-center justify-between">
          <span className="text-[11px] text-[#08D8E5] font-semibold flex items-center gap-1 group-hover:underline">
            <Sparkles className="w-3 h-3" />
            <span>Customize & Add</span>
          </span>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[#1e1e1e] group-hover:bg-[#08D8E5] text-gray-300 group-hover:text-black flex items-center justify-center transition-colors shadow"
            aria-label={`Configure and add ${item.name} to basket`}
          >
            <Plus className="w-4 h-4 font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
