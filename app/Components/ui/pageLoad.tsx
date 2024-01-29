"use client"
import React, { useEffect } from "react";

function PageLoad() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return <div>{/* Your page content goes here */}</div>;
}

export default PageLoad;
