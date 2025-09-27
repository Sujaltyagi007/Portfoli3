"use client";
import {
  FaHome,
  FaBriefcase,
  FaEnvelopeOpen,
  FaComments,
} from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { useTabContext } from "@/context/TabContext";

export default function MagicNavigation() {
  const { activeTab, setActiveTab } = useTabContext();
  const menuItems = [
    { icon: <FaHome className=" size-5" />, text: "Home" },
    { icon: <TiUser className=" size-5" />, text: "About" },
    { icon: <FaBriefcase className=" size-5" />, text: "Work" },
    { icon: <FaEnvelopeOpen className=" size-5" />, text: "Contact" },
    { icon: <FaComments className=" size-5" />, text: "Blog" },
  ];

  return (
    <div className=" w-full flex md:hidden justify-center items-center fixed top-[92%] ">
      <div className="relative w-[90vw] h-[7vh] bg-gradient-to-tr from-[#FFB400] to-[#ffcf60] flex justify-center items-center rounded-xl">
        <ul className="flex justify-center items-center w-[80vw] ">
          {menuItems.map((item, i) => (
            <li
              key={i}
              onClick={() => setActiveTab(i)}
              className={`relative w-[70px] h-[25px] list-none z-10 cursor-pointer transition-all duration-500`}
            >
              <div className="relative flex justify-center items-center flex-col w-full text-center font-medium">
                <span
                  className={`relative block text-white text-2xl transition-transform duration-500 ${
                    activeTab === i ? "-translate-y-7 -translate-x-0.5 " : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`absolute text-white text-xs font-normal tracking-wide transition-all duration-500 ${
                    activeTab === i
                      ? "opacity-100 translate-y-4 "
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  {item.text}
                </span>
                <span
                  className={`absolute size-[45px] rounded-full border-1 mr-1 border-white transition-all duration-500 ${
                    activeTab === i
                      ? "-translate-y-7 scale-100"
                      : "-translate-y-7 scale-0"
                  }`}
                ></span>
              </div>
            </li>
          ))}

          <div
            className="absolute -top-[calc(5vh)] size-[65px] bg-gradient-to-tr from-[#FFB400] to-[#ffcf60] border-[6px] border-[#ffffff] dark:border-[#000000] rounded-full flex justify-center items-center transition-transform duration-500"
            style={{
              transform: `translateX(calc(57.5px * ${activeTab}))`,
              left: `calc(47% - (140px))`,
            }}
          >
            <div className="absolute top-[58%] left-[-14px] w-3 h-3 bg-transparent rounded-tr-2xl dark:shadow-[1px_-10px_0_#000000] shadow-[1px_-6px_0_#ffffff]  "></div>
            <div className="absolute top-[58%] right-[-14px] w-3 h-3 bg-transparent rounded-tl-2xl dark:shadow-[-0.5px_-10px_0_#000000] shadow-[0px_-6px_0_#ffffff]"></div>
          </div>
        </ul>
      </div>
    </div>
  );
}
