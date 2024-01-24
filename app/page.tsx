import { useState } from "react";
import { InputForm } from "./Components/InputForm";
import Navbar from "./Components/Navbar";
import Link from "next/link";

export default function Home() {


  console.log("hello");

  return (
    <main>
      <Navbar />
      <div className=" overflow-none bg-base-100 herobg bg-cover flex text-center flex-col items-center overflow-x-hidden justify-between pt-32 px-4  h-screen w-screen lg:pt-20 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-screen mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h1 className="w-full text-center text-3xl mb-6 text-base-content font-sans md:text-7xl font-bold leading-[79.2px] tracking-tight  sm:text-4xl md:mx-auto">
              Never lose a Customer 
            </h1>
            <p className="text-base-content md:text-lg">
              Evaluate your 4Ps(Product,Price,Promotion,Process) for enhanced
              customer acquisition and retention with The SaaS Marketing
              Checklist!
            </p>
          </div>

{/*           <InputForm />
 */}      <Link href="/Customer-touchpoints" className="btn btn-primary"> Show CHecklist</Link>
          

          <br />
        </div>
      </div>
    </main>
  );
}
