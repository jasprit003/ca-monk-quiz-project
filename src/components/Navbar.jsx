import React from "react";

import { DotsThreeOutlineVertical } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="lg:relative w-full h-16 px-4 lg:pr-20 shadow-md flex items-center justify-between">
      <div className="text-lg lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <p className=" sm:text-sm lg:text-lg">Sentence Construction</p>
      </div>

      <button className="ml-auto">
        <DotsThreeOutlineVertical size={24} />
      </button>
    </div>
  );
};

export default Navbar;
