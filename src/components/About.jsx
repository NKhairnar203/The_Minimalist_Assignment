import React from "react";
import divide from "../assets/divideImage.png";
import star from "../assets/star-frame.png"
const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-auto mt-14">
      <div className="">
        <div className="flex items-center justify-between">
          <div>
            <img src={divide} alt="divide" />
          </div>
          <h1 className="text-[32px] font-bold text-[#F27121]">About</h1>
          <div>
            <img src={divide} alt="divide" />
          </div>
        </div>
        <div className="flex mt-5 items-center justify-between">
          <div>
            <img src={star} className="w-[117px]" alt="star" />
          </div>
          <div className="text-center  h-[140px w-[908px]">
            <p className="font-semibold leading-8 my-2 ">
              Our products are crafted exclusively from the dreams and screams
              of young kids who wanted to show their mastery in their chosen
              fields, but were directed towards a factory for daily wages. Each
              cracker bursts brighter than their lost smiles, and can be heard
              louder than their cries for miles. Buy them, burst them, brag
              about them.
            </p>
            <span className="font-bold text-lg">
              The choice is yours. Because they don’t have one.
            </span>
          </div>
          <div>
            <img src={star} className="w-[117px]" alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
