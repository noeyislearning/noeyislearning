import Link from "next/link"
import React from 'react'

/** --- Interfaces/Props --- */
import { NavMenuProps } from "@/assets/ts/interfaces/menu"

/** --- Models --- */
import menuData  from "@/assets/models/navMenu.json"

export default function Menu({}: NavMenuProps) {

  return (
    <>
      <ul className="flex flex-col text-sm font-base mt-4 lg:mt-0 md:flex-row lg:space-x-8">
        {menuData.menu.map((menuItem) => (
          <li key={menuItem.name}>
            {menuItem.isAvailable ? (
              <Link href={menuItem.link}>
                <div className="block py-2 pl-3 pr-4 lg:p-0 text-black hover:underline underline-offset-4 cursor-pointer">
                  /{menuItem.name}
                </div>
              </Link>
            ) : (
              <div className="block py-2 pl-3 pr-4 lg:p-0 text-black cursor-not-allowed">
                /{menuItem.name}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

