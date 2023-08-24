import React, { Fragment } from "react";
import Link from "next/link";

/** Heroicons */
import {
  BookOpenIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  ChartBarIcon,
  CodeBracketIcon,
  HomeIcon,
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
  HomeIcon: HomeIcon,
  ChartBarIcon: ChartBarIcon,
};

interface MobileSidebarMenuProps {
  onClose: () => void;
}

export default function MobileSidebarMenu({ onClose }: MobileSidebarMenuProps) {
  const exploresMobile = useSelector(
    (state: RootState) => state.menu.exploresMobile,
  );

  return (
    <>
      <div className="flex" onClick={onClose}>
        <Logo />
      </div>
      <div className="my-4 flex flex-col gap-2">
        { exploresMobile.map((exploreMobile) => {
          const IconComponent = icons[exploreMobile.icon];
          return (
            <Fragment key={exploreMobile.id}>
              { exploreMobile.isAllowed ? (
                <Link href={exploreMobile.url} key={exploreMobile.id} target={exploreMobile.isExternal ? "_blank" : undefined} rel={exploreMobile.isExternal ? "noopener noreferrer" : undefined}>
                  <div
                    className="group rounded-lg text-sm text-white"
                    onClick={onClose}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <IconComponent className="h-5 w-5" />
                      <span className="whitespace-nowrap sm:text-base md:text-base lg:text-xl">
                        {exploreMobile.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={exploreMobile.id}>
                  <div
                    className="group rounded-lg text-sm text-gray-600"
                    onClick={onClose}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <IconComponent className="h-5 w-5" />
                      <span className="whitespace-nowrap sm:text-base md:text-base lg:text-xl">
                        {exploreMobile.name}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      <div className="flex">
        <ContactButton text={"Drop me an email"} />
      </div>
    </>
  );
}
