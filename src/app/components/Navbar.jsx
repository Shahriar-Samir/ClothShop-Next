import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-red-600 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/shop'>Shop</Link></li>
              <li><Link href='/cart'>Cart</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">GentStyle</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1">
          <li><Link href='/'>Home</Link></li>
              <li><Link href='/shop'>Shop</Link></li>
              <li><Link href='/cart'>Cart</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-none bg-transparent border-white text-white">Sign In</a>
        </div>
      </nav>
    );
};

export default Navbar;