import React from "react";
import Formelement from "../Components/Formelement";
import Navbar from "../Components/Navbar";
import TabsDesign from "../Components/TabsDesign";
import type { Metadata } from "next";
import BuyMeCoffee from "../Components/BuyMeCoffee";

export const metadata: Metadata = {
  title: "SaaS checklist | Price",
  description: "SaaS, SaaS checklist, Customer Acquisition",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <TabsDesign
        h1="Process🚶🏻"
        h3="A easy user journey, from awareness to account deletion, strengthens customer loyalty. Comprehensive support, effective onboarding, and strategies for renewal and retention contribute to a positive customer experience."
      />
      <div className="flex flex-col gap-4 items-center justify-center">
        <Formelement tab="Process" />
      <p className="font-bold text-lg border bg-accent text-accent-content rounded-lg text-center mb-20 p-4">Thank you for making it this far</p>
      </div>
      <BuyMeCoffee />
    </main>
  );
}
