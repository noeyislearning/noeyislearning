/** Markdown to JSX */
import Markdown from "markdown-to-jsx";
/** Components */
import CodingSyntaxHighlighterCard from "@/components/common/Cards/CodingSyntaxHighlighterCard";
/** Interface */
import { BlogArticleProps } from "@/libs/interfaces/article";

export default function BlogArticle({ content }: BlogArticleProps) {
  return (
    <article className="prose-sm prose-invert w-full whitespace-pre-wrap font-light md:prose-base lg:prose-lg prose-h1:tracking-tighter prose-h2:tracking-tighter prose-h3:tracking-tighter prose-p:text-sm prose-p:tracking-tighter prose-a:text-yellow-500 prose-a:underline prose-blockquote:text-indigo-500 prose-code:rounded-sm prose-code:text-sm prose-code:text-zinc-400 prose-pre:w-full prose-pre:whitespace-pre-wrap prose-pre:rounded-none prose-pre:bg-transparent prose-li:list-disc md:max-w-xl prose-p:md:text-base prose-code:md:text-base lg:max-w-3xl prose-p:lg:text-base prose-code:lg:text-lg ">
      {content && (
        <Markdown
          options={{
            overrides: {
              a: {
                component: ({ children, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                )
              },
              pre: {
                component: CodingSyntaxHighlighterCard,
                props: {
                  style: {
                    whiteSpace: "pre-wrap"
                  }
                }
              }
            }
          }}
        >
          {content}
        </Markdown>
      )}
    </article>
  );
}
