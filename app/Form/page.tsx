"use client";

import React, { useState } from "react";
import Link from "next/link";
import Product from "../Components/Product";
import Price from "../Components/Price";
import Process from "../Components/Process";
import Promotion from "../Components/Promotion";
function Page() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData: {
    label: string;
    content: JSX.Element;
  }[] = [
    { label: "Product  ", content: <Product /> },
    { label: "Price    ", content: <Price /> },
    { label: "Process  ", content: <Process /> },
    { label: "Promotion", content: <Promotion /> },
  ];

  const changeTab = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
document.body.scrollIntoView({
  behavior: "smooth",
  block: "start",
});

  };

  const submitButtonText =
    activeTab === tabsData.length - 1 ? "Submit" : "Next";

  return (
    <main className=" max-w-screen flex items-center justify-center min-h-screen p-10">
      <div className="lg:w-1/2 p-5 flex flex-row items-center justify-center border-white border rounded-lg shadow-lg shadow-white mt-10 ">
        <div
          role="tablist"
          className="tabs tabs-bordered tabs-md md:tabs-lg w-full  "
        >
          {tabsData.map((tab, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab ml-5"
                aria-label={tab.label}
                checked={index === activeTab}
                onChange={() => changeTab(index)}
              />
              <div
                role="tabpanel"
                className={`tab-content bg-base-100  flex flex-col gap-10 p-6 ml-[0px] ${
                  index === activeTab ? "" : "hidden"
                }`}
              >
                {tab.content}
                <button
                  className="btn self-end"
                  onClick={() => changeTab(activeTab + 1)}
                >
                  {submitButtonText}
                </button>
              </div>
            </React.Fragment>
          ))}
          
        </div>
      </div>
    </main>
  );
}

export default Page;
