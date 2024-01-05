import React from "react";

const Filter = ({ filter }) => {
  const { name, icon } = filter;
  return (
    <div className="text-gray-500 items-center p-4   cursor-pointer hover:underline   duration-300 ease-out  hover:text-black  ">
      {icon}
      {name}
    </div>
  );
};

export default Filter;
