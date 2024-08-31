import React, { useState } from "react";
import Model from "./ViewModel"
import divide from "../assets/divideImage.png";
import fulldivide from "../assets/fulldevide.png";
import product from "../assets/productImage.jpeg";
import { RiCloseLine } from "@remixicon/react"
import Product from "./Product";
const OurProject = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 

 const productInfo = {
   title: "Product Title",
   description: "This is a brief description of the product.",
   price: "$199.99",
 };
  return (
    <div className=" max-w-screen-xl mx-auto h-auto mt-14">
      <div className="">
        <div className="flex items-center justify-between">
          <div>
            <img src={divide} alt="divide" />
          </div>
          <h1 className="text-[32px] font-bold text-[#F27121]">Our Products</h1>
          <div className="w-[472.31px]">
            <img className="w-full" src={divide} alt="divide" />
          </div>
        </div>

        <div className="flex gap-8 my-10 justify-center ">
          <Product name="Raju Rassibomb" />
          <Product name="Ladiyon ki Rani Chani" />
        </div>
        <div>
          <img src={fulldivide} alt="fulldivide" />
        </div>
      </div>
    </div>
  );
};

export default OurProject;
