import React from 'react'

/** --- Components --- */
import Menu from "@/components/layouts/Navbar/Menu";
import Logo from "@/components/common/Logo/Logo";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-black">
        <div className="px-6 md:px-6 lg:px-4 py-4 max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
          <Logo />
          <div className="hidden w-full md:block md:w-auto">
            <Menu />
          </div>
        </div>
      </nav>
    </>
  )
}