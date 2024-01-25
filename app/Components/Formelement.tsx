"use client"
import React, { useEffect, useState } from "react";
import { Suspense } from "react";

interface Item {
  title: string;
  desc: string;
}

const Formelement = (props: { tab: string }): JSX.Element => {
  const [Items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/ChecklistData.json");
        const data = await response.json();

        // Extract items based on the provided tab
        const itemsData = data.customerTouchpoints[props.tab];

        // Check if itemsData exists and if it's an object
        if (itemsData && typeof itemsData === "object") {
          const itemsArray: Item[] = [];

          // Iterate over keys in itemsData
          for (const key in itemsData) {
            if (Object.prototype.hasOwnProperty.call(itemsData, key)) {
              const item = itemsData[key];
              itemsArray.push(item);
            }
          }

          setItems(itemsArray);
        } else {
          console.error(
            `Items for tab '${props.tab}' is not a valid object:`,
            itemsData
          );
        }
      } catch (error) {
        console.error("Error fetching touchpoints data:", error);
      }
    }

    fetchData();
  }, [props.tab]);

  return (
    <main className="scroll-smooth flex flex-col items-center mb-24">
      <div className="py-5 px-3 w-fit md:w-[50%]">
          {Array.isArray(Items) &&
            Items.map((item, index) => (
              <div
                className="border-2 border-base-content m-4 rounded-xl flex flex-row gap-4 px-4 py-6"
                key={index}
              >
                <input type="checkbox" className="checkbox mt-1 border-4" />
                <div className="flex flex-row gap-4 h-fit">
                  <div className="">
                    <h3 className="text-xl text-base-content font-semibold">
                      {item.title}
                    </h3>
                    <h4 className="text-md text-base-content-100 mt-2 opacity-8">
                      {item.desc}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </main>
  );
};

export default Formelement;
