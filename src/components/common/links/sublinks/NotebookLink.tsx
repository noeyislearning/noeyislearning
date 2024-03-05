import Link from "next/link"

import { NotebookLinkProps } from "@/types/Link"

export default function NotebookLink({
  metadata,
  trimmedPathname,
  fullPathname,
}: NotebookLinkProps) {
  return (
    <Link href={`${trimmedPathname}/${metadata.slug}`}>
      <div
        className={`group rounded-md px-2 py-1
          ${
            fullPathname === `${trimmedPathname}/${metadata.slug}`
              ? "bg-indigo-700 text-indigo-100 transition-all duration-500 ease-in-out"
              : "hover:bg-indigo-100"
          }
        `}
      >
        <div className="flex flex-col items-start">
          <p className="line-clamp-1 w-full text-sm">{metadata.name}</p>
          <div
            className={`flex w-full flex-row justify-between text-xs font-light ${
              fullPathname === `${trimmedPathname}/${metadata.slug}`
                ? "text-indigo-200 transition-all duration-500 ease-in-out"
                : "text-zinc-400 "
            }`}
          >
            <div className="flex items-center gap-1">
              <p>{metadata.description}</p>
            </div>
            <p>{metadata.end_year}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
