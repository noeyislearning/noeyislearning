import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Redux related */
import type { Work } from "@/redux/works/reducer";
interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work } : WorkCardProps) {

  // Remove the https:// from the work.redirect_url
  const redirectUrl = work.redirect_url.replace("https://", "");

  return (
    <Link href={work.redirect_url} target={"_blank"} className="group bg-indigo-800 w-full h-full relative shadow-lg"> 
      <div className="absolute -top-6 left-0 m-2 w-full flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          { work.is_ongoing && (
            <div className=" py-1 px-4 text-xs border border-dashed bg-yellow-700 rounded-full group-hover:border-yellow-400">
              Ongoing
            </div>
          )}
          <div className="py-1 px-4 text-xs tracking-normal border border-dashed bg-indigo-700 rounded-full group-hover:border-yellow-400">
            v{work.version}
          </div>
          <div className="py-1 px-4 text-xs tracking-normal border border-dashed bg-indigo-700 rounded-full group-hover:border-yellow-400">
            {work.data_set_source}
          </div>
        </div>
      </div>
      <div className="p-4 w-full h-full flex flex-col gap-2 items-start divide-y divide-dashed divide-white border border-dashed rounded-lg hover:border-yellow-400">      
        <div className="w-full flex flex-col gap-2 items-start">
          <h2 className="text-2xl font-bold leading-5 group-hover:underline">{work.title}</h2>
          <p className="text-base text-gray-300 leading-5 line-clamp-2">{work.desc}</p>
        </div>
        <div className="pt-4 w-full flex flex-col gap-2 relative">
          <Image src={work.img_url} alt="GitHub History" width={1000} height={1000} priority className="object-cover w-full h-48 rounded-lg grayscale group-hover:grayscale-0 duration-300 transition-all ease-in-out"/>
          <div className="absolute bottom-14 right-0 m-2 py-1 px-2 text-xs text-gray-300 border border-dashed border-gray-300 rounded-full">
            AI Generated
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-medium">{work.work_title}</h3>
              <div className="text-xs text-yellow-400 tracking-normal line-clamp-1">{redirectUrl}</div>
            </div>
          </div>
        </div>
        <div className="pt-4 w-full flex flex-row flex-wrap gap-2">
          { work.tech_tags.slice(0, 4).map((tag, index) => (
            <div key={index} className="py-1 px-4 text-xs text-gray-300 border border-dashed border-gray-300 rounded-full">{tag}</div>
          ))}
          { work.tech_tags.length > 4 && (
            <div className="py-1 px-4 text-xs text-gray-300 border border-dashed border-gray-300 rounded-full">+{work.tech_tags.length - 4}</div>
          )}
        </div>
      </div>
    </Link>
  )
}
