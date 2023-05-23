import React from 'react'
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <div className="self-center text-lg font-medium whitespace-nowrap ">Noey Ignacio.</div>
      </Link>
    </>
  )
}
