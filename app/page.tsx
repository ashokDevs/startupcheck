
import Navbar from "./Components/Navbar";
import Link from "next/link";
import Head from 'next/head';
export default function Home() {


  console.log("hello");

  return (
    <main className="overflow-hidden">
      <Head>
        <meta property="og:title" content="SaaS Checklist" />
        <meta
          property="og:description"
          content="Self Evalute your product for better customer acquision and rentention"
        />
        <meta property="og:image" content="/ogImage.png" />
        
      </Head>

      <Navbar />
      <div className=" overflow-hidden bg-base-100 herobg bg-cover flex text-center flex-col items-center overflow-x-hidden justify-between pt-32 px-4  h-screen w-screen lg:pt-20 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-screen mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h1 className="w-full text-center text-4xl mb-6 text-base-content font-sans md:text-7xl font-bold  tracking-tight  sm:text-4xl md:mx-auto">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 rounded-md">
                Gain
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 rounded-md">
                Retain
              </span>{" "}
              Customers With This Checklist
            </h1>
            <p className="text-base-content md:text-lg">
              Self Evaluate your 4Ps(Product,Price,Promotion,Process) for
              enhanced customer acquisition and retention with This SaaS
              Checklist!
            </p>
          </div>
          {/*           <InputForm />
           */}{" "}
          <Link
            href="/Customer-touchpoints"
            className="btn btn-primary text-lg"
          >
            {" "}
            Show Checklist
          </Link>
          <br />
        </div>
      </div>
    </main>
  );
}
