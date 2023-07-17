"use client";
import React, { useState } from "react";

/** Framer Motion */
import { AnimatePresence } from "framer-motion";

/** Heroicons */
import { Bars3Icon } from "@heroicons/react/24/outline";

/** Components */
import Logo from "@/components/common/Logos/Logo";
import ExploreDropdown from "@/components/common/Dropdowns/ExploreDropdown";
import ContactButton from "@/components/common/Buttons/EmailButton";
import MobileSidebar from "@/components/layouts/Navbar/MobileSidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-600 bg-black">
        <div className="max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between p-4">
          <div className="flex flex-row items-baseline gap-4">
            <Logo />
            <div className="hidden lg:block">
              <ExploreDropdown />
            </div>
          </div>
          <div className="hidden lg:block">
            <ContactButton text={"Drop me an email"} />
          </div>
          <div className="block lg:hidden">
            <Bars3Icon className="h-5 w-5 text-white" onClick={handleClick} />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isSidebarOpen && <MobileSidebar onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}
