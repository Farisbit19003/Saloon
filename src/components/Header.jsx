import React from 'react';

const Header = () => {
  return (
    <>
      <div className="bg-[#161616] flex p-4 justify-between text-center">
        <p className="text-[#f6f6f6] font-aktura text-5xl">SA</p>
        <p className="text-[#f6f6f6] font-clash text-3xl cursor-pointer transition-transform hover:scale-95">
          Menu
        </p>
      </div>
    </>
  );
};

export default Header;
