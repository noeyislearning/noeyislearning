"use client";
import React, { useEffect, useRef } from "react";

/** Framer Motion */
import { motion } from "framer-motion";

/** Heroicons */
import { XMarkIcon } from "@heroicons/react/24/outline";

/** Compoents */
import MobileSidebarMenu from "@/components/layouts/Navbar/Menu/MobileSidebarMenu";

/** Interface/Props */
interface Props {
  onClose: () => void;
}

export default function MobileSidebar({ onClose }: Props) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-20 bg-black bg-opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed right-0 top-0 z-40 h-fit w-full overflow-auto shadow-xl shadow-black"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        ref={sidebarRef}
      >
        <div className="h-fit bg-black p-4 text-white ">
          <div className="fixed right-4">
            <XMarkIcon className="h-7 w-7 text-white" onClick={onClose} />
          </div>
          <div className="">
            <div className="flex flex-col">
              <MobileSidebarMenu onClose={onClose} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
