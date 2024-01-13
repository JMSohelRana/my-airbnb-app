import React from "react";

const Product = ({ product }) => {
  const { title, image, price } = product;
  return (
    <div>
      <div className=" flex">
        <img src={image} alt="" className="object-cover rounded-[0.5rem]" />
      </div>
      <div className="">
        <p>{title}</p>
        <span>${price} night</span>
      </div>
    </div>
  );
};

export default Product;
