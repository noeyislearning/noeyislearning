import Link from "next/link"
import React from 'react'

/** --- Interfaces/Props --- */
import { MenuProps } from "@/assets/ts/interfaces/menu"

/** --- Models --- */
import menuData  from "@/assets/models/menu.json"

export default function Menu({}: MenuProps) {

  const menuItems = menuData.menu;

  return (
    <>
      <ul className="flex flex-col text-sm font-base mt-4 lg:mt-0 md:flex-row lg:space-x-8">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            {menuItem.isAvailable ? (
              <Link href={menuItem.isEmail ? `mailto:${menuItem.link}` : menuItem.link}>
                <div className="block py-2 pl-3 pr-4 lg:p-0 text-black hover:underline underline-offset-4" style={{ cursor: 'pointer' }}>
                  {menuItem.isEmail ? (
                      <>/{menuItem.name}</>
                  ) : (
                      <>/{menuItem.name}</>
                  )}
                </div>
              </Link>
            ) : (
              <div className="block py-2 pl-3 pr-4 lg:p-0 text-black" style={{ cursor: 'not-allowed' }}>
                {menuItem.isEmail ? (
                    <>/{menuItem.name}</>
                ) : (
                    <>/{menuItem.name}</>
                )}
              </div>
            )}
          </li>
        ))}
        <li>
          <Link href={"mailto:hello@noeyislearning.dev"}>
            <div className="block py-2 pl-3 pr-4 lg:p-0 text-black hover:underline underline-offset-4"></div>
          </Link>
        </li>
      </ul>
    </>
  )
}

