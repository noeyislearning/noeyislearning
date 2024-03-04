import Link from "next/link"
import { CodingChallengeLinkProps } from "@/types/Link"

import StackIcon from "tech-stack-icons"

export default function CodingChallengePage({
  metadata,
  trimmedPathname,
  fullPathname,
}: CodingChallengeLinkProps) {
  return (
    <Link href={`${trimmedPathname}/${metadata.slug}`}>
      <div
        className={`font-base group rounded-md px-2 py-1 transition-all duration-500 ease-in-out
          ${
            fullPathname === `${trimmedPathname}/${metadata.slug}`
              ? "bg-indigo-700 text-indigo-100"
              : "text-indigo-600 hover:border-indigo-600 hover:bg-indigo-700 hover:text-indigo-100"
          }
        `}
      >
        <div className="flex flex-col items-start">
          <div className="flex w-full flex-row items-center justify-between gap-1">
            <p className="line-clamp-1 text-base">{metadata.name}</p>
            <span className="text-xs text-zinc-300">v{metadata.version}</span>
          </div>
          <div
            className={`flex w-full flex-row justify-between text-sm lowercase transition-all duration-500 ease-in-out ${
              fullPathname === `${trimmedPathname}/${metadata.slug}`
                ? "text-indigo-200"
                : "text-zinc-400 group-hover:text-indigo-200"
            }`}
          >
            <div className="flex w-full items-center justify-between gap-1">
              <div className="flex flex-row items-center gap-1">
                <p>{metadata.platform}</p>
                <span
                  className={`rounded-full transition-all duration-500 ease-in-out ${
                    fullPathname === `${trimmedPathname}/${metadata.slug}`
                      ? "bg-indigo-200"
                      : "bg-zinc-400 group-hover:bg-indigo-200"
                  } p-0.5`}
                ></span>
                <p>{metadata.difficulty}</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                {metadata.languages_used.map(
                  (language: string, index: number) => (
                    <StackIcon
                      key={index}
                      name={language.toLowerCase()}
                      className="h-3 w-3"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
