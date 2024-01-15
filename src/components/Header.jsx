import React, { useState } from 'react';

const Header = () => {
  // State to handle sub-menu visibility
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Function to toggle sub-menu visibility
  const toggleSubMenu = (menu) => {
    if (selectedMenu === menu) {
      // If the same menu is clicked again, close the sub-menu
      setIsSubMenuVisible(!isSubMenuVisible);
    } else {
      // If a different menu is clicked, open the sub-menu
      setIsSubMenuVisible(true);
    }
    setSelectedMenu(menu);
  };

  return (
    <>
      <div className="bg-[#161616] flex p-4 justify-between text-center">
        <p className="text-[#f6f6f6] font-aktura text-5xl">SA</p>
        <div className="flex space-x-4">
          <MenuButton menu="Services" toggleSubMenu={toggleSubMenu} />
          <MenuButton menu="About Us" toggleSubMenu={toggleSubMenu} />
          <MenuButton menu="Gallery" toggleSubMenu={toggleSubMenu} />
          <MenuButton menu="Contact" toggleSubMenu={toggleSubMenu} />
        </div>
        {/* Sub-menu */}
        {isSubMenuVisible && (
          <div className="absolute top-full left-0 mt-2 bg-[#333] p-2">
            {selectedMenu === 'Services' && (
              <>
                <p className="text-[#f6f6f6]">Haircut</p>
                <p className="text-[#f6f6f6]">Beard Trim</p>
                <p className="text-[#f6f6f6]">Facial</p>
                <p className="text-[#f6f6f6]">Shave</p>
              </>
            )}
            {selectedMenu === 'About Us' && (
              <>
                <p className="text-[#f6f6f6]">Our Story</p>
                <p className="text-[#f6f6f6]">Team</p>
              </>
            )}
            {selectedMenu === 'Gallery' && (
              <>
                <p className="text-[#f6f6f6]">Photos</p>
                <p className="text-[#f6f6f6]">Videos</p>
              </>
            )}
            {selectedMenu === 'Contact' && (
              <>
                <p className="text-[#f6f6f6]">Phone</p>
                <p className="text-[#f6f6f6]">Email</p>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

// MenuButton component to simplify code for each menu item
const MenuButton = ({ menu, toggleSubMenu }) => {
  return (
    <div
      className="text-[#f6f6f6] font-clash text-3xl cursor-pointer transition-transform hover:scale-95 relative"
      onClick={() => toggleSubMenu(menu)}
    >
      {menu}
    </div>
  );
};

export default Header;
