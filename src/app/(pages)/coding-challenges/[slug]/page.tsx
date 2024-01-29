import React from "react";
import Link from "next/link";

/** Functions Helper */
import { readCodingChallengeMetadataFromMdFile } from "@/libs/helper/post";
/** Markdow to JS */
import Markdown from "markdown-to-jsx";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";

export default function CodingChallengeProjectPage(props: any) {
  const slug = props.params.slug;
  const folder = "src/assets/contents/coding-challenges/";
  const file = `${folder}${slug}.md`;

  const metadata = readCodingChallengeMetadataFromMdFile(file);

  const { ...data } = metadata;

  return (
    <>
      <div className="flex h-full w-full flex-col gap-4">
        <TranslateYOpacity>
          <div className="flex flex-grow items-center justify-center py-4">
            <article className="prose-sm prose-invert max-w-3xl md:prose-base lg:prose-lg prose-p:text-sm prose-a:text-yellow-500 prose-a:underline prose-blockquote:text-indigo-500 prose-code:bg-zinc-800 prose-code:text-yellow-500 prose-pre:rounded-none prose-pre:bg-zinc-800 prose-li:list-disc">
              {data.content && (
                <Markdown
                  options={{
                    overrides: {
                      a: {
                        component: ({ children, ...props }) => (
                          <a {...props} target="_blank" rel="noopener noreferrer">
                            {children}
                          </a>
                        )
                      }
                    }
                  }}
                >
                  {data.content}
                </Markdown>
              )}
            </article>
          </div>
        </TranslateYOpacity>
        <div className="fixed bottom-4 right-4">
          <Link
            href={"/coding-challenges"}
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm uppercase tracking-tighter text-white shadow-md hover:bg-indigo-700"
          >
            More Challenges
          </Link>
        </div>
      </div>
    </>
  );
}
