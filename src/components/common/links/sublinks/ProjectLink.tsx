import Link from "next/link"
import { ProjectLinkProps } from "@/types/Link"

export default function ProjectLink({
  metadata,
  trimmedPathname,
  fullPathname,
}: ProjectLinkProps) {
  return (
    <Link href={`${trimmedPathname}/${metadata.slug}`}>
      <div
        className={`group rounded-md border px-2 py-1 font-medium transition-all duration-500 ease-in-out
          ${
            fullPathname === `${trimmedPathname}/${metadata.slug}`
              ? "border-indigo-600 bg-indigo-700 text-indigo-100"
              : "border-indigo-200 bg-indigo-50 text-indigo-600 hover:border-indigo-600 hover:bg-indigo-700 hover:text-indigo-100"
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
              <p>[ {metadata.project_type} ]</p>
              <p>[ {metadata.project_category} ] </p>
            </div>
            <p>[ {metadata.end_year} ]</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
