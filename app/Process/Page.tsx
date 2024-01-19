import React from 'react'
import Formelement from '../Components/Formelement'
import Navbar from '../Components/Navbar';
import TabsDesign from '../Components/TabsDesign';
function Page() {
  return (
    <main> 
    <Navbar/>
    <div className='mt-44'>
    <TabsDesign h1="Process" h3="main part"/>
    </div>
    
  <div className="flex flex-col gap-4 ">
    
    <Formelement  tab="Process" />
  </div>
  </main>
  );
}

export default Page