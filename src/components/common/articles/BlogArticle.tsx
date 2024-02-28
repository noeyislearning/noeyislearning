import Markdown from "markdown-to-jsx"

export default function BlogArticle({ content }: { content: string | null }) {
  return (
    <article className="prose-sm prose-invert w-full whitespace-pre-wrap font-light md:prose-base lg:prose-lg prose-h1:text-3xl prose-h1:tracking-tighter prose-h2:text-2xl prose-h2:tracking-tighter prose-h3:text-xl prose-h3:tracking-tighter prose-h4:text-lg prose-h5:text-base prose-h6:text-sm prose-p:text-sm prose-p:tracking-tighter prose-a:text-indigo-500 prose-a:underline prose-blockquote:text-indigo-500 prose-code:text-xs prose-code:text-red-400 prose-pre:w-full prose-pre:whitespace-pre-wrap prose-pre:rounded-none prose-pre:bg-transparent prose-pre:text-sm prose-li:list-disc prose-li:text-base prose-img:rounded-lg prose-img:shadow-xl prose-img:shadow-indigo-100 md:max-w-xl prose-p:md:text-base prose-code:md:text-base lg:max-w-3xl prose-p:lg:text-base prose-code:lg:text-sm">
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
  )
}
