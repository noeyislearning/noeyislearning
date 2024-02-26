"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

/** Components */
import BlogArticle from "@/components/common/articles/BlogArticle"
/** Utitilies */
import { getMarkdownContent } from "@/utils/markdown"

export default function CodingChallengePage() {
  const fullPathname = usePathname()
  const firstPath = fullPathname.split("/").slice(0, 2).join("")
  const secondPath = fullPathname.split("/").slice(2, 3).join("")
  const [content, setContent] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      const markdownContent = await getMarkdownContent(firstPath, secondPath)
      setContent(markdownContent)
    }

    fetchData()
  }, [firstPath, secondPath])

  return (
    <div className="bg-dots h-screen overflow-y-auto">
      <div className=" relative p-4">
        <div className="text-based mx-auto flex max-w-2xl flex-col items-center space-y-8 py-16">
          <BlogArticle content={content} />
        </div>
      </div>
    </div>
  )
}
