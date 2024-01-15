import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-[#161616] flex p-4 justify-between text-center">
        <p className="text-[#f6f6f6] font-aktura text-5xl">SA</p>
        <div className="flex items-center">
          <div className="flex text-[#f6f6f6] space-x-4">
            <MenuItem title="Haircuts">
              <SubMenuItem title="Classic Haircut" />
              <SubMenuItem title="Modern Styles" />
              <SubMenuItem title="Beard Trimming" />
            </MenuItem>
            <MenuItem title="Coloring">
              <SubMenuItem title="Full Color" />
              <SubMenuItem title="Highlights" />
              <SubMenuItem title="Gray Blending" />
            </MenuItem>
            <MenuItem title="Facial">
              <SubMenuItem title="Deep Cleanse" />
              <SubMenuItem title="Anti-Aging" />
              <SubMenuItem title="Moisturizing" />
            </MenuItem>
            <MenuItem title="Packages">
              <SubMenuItem title="Grooming Package" />
              <SubMenuItem title="VIP Package" />
            </MenuItem>
            <MenuItem title="Contact Us">
              <SubMenuItem title="Email" />
              <SubMenuItem title="Mobile" />
            </MenuItem>
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ title, children }) => {
  return (
    <div className="group relative">
      <ul>
        {" "}
        <p className="cursor-pointer font-aktura text-2xl py-2 px-4 block hover:bg-[#333]">
          {title}
        </p>
        <li>
          {" "}
          {children && (
            <div className="absolute hidden space-y-2 mt-2 bg-[#161616] text-[#f6f6f6] rounded-md shadow-lg group-hover:block">
              {children}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

const SubMenuItem = ({ title }) => {
  return <p className="block py-2 px-4 hover:bg-[#333]">{title}</p>;
};

export default Header;
