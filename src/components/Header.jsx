import React from "react";

const Header = () => {
  const menuData = [
    {
      title: "Haircuts",
      link: "#",
      children: [
        { title: "Classic Haircut", link: "#" },
        { title: "Modern Styles", link: "#" },
        { title: "Beard Trimming", link: "#" },
      ],
    },
    {
      title: "Coloring",
      link: "#",
      children: [
        { title: "Full Color", link: "#" },
        { title: "Highlights", link: "#" },
        { title: "Gray Blending", link: "#" },
      ],
    },
    {
      title: "Facial",
      link: "#",
      children: [
        { title: "Deep Cleanse", link: "#" },
        { title: "Anti-Aging", link: "#" },
        { title: "Moisturizing", link: "#" },
      ],
    },
    {
      title: "Packages",
      link: "#",
      children: [
        { title: "Grooming Package", link: "#" },
        { title: "VIP Package", link: "#" },
      ],
    },
    {
      title: "Contact Us",
      link: "#",
      children: [
        { title: "Email", link: "#" },
        { title: "Mobile", link: "#" },
      ],
    },
  ];

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <MenuItem key={index} title={item.title} link={item.link}  id={`menu-${index}`}>
        {item.children && renderMenuItems(item.children)}
      </MenuItem>
    ));
  };

  return (
    <>
      <div className="bg-[#161616] flex p-4 justify-between text-center">
        <a href="#" className="text-[#f6f6f6] font-aktura text-5xl">
          SA
        </a>
        <div className="flex items-center">
          <div className="flex text-[#f6f6f6] space-x-4">
            {renderMenuItems(menuData)}
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ title, link,id, children }) => {
  return (
    <div className="group relative">
      <ul>
        <a
                  id={id}

          href={link}
          className="cursor-pointer text-2xl py-2 px-4 block hover:bg-[#333]"
        >
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
