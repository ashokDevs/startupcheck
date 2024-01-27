import React from 'react'
import Formelement from '../Components/Formelement'
import Navbar from '../Components/Navbar';
import TabsDesign from '../Components/TabsDesign';
import type { Metadata } from "next";
import BuyMeCoffee from '../Components/BuyMeCoffee';
import Link from 'next/link';
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

      <div className="flex flex-col gap-2 items-center justify-center ">
        <Formelement tab="Price" />
        <Link
          href="/promotion"
          className="btn btn-primary w-[200px] mb-20 text-lg"
        >
          Promotion{"📈"}
        </Link>
      </div>
      <BuyMeCoffee />
    </main>
  );
}

export default Page