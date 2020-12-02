import React, { useContext } from "react";
import img from "../../image/logo.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { CartContext } from "../../context/Cart";

const Nav = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="grid grid-cols-5 container mx-auto">
      <div id="logo" className="col-span-1 grid grid-cols-2 py-6 pr-6">
        <div>
          <img src={img} alt="" className="" />
        </div>
        <div></div>
      </div>

      <div className="col-span-3">
        <div className="flex flex-no-wrap">
          <Link
            exact
            to="/"
            className="text-white text-base p-6 hover:text-purple-500"
          >
            HOME
          </Link>
          <Link
            exact
            to="/catalog"
            className="text-white text-base p-6 hover:text-purple-500"
          >
            CATALOG
          </Link>
          <Link
            exact
            to="/news"
            className="text-white text-base p-6 hover:text-purple-500"
          >
            NEWS
          </Link>
          <Link
            exact
            to="/contact"
            className="text-white text-base p-6 hover:text-purple-500"
          >
            CONTACT
          </Link>
          <Link
            exact
            to="/about"
            className="text-white text-base p-6 hover:text-purple-500"
          >
            ABOUT
          </Link>
        </div>
      </div>

      <div className="col-span-1 flex flex-no-wrap flex-row-reverse">
        <a
          href=""
          className="m-4 p-2 text-white text-base border hover:border-purple-600 rounded duration-500 ease-in-out hover:text-purple-600"
        >
          SIGN IN
        </a>
        <Link to={`/cart`} className="text-white">
          <div className="m-4 py-2 px-6 text-white text-base border hover:border-purple-600 rounded duration-500 ease-in-out hover:text-purple-600 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="25"
              height="25"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            &nbsp; {cartItems.length}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
