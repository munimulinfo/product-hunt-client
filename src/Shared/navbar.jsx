import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/Context";
import { Link } from "react-router-dom";
import logo from "../assets/images/download-removebg-preview.png";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  console.log(user);
  return (
    <div className="navbar bg-red-200 lg:px-20">
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
            <Link>HOME</Link>
            <Link>ABOUT</Link>
            <Link>CONTACT US</Link>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-1 h-10 ">
          <img className="w-full h-full" src={logo} alt="logo" />
          <h1 className="text-lg md:text-2xl font-mono font-bold uppercase">
            ProductHunt
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5  font-bold font-sans text-gray-600 ">
          <Link>HOME</Link>
          <Link>ABOUT</Link>
          <div className="indicator">
            <div className="indicator-item indicator-top">
              <div className="rounded-full px-2 py-1 bg-red-500 text-white">
                {cart?.length || 0}
              </div>
            </div>
            <FaShoppingCart className="text-4xl  text-lime-500"></FaShoppingCart>
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={handleLogOut}
          className="btn border-0 bg-rose-400 text-white md:btn-sm  hover:bg-rose-500 btn-xs"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default navbar;
