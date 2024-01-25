import React from 'react'
import Formelement from '../Components/Formelement'
import TabsDesign from '../Components/TabsDesign';
import Navbar from '../Components/Navbar';
import type { Metadata } from "next";

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

      <div className="flex flex-col gap-4 ">
        <Formelement tab="Product" />
      </div>
    </main>
  );
}

export default Page