"use client";
import React from "react";

/** Components */
import Logo from "@/components/common/Logos/Logo";
import ExploreDropdown from "@/components/common/Dropdowns/ExploreDropdown";
import ContactButton from "@/components/common/Buttons/ContactButton";

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0 bg-black border-b border-slate-600">
        <div className="p-4 max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto">
          <div className="flex flex-row gap-4 items-baseline">
            <Logo />
            <div className="flex">
              <ExploreDropdown />
            </div>
          </div>
          <div className="flex">
            <ContactButton />
          </div>
        </div>
      </nav>
    </>
  )
}

