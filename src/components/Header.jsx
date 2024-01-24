import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-[#161616] flex p-4 justify-between text-center">
        <a href="#" className="text-[#f6f6f6] font-aktura text-5xl">
          SA
        </a>
        <div className="flex items-center">
          <div className="flex text-xl hover:scale-95 transition-transform cursor-pointer text-[#f6f6f6] font-clash">
            MENU
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
