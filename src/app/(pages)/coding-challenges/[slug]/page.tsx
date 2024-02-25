"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

/** Markdown */
import Markdown from "markdown-to-jsx"
/** Utitilies */
import { getMarkdownContent } from "@/utils/actions/markdownActions"

export default function CodingChallengePage() {
  const fullPathname = usePathname()
  const firstPath = fullPathname.split("/").slice(0, 2).join("")
  const [content, setContent] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      const markdownContent = await getMarkdownContent(firstPath)
      setContent(markdownContent)
    }

    fetchData()
  }, [firstPath])

  return (
    <div className="bg-dots h-screen overflow-y-auto">
      <div className=" relative p-4">
        <div className="text-based mx-auto flex max-w-2xl flex-col items-center space-y-8 py-16">
          <article className="prose-sm prose-invert md:prose-base lg:prose-lg prose-h1:tracking-tighter prose-h2:tracking-tighter prose-h3:tracking-tighter prose-p:text-sm prose-p:tracking-tighter prose-a:text-yellow-500 prose-a:underline prose-blockquote:text-indigo-500 prose-code:rounded-sm prose-code:text-sm prose-code:text-zinc-400 prose-pre:w-full prose-pre:whitespace-pre-wrap prose-pre:rounded-none prose-pre:bg-transparent prose-li:list-disc prose-p:md:text-base prose-code:md:text-base prose-p:lg:text-base prose-code:lg:text-lg w-full whitespace-pre-wrap font-light md:max-w-xl lg:max-w-3xl ">
            {content && (
              <Markdown
                options={{
                  overrides: {
                    a: {
                      component: ({ children, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      ),
                    },
                    // pre: {
                    //   component: CodingSyntaxHighlighterCard,
                    //   props: {
                    //     style: {
                    //       whiteSpace: "pre-wrap",
                    //     },
                    //   },
                    // },
                  },
                }}
              >
                {content}
              </Markdown>
            )}
          </article>
        </div>
      </div>
    </div>
  )
}
