import { useEffect, useState } from "react"
import Link from "next/link"
import { BookmarkLinkProps } from "@/types/Link"

export default function BookmarkLinkPage({
  metadata,
  trimmedPathname,
  fullPathname,
}: BookmarkLinkProps) {
  return (
    <Link href={`${trimmedPathname}/${metadata.slug}`}>
      <div
        className={`group rounded-md border px-2 py-1 font-medium transition-all duration-500 ease-in-out
          ${
            fullPathname === `${trimmedPathname}/${metadata.slug}`
              ? "border-indigo-600 bg-indigo-700 text-indigo-100"
              : "border-indigo-200 bg-zinc-100 text-indigo-600 hover:border-indigo-600 hover:bg-indigo-700 hover:text-indigo-100"
          }
        `}
      >
        <div className="flex flex-col items-start">
          <p className="line-clamp-1 text-sm">{metadata.name}</p>
          <div
            className={`flex w-full flex-row justify-between text-xs uppercase transition-all duration-500 ease-in-out ${
              fullPathname === `${trimmedPathname}/${metadata.slug}`
                ? "text-indigo-200"
                : "text-zinc-400 group-hover:text-indigo-200"
            }`}
          >
            <div className="flex items-center gap-1">
              {metadata.languages_used ? (
                <p>[ {metadata.languages_used.join(", ")} ]</p>
              ) : null}
              <p>[ {metadata.difficulty} ]</p>
            </div>
            <p>[ {metadata.platform} ] </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
