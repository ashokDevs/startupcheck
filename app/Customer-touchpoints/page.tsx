import "./page.css"; // Assuming this file contains any additional CSS
import Link from "next/link";
import Navbar from "../Components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS checklist | Customer Touchpoints",
  description: "SaaS, SaaS checkklist ,Customer Acquision",
};

function Page() {
  // ... rest of your code

  return (
    <main className="w-screen  ">
      <Navbar />
      <div className="min-w-screen min-h-screen grid items-center gap-4">
        <div className="flex flex-col items-center justify-center mt-28 transition-all duration-1000 ease-in-out">
          <h1 className="text-5xl text-center text-base-content- font-bold md:text-5xl lg:text-7xl ">
            Customer Touchpoints️🙋‍♂️
          </h1>
          <h2 className="text-md text-center text-base-content opacity-7 md:text-lg w-[300px] md:w-[900px] mt-2 transform translate-y-4 ">
            By optimizing these touchpoints, businesses can enhance customer
            satisfaction, build stronger relationships, and ultimately drive
            brand loyalty and increased revenue.
          </h2>
          <Link className="btn btn-primary mt-7 text-lg group" href="/product">
            Get started
          </Link>

          <div className="m-auto  py-8 w-screen md:px-4 px-2  bg-base-200  md:w-[50%] h-fit min-h-[500px] rounded-box mt-16 ">
            <div className="grid grid-cols-1 gap-4 place-items-center">
              {/* Use Link for each link */}
              <Link href="/product" className=" link ">
                Product📦 <br />
                <p>16 Items</p>
              </Link>
              <Link className="indicator link   disabled" href="/price">
                <div>
                  Price💰
                  <p className="text-sm">9 Items</p>
                </div>
              </Link>

              <Link className="indicator link  " href="/promotion">
                <div>
                  Promotion📈
                  <p className="text-sm">16 Items</p>
                </div>
              </Link>

              <Link className="indicator link " href="/process">
                <div>
                  Process🚶🏻
                  <p className="text-sm">12 Items</p>
                 
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
