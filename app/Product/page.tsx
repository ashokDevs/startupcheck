import React from 'react'
import Formelement from '../Components/Formelement'
import TabsDesign from '../Components/TabsDesign';
import Navbar from '../Components/Navbar';


function Page() {
  return (
    <main> 
      <Navbar/>
      
      <TabsDesign h1="Product📦" h3="Having great product "/>
      
      
    <div className="flex flex-col gap-4 ">
      
      <Formelement  tab="Product" />
    </div>
    </main>
  );
}

export default Page