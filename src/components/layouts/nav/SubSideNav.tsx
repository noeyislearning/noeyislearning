"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

/** Components */
import ProjectLink from "@/components/common/links/sublinks/ProjectLink"
import CodingChallengeLink from "@/components/common/links/sublinks/CodingChallengeLink"
/** Redux */
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { setMetadata } from "@/redux/markdown-metadata/reducers"

export default function SubSideNav() {
  const dispatch = useDispatch()
  const fullPathname = usePathname()
  const trimmedPathname = fullPathname.split("/").slice(0, 2).join("/")
  const metadata: { [key: string]: any } = useSelector(
    (state: RootState) => state.metadata.metadata
  )
  const { menus } = useSelector((state: RootState) => state.menu)

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(
          `/api/markdowns/metadata?dir=${trimmedPathname}`
        )
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`)
        }
        const data = await response.json()
        dispatch(setMetadata(data)) // Dispatch action to update metadata
      } catch (error) {
        console.error("Error fetching metadata:", error)
      }
    }
    fetchMetadata()
  }, [dispatch, trimmedPathname])

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
            <span className="text-base font-semibold">{menuName.name}</span>
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
        {/* Render CodingChallengeLink components */}
        {trimmedPathname.includes("coding-challenges") &&
          codingChallenges.map((challenge, index) => (
            <CodingChallengeLink
              key={index}
              metadata={challenge}
              trimmedPathname={trimmedPathname}
              fullPathname={fullPathname}
            />
          ))}
        {/* Render NotebookLink components */}
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
        {/* Render BookmarkLink components */}
        {/* {trimmedPathname.includes("bookmarks") &&
          Object.values(metadata)
            .filter((item) => item.dir === "bookmarks")
            .map((bookmark, index) => (
              <BookmarkLink
                key={index}
                metadata={bookmark}
                trimmedPathname={trimmedPathname}
                fullPathname={fullPathname}
              />
            ))} */}
      </div>
    </div>
  )
}
