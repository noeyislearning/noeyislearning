import React from "react";
import Image from "next/image";
import Link from "next/link";
/** Functions Helper */
import { readMetadataFromMdFile } from "@/libs/helper/post";
/** Markdow to JS */
import Markdown from "markdown-to-jsx";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import TranslateOpacity from "@/components/common/Transitions/TranslateOpacity";

export default function AssessmentProjectPage(props: any) {
  const slug = props.params.slug;
  const folder = "src/assets/contents/assessments/";
  const file = `${folder}${slug}.md`;

  const metadata = readMetadataFromMdFile(file);

  const { ...data } = metadata;

  return (
    <>
      <div className="flex h-full w-full flex-col gap-4">
        <TranslateOpacity>
          <div className="h-72 w-full overflow-hidden">
            <Image
              src={data.thumbnail_URL}
              alt={data.name}
              quality={100}
              width={1000}
              height={1000}
              fetchPriority="high"
              className="h-72 w-full overflow-hidden object-cover brightness-50"
              priority
              unoptimized
            />
          </div>
        </TranslateOpacity>
        <TranslateYOpacity>
          <div className="flex flex-grow items-center justify-center py-4">
            <article className="prose prose-invert max-w-3xl">
              {data.content && <Markdown>{data.content}</Markdown>}
            </article>
          </div>
        </TranslateYOpacity>
        <div className="fixed bottom-4 right-4">
          <Link
            href={"/assessments"}
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm uppercase tracking-tighter text-white shadow-md hover:bg-indigo-700"
          >
            More assessments
          </Link>
        </div>
      </div>
    </>
  );
}
