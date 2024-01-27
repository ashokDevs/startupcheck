import React from "react";
import Link from "next/link";
import Image from "next/image";
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-md"
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
           
          </ul>
        </div>
        <Image
          src="/icon.png"
          width={70}
          height={70}
          alt="Logo"
          className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
        ></Image>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
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
          className="btn-outline btn  hidden mr-2 md:flex-row md:flex"
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
