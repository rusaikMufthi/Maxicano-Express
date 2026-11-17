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
      bgColor: "hover:bg-gradient-to-tr hover:from-purple-900/40 hover:to-pink-900/40",
      accent: "#E1306C",
    },
    {
      name: "TikTok",
      handle: "@mexicanoexpress_",
      url: RESTAURANT_INFO.socialLinks.tiktok,
      description: "Crunch tests, birria cheese pulls, and fast-casual kitchen action.",
      bgColor: "hover:bg-[#00f2fe]/10",
      accent: "#08D8E5",
    },
    {
      name: "Facebook",
      handle: "Mexi Cano Express",
      url: RESTAURANT_INFO.socialLinks.facebook,
      description: "Peterborough community updates, opening times, and announcements.",
      bgColor: "hover:bg-blue-900/30",
      accent: "#1877F2",
    },
  ];

  return (
    <section className="py-20 bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-[#08D8E5] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase leading-tight">
            FOLLOW THE <span className="text-[#08D8E5]">FLAVOUR.</span>
          </h2>
          <p className="text-gray-400 text-sm">
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
              className={`p-8 rounded-3xl bg-[#141414] border border-[#242424] hover:border-gray-500 transition-all duration-300 flex flex-col justify-between group shadow-lg ${s.bgColor}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-xl uppercase tracking-wider text-white group-hover:text-[#08D8E5] transition-colors">
                    {s.name}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#1c1c1c] border border-[#2d2d2d] flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#08D8E5] group-hover:text-black transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-mono font-bold text-[#FFC43D]">
                  {s.handle}
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#222222] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-300 group-hover:text-[#08D8E5]">
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
