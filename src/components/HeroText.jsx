import React from "react";

const HeroText = () => {
  return (
    <>
      <div className="bg-[#161616] justify-center text-[#f6f6f6] p-2 border-t-2 border-b-2 flex flex-row border-[#f6f6f6]">
        <div className="font-clash  p-2 text-[5rem] md:text-[10rem] flex flex-col">
          <div>
            S<span className="font-aktura">A</span>EED
          </div>
          <div className="flex flex-row">
            <span className="font-aktura">A</span>ZEEM
            <div className="p-5 ml-10 flex whitespace-nowrap justify-center text-center flex-col text-sm md:text-xl">
              <p className="flex justify-start mb-2">HAIR STYLIST FOR MEN </p>
              <p className="flex justify-start mb-2">SINCE 2012</p>
              <p className="flex justify-start mb-2">LAHORE/PAKISTAN</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroText;
