"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

/** Redux */
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
/** Utitilies */
import { getMetadataOfMarkdownFiles } from "@/utils/markdown"

export default function SubSideNav() {
  const fullPathname = usePathname()
  const trimmedPathname = fullPathname.split("/").slice(0, 2).join("/")
  const [metadata, setMetadata] = useState<any[]>([])
  const { menus } = useSelector((state: RootState) => state.menu)

  useEffect(() => {
    async function fetchMetadata() {
      const metadata = await getMetadataOfMarkdownFiles(trimmedPathname)
      setMetadata(metadata)
    }
    fetchMetadata()
  }, [trimmedPathname])

  const menuName = menus.find((menu) => menu.path === trimmedPathname)

  return (
    <div
      className="absolute left-0 top-0 z-20 ml-72 h-screen w-96 translate-x-0 overflow-y-auto border-r bg-zinc-50 transition-transform"
      aria-label="SubSidebar"
    >
      <div className="flex h-full flex-col gap-4 p-4">
        <div className="flex flex-row items-center justify-between">
          {menuName && (
            <span className="text-base font-semibold">{menuName.name}</span>
          )}
        </div>
        {metadata.map((content, index) => (
          <Link
            href={`${trimmedPathname}/${content.slug}`}
            key={index}
            className={`group rounded-md border px-2 py-1 font-medium transition-all duration-500 ease-in-out
            ${
              fullPathname === `${trimmedPathname}/${content.slug}`
                ? "border-indigo-600 bg-indigo-700 text-indigo-100"
                : "border-indigo-200 bg-indigo-50 text-indigo-600 hover:border-indigo-600 hover:bg-indigo-700 hover:text-indigo-100"
            }
            `}
          >
            <div className="flex flex-col items-start">
              <p className="line-clamp-1 text-sm">{content.name}</p>
              {/* Projects */}
              {content.dir === "projects" && (
                <p className="text-xs uppercase text-gray-400">
                  {content.end_year}
                </p>
              )}
              {content.dir === "notebooks" && (
                <p className="text-xs uppercase text-gray-400">
                  {content.category}
                </p>
              )}
              {/* Coding Challenges */}
              {content.dir === "coding-challenges" && (
                <div
                  className={`flex w-full flex-row justify-between text-xs uppercase transition-all duration-500 ease-in-out ${
                    fullPathname === `${trimmedPathname}/${content.slug}`
                      ? "text-indigo-200"
                      : "text-zinc-400 group-hover:text-indigo-200"
                  }`}
                >
                  <p>{content.languages_used.join(", ")}</p>
                  <p>{content.platform}</p>
                </div>
              )}
            </div>
          </Link>
        ))}
        <div></div>
      </div>
    </div>
  )
}
