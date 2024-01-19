"use client"


import React, { useEffect, useState } from "react";
import GatherItems from "../utils/supabase";

interface Item {
  title: string;
  desc: string;
}




const Formelement = (props :{tab:string}):JSX.Element => {
  
  const [Items, setItems] = useState<Item[]>([]);

    useEffect(() => {
      async function fetchData() {
        const items: { title: any; desc: any }[] | null = await GatherItems(props.tab);
        if (items) {
          setItems(items);
        }
      }
      fetchData();
    }, [props.tab]);

  return (
    <main className="flex flex-col items-center ">
    <div className="  py-5 px-3 w-fit md:w-[50%]">
      {Items.map((item, index) => (
        <div className="m-4 flex flex-row gap-4 p-4"key={index}>
<input type="checkbox"  className="checkbox mt-1" />          <div>
            <h3 className="text-lg">{item.title} </h3>
            <h4>{item.desc}</h4>
          </div>
        </div>
      ))}
    </div>
    </main>
  );
}

export default Formelement;
