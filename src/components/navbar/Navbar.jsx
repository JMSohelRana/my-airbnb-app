import React from "react";
import logo from "./logo.png";
import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="border-b flex items-center">
      {/* 1st part logo section */}
      <div className="flex h-20 w-20">
        {" "}
        <div className="flex items-center justify-left">
          <img
            className="object-cover -my-10"
            src={logo}
            alt="Nothing Found"
          ></img>
          <span className=" font-extrabold text-red-500 -m-3">airbnb</span>
        </div>
      </div>
      {/* 2nd part middle section */}
      <div className="flex ml-20">
        <input type="search" placeholder="" />
        <div>
          <button>Anywhere</button>
          <button>Any week</button>
          <button>Add guests</button>
        </div>
      </div>

      {/* 3rd part end section */}
      <div className="flex items-center">
        <p>Airbnb your home</p>
        <TbWorld />
      </div>
      <div className="flex items-center">
        <IoIosMenu />
        <FaUser />
      </div>
    </div>
  );
};

export default Navbar;
