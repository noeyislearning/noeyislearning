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
          <div className="relative transform ease-in-out hover:scale-105 duration-500">
            <Image
              src={work.imgURL}
              alt="Project Image"
              width={1000}
              height={1000}
              className="max-w-screen mx-auto rounded-lg object-cover lg:h-96"
              priority
            />
            <div className={`ribbon absolute -top-2 -left-2 h-40 w-40 overflow-hidden before:absolute before:top-0 before:right-0 before:-z-[1] before:border-4 ${work.category === "web" ? "before:border-slate-800 after:border-slate-800" : "before:border-rose-800 after:border-rose-800"} after:absolute after:left-0 after:bottom-0 after:-z-[1] after:border-4`}>
              <div className={`absolute -left-14 top-[43px] w-60 -rotate-45 ${work.category === "web" ? "bg-slate-800" : "bg-rose-800"} py-2.5 text-center text-white shadow-md`}><span className="text-sm">{ work.category === "web" ? "Web Development" : "Data Science" }</span></div>
            </div>
          </div>
        </Link>
      ): (
        <div className="relative transform ease-in-out hover:scale-105 duration-500">
            <Image
              src={work.imgURL}
              alt="Project Image"
              width={1000}
              height={1000}
              className="max-w-screen mx-auto rounded-lg object-cover lg:h-96"
              priority
            />
            <div className={`ribbon absolute -top-2 -left-2 h-40 w-40 overflow-hidden before:absolute before:top-0 before:right-0 before:-z-[1] before:border-4 ${work.category === "web" ? "before:border-slate-800 after:border-slate-800" : "before:border-rose-800 after:border-rose-800"} after:absolute after:left-0 after:bottom-0 after:-z-[1] after:border-4`}>
              <div className={`absolute -left-14 top-[43px] w-60 -rotate-45 ${work.category === "web" ? "bg-slate-800" : "bg-rose-800"} py-2.5 text-center text-white shadow-md`}><span className="text-sm">{ work.category === "web" ? "Web Development" : "Data Science" }</span></div>
            </div>
          </div>
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
