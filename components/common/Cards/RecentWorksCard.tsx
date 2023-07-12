"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Heroicons */
import { 
  LinkIcon
} from "@heroicons/react/24/outline";

import type { Work } from "@/redux/works/workSlice";

interface Props {
  work: Work;
}

export default function RecentWorksCard({ work }: Props) {

  const trimURLPrefix = (url: string) => {
    const urlPrefix = "https://";
    const trimmedURL = url.slice(urlPrefix.length);
    return trimmedURL;
  }

  return (
    <figure className="max-w-screen group">
      <Link href={"/"}>
        <Image 
          src={work.imgURL}
          alt="Project Image"
          width={1000}
          height={1000}
          className="h-96 mx-auto max-w-screen rounded-lg object-cover  duration-500 ease-in-out transform hover:scale-105" 
          priority
        />
      </Link>
      <figcaption className="mt-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-baseline">
              <h3 className="text-base text-white">{work.name}</h3>
              <span className="text-gray-500">•</span>
              <p className="text-sm text-gray-500">{work.description}</p>
            </div>
            <div className="flex flex-row gap-2 items-baseline">
              {work.technologyUsed.map((technologyUsed) => (
                <span key={technologyUsed} className="text-sm text-gray-500">{technologyUsed}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
          {work.redirectURL ? (
              <div className="text-sm text-gray-500 group-hover:text-white">
                <Link href={trimURLPrefix(work.redirectURL)}>
                  <div className="flex flex-row gap-1 items-center">
                    <LinkIcon className="w-3 h-3"/>
                    <span className="text-xs">{trimURLPrefix(work.redirectURL)}</span>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="text-sm text-gray-500">
                No link available
              </div>
            )}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}