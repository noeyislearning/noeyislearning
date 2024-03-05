import React, { ComponentType } from "react"
import Link from "next/link"
import Image from "next/image"

import { Linkedin, Instagram, Github, Code, Link2 } from "lucide-react"
import { HighlightLinkProps } from "@/types/Highlight"

const iconComponents: { [key: string]: ComponentType<{ className?: string }> } =
  {
    linkedin: Linkedin,
    instagram: Instagram,
    github: Github,
    code: Code,
  }

const HighlightLink: React.FC<HighlightLinkProps> = ({
  highlight,
  url,
  logo_img_URL,
}) => {
  return (
    <Link
      href={url}
      target={"_blank"}
      className="group flex w-full items-center justify-between rounded-lg px-2 py-2 text-gray-900 hover:bg-indigo-100"
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={logo_img_URL}
          alt={highlight.name}
          width={24}
          height={24}
          className="rounded-full border border-zinc-500"
          loading="lazy"
        />
        <div className="flex flex-col items-start">
          <span className="text-sm">{highlight.name}</span>
          <span className="-mt-1 text-xs text-zinc-500">
            {highlight.description}
          </span>
        </div>
      </div>
      <Link2 className="h-4 w-4" />
    </Link>
  )
}

export default HighlightLink
