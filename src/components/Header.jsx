import React from "react";

const Header = () => {
  const menuData = [
    {
      title: "Haircuts",
      children: [
        { title: "Classic Haircut" },
        { title: "Modern Styles" },
        { title: "Beard Trimming" },
      ],
    },
    {
      title: "Coloring",
      children: [
        { title: "Full Color" },
        { title: "Highlights" },
        { title: "Gray Blending" },
      ],
    },
    {
      title: "Facial",
      children: [
        { title: "Deep Cleanse" },
        { title: "Anti-Aging" },
        { title: "Moisturizing" },
      ],
    },
    {
      title: "Packages",
      children: [
        { title: "Grooming Package" },
        { title: "VIP Package" },
      ],
    },
    {
      title: "Contact Us",
      children: [
        { title: "Email" },
        { title: "Mobile" },
      ],
    },
  ];

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <MenuItem key={index} title={item.title}>
        {item.children && renderMenuItems(item.children)}
      </MenuItem>
    ));
  };

  return (
    <>
      <div className="bg-[#161616] flex p-4 justify-between text-center">
        <a href="#" className="text-[#f6f6f6] font-aktura text-5xl">SA</a>
        <div className="flex items-center">
          <div className="flex text-[#f6f6f6] space-x-4">
            {renderMenuItems(menuData)}
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
        <a href="#" className="cursor-pointer  text-2xl py-2 px-4 block hover:bg-[#333]">
          {title}
        </a>
        <li>
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

export default Header;
