import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function BlogCard() {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg">
        <Image
            className="h-48 object-cover rounded-t-lg"
            src="https://i.imgur.com/WuIODHa.jpg"
            alt=""
            width={500}
            height={500}
            priority
        />
        <div className="p-5">
          <div className="flex flex-col gap-2">
            <p className="text-xs">May 23, 2023</p>
            <a href="#">
              <h5 className="text-xl font-medium tracking-tight text-gray-900 line-clamp-2">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="text-sm text-gray-400 line-clamp-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </div>
      </div>
    </>
  )
}
