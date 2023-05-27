import React from 'react'
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="px-6 md:px-12 lg:px-36 pt-16 pb-36">
        <div className="flex flex-col md:flex-row lg:flex-row gap-12 md:gap-0 lg:gap-0 items-center justify-center md:justify-between lg:justify-between">
          <div className="flex flex-row gap-5 text-sm">
            <Link href={"https://www.instagram.com/noeyislearning/"} target={"_blank"}>
              <div className="text-black hover:text-blue-500 underline underline-offset-4">Instagram</div>
            </Link>
            <Link href={"https://twitter.com/noeyislearning"} target={"_blank"}>
              <div className="text-black hover:text-blue-500 underline underline-offset-4">Twitter</div>
            </Link>
            <Link href={"https://www.linkedin.com/in/noeyislearning/"} target={"_blank"}>
              <div className="text-black hover:text-blue-500 underline underline-offset-4">LinkedIn</div>
            </Link>
          </div>
          <div className="font-base text-sm text-gray-400">&copy; 2023 Noey Ignacio. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  )
}
