"use client";
import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import CollapsibleNavbar from "../navbar/Navbar";

const Mainheader = () => {
  const { toggle } = useContext(MenuContext);
  return (
    <>
      <CollapsibleNavbar />
      <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
        <div> Brand </div>
        <div onClick={toggle} className="lg:hidden">
          <FaBars className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Mainheader;
