import React from "react";

const HeroText = () => {
  return (
    <>
      <div className="bg-[#161616] justify-start  md:justify-center text-[#f6f6f6] border-t-2 border-b-2 flex flex-row border-[#f6f6f6]">
        <div className="font-clash text-[3.5rem] md:text-[10rem] flex flex-col">
          <div className="ml-1">
            S<span className="font-aktura">A</span>EED
          </div>
          <div className="flex ml-1 p-1 flex-row">
            <span className="font-aktura">A</span>ZEEM
            <div className="p-1 ml-1 flex whitespace-nowrap justify-center text-center flex-col text-xs md:text-xl">
              <p className="flex justify-start sm:mb-0 ">HAIR STYLIST FOR MEN </p>
              <p className="flex justify-start sm:mb-0 ">SINCE 2012</p>
              <p className="flex justify-start sm:mb-0 ">LAHORE/PAKISTAN</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroText;
