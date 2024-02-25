"use client"
import { useEffect, useState } from "react"
import { usePathname, useParams } from "next/navigation"
/** Components */
import SubSideNav from "@/components/layouts/nav/SubSideNav"
/** Utitilies */
import { getNumberOfMarkdownFiles } from "@/utils/markdown"

function useMarkdownFileCount(path: string): [number | null, boolean] {
  const [fileCount, setFileCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchNumberOfMarkdownFiles() {
      try {
        const count = await getNumberOfMarkdownFiles(path)
        setFileCount(count)
      } catch (error) {
        console.error("Error fetching number of Markdown files:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchNumberOfMarkdownFiles()
  }, [path])

  return [fileCount, isLoading]
}

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fullPathname = usePathname()
  const trimmedPathname = fullPathname.split("/").slice(0, 2).join("")
  const [fileCount, isLoading] = useMarkdownFileCount(trimmedPathname)
  const hasMatchingSubmenus = fileCount !== null && fileCount > 0

  return (
    <div className="h-screen w-full">
      {isLoading ? (
        <SubSideNav />
      ) : (
        <div className=" h-full">
          {hasMatchingSubmenus && <SubSideNav />}
          <div className={`${hasMatchingSubmenus ? "ml-[36rem]" : "ml-72"}`}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
