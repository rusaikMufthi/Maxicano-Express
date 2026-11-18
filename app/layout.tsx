import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/ordering/CartDrawer";
import { RESTAURANT_INFO } from "@/data/restaurant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEXICANO EXPRESS | Mexican Restaurant & Takeaway in Peterborough",
  description:
    "Discover Mexicano Express in Peterborough. Explore burritos, tacos, quesadillas, loaded sides, churros and more. Visit us at 41 Bridge Street.",
  keywords: [
    "Mexican restaurant Peterborough",
    "Mexican takeaway Peterborough",
    "Burritos Peterborough",
    "Tacos Peterborough",
    "Mexican food near me",
    "Mexican takeaway near me",
    "Birria tacos Peterborough",
    "Churros Peterborough",
  ],
  authors: [{ name: "Mexi Cano Express" }],
  creator: "Mexi Cano Express",
  publisher: "Mexi Cano Express",
  metadataBase: new URL("https://mexicanoexpress.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MEXICANO EXPRESS | True Mexican Flavours. Expressly Made.",
    description:
      "Freshly prepared burritos, tacos, quesadillas, loaded fries, and sweet churros in Peterborough. Open every day 11 AM – 11 PM.",
    url: "https://mexicanoexpress.co.uk",
    siteName: "MEXI CANO EXPRESS",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/food/hero-burrito.jpg",
        width: 1200,
        height: 630,
        alt: "Mexi Cano Express Peterborough",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEXICANO EXPRESS | Mexican Restaurant in Peterborough",
    description:
      "Explore burritos, tacos, quesadillas, and sharing feasts at 41 Bridge Street, Peterborough.",
    images: ["/images/food/hero-burrito.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    name: RESTAURANT_INFO.name,
    image: "https://mexicanoexpress.co.uk/images/food/hero-burrito.jpg",
    description:
      "Fast-casual Mexican restaurant and takeaway in Peterborough serving burritos, tacos, quesadillas, loaded sides and churros.",
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT_INFO.address.street,
      addressLocality: RESTAURANT_INFO.address.city,
      postalCode: RESTAURANT_INFO.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.571408,
      longitude: -0.245847,
    },
    url: "https://mexicanoexpress.co.uk",
    servesCuisine: ["Mexican", "Fast Casual"],
    priceRange: "£",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    sameAs: [
      RESTAURANT_INFO.socialLinks.instagram,
      RESTAURANT_INFO.socialLinks.facebook,
      RESTAURANT_INFO.socialLinks.tiktok,
    ],
    hasMenu: "https://mexicanoexpress.co.uk/menu",
  };

  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${oswald.variable} scroll-smooth overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-[#F0FAF9] text-[#171717] font-sans antialiased selection:bg-[#08D8E5] selection:text-black w-full max-w-full overflow-x-hidden relative"
        suppressHydrationWarning
      >
        {/* Skip to Content Link for WCAG 2.2 AA Keyboard Accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <AnnouncementBar />
            <Header />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
