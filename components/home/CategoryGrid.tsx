import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MENU_CATEGORIES } from "@/data/menu";
import { ArrowUpRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="py-20 bg-white text-[#171717] border-b border-[#D2EEF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#058A92] text-xs font-bold uppercase tracking-widest">
            Taste The Menu
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase text-[#171717]">
            Explore Our Food Categories
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Freshly prepared Mexican favourites, seasoned to perfection and made expressly for you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/menu#${category.id}`}
              className="group relative bg-[#F7FCFD] hover:bg-white border border-[#D2EEF1] hover:border-[#08D8E5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08D8E5]"
            >
              {/* Category Image */}
              <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {category.badge && (
                  <span className="absolute top-3 left-3 bg-[#08D8E5] text-black font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                    {category.badge}
                  </span>
                )}

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white group-hover:bg-[#08D8E5] group-hover:text-black transition-colors shadow">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2 bg-white">
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-[#171717] group-hover:text-[#058A92] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EDF6F7] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#058A92]">
                  <span>Explore Category</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
