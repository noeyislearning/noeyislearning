import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex flex-col items-start">
      <h1 className="text-sm uppercase">Noey Ignacio</h1>
      <span className="text-xs text-gray-500">@noeyislearning</span>
    </Link>
  );
}
