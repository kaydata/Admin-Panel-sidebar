"use client"
import Mainheader from "@/components/header/Mainheader";
import React, { useContext } from "react";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineSchedule,
  AiOutlineCheckSquare,
  AiOutlineFileText,
  AiOutlineTool,
  AiOutlineDollarCircle,
  AiOutlineAudit,
  AiOutlineSafetyCertificate,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineQuestionCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { MenuContext } from "@/context/MenuContext";
const page = () => {
  const {open} = useContext(MenuContext);
  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <div className="flex justify-start items-start">
        <aside className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${open ? "w-60 p-4" : "w-0"} lg:w-60 lg:p-4`}>
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href="/">Dashboard</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineProject className="mr-2" />
              <Link href="/">Projects</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineSchedule className="mr-2" />
              <Link href="/">Schedules</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineCheckSquare className="mr-2" />
              <Link href="/">Tasks</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineFileText className="mr-2" />
              <Link href="/" className="flex-1">
                Reports
              </Link>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineTool className="mr-2" />
              <Link href="/">Resources</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineDollarCircle className="mr-2" />
              <Link href="/">Financials</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineAudit className="mr-2" />
              <Link href="/">Compliance</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineSafetyCertificate className="mr-2" />
              <Link href="/">Safety</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineMessage className="mr-2" />
              <Link href="/">Communication</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineUser className="mr-2" />
              <Link href="/">User Profile</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineQuestionCircle className="mr-2" />
              <Link href="/">Help/Support</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineLogout className="mr-2" />
              <Link href="/">Logout</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1"> Home Page</main>
      </div>
    </div>
  );
};

export default page;
