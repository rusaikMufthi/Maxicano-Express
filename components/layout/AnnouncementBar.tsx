import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurant";
import { MapPin, Clock } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#08D8E5] text-black font-semibold text-xs sm:text-sm py-2 px-3 sm:px-4 shadow-sm select-none w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
        <div className="flex items-center gap-2 tracking-wider uppercase font-bold">
          <span>{RESTAURANT_INFO.announcement}</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs text-black/90 font-medium">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Open Today: 11:00 AM – 11:00 PM</span>
          </span>
          <a
            href={RESTAURANT_INFO.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:underline"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>41 Bridge St, Peterborough</span>
          </a>
        </div>
      </div>
    </div>
  );
}
