"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { Link2 } from "lucide-react"

export default function BookmarkPage() {
  const fullPathname = usePathname()
  const firstPath = fullPathname.split("/").slice(2, 3).join("")
  const [metadata, setMetadata] = useState([])

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(
          `/api/markdowns/bookmarks/metadata?dir=${firstPath}`
        )
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`)
        }
        const metadata = await response.json()
        setMetadata(metadata)
      } catch (error) {
        console.error("Error fetching metadata:", error)
      }
    }
    fetchMetadata()
  }, [firstPath])

  // Remove the protocol and www from the link, and also the trailing slash
  const sanitizeLink = (link: string | null) => {
    return link?.replace(/(^\w+:|^)\/\/(www\.)?/g, "").replace(/\/$/, "")
  }

  return (
    <div className="bg-dots h-screen overflow-y-auto">
      <div className="relative p-4">
        <div className="text-based mx-auto flex h-full max-w-2xl flex-col items-center py-16">
          <div className="grid w-full grid-cols-2 gap-2">
            {/* First Grid */}
            <div className="grid place-content-start gap-2">
              {metadata
                .slice(0, Math.ceil(metadata.length / 2))
                .map((item: any, index: number) => (
                  <Link
                    href={`${item.link}`}
                    target="_blank"
                    key={index}
                    className="group flex flex-col items-start gap-2 rounded-lg border bg-white p-4 transition-all duration-500 ease-in-out hover:bg-zinc-50"
                  >
                    <div className="overflow-hidden rounded-md bg-white">
                      <Image
                        src={item.img_URL}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-full rounded-md bg-black object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h2 className="text-base">{item.name}</h2>
                      <p className="flex flex-row items-center gap-1 text-sm text-indigo-500">
                        <Link2 className="h-4 w-4" />
                        {sanitizeLink(item.link)}
                      </p>
                      <p className="line-clamp-4 text-sm text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>

            {/* Second Grid */}
            <div className="grid place-content-start gap-2">
              {metadata
                .slice(Math.ceil(metadata.length / 2))
                .map((item: any, index: number) => (
                  <Link
                    href={`${item.link}`}
                    target="_blank"
                    key={index}
                    className="group flex flex-col items-start gap-2 rounded-lg border bg-white p-4 transition-all duration-500 ease-in-out hover:bg-zinc-50"
                  >
                    <div className="overflow-hidden rounded-md bg-white">
                      <Image
                        src={item.img_URL}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-full rounded-md bg-black object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h2 className="text-base">{item.name}</h2>
                      <p className="flex flex-row items-center gap-1 text-sm text-indigo-500">
                        <Link2 className="h-4 w-4" />
                        {sanitizeLink(item.link)}
                      </p>
                      <p className="line-clamp-4 text-sm text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
