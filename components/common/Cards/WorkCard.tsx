import React from "react";
import Image from "next/image";

export default function WorkCard() {
  return (
    <a href={""} target={"_blank"} className="group bg-indigo-800 w-full">
      <div className="p-4 w-full flex flex-col gap-2 items-start divide-y divide-dashed divide-white border border-dashed rounded-lg">
        <div className="w-full flex flex-col gap-2 items-start">
          <h2 className="text-xl font-bold leading-5">The GitHub History of Scala Language</h2>
          <p className="text-base text-gray-300 leading-5 line-clamp-2">Find the true Scala experts by exploring its development history in Git and GitHub.</p>
        </div>
        <div className="pt-4 pb-8 w-full flex flex-col gap-2">
          <Image src="https://i.imgur.com/QuPNiNU.png" alt="GitHub History" width={1000} height={1000} className="object-cover w-full h-48 rounded-lg"/>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-medium">🧪 Data Science</h3>
              <div className="text-xs text-yellow-400 group-hover:underline group-hover:underline-offset-4">github.com/noeyislearning/github-history-of-scala</div>
            </div>
          </div>
        </div>
        <div className="pt-4 w-full flex flex-row flex-wrap gap-2">
          <button className="py-1 px-4 text-xs text-gray-300 border border-dashed border-gray-300 rounded-full">Data Science</button>
          <button className="py-1 px-4 text-xs text-gray-300 border border-dashed border-gray-300 rounded-full">Python</button>
          <button className="py-1 px-4 text-xs text-gray-300 border border-dashed border-gray-300 rounded-full">Data Visualization</button>
          <button className="py-1 px-4 text-xs text-gray-300 border border-dashed border-gray-300 rounded-full">Jupyter Notebook</button>
        </div>
      </div>
    </a>
  )
}
