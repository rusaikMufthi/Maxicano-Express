import React from "react";
import Link from "next/link";
import { Home, Utensils } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#F0FAF9] text-[#171717] min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-6 bg-white border border-[#D2EEF1] p-8 sm:p-10 rounded-3xl shadow-sm">
        <span className="text-6xl font-extrabold font-heading text-[#058A92]">
          404
        </span>
        <h1 className="text-3xl font-extrabold font-heading uppercase text-[#171717]">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Looks like this taco has gone missing! Don&apos;t worry, you can jump back to our homepage
          or check out our delicious menu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md shadow-[#08D8E5]/20"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#171717] font-bold uppercase text-xs tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Utensils className="w-4 h-4 text-[#058A92]" />
            <span>Explore Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
