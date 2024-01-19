"use client"
import React, { useState } from 'react';
import './page.css'; // Assuming this file contains any additional CSS
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/Footer';

function Page() {
  const [productChecked, setProductChecked] = useState(0);
  const [pricingChecked, setPricingChecked] = useState(0);
  const [promotionChecked, setPromotionChecked] = useState(0);

  // ... rest of your code

  return (
    <main className="max-w-screen  transition-all duration-1000 ease-in-out grid ">
      <Navbar />
      <div className="min-w-screen min-h-screen grid items-center gap-4">
        <div className="flex flex-col items-center justify-center mt-44 transition-all duration-1000 ease-in-out">
          <h1 className="text-2xl text-base-content- font-bold md:text-5xl lg:text-7xl ">
            Customer Touchpoints️🙋‍♂️
          </h1>
          <h2 className="text-md text-center text-base-content opacity-7 md:text-lg w-[300px] md:w-[900px] mt-4 transform translate-y-4 ">
            By optimizing these touchpoints, businesses can enhance customer satisfaction, build stronger relationships,
            and ultimately drive brand loyalty and increased revenue.
          </h2>
          <Link className="btn btn-primary mt-7" href="/Product">
            Get started
          </Link>

          <div className="m-auto py-8 px-4 bg-base-200  md:w-[50%] h-fit min-h-[500px] rounded-box mt-16 ">
            <div className="grid grid-cols-1 gap-4 place-items-center">
              {/* Use Link for each link */}
              <Link href="/Product" className=" link ">
                Product📦 <br /><p>{productChecked}/10</p>
              </Link>
              <Link className="indicator link linkNo  disabled" href="/Price">
        <span className="indicator-item badge badge-accent">comming soon</span>
        <div>
          Price💰
          <p  className='text-sm'>{pricingChecked}/8</p>
        </div>
      </Link>

      <Link className="indicator link linkNo " href="/Promotion">
        <span className="indicator-item badge badge-accent">comming soon</span>
        <div>
          Promotion📈
          <p  className='text-sm'>{promotionChecked}/13</p>
        </div>
      </Link>

      <Link className="indicator link linkNo  cursor-not-allowed" href="/Process">
        <span className="indicator-item badge badge-accent">comming soon</span>
        <div>
          Process🚶🏻
          <p className='text-sm'>{productChecked}/15</p>
        </div>
      </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Page;
