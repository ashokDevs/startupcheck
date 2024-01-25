import React from 'react'
import Formelement from '../Components/Formelement'
import TabsDesign from '../Components/TabsDesign';
import Navbar from '../Components/Navbar';


function Page() {
  return (
    <main>
      <Navbar />

      <TabsDesign
        h1="Product📦"
        h3="Customers are more likely to remain loyal when they find value in the product that aligns with their specific requirements. A high-quality product reflects the company's commitment to providing solutions that genuinely solve user pain points, which helps significantly to customer satisfaction and retention."
      />

      <div className="flex flex-col gap-4 ">
        <Formelement tab="Product" />
      </div>
    </main>
  );
}

export default Page