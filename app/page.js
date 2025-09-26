"use client";
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
    { tab: <h1>Contact</h1> },
    { tab: <h1>Blog</h1> },
  ];
  const { activeTab } = useTabContext();
  return <Fragment key={activeTab}>{Tabs[activeTab].tab}</Fragment>;
}
