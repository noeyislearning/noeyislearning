/** Components */
import UserProfile from "@/components/layouts/user/UserProfile"
import Menus from "@/components/layouts/nav/menu/Menus"
import Socials from "@/components/layouts/nav/menu/Socials"
import Highlights from "@/components/layouts/nav/menu/Highlights"
import SideNavSectionDivider from "@/components/common/dividers/SideNavSectionDivider"
import MenuFooter from "@/components/layouts/footer/MenuFooter"

export default function SideNav() {
  return (
    <aside
      className="absolute left-0 top-0 z-20 h-screen w-72 translate-x-0 border-r transition-transform"
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-zinc-50 p-4">
        <UserProfile />
        <Menus />
        <SideNavSectionDivider title="Socials" />
        <Socials />
        <SideNavSectionDivider title="Highlights" />
        <Highlights />
        <MenuFooter />
      </div>
    </aside>
  )
}
