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
      <div className="flex  cursor-pointer items-center justify-center relative shadow-sm rounded-full shadow-gray-600 border hover:shadow-lg">
        <div className="py-4 w-[20rem] m-3 rounded-full outline-0"></div>
        <div className="flex justify-between  absolute w-full pr-16 pl-2">
          <button className=" w-full font-semibold ">Anywhere </button>
          <button className=" font-semibold  w-full  border-x-2 border-gray-300">
            {" "}
            Any week{" "}
          </button>
          <button className="text-gray-500  w-full "> Add guests</button>
        </div>
        <button className="bg-[#ff5a60] p-2 mr-2 color-white rounded-full  cursor-pointer">
          <CgSearch className="text-white " />
        </button>
      </div>

      {/* 3rd part end section */}
      <div className="flex items-center pr-2 font-semibold text-gray-600">
        <div className="flex items-center mr-2">
          <button className="mr-2 hover:bg-gray-100  shadow-md p-3 rounded-full">
            Airbnb your home
          </button>
          <button>
            <TbWorld className="mx-1 hover:bg-gray-300 shadow-lg rounded-full" />
          </button>
        </div>
        <div className="flex items-center gap-4 border rounded-full m-5 py-4 pl-4 cursor-pointer shadow hover:shadow-lg">
          <IoIosMenu />
          <FaUser className="mr-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
