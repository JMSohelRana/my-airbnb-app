import React from "react";
import countryside1 from "../../images/countryside/flowers.jpg";
import countryside2 from "../../images/countryside/hills.jpg";
import countryside3 from "../../images/countryside/field.jpg";
import countryside4 from "../../images/countryside/landscape.jpg";
import countryside5 from "../../images/countryside/rapeseeds.jpg";
import countryside6 from "../../images/countryside/livestock.jpg";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "Male,Maldives",
      image: countryside1,

      price: "57",
    },
    { title: "Rajshahi,Bangladesh", image: countryside2, price: "60" },
    { title: "Punakha,Bhutan", image: countryside3, price: "50" },
    { title: "Kalingpong,India", image: countryside4, price: "80" },
    { title: "Digha,India", image: countryside5, price: "71" },
    { title: "Takdah,India", image: countryside6, price: "56" },
  ];
  return (
    <div className="pt-3 ml-2 ">
      <div className="sm:grid grid-cols-1 lg:grid grid-cols-3 gap-4 ">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
