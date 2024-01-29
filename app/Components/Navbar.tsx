import React from "react";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <div className="navbar bg-base-100 lg:w-[80%] w-screen mx-4 px-2 md:px-8 md:mx-auto mt-4 md:mt-6 ">
      <div className="  navbar-start">
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/price">Price</Link>
            </li>
            <li>
              <Link href="/promotion">Promotion</Link>
            </li>
            <li>
              <Link href="/process">Process</Link>
            </li>
            <li>
              <Link href="/about">About me</Link>
            </li>
            <li>
              <Link href="https://shipwithme.beehiiv.com/subscribe">
                Subscribe to newsletter
              </Link>
            </li>

            {/*  <li>
              <Link href="/about">blog</Link>
            </li> */}
          </ul>
        </div>
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="Logo"
          className="h-[30px] w-[30px] hidden md:inline md:h-[150px] md:w-[150px]"
        ></Image>{" "}
      </div>
      <div className="navbar-center hidden m-auto lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About me</Link>
          </li>
         {/*  <li>
            <Link href="https://shipwithme.beehiiv.com/subscribe">
              Subscribe to newsletter
            </Link>
          </li> */}

          {/*   <li>
            <Link href="/about">blog</Link>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="https://twitter.com/indieashok"
          className=" hidden mr-2 md:flex-row md:flex text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height={30}
            width={30}
            className=""
            src="/TwitterLogo.png"
            alt="Twitter Logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ashok-reddy-kakumanu-8a3078247"
          className=" ml-8 hidden mr-2 md:flex-row md:flex text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height={35}
            width={35}
            className=""
            src="/linkedIn.png"
            alt="Linked Logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
