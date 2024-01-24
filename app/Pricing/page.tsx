import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <div className="h-screen gap-4 w-screen flex flex-col items-center justify-center text-xl md:text-4xl">
      <p>Its Freeeeeeee 😉!!</p>
      <Link href="/Customer-touchpoints" className=" btn btn-primary">
        
        start checking✅
      </Link>
    </div>
  );
}

export default page