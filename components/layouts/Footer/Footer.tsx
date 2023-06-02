import React from 'react'
import Link from "next/link";

/** --- Interfaces/Props --- */
import { FooterMenuItemProps } from "@/assets/ts/interfaces/menu"

/** --- Models --- */
import menuData from "@/assets/models/footerMenu.json"

export default function Footer() {
  return (
    <>
      <footer className="px-6 md:px-12 lg:px-36 pt-16 pb-36">
        <div className="flex flex-col md:flex-row lg:flex-row gap-12 md:gap-0 lg:gap-0 items-center justify-center md:justify-between lg:justify-between">
          <div className="flex flex-row gap-5 text-sm">
            {menuData.menu.map((menuItem: FooterMenuItemProps) => (
              <Link key={menuItem.name} href={menuItem.link} target={"_blank"}>
                <div className="text-black hover:text-blue-500 underline underline-offset-4">{menuItem.name}</div>
              </Link>
            ))}
          </div>
          <div className="font-base text-sm text-gray-400">&copy; 2023 Noey Ignacio. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  )
}
