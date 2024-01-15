"use client"


import React, { useEffect, useState } from "react";
import GatherItems from "../utils/supabase";

interface Item {
  title: string;
  desc: string;
}


function Formelement() {
  const [Items, setItems] = useState<Item[]>([]);

    useEffect(() => {
      async function fetchData() {
        const items: { title: any; desc: any }[] | null = await GatherItems();
        if (items) {
          setItems(items);
        }
      }
      fetchData();
    }, []);

  return (
    <div className="border-white border py-5 px-3 w-full">
      {Items.map((item, index) => (
        <div className="border-2 border-black m-4 flex flex-row gap-4 p-4"key={index}>
          <input type="checkbox" className="self-start" name={item.title} id="" />
          <div>
            <h3 className="text-lg">{item.title} </h3>
            <h4>{item.desc}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Formelement;
