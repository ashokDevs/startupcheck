import React from 'react'
import Formelement from '../Components/Formelement'
import TabsDesign from '../Components/TabsDesign';
import Navbar from '../Components/Navbar';
import type { Metadata } from "next";
import BuyMeCoffee from '../Components/BuyMeCoffee';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "SaaS checklist | Product",
  description: "SaaS, SaaS checkklist ,Customer Acquision",
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
        <Link href="/price" className="btn btn-primary w-[200px] mb-20 text-lg">
          Price{"💰"}
        </Link>
      </div>
      <BuyMeCoffee />
    </main>
  );
}

export default Page