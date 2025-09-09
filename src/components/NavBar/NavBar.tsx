import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

import "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (

    <>
      <header className="w-full p-5">
        <div className="kickcartnav">
          <nav aria-label="Global" className="h-24 mx-auto flex items-center justify-between p-4 bg-white/10 rounded-2xl backdrop-blur-2xl border border-white/20 shadow-xl p-4">

            {/* <!-- Left: Logo --> */}
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5 mx-4 font-bold text-cyan-500" style={{ fontSize: "1.2rem" }}>KickCart</Link>
            </div>


            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center" onClick={() => setOpen(!isOpen)}>
                {isOpen ? (
                  <svg viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Middle: Nav Links */}
            <div className="hidden lg:flex lg:gap-x-12">
              <div className="flex space-x-4">
                <Link to="/" className="px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Sign In</Link>
                <Link to="/SignUp" className="px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Sign Up</Link>
                <a href="#" className="px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Men</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Women</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Sneakers</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Sandals & Slippers</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Running & Sports</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Formal</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Kids</a>
              </div>
            </div>
            {/* <!-- Right: Desktop Icons --> */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <div className="flex space-x-4">
                <a href="search.html" className="text-gray-600 hover:text-cyan-500" title="Search"><IoIosSearch className="w-6 h-6" /></a>
                <a href="user-account.html" className="text-gray-600 hover:text-cyan-500" title="Account"><MdAccountCircle className="w-6 h-6" /></a>
                <a href="cart.html" className="text-gray-600 hover:text-cyan-500" title="Cart"><CiShoppingCart className="w-6 h-6" /></a>
              </div>

            </div>
          </nav>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="space-y-1 px-2 pt-2 pb-3 lg:hidden">
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Sign In</a>
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Sign Up</a>
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Men</a>
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Women</a>
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Sneakers</a>
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Sandals & Slippers</a>
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Running & Sports</a>
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Formal</a>
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600">Kids</a>

              <hr></hr>

              <a href="search.html" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600" title="Search">Search</a>
              <a href="user-account.html" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600" title="Account">Account</a>
              <a href="cart.html" className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:text-sky-600" title="Cart">Cart</a>
            </div>
          )}
        </div>
      </header>
    </>);

};

export default NavBar;
