import React, { useState } from "react";
import product from "../assets/product1Slide.png";
import product1 from "../assets/products.png";

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const images = [
    {
      src: product,
      alt: "product1",
    },
    {
      src: product1,
      alt: "product1",
    },
    {
      src: product1,
      alt: "product1",
    },
    {
      src: product1,
      alt: "product1",
    },
  ];

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="container h-full  w-[760px] mx-auto  ">
      <div className="relative w-[760px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`mySlides   ${
              slideIndex === index + 1 ? "block" : "hidden"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className=" w-full h-[467px] object-cover "
            />
          </div>
        ))}

        <div className=" w-[760px]  flex mt-2 justify-centern items-center gap-[16px]">
          {images.map((image, index) => (
            <div key={index} className="  ">
              <div className="h-[92px] column w-[178px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`border border-[#F8EFEF] cursor-pointer p-1  w-[166px] h-[80px] object-cover  ${
                    slideIndex === index + 1
                      ? "border-[#F27121] border-2"
                      : "border"
                  }`}
                  onClick={() => currentSlide(index + 1)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
