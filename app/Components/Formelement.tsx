"use client"

import React, { useEffect, useState } from "react";

interface Item {
  title: string;
  desc: string;
  checked: boolean; // New property to track checked state
}

const Formelement = (props: { tab: string }): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const storedData = localStorage.getItem(`items_${props.tab}`);

        if (storedData) {
          const parsedData: Item[] = JSON.parse(storedData);
          setItems(parsedData);
        } else {
          const response = await fetch("/ChecklistData.json");
          const data = await response.json();

          const itemsData = data.customerTouchpoints[props.tab];

          if (itemsData && typeof itemsData === "object") {
            const itemsArray: Item[] = [];

            for (const key in itemsData) {
              if (Object.prototype.hasOwnProperty.call(itemsData, key)) {
                const item = { ...itemsData[key], checked: false }; // Initialize checked state
                itemsArray.push(item);
              }
            }

            setItems(itemsArray);
            localStorage.setItem(
              `items_${props.tab}`,
              JSON.stringify(itemsArray)
            );
          } else {
            console.error(
              `Items for tab '${props.tab}' is not a valid object:`,
              itemsData
            );
          }
        }
      } catch (error) {
        console.error("Error fetching touchpoints data:", error);
      }
    }

    fetchData();
  }, [props.tab]);

  // Function to handle checkbox changes and update the checked state
  const handleCheckboxChange = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);

    // Update local storage with the new checked state
    localStorage.setItem(`items_${props.tab}`, JSON.stringify(updatedItems));
  };

  return (
    <main className="scroll-smooth flex flex-col items-center mb-4">
      <div className="py-5 px-3 w-fit md:w-[50%]">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <div
              className=" m-4 rounded-xl flex flex-row gap-4 px-4 py-6"
              key={index}
            >
              <input
                type="checkbox"
                className="checkbox mt-1 border-4"
                checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
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
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Formelement;
