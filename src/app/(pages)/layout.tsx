"use client"
import { useEffect, useState } from "react"

import { usePathname } from "next/navigation"

/** Components */
import SubSideNav from "@/components/layouts/nav/SubSideNav"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [numberOfMarkdownFiles, setNumberOfMarkdownFiles] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isSubSideNavLoading, setIsSubSideNavLoading] = useState<boolean>(false)

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

  const hasSubmenus = numberOfMarkdownFiles > 0

  const shouldRenderSubSideNav =
    !isSubSideNavLoading && hasSubmenus && numberOfMarkdownFiles !== null

  return (
    <div className="h-screen w-full">
      {shouldRenderSubSideNav && <SubSideNav />}
      <div className={`${shouldRenderSubSideNav ? "ml-[36rem]" : "ml-72"}`}>
        {children}
      </div>
    </div>
  )
}
