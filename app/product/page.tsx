import React from 'react'
import Formelement from '../Components/Formelement'
import TabsDesign from '../Components/TabsDesign';
import Navbar from '../Components/Navbar';
import type { Metadata } from "next";
import BuyMeCoffee from '../Components/BuyMeCoffee';
import Link from 'next/link';
import HoverBtn from '../Components/ui/HoverBtn';

export const metadata: Metadata = {
  title: "Product | SaaS checklist",
  description: "Key elements for every SaaS product",
};



function Page() {
  return (
    <main>
      <Navbar />

      <TabsDesign
        h1="Product📦"
        h3="A high-quality product reflecting commitment to user needs increases loyalty. Providing solutions that genuinely solve pain points contributes significantly to customer satisfaction and retention."
      />

      <div className="flex flex-col gap-2 items-center justify-center">
        <Formelement tab="Product" />
        <HoverBtn prev="product"  props="price" />
      </div>
      <BuyMeCoffee />
    </main>
  );
}

export default Page