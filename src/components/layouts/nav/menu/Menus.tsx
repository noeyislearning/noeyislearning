"use client"
import { usePathname } from "next/navigation"
/** Components */
import MenuButton from "@/components/common/buttons/MenuButton"
/** Redux */
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function Menu() {
  const fullPathname = usePathname()
  const trimmedPathname = fullPathname.split("/").slice(0, 2).join("/")
  const { menus } = useSelector((state: RootState) => state.menu)

  return (
    <ul className="space-y-1 font-medium">
      {menus.map((menu, index: number) => (
        <li key={index}>
          <MenuButton menu={menu} pathname={trimmedPathname} />
        </li>
      ))}
    </ul>
  )
}
