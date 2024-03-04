"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import SubSideNav from "@/components/layouts/nav/SubSideNav"

export default function PagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [numberOfMarkdownFiles, setNumberOfMarkdownFiles] = useState<number>(0)
  const [hasDirectories, setHasDirectories] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isSubSideNavLoading, setIsSubSideNavLoading] = useState<boolean>(false)

  const fullPathname = usePathname()
  const trimmedPathname = fullPathname.split("/").slice(0, 2).join("/")

  const sanitizedPathname = trimmedPathname.startsWith("/")
    ? trimmedPathname.slice(1)
    : trimmedPathname

  useEffect(() => {
    const fetchMetadata = async () => {
      setIsLoading(true)
      try {
        let responseData
        if (trimmedPathname === "/bookmarks") {
          const response = await fetch(`/api/markdowns/bookmarks`)
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`)
          }
          responseData = await response.json()
          setHasDirectories(responseData.directories > 0)
        } else {
          const response = await fetch(
            `/api/markdowns?dir=${sanitizedPathname}`
          )
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`)
          }
          responseData = await response.json()
          setNumberOfMarkdownFiles(responseData.number)
        }
      } catch (error) {
        console.error("Error fetching metadata:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMetadata()
  }, [trimmedPathname, sanitizedPathname])

  const shouldRenderSubSideNav =
    !isSubSideNavLoading && (numberOfMarkdownFiles > 0 || hasDirectories)

  return (
    <div className="h-screen w-full">
      {shouldRenderSubSideNav && <SubSideNav />}
      <div className={`${shouldRenderSubSideNav ? "ml-[36rem]" : "ml-72"}`}>
        {children}
      </div>
    </div>
  )
}
