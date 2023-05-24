import Link from "next/link"
import React from 'react'

export default function Menu() {
  return (
    <>
      <ul className="flex flex-col text-sm font-base mt-4 lg:mt-0 md:flex-row lg:space-x-8">
        <li>
          <Link href={"/"}>
            <div className="block py-2 pl-3 pr-4 lg:p-0 text-black hover:underline underline-offset-4">Works</div>
          </Link>
        </li>
        <li>
          <Link href={"/blogs"}>
            <div className="block py-2 pl-3 pr-4 lg:p-0 text-black hover:underline underline-offset-4">Blogs</div>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <div className="block py-2 pl-3 pr-4 lg:p-0 text-black hover:underline underline-offset-4">Resume</div>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <div className="block py-2 pl-3 pr-4 lg:p-0 text-black hover:underline underline-offset-4">Email</div>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <div className="block py-2 pl-3 pr-4 lg:p-0 text-black hover:underline underline-offset-4">More info</div>
          </Link>
        </li>
      </ul>
    </>
  )
}

