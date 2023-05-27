import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function ArtworkCard() {
  return (
    <>
      <div className="max-w-screen">
        <div className="flex flex-col gap-5">
          <Link href={"https://kittohau.com/"} target={"_blank"}>
            <Image
                className="h-72 w-full object-contain rounded-lg bg-black"
                src={"https://i.imgur.com/RBfiMbv.png"}
                alt="blog-photo"
                width={500}
                height={500}
                priority
            />
          </Link>
          <div className="flex flex-row gap-6 justify-between items-baseline">
            <div className="flex flex-row gap-2 items-baseline">
              <div className="font-medium underline underline-offset-4 line-clamp-1">
                <Link href={"https://kittohau.com/"} target={"_blank"}>
                  Tuxedo Cat
                </Link>
              </div>
            </div>
            <div className="text-sm text-gray-400 text-end">Generated with <span>Lexica Art</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
