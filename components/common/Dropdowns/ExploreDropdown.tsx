"use client";
import React from "react";
import Link from "next/link";

/** Heroicons */
import {
  BookOpenIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  ChartBarIcon,
  ChevronDownIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

/** Headless UI */
import { Menu, Transition } from "@headlessui/react";

// Icon object mapping
const icons: { [key: string]: React.ElementType } = {
  UserIcon: UserIcon,
  ChatBubbleBottomCenterTextIcon: ChatBubbleBottomCenterTextIcon,
  BriefcaseIcon: BriefcaseIcon,
  BookOpenIcon: BookOpenIcon,
  CodeBracketIcon: CodeBracketIcon,
  ChartBarIcon: ChartBarIcon,
};

export default function ExploreDropdown() {
  const explores = useSelector((state: RootState) => state.menu.explore);

  return (
    <>
      <div className="">
        <Menu as="div" className="relative inline-block">
          <Menu.Button className="flex flex-row items-center gap-2 rounded-xl px-4 py-2 text-gray-500 hover:bg-gray-900 hover:text-gray-100">
            <div className="text-sm">Explore</div>
            <ChevronDownIcon className="h-4 w-4" />
          </Menu.Button>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-xl bg-black shadow-lg ring-1 ring-slate-600 ring-opacity-100 focus:outline-none">
              <div className="px-1 py-1">
                { explores.map((explore) => {
                  // Get the correct icon component based on the icon name
                  const IconComponent = icons[explore.icon];
                  return (
                    <Menu.Item key={explore.id}>
                      { explore.isAllowed ? (
                        <Link href={explore.url} target={explore.isExternal ? "_blank" : undefined} rel={explore.isExternal ? "noopener noreferrer" : undefined}>
                          <div className="group rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-900">
                            <div className="flex flex-row items-center gap-2">
                              {/* Render the correct icon component */}
                              <IconComponent className="h-4 w-4" />
                              <span className="whitespace-nowrap">
                                {explore.name}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="cursor-not-allowed">
                          <div className="group rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-900">
                            <div className="flex flex-row items-center gap-2">
                              {/* Render the correct icon component */}
                              <IconComponent className="h-4 w-4" />
                              <div className="flex flex-row items-center gap-2">
                                <span className="whitespace-nowrap">
                                  {explore.name}
                                </span>
                                <span className="rounded-lg border border-blue-600 px-2 py-0.5 text-xs font-light text-blue-600">
                                  Soon
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}
