"use client";
import { createContext, useContext, useState } from "react";
export const TabContext = createContext();
export default function TabProvider({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}
export const useTabContext = () => useContext(TabContext);
