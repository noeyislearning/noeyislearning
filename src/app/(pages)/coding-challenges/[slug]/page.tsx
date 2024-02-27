"use client"
import { useEffect, useState } from "react"
import { usePathname, useParams } from "next/navigation"

/** Components */
import BlogArticle from "@/components/common/articles/BlogArticle"

export default function CodingChallengePage() {
  const { slug } = useParams()
  const fullPathname = usePathname()
  const firstPath = fullPathname.split("/").slice(0, 2).join("")
  const [content, setContent] = useState<string | null>(null)

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
    </div>
  )
}
