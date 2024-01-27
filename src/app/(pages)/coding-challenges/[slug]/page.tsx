import React from "react";
import Image from "next/image";
import Link from "next/link";
/** Functions Helper */
import { readCodingChallengeMetadataFromMdFile } from "@/libs/helper/post";
/** Markdow to JS */
import Markdown from "markdown-to-jsx";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import TranslateOpacity from "@/components/common/Transitions/TranslateOpacity";

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
            <article className="prose prose-invert max-w-3xl">
              {data.content && <Markdown>{data.content}</Markdown>}
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