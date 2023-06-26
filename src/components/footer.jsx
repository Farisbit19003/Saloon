import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiOutlineToTop} from "react-icons/ai";
const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <>
      <div className="bg-[#161616] font-clash text-[#f6f6f6] border-t-2 p-3 border-[#f6f6f6]">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col gap-1">
            <p>©2023 Saeed Azeem</p>
            <p>
              Designed by Salman Aslam &<br /> Developed by Faris irfan
            </p>
          </div>
          <div className="flex-col text-[#f6f6f6] justify-center p-1 gap-3 cursor-pointer">
            <p>
              <AiOutlineMail size={25} />
            </p>
            <p>
              <AiOutlinePhone size={25} />
            </p>
            <p  onClick={handleScrollToTop}>
              <AiOutlineToTop size={25} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer