import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-[#161616] flex p-4 justify-between text-center">
        <p className="text-[#f6f6f6] font-aktura text-5xl">SA</p>
        <div className="flex items-center">
          <div className="flex text-[#f6f6f6] space-x-4">
            <MenuItem title="HOME" subMenuItems={['The Vice Chancellor', 'The Director', 'Mission Statement', 'Establishment', 'Academic Regulations', 'Overview of the University']} />
            <MenuItem title="DEPARTMENTS" subMenuItems={['Administrative Sciences', 'Result – BSM', 'Business Administration', 'BBA Course Roadmap', 'Result – BBA', 'Commerce', 'Bcom Course Roadmap', 'Result – Bcom', 'Information Technology', 'Overview', 'CS Course Roadmap', 'Course Outline', 'Project Office', 'Result – IT Department', 'Law', 'Result – LLb', 'Code of Conduct', 'Department of English', 'Teachers of All Departments']} />
            {/* Add other menu items here */}
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ title, subMenuItems }) => {
  return (
    <div className="group relative">
      <ul>
        <p className="cursor-pointer font-aktura text-2xl py-2 px-4 block hover:bg-[#333]">
          {title}
        </p>
        <li>
          {subMenuItems && (
            <div className="absolute hidden space-y-2 mt-2 bg-[#161616] text-[#f6f6f6] rounded-md shadow-lg group-hover:block">
              {subMenuItems.map((item, index) => (
                <SubMenuItem key={index} title={item} />
              ))}
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
