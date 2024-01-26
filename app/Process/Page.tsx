import React from "react";
import Formelement from "../Components/Formelement";
import Navbar from "../Components/Navbar";
import TabsDesign from "../Components/TabsDesign";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS checklist | Process",
  description: "SaaS, SaaS checkklist ,Customer Acquision",
};

function Page() {
  return (
    <main>
      <Navbar />

      <TabsDesign
        h1="Process🚶🏻"
        h3="A easy user journey, from awareness to account deletion, strengthens customer loyalty. Comprehensive support, effective onboarding, and strategies for renewal and retention contribute to a positive customer experience."
      />

      <div className="flex flex-col gap-4 ">
        <Formelement tab="Process" />
      </div>
    </main>
  );
}
export const dynamic = "force-dynamic";

export default Page;
