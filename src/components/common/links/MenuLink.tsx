"use client"
import React, { ComponentType, useEffect, useState } from "react"
import Link from "next/link"

/** Lucide React Icon */
import {
  Swords,
  SlashSquare,
  Blocks,
  LibraryBig,
  Bookmark,
  Loader,
} from "lucide-react"
const iconComponents: { [key: string]: ComponentType<{ className?: string }> } =
  {
    slashsquare: SlashSquare,
    swords: Swords,
    blocks: Blocks,
    librarybig: LibraryBig,
    bookmark: Bookmark,
  }
/** Components */
import RenderIcon from "@/components/common/icons/RenderIcon"
/** Interfaces */
import { MenuButtonProps } from "@/types/Menu"

const MenuButton: React.FC<MenuButtonProps> = ({ menu, pathname }) => {
  const [numberOfMarkdownFiles, setNumberOfMarkdownFiles] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const IconComponent = iconComponents[menu.icon]
  const sanitizedPathname = menu.path.startsWith("/")
    ? menu.path.slice(1)
    : menu.path

  useEffect(() => {
    const fetchNumberOfMarkdownFiles = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`api/markdowns?dir=${sanitizedPathname}`)
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`)
        }
        const data = await response.json()
        setNumberOfMarkdownFiles(data.number)
      } catch (error) {
        console.error("Error fetching number of Markdown files:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNumberOfMarkdownFiles()
  }, [menu.path, sanitizedPathname])

  return (
    <Link
      href={menu.path}
      className={`group flex w-full items-center justify-between rounded-lg px-2 py-2 text-gray-900 transition-all duration-500 ease-in-out ${
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
      {numberOfMarkdownFiles ? (
        <div
          className={`rounded-md border px-2 py-0.5 text-xs transition-all duration-500 ease-in-out ${
            pathname === menu.path
              ? "border-indigo-600 bg-indigo-700 text-indigo-100"
              : "border-indigo-200 bg-indigo-50 text-indigo-600"
          }`}
        >
          {isLoading ? <Loader className="h-4 w-4" /> : numberOfMarkdownFiles}
        </div>
      ) : (
        <div
          className={`rounded-md border px-2 py-0.5 text-xs transition-all duration-500 ease-in-out ${
            pathname === menu.path
              ? "border-transparent bg-transparent text-transparent"
              : "border-transparent bg-transparent text-transparent"
          }`}
        >
          0
        </div>
      )}
    </Link>
  )
}

export default MenuButton
