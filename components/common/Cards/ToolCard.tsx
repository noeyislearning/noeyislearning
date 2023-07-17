"use client";
import React from "react";
import Image from "next/image";

/** Types */
import type { Tool } from "@/redux/tools/reducer";

/** Interfaces/Props */
interface Props {
  tool: Tool;
}

export default function ToolCard({ tool }: Props) {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="w-full rounded-lg bg-gray-950 px-6 py-4 hover:bg-gray-900 lg:px-8">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="h-14 w-14 rounded-full object-contain"
              src={tool.imgURL}
              alt="Rounded avatar"
              width={1000}
              height={1000}
              loading="lazy"
              data-nimg="1"
            />
            <div className="hidden flex-col lg:flex">
              <div className="text-lg">{tool.name}</div>
              <div className="soverflow-hidden -mt-1 w-44 text-ellipsis whitespace-nowrap text-sm text-gray-500">
                {tool.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
