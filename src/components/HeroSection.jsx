import heroIcon from "../assets/hero_image.jpg";

const HeroSection = () => {
  return (
    <div className=" max-w-screen-2xl relative border border-black">
      <div className=" h-[520px]  max-w-screen-2xl">
        <img src={heroIcon} className="w-full h-full absolute" alt="" />
      </div>
      <div className=" absolute w-[1200px] h-auto font-semibold top-64 left-28 text-[2.5rem]  text-white ">
        <h1 className="">The choice is yours.</h1>
        <h1 className=" ">Because they don’t have one.</h1>
        <div className="mt-4">
          <button className="text-sm px-12 py-3.5 font-bold bg-white text-red-600">
            QUICK VIEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
