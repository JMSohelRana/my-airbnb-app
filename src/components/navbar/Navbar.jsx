import React from "react";
import logo from "./logo.png";
import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="border-b flex items-center justify-between">
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
      <div className="flex  items-center justify-center relative shadow-sm rounded-full shadow-gray-600 border">
        <div className="py-2.5 w-[16rem] m-2 rounded-full outline-0"></div>
        <div className="absolute ">
          <button>Anywhere</button>
          <button>Any week</button>
          <button>Add guests</button>
        </div>
        <div className="bg-[#ff5a60] p-2 mr-1 color-white rounded-full">
          <CgSearch className="font-bold " />
        </div>
      </div>

      {/* 3rd part end section */}
      <div className="flex items-center pr-2">
        <div className="flex items-center mr-2">
          <button className="mr-2 ">Airbnb your home</button>
          <button>
            <TbWorld />
          </button>
        </div>
        <div className="flex items-center">
          <IoIosMenu />
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
