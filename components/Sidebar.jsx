"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { motion } from "motion/react";
import { useTabContext } from "@/context/TabContext";

export default function Sidebar() {
  const data = [
    {
      name: "Home",
      icon: <FaHome />,
    },
    {
      name: "About",
      icon: <TiUser />,
    },
    {
      name: "Work",
      icon: <FaBriefcase />,
    },
    {
      name: "Contact",
      icon: <FaEnvelopeOpen />,
    },
    {
      name: "Blog",
      icon: <FaComments />,
    },
  ];
  const { activeTab, setActiveTab } = useTabContext();
  const [hover, setHover] = useState(undefined);
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 right-10 hidden md:flex justify-end items-center my-auto h-fit bg-transparent w-[10vw] ">
      <ol className=" flex flex-col gap-[4vh] justify-end items-end  ">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setActiveTab(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(undefined)}
              className={` ${
                activeTab === index
                  ? "bg-[#ffb400]"
                  : "dark:bg-[#2b2a2a] bg-gray-300 "
              } rounded-full cursor-pointer ${
                hover === index && "!bg-[#ffb400]"
              } flex justify-center items-center transition-colors duration-500 w-fit `}
            >
              <motion.p
                initial={{ opacity: 0, display: "none" }}
                animate={{
                  opacity: hover === index ? 1 : 0,
                  display: hover === index ? "block" : "none",
                }}
                className={`pl-6 text-center  `}
              >
                {item.name}
              </motion.p>
              <span className="text-[16px] p-4 ">{item.icon}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
