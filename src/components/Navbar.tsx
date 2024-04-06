import React from "react";
import { FaAngleDown, FaBars, FaGlobe, FaUser } from "react-icons/fa";
import logo from "../../public/images/Logo.png";
import Image from "next/image";
import avatar from "../../public/images/Avatar.png";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white h-16 flex items-center justify-between px-6 w-full">
      {/* Left side */}
      <div className="flex items-center">
       <div className="p-2">
       <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H12"
            stroke="#344054"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
       </div>
        <Image src={logo} alt="Company Logo" width={120} height={40} />
      </div>

      {/* Right side */}
      <div className="flex items-center">
        <div className="flex items-center mr-6">
          <FaGlobe className="text-gray-700 mr-1" />
          <span className="text-gray-700">English</span>
          <FaAngleDown className="text-gray-700 ml-1" />

        </div>
        <div className="flex items-center">
          <Image
            src={avatar}
            alt="Profile Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <FaAngleDown className="text-gray-700 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
