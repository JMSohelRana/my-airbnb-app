import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navbar;
