"use client"
import { usePathname } from "next/navigation"

/** Data */
import menuData from "@/data/menus.json"
import socialData from "@/data/socials.json"
import highlightsData from "@/data/highlights.json"
/** Interfaces */
import { Menu } from "@/types/Menu"
import { Social } from "@/types/Social"
import { Highlight } from "@/types/Highlight"
/** Components */
import UserProfile from "@/components/layouts/user/UserProfile"
import MenuButton from "@/components/common/buttons/MenuButton"
import SocialButton from "@/components/common/buttons/SocialButton"
import HighlightButton from "@/components/common/buttons/HighlightButton"
import MenuFooter from "@/components/layouts/footer/MenuFooter"

export default function SideNav() {
  const pathname = usePathname()
  const { menus } = menuData
  const { socials } = socialData
  const { highlights } = highlightsData

  return (
    <aside
      className="absolute left-0 top-0 z-20 h-screen w-72 translate-x-0 border-r transition-transform"
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-zinc-50 p-4">
        <UserProfile />
        <ul className="space-y-1 font-medium">
          {menus.map((menu: Menu, index: number) => (
            <li key={index}>
              <MenuButton menu={menu} pathname={pathname} />
            </li>
          ))}
        </ul>
        <div className="border"></div>
        <div className="text-sm text-zinc-600">Socials</div>
        <ul className="space-y-1 font-medium">
          {socials.map((social: Social, index: number) => (
            <li key={index}>
              <SocialButton
                social={social}
                url={social.url}
                handle={social.handle}
              />
            </li>
          ))}
        </ul>
        <div className="border"></div>
        <div className="text-sm text-zinc-600">Highlights</div>
        <ul className="space-y-1 font-medium">
          {highlights.map((highlight: Highlight, index: number) => (
            <li key={index}>
              <HighlightButton
                highlight={highlight}
                description={highlight.description}
                url={highlight.url}
                logo_img_URL={highlight.logo_img_URL}
              />
            </li>
          ))}
        </ul>
        <MenuFooter />
      </div>
    </aside>
  )
}
