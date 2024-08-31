import React, { useState } from "react";
import Model from "./ViewModel";
import product from "../assets/productImage.jpeg";

const Product = ({name}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className=" w-[584px] h-[530px] border">
        <div className="flex flex-col items-center p-2 gap-7 ">
          <div className="h-[434px] w-[560px] ">
            <img src={product} className=" w-full h-full" alt="star" />
          </div>
          <div className="flex w-full justify-between items-center ">
            <h1 className=" text-xl font-semibold text-black">
              {name}
            </h1>
            <button
              className="text-sm px-12 py-3.5 font-bold bg-[#FE0000] text-white"
              onClick={() => setIsModalOpen(true)}
            >
              QUICK VIEW
            </button>
            <Model
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
