import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <div className="flex flex-row gap-2 items-baseline group">
          <span className="text-xl font-medium whitespace-nowrap text-white group-hover:text-gray-400">Noey Ignacio</span>
          <span className="text-xs font-medium whitespace-nowrap text-gray-500">/no&apos;wi ig&apos;nasio/</span>
        </div>
      </Link>
    </>
  )
}
