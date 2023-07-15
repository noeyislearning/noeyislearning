"use client";
import React from "react";
import Image from "next/image";

/** Types */
import type { Tool } from "@/redux/tools/reducer";

/** Interfaces/Props */
interface Props {
  tool: Tool;
}

export default function ToolCard({ tool} : Props) {

  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="px-10 lg:px-8 py-4 bg-gray-950 hover:bg-gray-800 rounded-lg">
          <div className="flex flex-row gap-2 items-center">
            <Image 
              className="w-14 h-14 rounded-full" 
              src={tool.imgURL} 
              alt="Rounded avatar"
              width={1000}
              height={1000}
            />
            <div className="hidden lg:flex flex-col">
              <div className="text-lg">
                {tool.name}
              </div>
              <div className="-mt-1 w-44 text-sm text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden">
                {tool.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
