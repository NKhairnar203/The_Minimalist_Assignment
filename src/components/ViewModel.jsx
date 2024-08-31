import React from "react";
import Slide from "./Slide";
import { RiCloseLine } from "@remixicon/react";
import divide from "../assets/dashedDivide.png";
import list from "../assets/listIcon.png";
const ViewModal = ({ isOpen, onClose, images, productInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg w-[1200px] h-[639px] p-6 relative ">
        {/* Close Icon */}

        {/* Modal Content */}
        <div className="flex h-full ">
          <Slide />
          <div className="w-[359px] relative ml-3">
            <div className=" flex justify-between w-[355px] h-9">
              <h2 className=" text-lg font-semibold leading-9">
                Raju Rassibomb
              </h2>
              <button
                onClick={onClose}
                className="mb-2 text-gray-500 hover:text-gray-800 "
              >
                <RiCloseLine size={"24px"} />
              </button>
            </div>
            <div className="w-[362px]">
              <h2 className=" text-xl font-semibold">MRP:</h2>
              <h2 className=" text-[28px] font-bold">Raju Dreams/-</h2>
            </div>

            <div className="w-[359px] h-[300px] flex flex-col mt-8 gap-5">
              <img src={divide} alt="" />
              <div className="h-16 gap-1 flex flex-col">
                <h1 className="text-xs font-semibold">Product Description:</h1>
                <p className="w-[355px] text-xs font-normal">
                  This product packs an extra punch, thanks to the literal
                  blood, sweat and tears of a young boy.{" "}
                </p>
              </div>
              <img src={divide} alt="" />
              <div className="h-[92px]  flex flex-col gap-1 ">
                <h1 className=" text-xs font-semibold text-[#535353]">
                  Product Contents:
                </h1>
                <ul className=" gap-1 flex flex-col text-[#535353]">
                  <li className="flex gap-1 items-center">
                    <div className="w-3">
                      <img className="w-full" src={list} alt="" />
                    </div>
                    <p className="text-xs">
                      10 hand-hurting pieces of rassi bombs
                    </p>
                  </li>
                  <li className="flex gap-1 items-center">
                    <div className="w-3">
                      <img className="w-full" src={list} alt="" />
                    </div>
                    <p className="text-xs">Jilled with great pain</p>
                  </li>
                  <li className="flex gap-1 items-center">
                    <div className="w-3">
                      <img className="w-full" src={list} alt="" />
                    </div>
                    <p className="text-xs">Raju’s hopes</p>
                  </li>
                </ul>
              </div>
              <img src={divide} alt="" />
              <div className="flex flex-col gap-1">
                <h1 className=" text-xs font-semibold text-[#535353]">
                  Shipping Time:{" "}
                </h1>
                <p className="text-xs font-normal">
                  Before Raju understands that his dreams do not matter.{" "}
                </p>
              </div>
            </div>
            <div>
              <button className="bg-[#FE0000] font-semibold w-full h-[60px] text-2xl text-white absolute bottom-0">Choose Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
