"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import ProjectLink from "@/components/common/links/sublinks/ProjectLink"
import CodingChallengeLink from "@/components/common/links/sublinks/CodingChallengeLink"
import BookmarkLink from "@/components/common/links/sublinks/BookmarkLink"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { setMetadata } from "@/redux/markdown-metadata/reducers"

export default function SubSideNav() {
  const dispatch = useDispatch()
  const fullPathname = usePathname()

  const [directories, setDirectories] = useState<string[]>([])

  const trimmedPathname = fullPathname.split("/").slice(0, 2).join("/")
  const metadata: { [key: string]: any } = useSelector(
    (state: RootState) => state.metadata.metadata
  )
  const sanitizedPathname = trimmedPathname.startsWith("/")
    ? trimmedPathname.slice(1)
    : trimmedPathname

  const { menus } = useSelector((state: RootState) => state.menu)

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        let responseData
        if (sanitizedPathname === "bookmarks") {
          const response = await fetch(`/api/markdowns/bookmarks`)
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`)
          }
          responseData = await response.json()
        } else {
          const response = await fetch(
            `/api/markdowns/metadata?dir=${sanitizedPathname}`
          )
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`)
          }
          responseData = await response.json()
        }
        dispatch(setMetadata(responseData))
      } catch (error) {
        console.error("Error fetching metadata:", error)
      }
    }

    const fetchDirectories = async () => {
      try {
        const response = await fetch(`/api/markdowns/bookmarks/directory-name`)
        if (!response.ok) {
          throw new Error(`Error fetching directories: ${response.status}`)
        }
        const data = await response.json()
        setDirectories(data.directories)
      } catch (error) {
        console.error("Error fetching directories:", error)
      }
    }

    fetchMetadata()
    fetchDirectories()
  }, [dispatch, sanitizedPathname])

  const menuName = menus.find((menu) => menu.path === trimmedPathname)

  const projects = Object.values(metadata)
    .filter((item) => item.dir === "projects")
    .sort((a, b) => b.end_year - a.end_year)

  const codingChallenges = Object.values(metadata).filter(
    (item) => item.dir === "coding-challenges"
  )

  return (
    <div
      className="absolute left-0 top-0 z-20 ml-72 h-screen w-96 translate-x-0 overflow-y-auto border-r bg-zinc-50 transition-transform"
      aria-label="SubSidebar"
    >
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex flex-row items-center justify-between">
          {menuName && (
            <span className="text-base font-medium">{menuName.name}</span>
          )}
        </div>
        {trimmedPathname.includes("projects") &&
          projects.map((project, index) => (
            <ProjectLink
              key={index}
              metadata={project}
              trimmedPathname={trimmedPathname}
              fullPathname={fullPathname}
            />
          ))}
        {trimmedPathname.includes("coding-challenges") &&
          codingChallenges.map((challenge, index) => (
            <CodingChallengeLink
              key={index}
              metadata={challenge}
              trimmedPathname={trimmedPathname}
              fullPathname={fullPathname}
            />
          ))}
        {/* {trimmedPathname.includes("notebooks") &&
          Object.values(metadata)
            .filter((item) => item.dir === "notebooks")
            .map((notebook, index) => (
              <NotebookLink
                key={index}
                metadata={notebook}
                trimmedPathname={trimmedPathname}
                fullPathname={fullPathname}
              />
            ))} */}
        {trimmedPathname.includes("bookmarks") &&
          directories.map((directory, index) => (
            <BookmarkLink
              key={index}
              metadata={{ name: directory }}
              trimmedPathname={trimmedPathname}
              fullPathname={fullPathname}
            />
          ))}
      </div>
    </div>
  )
}
