"use client"
import { useEffect, useState } from "react"
import { usePathname, useParams } from "next/navigation"
/** Components */
import SubSideNav from "@/components/layouts/nav/SubSideNav"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [numberOfMarkdownFiles, setNumberOfMarkdownFiles] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const fullPathname = usePathname()
  const trimmedPathname = fullPathname.split("/").slice(0, 2).join("/")

  const sanitizedPathname = trimmedPathname.startsWith("/")
    ? trimmedPathname.slice(1)
    : trimmedPathname

  useEffect(() => {
    const fetchNumberOfMarkdownFiles = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/markdowns?dir=${sanitizedPathname}`)
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
  }, [sanitizedPathname, fullPathname])

  const hasMatchingSubmenus = numberOfMarkdownFiles > 0

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
