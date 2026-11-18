import { Metadata } from "next";
import { CheckoutClient } from "@/components/checkout/CheckoutClient";

export const metadata: Metadata = {
  title: "Complete Your Order | Click & Collect | MEXI CANO EXPRESS",
  description:
    "Review your basket and arrange Click & Collect takeaway from Mexi Cano Express at 41 Bridge St, Peterborough. Open every day 11:00 AM – 11:00 PM.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
