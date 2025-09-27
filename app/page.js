"use client";
import MagicNavigation from "@/components/MobileNavbar";
import About from "@/components/pages/About";
import Home from "@/components/pages/Home";
import Work from "@/components/pages/Work";
import { useTabContext } from "@/context/TabContext";
import { Fragment } from "react";

export default function Page() {
  const Tabs = [
    { tab: <Home /> },
    { tab: <About /> },
    { tab: <Work /> },
    { tab: <div className=" flex justify-center items-center h-dvh">Comming Soon...</div> },
    { tab: <div className=" flex justify-center items-center h-dvh">Comming Soon...</div> },
  ];
  const { activeTab } = useTabContext();
  return <Fragment key={activeTab}>{Tabs[activeTab].tab}</Fragment>;
}
