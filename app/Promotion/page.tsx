import React from 'react'
import Formelement from '../Components/Formelement'
import Navbar from '../Components/Navbar';
import TabsDesign from '../Components/TabsDesign';
import type { Metadata } from "next";

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

      <div className="flex flex-col gap-4 ">
        <Formelement tab="Promotion" />
      </div>
    </main>
  );
}

export default Page