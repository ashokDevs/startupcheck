import React from "react";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import type { Metadata } from "next";

import "./globals.css"; // Assuming this file contains any additional CSS

export const metadata: Metadata = {
  title: "SaaS checklist | Customer Touchpoints",
  description: "SaaS, SaaS checklist, Customer Acquisition",
};

const imageMappings: Record<string, string> = {
  product: "/product.png",
  price: "/price.png",
  promotion: "/promotion.png",
  process: "/process.png",
};

const ImageSection: React.FC<{ linkText: keyof typeof imageMappings }> = ({
  linkText,
}) => {
  const lowercasedLinkText = linkText.toLowerCase();
  const imageSrc = imageMappings[lowercasedLinkText];

  return (
    <div className="image-section w-[80px] md:w-[100px] mt-4">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`Image for ${lowercasedLinkText}`}
          className="image"
        />
      )}
    </div>
  );
};

function Page() {
  return (
    <main className="max-w-screen  bg-base-100">
      <Navbar />
      <div className="min-w-screen min-h-screen grid items-center gap-4 px-6">
        <div className="flex flex-col md:items-center justify-center mt-20  transition-all duration-1000 ease-in-out">
          <h1 className="text-5xl text-left md:text-left text-base-content font-bold md:text-6xl  ">
            Build better SaaS Products
          </h1>
          <h2 className="text-md text-left md:text-center text-base-content md:text-lg w-[300px] md:w-[900px] mt-2  ">
            A Free SaaS Checklist to help you plan, build and grow your Startup.
            Self-evaluate your{" "}
            <span className="wrap-no">
              4Ps (Product, Price, Promotion, Process)
            </span>{" "}
            for better customer Acquisition and rentention
          </h2>
          <Link
            className="btn text-primary-content btn-primary mt-7 text-lg group self-start md:self-center"
            href="/product"
          >
            Get started
          </Link>

          <div className="m-auto py-8 max-w-screen overflow-hidden md:px-4 px-2  md:w-[90%] h-fit md:min-h-[300px] rounded-box mt-16 mb-20">
            <div className="grid  grid-cols-2 md:grid-cols-4 gap-x-20 ">
              {/* Use Link for each link */}

              <Link
                className="indicator link text-md md:text-xl "
                href="/product"
              >
                <div>
                  <ImageSection linkText="product" />
                  <p className="hidden md:inline-flex text-center mt-6 font-bold ">
                    Product{" "}
                  </p>
                </div>
              </Link>
              <Link
                className="indicator link text-md md:text-xl "
                href="/price"
              >
                <div>
                  <ImageSection linkText="price" />
                  <p className="hidden md:inline-flex text-center mt-6 font-bold ">
                    Price
                  </p>
                </div>
              </Link>

              <Link
                className="indicator link text-md md:text-xl"
                href="/promotion"
              >
                <div>
                  <ImageSection linkText="promotion" />
                  <p className="hidden md:inline-flex text-center mt-6 font-bold ">
                    Promotion
                  </p>
                </div>
              </Link>

              <Link
                className="indicator link text-md md:text-xl"
                href="/process"
              >
                <div>
                  <ImageSection linkText="process" />
                  <p className="hidden md:inline-flex  mt-6 font-bold  text-center">
                    Process
                  </p>
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
