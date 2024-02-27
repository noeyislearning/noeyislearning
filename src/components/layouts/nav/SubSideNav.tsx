"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

/** Redux */
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function SubSideNav() {
  const fullPathname = usePathname()
  const trimmedPathname = fullPathname.split("/").slice(0, 2).join("/")
  const [metadata, setMetadata] = useState<any>({})
  const { menus } = useSelector((state: RootState) => state.menu)

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(
          `api/markdowns/metadata?dir=${trimmedPathname}`
        )
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`)
        }
        const data = await response.json()
        setMetadata(data)
      } catch (error) {
        console.error("Error fetching metadata:", error)
      }
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
        {Object.keys(metadata).map((key, index) => (
          <Link
            href={`${trimmedPathname}/${metadata[key].slug}`}
            key={index}
            className={`group rounded-md border px-2 py-1 font-medium transition-all duration-500 ease-in-out
            ${
              fullPathname === `${trimmedPathname}/${metadata[key].slug}`
                ? "border-indigo-600 bg-indigo-700 text-indigo-100"
                : "border-indigo-200 bg-indigo-50 text-indigo-600 hover:border-indigo-600 hover:bg-indigo-700 hover:text-indigo-100"
            }
            `}
          >
            <div className="flex flex-col items-start">
              <p className="line-clamp-1 text-sm">{metadata[key].name}</p>
              {/* Projects */}
              {metadata[key].dir === "projects" && (
                <p className="text-xs uppercase text-gray-400">
                  {metadata[key].end_year}
                </p>
              )}
              {metadata[key].dir === "notebooks" && (
                <p className="text-xs uppercase text-gray-400">
                  {metadata[key].category}
                </p>
              )}
              {/* Coding Challenges */}
              {metadata[key].dir === "coding-challenges" && (
                <div
                  className={`flex w-full flex-row justify-between text-xs uppercase transition-all duration-500 ease-in-out ${
                    fullPathname === `${trimmedPathname}/${metadata[key].slug}`
                      ? "text-indigo-200"
                      : "text-zinc-400 group-hover:text-indigo-200"
                  }`}
                >
                  <p>{metadata[key].languages_used.join(", ")}</p>
                  <p>{metadata[key].platform}</p>
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
