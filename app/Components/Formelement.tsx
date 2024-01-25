"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import GatherItems from "../utils/supabase";
import { Suspense } from "react";
import Loading from "../Loading";
interface Item {
  title: string;
  desc: string;
  Impact: "High" | "Moderate" | "Low";
}

const Formelement = (props: { tab: string }): JSX.Element => {
  const [Items, setItems] = useState<Item[]>([]);
  const [checked, setChecked] = useState(0);

  const checkedItems = () => {
    setChecked((prevChecked) => prevChecked + 1);
  };

  useEffect(() => {
    async function fetchData() {
      const items:
        | { title: string; desc: string; Impact: "High" | "Moderate" | "Low" }[]
        | null = await GatherItems(props.tab);
      if (items) {
        setItems(items);
      }
    }
    fetchData();
  }, [props.tab]);

  function color(impact: string): string {
    return clsx({
      "bg-red-300 border-red-300": impact === "High",
      "bg-orange-300 border-orange-300": impact === "Moderate",
      "bg-green-300 border-green-300":
        impact === "Low" || !["High", "Moderate", "Low"].includes(impact),
    });
  }

  return (
    <main className=" scroll-smooth flex flex-col items-center mb-24">
        <div className="py-5 px-3 w-fit md:w-[50%]">
      <Suspense fallback={<p>loading ..</p>}>
          {Items.map((item, index) => (
            <div
              className="border-2 border-base-content m-4  rounded-xl   flex flex-row gap-4 px-4 py-6"
              key={index}
            >
              <input
                type="checkbox"
                className="checkbox mt-1 border-4"
                onChangeCapture={checkedItems}
              />
              <div className="flex flex-row gap-4 h-fit">
                <div className="">
                  <h3 className="text-xl text-base-content font-semibold">
                    {item.title}
                  </h3>
                  <h4 className="text-md text-base-content-100 mt-2 opacity-8">
                    {item.desc}
                  </h4>
                </div>
                <span
                  className={clsx(
                    "border-2 self-start rounded-md h-fit w-fit py-2 mt-4 px-4",
                    color(item.Impact)
                  )}
                >
                  {item.Impact}
                </span>
              </div>
            </div>
          ))}
      </Suspense>
        </div>
      <div className="border px-4 py-6 ">
        <p>Your product has :{checked} </p> <br />
        {(() => {
          if (checked <= 5) {
            return <p>You most likely gonna lose customers</p>;
          } else {
            return <p>Your product most likely gonna satisfy customers</p>;
          }
        })()}
      </div>
    </main>
  );
};

export default Formelement;
