import React from 'react'
import Formelement from '../Components/Formelement'
import Navbar from '../Components/Navbar';
import TabsDesign from '../Components/TabsDesign';
import type { Metadata } from "next";
import BuyMeCoffee from '../Components/BuyMeCoffee';
import HoverBtn from "../Components/ui/HoverBtn"
import PageLoad from '../Components/ui/pageLoad';

export const metadata: Metadata = {
  title: "SaaS checklist | Price",
  description: "SaaS, SaaS checklist ,Customer Acquision",
};
function Page() {
  return (
    <main>
      <Navbar />

      <TabsDesign
        h1="Price💰"
        h3="Customers perceive value when pricing aligns with expectations and offers transparency. Flexible payment options and competitive pricing enhance accessibility and overall perceived value."
      />

      <div className="flex flex-col gap-2 items-center w-fit ">
        <Formelement tab="Price" />
        <HoverBtn prev='price' props="promotion" />
      </div>
      <BuyMeCoffee />
      <PageLoad/>
    </main>
  );
}

export default Page