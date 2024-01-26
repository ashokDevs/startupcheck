import React from 'react'
import Formelement from '../Components/Formelement';
import Navbar from '../Components/Navbar';
import TabsDesign from '../Components/TabsDesign';
function Page() {
  return (
    <div>
      {" "}
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
    </div>
  );
}

export default Page
