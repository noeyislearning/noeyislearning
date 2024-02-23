// SocialButton.tsx
import Link from "next/link"
import { ComponentType } from "react"

/** Lucide React Icon */
import { Linkedin, Instagram, Github, Code, Link2 } from "lucide-react"
const iconComponents: { [key: string]: ComponentType<{ className?: string }> } =
  {
    linkedin: Linkedin,
    instagram: Instagram,
    github: Github,
    code: Code,
  }
/** Components */
import RenderIcon from "@/components/common/icons/RenderIcon"
/** Interfaces */
import { SocialButtonProps } from "@/types/Social"

const SocialButton: React.FC<SocialButtonProps> = ({ social, url, handle }) => {
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

export default SocialButton
