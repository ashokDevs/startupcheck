import Link from 'next/link';
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS checklist |Pricing",
  description: "SaaS, SaaS checkklist ,Customer Acquision",
};


function page() {
  return (
    <div className="h-screen gap-4 w-screen flex flex-col items-center justify-center text-xl md:text-4xl">
      <p>Its Freeeeeeee 😉!!</p>
      <Link href="/Customer-touchpoints" className=" btn btn-primary text-lg">
        
        start checking✅
      </Link>
    </div>
  );
}

export default page