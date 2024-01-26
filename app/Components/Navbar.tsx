import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="navbar bg-base-100 lg:w-[80%] w-screen mt-4 mx-auto md:mt-6 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>

            <li>
              <Link href="/about">blog</Link>
            </li>
            <li>
              <a
                className=""
                href="https://www.buymeacoffee.com/ashokreddy"
              >
                <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=ashokreddy&button_colour=FFDD00&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=ffffff" />
              </a>
            </li>
          </ul>
        </div>
        <Link href="/result" className="btn btn-ghost text-xl">
          Saas Checklist
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/about">blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="https://twitter.com/indieashok"
          className="btn  hidden mr-2 md:flex-row md:flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on 
          <img className="" src="/TwitterLogo.png" alt="Twitter Logo" />
        </a>
     
      </div>
    </div>
  );
}

export default Navbar;
