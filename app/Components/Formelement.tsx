"use client"
import clsx from 'clsx';
import React, { useEffect, useState } from "react";
import GatherItems from "../utils/supabase";

interface Item {
  title: string;
  desc: string;
  Impact: "High"| "Moderate" | "Low";
}

const Formelement = (props: { tab: string }): JSX.Element => {
  const [Items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      const items: { title: string; desc: string; Impact: "High"| "Moderate" | "Low" }[] | null = await GatherItems(
        props.tab
      );
      if (items) {
        setItems(items);
      }
    }
    fetchData();
  }, [props.tab]);

  function color(impact: string): string {
    return clsx({
      'bg-red-300 border-red-300': impact === 'High',
      'bg-orange-300 border-orange-300': impact === 'Moderate',
      'bg-green-300 border-green-300': impact === 'Low' || !['High', 'Moderate', 'Low'].includes(impact),
    });
  }

  return (
    <main className="flex flex-col items-center">
      <div className="py-5 px-3 w-fit md:w-[50%]">
        {Items.map((item, index) => (
          <div
            className='border-4 border-base-content m-4  rounded-xl   flex flex-row gap-4 px-4 py-6'
            key={index}
          >
            <input type="checkbox" className="checkbox mt-1" />
            <div className="flex flex-col gap-2 h-fit">
              <h3 className="text-lg">{item.title}</h3>
              <h4>{item.desc}</h4>
              <span className={clsx('border-2 rounded-md h-fit w-fit py-2 mt-4 px-4', color(item.Impact))}>
                {item.Impact}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Formelement;
