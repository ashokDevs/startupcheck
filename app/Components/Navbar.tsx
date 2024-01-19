import React from 'react'
import Link from 'next/link';
function Navbar() {
  return (
<div className="navbar bg-base-100 lg:w-[80%] mt-4 mx-auto md:mt-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="item1">About</Link></li>
        <li><Link href="/result">Pricing</Link></li>
     
        <li><Link href="item3">blog</Link></li>
      </ul>
    </div>
    <Link href="/result" className="btn btn-ghost text-xl">Saas Checklist</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/result">Pricing</Link></li>
      <li><Link href="/result">About</Link></li>
  
      <li><Link href="/result">blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <a href="https://twitter.com/indieashok" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
  Follow on X
</a>
  </div>
</div>

  );
}

export default Navbar