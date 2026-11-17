import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurant";
import { ExternalLink, Sparkles } from "lucide-react";

export function SocialSection() {
  const socials = [
    {
      name: "Instagram",
      handle: "@mexicanoexpress_",
      url: RESTAURANT_INFO.socialLinks.instagram,
      description: "Behind the scenes, fresh burrito rolling, and daily specials.",
      accent: "#E1306C",
    },
    {
      name: "TikTok",
      handle: "@mexicanoexpress_",
      url: RESTAURANT_INFO.socialLinks.tiktok,
      description: "Crunch tests, birria cheese pulls, and fast-casual kitchen action.",
      accent: "#058A92",
    },
    {
      name: "Facebook",
      handle: "Mexi Cano Express",
      url: RESTAURANT_INFO.socialLinks.facebook,
      description: "Peterborough community updates, opening times, and announcements.",
      accent: "#1877F2",
    },
  ];

  return (
    <section className="py-20 bg-[#E6F6F7] text-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-[#058A92] text-xs font-bold uppercase tracking-widest bg-white border border-[#BDE8EC] px-3.5 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase leading-tight text-[#171717]">
            FOLLOW THE <span className="text-[#058A92]">FLAVOUR.</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Stay connected with Mexi Cano Express on your favourite social platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-white border border-[#D2EEF1] hover:border-[#08D8E5] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-xl uppercase tracking-wider text-[#171717] group-hover:text-[#058A92] transition-colors">
                    {s.name}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#F0FAF9] border border-[#D2EEF1] flex items-center justify-center text-gray-600 group-hover:bg-[#08D8E5] group-hover:text-black transition-colors shadow-sm">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-mono font-bold text-[#D97706]">
                  {s.handle}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#EDF6F7] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-700 group-hover:text-[#058A92]">
                <span>Visit {s.name} Page</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
