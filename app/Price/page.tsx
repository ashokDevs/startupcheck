import React from 'react'
import Formelement from '../Components/Formelement'
import Navbar from '../Components/Navbar';
import TabsDesign from '../Components/TabsDesign';
function Page() {
  return (
    <main> 
    <Navbar/>
    
    <TabsDesign h1="Price" h3="main part"/>
    
  <div className="flex flex-col gap-4 ">
    
    <Formelement  tab="Price" />
  </div>
  </main>
  );
}

export default Page