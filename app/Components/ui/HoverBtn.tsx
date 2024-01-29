import React from "react";
import Link from "next/link";

interface Props {
  props: string;
  prev:string
}

function HoverBtn({ props,prev }: Props) {
  const capitalizedProps = props.charAt(0).toUpperCase() + props.slice(1);

  function previous(text: string): string {
    if (text === "product") {
      return "/";
    } else if (text === "price") {
      return "/product";
    } else if (text === "promotion") {
      return "/price";
    } else if (text === "process") {
      return "/promotion";
    } else {
      return "/";
    }
}

  return (
    <div className="flex flex-row h-[80px] mb-20">
      <Link href={previous(prev)} className="items-center inline-flex group text-md md:text-xl">
        <span className="text-base-content transition-all duration-200 transform group-hover:translate-x-1 group-hover:opacity-100 opacity-0 mr-2  text-2xl ">
          🡠
        </span>
        Previous
      </Link>
      <div className="mb-20 ml-20 lg:ml-80 flex flex-col w-full">
        <p className="self-end text-sm md:text-xl">Next</p>

        <Link
          href={`/${props}`}
          className="btn btn-outline  md:w-[200px] md:text-lg text-md group items-center inline-flex"
        >
          {capitalizedProps}
          <span className="text-white transition-all duration-200 transform group-hover:translate-x-1 group-hover:opacity-100 opacity-0 ml-1  text-2xl ">
            🡢
          </span>
        </Link>
      </div>
    </div>
  );
}

export default HoverBtn;
