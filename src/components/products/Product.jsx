import React from "react";
import { MdStarRate } from "react-icons/md";

const Product = ({ product }) => {
  const { title, price, date, images } = product;
  const handleRateClick = () => {
    alert("Rating clicked for " + title);
  };
  return (
    <div>
      <div className=" flex">
        {" "}
        <div className="">
          {" "}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-50  object-cover mb-2 rounded-lg"
            />
          ))}{" "}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="ml-2">
          <p className="font-semibold">{title}</p>
          <span className="text-gray-600 font-light">${price} night</span>
          <br />
          <span>{date}</span>
        </div>
        <div className="">
          <button
            onClick={handleRateClick}
            className="bg-gray-200 p-2 rounded hover:bg-red-400"
          >
            <MdStarRate />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
