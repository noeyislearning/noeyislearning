"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Heroicons */
import { LinkIcon } from "@heroicons/react/24/outline";

import type { Work } from "@/redux/works/reducer";

interface Props {
  work: Work;
}

export default function RecentWorkCard({ work }: Props) {
  const trimURLPrefix = (url: string) => {
    const urlPrefix = "https://";
    const trimmedURL = url.slice(urlPrefix.length);
    return trimmedURL;
  };

  return (
    <figure className="max-w-screen group">
      { work.redirectURL ? (
        <Link href={work.redirectURL} target={"_blank"}>
          <Image
            src={work.imgURL}
            alt="Project Image"
            width={1000}
            height={1000}
            className="max-w-screen mx-auto transform rounded-lg object-cover duration-500 ease-in-out hover:scale-105 lg:h-96"
            priority
          />
        </Link>
      ): (
        <Image
          src={work.imgURL}
          alt="Project Image"
          width={1000}
          height={1000}
          className="max-w-screen mx-auto transform rounded-lg object-cover duration-500 ease-in-out hover:scale-105 lg:h-96 cursor-pointer"
          priority
        />
      )}
      <figcaption className="mt-4">
        <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-0 self-center lg:flex-row lg:items-baseline lg:gap-2 lg:self-start">
              <h3 className="whitespace-nowrap text-base text-white">
                {work.name}
              </h3>
              <span className="hidden text-gray-500 lg:block">•</span>
              <p className="text-sm text-gray-500">{work.description}</p>
            </div>
            <div className="flex flex-row flex-wrap items-baseline gap-2">
              {work.technologyUsed.map((technologyUsed) => (
                <span key={technologyUsed} className="text-sm text-gray-500">
                  {technologyUsed}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            {work.redirectURL ? (
              <div className="text-sm text-gray-500 duration-500 group-hover:text-white">
                <Link href={trimURLPrefix(work.redirectURL)}>
                  <div className="flex flex-row items-center gap-1">
                    <LinkIcon className="h-3 w-3" />
                    <span className="text-xs">
                      {trimURLPrefix(work.redirectURL)}
                    </span>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="text-xs text-gray-500 group-hover:text-red-500 duration-300">No link available</div>
            )}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
