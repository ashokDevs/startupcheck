import React from "react";
import Formelement from "../Components/Formelement";
import Navbar from "../Components/Navbar";
import TabsDesign from "../Components/TabsDesign";
import type { Metadata } from "next";
import BuyMeCoffee from "../Components/BuyMeCoffee";
import PageLoad from "../Components/ui/pageLoad";

export const metadata: Metadata = {
  title: "Price | SaaS checklist",
  description: "Pricing tips for SaaS startups",
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
       
      </div>
      <BuyMeCoffee />
      <PageLoad />
      <iframe
        
        src="https://airtable.com/embed/app8NU0RBC7xUHEHh/pagthYSYZmYMLxD6f/form"
        width="100%"
        height="533"
        className="bg-transparent; border-2 border-solid "
      ></iframe>
    </main>
  );
}
