import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurant";
import { MapPin, Clock, Navigation, Copy, Check } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-20 bg-black text-white border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block bg-[#08D8E5]/15 border border-[#08D8E5]/30 text-[#08D8E5] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              Visit Us in Peterborough
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase leading-tight">
              FIND OUR <span className="text-[#08D8E5]">RESTAURANT</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Located conveniently in Peterborough city centre on Bridge Street. Drop in for a quick
              takeaway or sit down and enjoy your Mexican favourites freshly made to order.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121212] border border-[#242424]">
                <div className="w-10 h-10 rounded-xl bg-[#08D8E5]/15 text-[#08D8E5] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white uppercase text-base">
                    Full Address
                  </h3>
                  <p className="text-sm text-gray-200 font-medium mt-0.5">
                    {RESTAURANT_INFO.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.city}{" "}
                    {RESTAURANT_INFO.address.postcode}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Plus Code: {RESTAURANT_INFO.address.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121212] border border-[#242424]">
                <div className="w-10 h-10 rounded-xl bg-[#FFC43D]/15 text-[#FFC43D] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white uppercase text-base">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-white font-semibold mt-0.5">
                    Every Day: 11:00 AM – 11:00 PM
                  </p>
                  <p className="text-xs text-[#08D8E5] font-medium mt-0.5">
                    Open Monday to Sunday for Dine-In & Takeaway
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#08D8E5] hover:bg-[#07c2ce] text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#08D8E5]/20 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Map Embed Side */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] shadow-2xl bg-[#121212] h-[380px] sm:h-[460px] w-full">
              <iframe
                title="Mexi Cano Express Location - 41 Bridge St, Peterborough"
                src={RESTAURANT_INFO.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 invert-[0.88] hue-rotate-180 brightness-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
