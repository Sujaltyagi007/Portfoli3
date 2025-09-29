import React from "react";
import { Logos3 } from "../logos3";
import Image from "next/image";
import Html from "@/assets/Html.png";
import TailwindcssBlack from "@/assets/Tailwindcss1.png";
import TailwindcssWhite from "@/assets/Tailwindcss2.png";
import NextJsBlack from "@/assets/Nextjs1.png";
import NextJsWhite from "@/assets/Nextjs2.png";
import NodeJS from "@/assets/Nodejs.png";
import Angular from "@/assets/AngularJs.png";
import { useTheme } from "next-themes";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

function PersonalInfo() {
  const userInfo = {
    firstName: "Sujal",
    lastName: "Tyagi",
    age: 22,
    nationality: "Indian",
    freelance: "Available",
    address: "Alipur, Delhi",
    phone: "+91 9599861728",
    email: "sujaltyagi786@gmail.com",
    LinkedIn: "sujal-tyagi-001622272",
    languages: ["Hindi", "English"],
  };
  return (
    <>
      <div className=" flex flex-col md:flex-row text-[0.9rem] gap-3 md:text-[1rem] w-full md:items-start md:justify-around">
        <ul className=" flex flex-col gap-3 md:gap-6 px-[20vw] md:px-0 ">
          <li>
            <strong>Name:</strong> {userInfo.firstName} {userInfo.lastName}
          </li>
          <li>
            <strong>Age:</strong> {userInfo.age} Years
          </li>
          <li>
            <strong>Nationality:</strong> {userInfo.nationality}
          </li>
          <li>
            <strong>Freelance:</strong> {userInfo.freelance}
          </li>
          <li>
            <strong>Address:</strong> {userInfo.address}
          </li>
        </ul>
        <ul className=" flex flex-col gap-3 md:gap-6 px-[20vw] md:px-0  ">
          <li>
            <strong>Phone:</strong> {userInfo.phone}
          </li>
          <li className=" text-nowrap">
            <strong>Email:</strong>{" "}
            <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
          </li>
          <li className=" text-nowrap">
            <strong>LinkedIn:</strong> {userInfo.LinkedIn}
          </li>
          <li>
            <strong>Languages:</strong> {userInfo.languages.join(", ")}
          </li>
        </ul>
      </div>
    </>
  );
}

function SkillCard() {
  const { theme } = useTheme();
  return (
    <div className="flex gap-2 ">
      <div className=" flex flex-col items-end gap-2 ">
        <div className=" border inset-shadow-sm inset-shadow-orange-700 rounded-md w-[30vw] h-[15vh] md:w-[7vw] md:h-[15vh]">
          <Image
            src={Html}
            alt=""
            width={200}
            height={200}
            className="w-full h-full object-contain  "
          />
        </div>
        <div className=" border inset-shadow-sm dark:inset-shadow-white inset-shadow-black rounded-md w-[40vw] h-[15vh] md:w-[9vw] md:h-[12vh]">
          {theme === "dark" || theme === "system" ? (
            <Image
              src={NextJsWhite}
              alt=""
              width={200}
              height={200}
              className="w-full h-full object-contain  "
            />
          ) : (
            <Image
              src={NextJsBlack}
              alt=""
              width={200}
              height={200}
              className="w-full h-full object-contain  "
            />
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-2 ">
        <div className="">
          <div className=" inset-shadow-sm inset-shadow-[#00bcff] border rounded-md w-[45vw] h-[15vh] md:w-[9vw] md:h-[12vh]">
            {theme === "dark" || theme === "system" ? (
              <Image
                src={TailwindcssWhite}
                alt="Tailwindcss-logo"
                width={200}
                height={200}
                className="w-full h-full object-contain  "
              />
            ) : (
              <Image
                src={TailwindcssBlack}
                alt="Tailwindcss-logo"
                width={200}
                height={200}
                className="w-full h-full object-contain  "
              />
            )}
          </div>
        </div>
        <div className=" flex gap-2">
          <div className=" border inset-shadow-sm inset-shadow-[#f41752] rounded-md w-[25vw] h-[15vh] md:w-[8vw] md:h-[15vh]">
            <Image
              src={Angular}
              alt=""
              width={200}
              height={200}
              className="w-full h-full object-contain object-center  "
            />
          </div>
          <div className=" border rounded-md inset-shadow-sm inset-shadow-[#67bb4a] w-[20vw] h-[12vh] md:w-[6vw] md:h-[10vh]">
            <Image
              src={NodeJS}
              alt=""
              width={200}
              height={200}
              className="w-full h-full object-contain object-center  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeBtn() {
  return (
    <div className=" border w-fit cursor-pointer group flex items-center gap-2 my-[4vh] mx-[4vw] bg-[#ffb400] py-3 px-8 rounded-full ">
      <Link href={"./Resume.pdf"} filename={"Resume.pdf"} className=" select-none translate-x-4 group-hover:translate-x-0 transform transition-all duration-300 ease-in-out ">
        Download CV
      </Link>
      <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible invisible transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
        <FaDownload />
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section className=" min-h-screen mx-auto container flex flex-col justify-center items-center">
      <header className="relative py-[8vh] md:py-[15vh] ">
        <p className=" text-[2rem] md:text-[3rem] tracking-widest font-extrabold uppercase">
          About
          <span className=" text-[#ffb400]">Me</span>
        </p>
        <h1 className=" absolute top-1/2 left-1/2 text-[3.5rem] md:text-[6.5rem] opacity-20 font-extrabold tracking-widest uppercase  -translate-1/2 ">
          Resume
        </h1>
      </header>
      <main className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 h-fit w-full">
        <div className=" w-full flex flex-col  items-center ">
          <h3 className=" text-[1.2rem] md:text-[1.5rem] font-bold mb-[2vh] md:mb-[4vh]">
            Personal Details
          </h3>
          <PersonalInfo />
        </div>
        <div className="flex flex-col w-full items-center ">
          <h3 className=" text-[1.5rem] font-bold mb-[4vh] ">Skills</h3>
          <SkillCard />
        </div>
        <ResumeBtn />
      </main>
      <Logos3 />
    </section>
  );
}
