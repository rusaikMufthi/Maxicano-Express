import React from "react";
import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ConceptSection } from "@/components/home/ConceptSection";
import { BuildYourOwnPromo } from "@/components/home/BuildYourOwnPromo";
import { MealDealsPromo } from "@/components/home/MealDealsPromo";
import { LocationSection } from "@/components/home/LocationSection";
import { SocialSection } from "@/components/home/SocialSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <ConceptSection />
      <BuildYourOwnPromo />
      <MealDealsPromo />
      <LocationSection />
      <SocialSection />
    </>
  );
}
