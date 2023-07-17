import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <div className="group flex flex-row items-baseline gap-2">
          <span className="whitespace-nowrap text-xl font-medium text-white group-hover:text-gray-400">
            Noey Ignacio
          </span>
          <span className="whitespace-nowrap text-xs font-medium text-gray-500">
            /no&apos;wi ig&apos;nasio/
          </span>
        </div>
      </Link>
    </>
  );
}
