"use client";
import React from "react";
import Link from "next/link";

/** Heroicons */
import { 
  BookOpenIcon, 
  BriefcaseIcon, 
  ChatBubbleBottomCenterTextIcon, 
  UserIcon, 
  ChevronDownIcon
} from "@heroicons/react/24/outline";

/** Headless UI */
import { Menu, Transition } from '@headlessui/react'

export default function ExploreDropdown() {
  return (
    <>
      <div className="">
        <Menu as="div" className="relative inline-block">
          <Menu.Button className="px-4 py-2 flex flex-row gap-2 text-gray-500 hover:text-gray-100 items-center hover:bg-gray-900 rounded-xl">
            <div className="text-sm">Explore</div>
            <ChevronDownIcon className="w-4 h-4"/>
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
                <Menu.Item>
                  <Link href={""}>
                    <div className="px-4 py-2 text-sm hover:bg-gray-900 text-white group rounded-lg">
                      <div className="flex flex-row gap-2 items-center">
                        <UserIcon className="w-4 h-4"/>
                        <span className="whitespace-nowrap">About</span>
                      </div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href={""}>
                    <div className="px-4 py-2 text-sm hover:bg-gray-900 text-white group rounded-lg">
                      <div className="flex flex-row gap-2 items-center">
                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4"/>
                        <div className="flex flex-row gap-2 items-center">
                          <span className="whitespace-nowrap">Blogs</span>
                          <span className="px-2 py-0.5 text-blue-600 text-xs font-light border border-blue-600 rounded-lg">Soon</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href={""}>
                    <div className="px-4 py-2 text-sm hover:bg-gray-900 text-white group rounded-lg">
                      <div className="flex flex-row gap-2 items-center">
                        <BriefcaseIcon className="w-4 h-4"/>
                        <div className="flex flex-row gap-2 items-center">
                          <span className="whitespace-nowrap">Works</span>
                          <span className="px-2 py-0.5 text-blue-600 text-xs font-light border border-blue-600 rounded-lg">Soon</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href={""}>
                    <div className="px-4 py-2 text-sm hover:bg-gray-900 text-white group rounded-lg">
                      <div className="flex flex-row gap-2 items-center">
                        <BookOpenIcon className="w-4 h-4"/>
                        <div className="flex flex-row gap-2 items-center">
                          <span className="whitespace-nowrap">Open Sources</span>
                          <span className="px-2 py-0.5 text-blue-600 text-xs font-light border border-blue-600 rounded-lg">Soon</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>

        </Menu>
      </div>
    </>
  )
}