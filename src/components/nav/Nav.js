import React from "react";
import { Link } from "react-scroll";
import { navLinksData } from "@/constants/Constants";

const Nav = () => {
  return (
    <nav className="backdrop-blur-lg sticky bottom-10 z-50 h-12 w-48 rounded-3xl mx-auto flex justify-between items-center gap-3">
      <ul className="flex items-center gap-5 mx-auto">
        {navLinksData.map(({ _id, icon, link }) => (
          <li key={_id} className="cursor-pointer hover:text-gray-700 ">
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {icon}
            </Link>
          </li>
        ))}
        {/* <li>
          <a href="#home">
            <AiOutlineHome className="text-2xl dark:fill-teal-500" />
          </a>
        </li>
        <li>
          <a href="#skills">
            <BiBook className="text-2xl dark:fill-teal-500" />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <GoProject className="text-2xl dark:fill-teal-500" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <AiOutlineMessage className="text-2xl dark:fill-teal-500" />
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
