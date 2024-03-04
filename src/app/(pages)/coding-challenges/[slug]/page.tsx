"use client"
import React, { useEffect, useState } from "react"
import { usePathname, useParams } from "next/navigation"

import BlogArticle from "@/components/common/articles/BlogArticle"
// import TableOfContents from "@/components/common/articles/TableOfContents"

export default function CodingChallengePage() {
  const { slug } = useParams()
  const fullPathname = usePathname()
  const firstPath = fullPathname.split("/").slice(0, 2).join("")
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          `/api/markdowns/content?dir=${firstPath}&slug=${slug}`
        )
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`)
        }
        const data = await response.text()
        setContent(data)
      } catch (error) {
        console.error("Error fetching content:", error)
      }
    }
    fetchContent()
  }, [firstPath, slug])

  return (
    <div className="bg-dots h-screen overflow-y-auto">
      <div className=" relative p-4">
        <div className="text-based mx-auto flex max-w-2xl flex-col items-center space-y-8 py-16">
          <BlogArticle content={content} />
        </div>
      </div>
      {/* <div className="fixed right-0 top-0 z-20 h-screen w-72 bg-transparent pt-40">
        <TableOfContents content={content} />
      </div> */}
    </div>
  )
}
