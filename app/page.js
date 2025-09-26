"use client";
import About from "@/components/pages/About";
import Home from "@/components/pages/Home";
import Work from "@/components/pages/Work";
import { useTabContext } from "@/context/TabContext";

export default function page() {
  const Tabs = [<Home />, <About />, <Work />, <h1>Contact</h1>, <h1>Blog</h1>];
  const { activeTab } = useTabContext();
  return Tabs[activeTab];
}
