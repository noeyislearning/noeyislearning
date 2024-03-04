import Markdown from "markdown-to-jsx"

import Pre from "@/components/common/articles/Pre"
import TableOfContents from "@/components/common/articles/TableOfContents"

export default function BlogArticle({ content }: { content: string | null }) {
  return (
    <div>
      <article className="prose-h1:text-3x  prose-sm prose-invert w-full whitespace-pre-wrap font-light md:prose-base lg:prose-lg prose-h1:font-gelica prose-h1:tracking-tight prose-h2:font-gelica prose-h2:text-2xl prose-h2:tracking-tight prose-h3:text-xl prose-h3:tracking-tight prose-h4:text-lg prose-h5:text-base prose-h6:text-sm prose-p:text-sm prose-p:tracking-tight prose-a:text-indigo-700 prose-a:underline prose-blockquote:text-indigo-700 prose-code:rounded-md prose-code:bg-zinc-100 prose-code:px-2 prose-code:font-jetbrains-mono prose-code:text-xs prose-code:font-medium prose-code:text-pink-400 prose-pre:w-full prose-pre:whitespace-pre-wrap prose-pre:rounded-lg prose-pre:border prose-pre:bg-transparent prose-pre:bg-zinc-50 prose-pre:text-sm prose-li:list-disc prose-li:text-base prose-img:rounded-lg prose-img:border prose-img:border-zinc-200 md:max-w-xl prose-p:md:text-base prose-code:md:text-base lg:max-w-3xl prose-p:lg:text-base prose-code:lg:text-sm">
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
                pre: {
                  component: Pre,
                },
              },
            }}
          >
            {content}
          </Markdown>
        )}
      </article>
    </div>
  )
}
