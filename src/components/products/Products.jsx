import React from "react";

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
      images: [countryside3, countryside5, countryside2, countryside4],
      price: "57",
      date: "Feb 14-21",
    },
    {
      title: "Rajshahi,Bangladesh",
      images: [countryside2, countryside5, countryside2, countryside4],
      price: "60",
      date: "Jan 15-21",
    },
    {
      title: "Punakha,Bhutan",
      images: [countryside3, countryside5, countryside2, countryside4],
      price: "50",
      date: "Feb 1-10",
    },
    {
      title: "Kalingpong,India",
      images: [countryside4, countryside5, countryside2, countryside4],
      price: "80",
      date: "Feb 21-27",
    },
    {
      title: "Digha,India",
      images: [countryside5, countryside5, countryside2, countryside4],
      price: "71",
      date: "Feb 5-9",
    },
    {
      title: "Takdah,India",
      images: [countryside6, countryside5, countryside2, countryside4],
      price: "56",
      date: "Feb 1-21",
    },
    {
      title: "Male,Maldives",
      images: [countryside3, countryside5, countryside2, countryside4],
      price: "57",
      date: "Feb 14-21",
    },
    {
      title: "Rajshahi,Bangladesh",
      images: [countryside2, countryside5, countryside2, countryside4],
      price: "60",
      date: "Jan 15-21",
    },
    {
      title: "Punakha,Bhutan",
      images: [countryside3, countryside5, countryside2, countryside4],
      price: "50",
      date: "Feb 1-10",
    },
    {
      title: "Kalingpong,India",
      images: [countryside4, countryside5, countryside2, countryside4],
      price: "80",
      date: "Feb 21-27",
    },
    {
      title: "Digha,India",
      images: [countryside5, countryside5, countryside2, countryside4],
      price: "71",
      date: "Feb 5-9",
    },
    {
      title: "Takdah,India",
      images: [countryside6, countryside5, countryside2, countryside4],
      price: "56",
      date: "Feb 1-21",
    },
    {
      title: "Male,Maldives",
      images: [countryside3, countryside5, countryside2, countryside4],
      price: "57",
      date: "Feb 14-21",
    },
    {
      title: "Rajshahi,Bangladesh",
      images: [countryside2, countryside5, countryside2, countryside4],
      price: "60",
      date: "Jan 15-21",
    },
    {
      title: "Punakha,Bhutan",
      images: [countryside3, countryside5, countryside2, countryside4],
      price: "50",
      date: "Feb 1-10",
    },
    {
      title: "Kalingpong,India",
      images: [countryside4, countryside5, countryside2, countryside4],
      price: "80",
      date: "Feb 21-27",
    },
    {
      title: "Digha,India",
      images: [countryside5, countryside5, countryside2, countryside4],
      price: "71",
      date: "Feb 5-9",
    },
    {
      title: "Takdah,India",
      images: [countryside6, countryside5, countryside2, countryside4],
      price: "56",
      date: "Feb 1-21",
    },
  ];
  return (
    <div className="pt-3 ml-2 ">
      <div className="gap-6 sm:grid grid-cols-1 lg:grid grid-cols-3 ">
        {products.map((product, index) => (
          <Product product={product} key={index}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
