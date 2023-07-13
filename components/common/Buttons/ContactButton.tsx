import React from "react";
import Link from "next/link";

export default function ContactButton() {
  return (
  <>
    <Link href={"mailto:hello@noeyislearning.dev"}>
      <div className="px-4 py-2 text-black text-sm text-center font-medium bg-gray-100 border border-gray-500 rounded-xl cursor-pointer">
        Drop an email
      </div>
    </Link>
  </>
  )
}
