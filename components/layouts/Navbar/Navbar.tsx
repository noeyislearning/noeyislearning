import React from 'react'

/** --- Components --- */
import Menu from "@/components/layouts/Navbar/Menu";
import Logo from "@/components/common/Logo/Logo";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-black">
        <div className="px-6 md:px-12 lg:px-36 py-4 flex flex-wrap items-center justify-between mx-auto">
          <Logo />
          <div className="hidden w-full md:block md:w-auto">
            <Menu menu={[]}/>
          </div>
        </div>
      </nav>
    </>
  )
}