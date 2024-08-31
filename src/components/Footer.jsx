import React from "react";
import footer from "../assets/footer.png";
import vector from "../assets/Vector.png"
import vec from "../assets/vec.png"
import instagram from "../assets/instagram.png"
import youtube from "../assets/youtube.png"
import tweeter from "../assets/tweeter.png";
import facebook from "../assets/facebook.png"
import linkdin from "../assets/linkdin.png"
const Footer = () => {
  return (
    <div className="w-[1441px] border h-[118px] mx-auto mt-24">
      <img src={footer} alt="footer" className="w-[1441px]" />

      <div className="w-[1441px] h-[104px] ">
        <div className="absolute ">
          <img src={vector} alt="vector" />
        </div>
        <div className="relative w-full h-full flex justify-between items-center px-3">
          <div>
            <img className="w-[55px]" src={vec} alt="" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className=" font-bold text-[#ECE14C] text-xl">Follow us on</h1>
            <div className="flex gap-4">
              <a href="#" className="text-[#ECE14C] text-sm">
                <img src={instagram} alt="" />
              </a>
              <a href="#" className="text-[#ECE14C] text-sm">
                <img src={youtube} alt="" />
              </a>
              <a href="#" className="text-[#ECE14C] text-sm">
                <img src={tweeter} alt="" />
              </a>
              <a href="#" className="text-[#ECE14C] text-sm">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={linkdin} alt="" />
              </a>
            </div>
          </div>
          <div>
            <img src={vec} className="w-[55px]" alt="" />
          </div>
        </div>
      </div>
      <img src={footer} alt="footer" className="w-[1441px]" />
    </div>
  );
};

export default Footer;
