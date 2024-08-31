import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className="bg-[#1C1C1C33] fixed w-full z-50">
      <div className=" h-[72px]  mx-auto flex items-center max-w-screen-xl ">
        <img className="h-10" src={logo} alt="" />
      </div>
    </div>
  );
}

export default Navbar