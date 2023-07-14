"use client";
import React from "react";

/** Heroicons */
import { Bars3Icon } from "@heroicons/react/24/outline";

/** Components */
import Logo from "@/components/common/Logos/Logo";
import ExploreDropdown from "@/components/common/Dropdowns/ExploreDropdown";
import ContactButton from "@/components/common/Buttons/ContactButton";

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0 bg-black border-b border-slate-600">
        <div className="p-4 max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-row gap-4 items-baseline">
            <Logo />
            <div className="hidden lg:block">
              <ExploreDropdown />
            </div>
          </div>
          <div className="hidden lg:block">
            <ContactButton />
          </div>
          <div className="block lg:hidden">
            <Bars3Icon className="w-5 h-5 text-white"/>
          </div>
        </div>
      </nav>
    </>
  )
}

