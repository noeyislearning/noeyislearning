// MenuButton.tsx
import Link from "next/link"
import { ComponentType, ReactNode } from "react"

/** Lucide React Icon */
import { SlashSquare, Blocks, LibraryBig, Bookmark } from "lucide-react"
const iconComponents: { [key: string]: ComponentType<{ className?: string }> } =
  {
    slashsquare: SlashSquare,
    blocks: Blocks,
    librarybig: LibraryBig,
    bookmark: Bookmark,
  }
/** Components */
import RenderIcon from "@/components/common/icons/RenderIcon"
/** Interfaces */
import { MenuButtonProps } from "@/types/Menu"

const MenuButton: React.FC<MenuButtonProps> = ({ menu, pathname }) => {
  const IconComponent = iconComponents[menu.icon]

  return (
    <Link
      href={menu.path}
      className={`group flex w-full items-center justify-between rounded-lg px-2 py-2 text-gray-900 ${
        pathname === menu.path
          ? "bg-indigo-900 text-white"
          : "hover:bg-indigo-100"
      }`}
    >
      <div className="flex flex-row items-center gap-2">
        {menu.icon && (
          <RenderIcon iconName={menu.icon} IconComponent={IconComponent} />
        )}
        <span className="text-sm">{menu.name}</span>
      </div>
      <div
        className={`rounded-md border px-2 py-1 text-xs ${
          pathname === menu.path
            ? "border-indigo-600 bg-indigo-700 text-indigo-100"
            : "border-indigo-200 bg-indigo-50 text-indigo-600"
        }`}
      >
        8
      </div>
    </Link>
  )
}

export default MenuButton
