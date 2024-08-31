import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import OurProject from "./components/OurProject";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="mx-auto h-full max-w-screen-2xl">
        <HeroSection />
        <About/>
        <OurProject/>
        
      </div>
      <Footer/>
    </div>
  );
};

export default App;
