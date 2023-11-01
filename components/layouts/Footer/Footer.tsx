import React from "react";
import Link from "next/link";

export default function Footer() {

  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 flex flex-col gap-2 justify-center border-t border-dashed bg-indigo-700">
      <ul className="w-full flex flex-row space-x-4 flex-wrap items-center justify-center text-base font-medium">
        <li><Link href={"/"} target={"_blank"} className="hover:underline hover:underline-offset-4">Blogs</Link></li>
        <li><Link href={"/"} target={"_blank"} className="hover:underline hover:underline-offset-4">Leetcode Solutions</Link></li>
        <li><Link href={"/"} target={"_blank"} className="hover:underline hover:underline-offset-4">About</Link></li>
        <li><Link href={"https://noeylearning.gumroad.com"} target={"_blank"} className="hover:underline hover:underline-offset-4">Shop</Link></li>
      </ul>
      <span className="text-base text-center">© {currentYear} <Link href="https://noeyislearning.dev" className="text-yellow-400 hover:underline hover:underline-offset-4">Noeyislearning™</Link>. All Rights Reserved.
      </span>
    </footer>
  )
}
