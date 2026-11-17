import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Utensils } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <span className="text-6xl font-extrabold font-heading text-[#08D8E5]">
          404
        </span>
        <h1 className="text-3xl font-extrabold font-heading uppercase text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          Looks like this taco has gone missing! Don&apos;t worry, you can jump back to our homepage
          or check out our delicious menu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-[#08D8E5]/20"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto bg-[#1a1a1a] hover:bg-[#252525] border border-[#333333] text-white font-bold uppercase text-xs tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors"
          >
            <Utensils className="w-4 h-4 text-[#08D8E5]" />
            <span>Explore Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
