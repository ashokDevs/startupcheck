import React from 'react'
import Formelement from '../Components/Formelement'
import Navbar from '../Components/Navbar';
import TabsDesign from '../Components/TabsDesign';
import type { Metadata } from "next";
import BuyMeCoffee from '../Components/BuyMeCoffee';
import HoverBtn from '../Components/ui/HoverBtn';

export const metadata: Metadata = {
  title: "SaaS checklist | Promotion",
  description: "SaaS, SaaS checkklist ,Customer Acquision",
};

function Page() {
  return (
    <main>
      <Navbar />

      <TabsDesign
        h1="Promotion📈"
        h3="From online presence to user-generated content, drive engagement. Trust is built through influencer collaboration, referral programs, and customer testimonials, enhancing the effectiveness of promotional strategies."
      />

      <div className="flex flex-col gap-2 items-center justify-center group">
        <Formelement tab="Promotion" />
        <HoverBtn prev="promotion" props="process" />
      </div>
      <BuyMeCoffee />
    </main>
  );
}

export default Page