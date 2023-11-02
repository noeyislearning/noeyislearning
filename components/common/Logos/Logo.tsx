import React, { Fragment } from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Fragment>
      <Link href={"/"}>
        <div className="flex flex-col text-center md:text-center lg:text-start">
          <h1 className="text-4xl">Noeyislearning</h1>
          <span className="-mt-1 text-sm">/Francis Ignacio/</span>
        </div>
      </Link>
    </Fragment>
  )
}
