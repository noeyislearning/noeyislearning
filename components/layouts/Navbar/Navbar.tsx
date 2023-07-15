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
  }

  const handleClose = () => {
    setIsSidebarOpen(false);
  }

  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0 bg-black border-b border-gray-600">
        <div className="p-4 max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-row gap-4 items-baseline">
            <Logo />
            <div className="hidden lg:block">
              <ExploreDropdown />
            </div>
          </div>
          <div className="hidden lg:block">
            <ContactButton text={"Drop me an email"}/>
          </div>
          <div className="block lg:hidden">
            <Bars3Icon className="w-5 h-5 text-white" onClick={handleClick}/>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isSidebarOpen && <MobileSidebar onClose={handleClose}/>}
      </AnimatePresence>
    </>
  )
}

