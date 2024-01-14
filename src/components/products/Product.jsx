import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
const Product = ({ product }) => {
  const { title, price, date, images } = product;

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
              className="w-full h-32 object-cover mb-2"
            />
          ))}{" "}
        </div>
        {/* <img
          src={product.images.map()}
          alt=""
          className="object-cover rounded-[0.5rem]"
        /> */}
      </div>
      <div className="">
        <p>{title}</p>
        <span className="text-gray-500 font-light">${price} night</span>
        <br />
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Product;
