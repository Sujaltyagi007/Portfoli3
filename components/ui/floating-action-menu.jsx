"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lightbulb, Moon, MonitorSmartphone } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

function OptionsBtn({ toggleMenu }) {
  const { setTheme } = useTheme();
  const options = [
    {
      label: "System",
      Icon: <MonitorSmartphone className="w-4 h-4" />,
      onClick: () => {
        setTheme("system");
        toggleMenu(false);
      },
    },
    {
      label: "Light",
      Icon: <Lightbulb className="w-4 h-4" />,
      onClick: () => {
        setTheme("light");
        toggleMenu(false);
      },
    },
    {
      label: "Dark",
      Icon: <Moon className="w-4 h-4" />,
      onClick: () => {
        setTheme("dark");
        toggleMenu(false);
      },
    },
  ];
  return (
    <div className="flex flex-col items-end gap-2 ">
      {options.map((option) => (
        <Button
          key={option.label}
          variant="ghost"
          className="flex items-center gap-2 w-fit cursor-pointer dark:bg-[#2b2a2a] bg-gray-300/80  hover:bg-gray-400/60 "
          onClick={option.onClick}
        >
          {option.Icon}
          {option.label}
        </Button>
      ))}
    </div>
  );
}

const FloatingActionMenu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!mounted) return null;
  return (
    <div className={cn("fixed bottom-8 right-8 h-fit ", className)}>
      <Button
        onClick={toggleMenu}
        className="w-12 h-12 rounded-full bg-gray-400/80 cursor-pointer hover:bg-gray-400/60 shadow-[0_0_20px_rgba(0,0,0,0.2)] "
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {theme === "system" && <MonitorSmartphone width={18} height={18} />}
          {theme === "light" && <Lightbulb width={18} height={18} />}
          {theme === "dark" && <Moon width={24} height={24} />}
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.1,
            }}
            className="absolute top-14 right-0 mb-2"
          >
            <OptionsBtn toggleMenu={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionMenu;
