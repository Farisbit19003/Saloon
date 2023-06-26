import React from 'react'

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
            <p className='text-sm'> Designed by Salman Aslam &<br/> Developed by Faris irfan</p>
          </div>
          <div className="flex flex-col md:flex-row md:p-3 p-2 md:gap-5 gap-3 sm:text-sm justify-center text-center align-middle">
            <p className="flex ">EMAIL</p>
            <p className="flex ">PHONE</p>
          </div>
          <div
            className="flex flex-row gap-1 p-3 text-sm md:text-base cursor-pointer whitespace-nowrap"
            onClick={handleScrollToTop}
          >
            <p>BACK TO TOP</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer