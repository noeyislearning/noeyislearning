import React from "react";
import Image from "next/image";
import Link from "next/link";

/** React Icons */
import { AiOutlineLink } from "react-icons/ai";

export default function RecentWorksCard() {
  return (
    <figure className="max-w-screen group">
      <Link href={"/"}>
        <Image 
          src="https://i.imgur.com/3GPl4pV.png"
          alt="Project Image"
          width={1000}
          height={1000}
          className="h-96 max-w-screen rounded-lg object-cover mx-auto" 
          priority
        />
      </Link>
      <figcaption className="mt-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-baseline">
              <h3 className="text-base text-white">Zoiquery</h3>
              <span className="text-gray-500">•</span>
              <p className="text-sm text-gray-500">Artificial Intelligience SQL Generator</p>
            </div>
            <div className="flex flex-row gap-2 items-baseline">
              <span className="text-sm text-gray-500">TypeScript</span>
              <span className="text-sm text-gray-500">NextJS</span>
              <span className="text-sm text-gray-500">OpenAI</span>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-sm text-gray-500 group-hover:text-white">
              <Link href={"/"}>
                <div className="flex flex-row gap-1 items-center">
                  <AiOutlineLink />
                  <span className="text-xs">github.com/noeyislearning/zoiquery</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
