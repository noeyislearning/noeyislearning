import React from "react";
import Link from "next/link";

import Logo from "@/components/common/Logos/Logo";

export default function Navbar() {
  return (
    <nav className="pt-16 mx-auto w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-col gap-6 lg:flex-row w-full max-w-5xl justify-center md:justify-center lg:justify-between items-center">
        <Logo />
        <div className="flex flex-row gap-1 md:gap-4 lg:gap-4 items-center md:flex lg:flex ">
          <Link href={"https://www.linkedin.com/in/noeyislearning/"} target={"_blank"} className="py-1 px-6 border border-dashed rounded-full hover:text-black hover:border-yellow-500 hover:bg-yellow-500">
            <span>LinkedIn</span>
          </Link>
          <Link href={"https://github.com/noeyislearning"} target={"_blank"} className="py-1 px-6 border border-dashed rounded-full hover:text-black hover:border-yellow-500 hover:bg-yellow-500">
            <span>GitHub</span>
          </Link>
          <Link href={"https://noeylearning.gumroad.com"} target={"_blank"} className="py-1 px-6 border border-dashed border-yellow-400 bg-yellow-500 text-black rounded-full">
            <span>Shop</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
