"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

import { Loader } from "lucide-react"
import { BookmarkLinkProps } from "@/types/Link"

export default function BookmarkLinkPage({
  metadata,
  trimmedPathname,
  fullPathname,
}: BookmarkLinkProps) {
  const [numberOfMarkdownFiles, setNumberOfMarkdownFiles] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchNumberOfMarkdownFiles = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `/api/markdowns?dir=${trimmedPathname}/${metadata.name}`
        )
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
  }, [trimmedPathname, metadata.name])

  const formattedMetadata = {
    name: metadata.name.replace(/-/g, " ").replace(/and/g, "&"),
  }

  return (
    <Link href={`${trimmedPathname}/${metadata.name}`}>
      <div
        className={`group rounded-md px-2 py-1 transition-all duration-500 ease-in-out
          ${
            fullPathname === `${trimmedPathname}/${metadata.name}`
              ? "bg-indigo-700 text-indigo-100 transition-all duration-500 ease-in-out"
              : "hover:bg-indigo-100"
          }
        `}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <p className="line-clamp-1 w-full text-sm capitalize">
            {formattedMetadata.name}
          </p>
          {numberOfMarkdownFiles ? (
            <div
              className={`rounded-md border px-2 py-0.5 text-xs transition-all duration-500 ease-in-out
                ${
                  fullPathname === `${trimmedPathname}/${metadata.name}`
                    ? "border-indigo-600 bg-transparent text-indigo-100"
                    : "border-indigo-200 bg-indigo-50 text-indigo-600"
                }
              `}
            >
              {isLoading ? (
                <Loader className="h-4 w-4" />
              ) : (
                numberOfMarkdownFiles
              )}
            </div>
          ) : (
            <div
              className={`rounded-md border px-2 py-0.5 text-xs transition-all duration-500 ease-in-out
                ${
                  fullPathname === `${trimmedPathname}/${metadata.name}`
                    ? "border-transparent bg-transparent text-transparent"
                    : "border-transparent bg-transparent text-transparent"
                }
              `}
            >
              0
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

// Function to format directory name
