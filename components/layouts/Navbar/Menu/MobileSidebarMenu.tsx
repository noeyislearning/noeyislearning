import React, { Fragment } from "react";
import Link from "next/link";

/** Heroicons */
import { 
  BookOpenIcon, 
  BriefcaseIcon, 
  ChatBubbleBottomCenterTextIcon, 
  UserIcon, 
  CodeBracketIcon,
  HomeIcon
} from "@heroicons/react/24/outline";

/** Components */
import Logo from "@/components/common/Logos/Logo";
import ContactButton from "@/components/common/Buttons/EmailButton";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

// Icon object mapping
const icons: { [key: string]: React.ElementType } = {
  UserIcon: UserIcon,
  ChatBubbleBottomCenterTextIcon: ChatBubbleBottomCenterTextIcon,
  BriefcaseIcon: BriefcaseIcon,
  BookOpenIcon: BookOpenIcon,
  CodeBracketIcon: CodeBracketIcon,
  HomeIcon: HomeIcon
}

interface MobileSidebarMenuProps {
  onClose: () => void; // Prop for closing the sidebar when a link is clicked
}

export default function MobileSidebarMenu({ onClose }: MobileSidebarMenuProps) {

  const exploresMobile = useSelector((state: RootState) => state.menu.exploresMobile);

  return (
    <>
      <div className="flex" onClick={onClose}>
        <Logo />
      </div>
      <div className="my-4 flex flex-col gap-2">
        {exploresMobile.map((exploreMobile) => {
          const IconComponent = icons[exploreMobile.icon];
          return (
            <Fragment key={exploreMobile.id}>
              {exploreMobile.isAllowed ? (
                  <Link href={exploreMobile.url} key={exploreMobile.id}>
                    <div className="text-sm text-white group rounded-lg" onClick={onClose}>
                      <div className="flex flex-row gap-4 items-center">
                        <IconComponent className="w-5 h-5"/>
                        <span className="text-xl whitespace-nowrap">{exploreMobile.name}</span>
                      </div>
                    </div>
                  </Link>
                ): (
                  <div key={exploreMobile.id}>
                    <div className="text-sm text-gray-600 group rounded-lg" onClick={onClose}>
                      <div className="flex flex-row gap-4 items-center">
                        <IconComponent className="w-5 h-5"/>
                        <span className="text-xl whitespace-nowrap">{exploreMobile.name}</span>
                      </div>
                    </div>
                  </div>
                )
              }
            </Fragment>
          ) 
        })}
      </div>
      <div className="flex">
        <ContactButton text={"Drop me an email"}/>
      </div>
    </>
  )
}
