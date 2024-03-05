import Link from "next/link"

import StackIcon from "tech-stack-icons"
import { CodingChallengeLinkProps } from "@/types/Link"

export default function CodingChallengePage({
  metadata,
  trimmedPathname,
  fullPathname,
}: CodingChallengeLinkProps) {
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
          <div className="flex w-full flex-row items-center justify-between gap-1">
            <p className="line-clamp-1 w-full text-sm">{metadata.name}</p>
            <span className="text-xs text-zinc-300">v{metadata.version}</span>
          </div>
          <div
            className={`flex w-full flex-row justify-between text-xs font-light capitalize transition-all duration-500 ease-in-out ${
              fullPathname === `${trimmedPathname}/${metadata.slug}`
                ? "text-indigo-200"
                : "text-zinc-400"
            }`}
          >
            <div className="flex w-full items-center justify-between gap-1">
              <div className="flex flex-row items-center gap-1">
                <p>{metadata.platform}</p>
                <span
                  className={`rounded-full transition-all duration-500 ease-in-out ${
                    fullPathname === `${trimmedPathname}/${metadata.slug}`
                      ? "bg-indigo-200"
                      : "bg-zinc-400"
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
