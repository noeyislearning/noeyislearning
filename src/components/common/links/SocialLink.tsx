import React, { ComponentType } from "react"
import Link from "next/link"

import {
  Linkedin,
  Instagram,
  Github,
  Code,
  Link2,
  Clapperboard,
} from "lucide-react"
import RenderIcon from "@/components/common/icons/RenderIcon"
import { SocialLinkProps } from "@/types/Social"

const iconComponents: { [key: string]: ComponentType<{ className?: string }> } =
  {
    linkedin: Linkedin,
    instagram: Instagram,
    github: Github,
    code: Code,
    clapperboard: Clapperboard,
  }

const SocialLink: React.FC<SocialLinkProps> = ({ social, url }) => {
  const IconComponent = iconComponents[social.icon]

  return (
    <Link
      href={url}
      target={"_blank"}
      className="group flex w-full items-center justify-between rounded-lg px-2 py-2 text-gray-900 hover:bg-indigo-100"
    >
      <div className="flex flex-row items-center gap-2">
        {social.icon && (
          <RenderIcon iconName={social.icon} IconComponent={IconComponent} />
        )}
        <div className="flex flex-col items-start">
          <span className="text-sm">{social.name}</span>
          <span className="-mt-1 text-xs text-zinc-500">{social.handle}</span>
        </div>
      </div>
      <Link2 className="h-4 w-4" />
    </Link>
  )
}

export default SocialLink
