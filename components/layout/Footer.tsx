import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RESTAURANT_INFO } from "@/data/restaurant";
import { MENU_CATEGORIES } from "@/data/menu";
import { MapPin, Clock, ExternalLink } from "lucide-react";

// Official SVGs for Instagram, Facebook, and TikTok
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62.02 5.24-.02 7.86-.08 1.95-.69 3.93-1.87 5.51-1.44 1.95-3.69 3.25-6.11 3.55-2.12.27-4.32-.15-6.16-1.25-2.18-1.3-3.72-3.48-4.23-5.96-.54-2.58.07-5.36 1.67-7.46 1.44-1.89 3.65-3.1 6.03-3.41.44-.06.88-.08 1.32-.08v4.13c-.93.07-1.88.35-2.61.96-.86.71-1.37 1.79-1.4 2.91-.04 1.25.5 2.48 1.47 3.27.97.79 2.29 1.1 3.51.85 1.18-.24 2.18-1.08 2.64-2.19.26-.61.37-1.27.37-1.93V.02z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-[#1e1e1e] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#222222]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block" aria-label="Mexi Cano Express Home">
              <div className="relative w-52 h-14">
                <Image
                  src="/images/logo.png"
                  alt="Mexi Cano Express"
                  fill
                  sizes="208px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Mexi Cano Express brings Mexican-inspired fast-casual food to Peterborough. From
              flavour-packed burritos and tacos to loaded sides and sweet churros, we&apos;re here to make
              every meal a little more exciting.
            </p>
            {/* Social Icons */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">
                Follow The Flavour
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={RESTAURANT_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mexi Cano Express on Instagram"
                  className="w-10 h-10 rounded-full bg-[#181818] border border-[#2b2b2b] flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#08D8E5] hover:border-[#08D8E5] transition-all"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={RESTAURANT_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mexi Cano Express on Facebook"
                  className="w-10 h-10 rounded-full bg-[#181818] border border-[#2b2b2b] flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#08D8E5] hover:border-[#08D8E5] transition-all"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href={RESTAURANT_INFO.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mexi Cano Express on TikTok"
                  className="w-10 h-10 rounded-full bg-[#181818] border border-[#2b2b2b] flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#08D8E5] hover:border-[#08D8E5] transition-all"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#08D8E5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#08D8E5] transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/build-your-own" className="hover:text-[#08D8E5] transition-colors">
                  Build Your Own
                </Link>
              </li>
              <li>
                <Link href="/meal-deals" className="hover:text-[#08D8E5] transition-colors">
                  Meal Deals & Sharing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#08D8E5] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#08D8E5] transition-colors">
                  Find Us / Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#08D8E5] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase font-heading">
              Menu Highlights
            </h3>
            <ul className="space-y-2.5 text-sm">
              {MENU_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/menu#${cat.id}`}
                    className="hover:text-[#08D8E5] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/menu#macho-loaded" className="hover:text-[#08D8E5] transition-colors">
                  Macho Loaded
                </Link>
              </li>
              <li>
                <Link href="/menu#sharing-trays" className="hover:text-[#08D8E5] transition-colors">
                  TODO Trays & Sharing
                </Link>
              </li>
              <li>
                <Link href="/menu#churros" className="hover:text-[#08D8E5] transition-colors">
                  Churros & Desserts
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit & Hours */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase font-heading">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#08D8E5] shrink-0 mt-0.5" />
                <span>
                  41 Bridge St, Peterborough
                  <br />
                  PE1 1HA, United Kingdom
                </span>
              </div>
              <div className="text-xs text-gray-400 pl-6">
                Plus Code: {RESTAURANT_INFO.address.plusCode}
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#08D8E5] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Opening Hours:</p>
                  <p className="text-gray-300">Monday – Sunday</p>
                  <p className="text-[#08D8E5] font-bold">11:00 AM – 11:00 PM</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#08D8E5] hover:underline uppercase tracking-wider"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Allergy Advisory Note */}
        <div className="pt-8 border-t border-neutral-800 text-center text-xs text-amber-300 font-medium">
          <p>
            Food allergies or intolerances? Please speak to a member of our team before ordering.
          </p>
        </div>

        {/* Bottom Bar with Policies & Copyright */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 MEXICANO EXPRESS. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
