"use client";
import React from "react";
import Link from "next/link";
import { usePathname  } from "next/navigation";

/** Components */
import ProjectsHero from "@/components/layouts/Hero/ProjectsHero";

export default function ProjectLayout({ children } : { children: React.ReactNode }) {

  const pathname = usePathname()

  return (
    <section className="p-8 md:p-8 lg:p-16 mx-auto w-full h-full flex flex-col items-center">
      <ProjectsHero />
      <div className="flex flex-row w-full max-w-5xl justify-between items-center">
        <div className="w-full mb-4 flex flex-row flex-wrap gap-2 items-start justify-start">
          <Link href={"/p/dataspace"} className={`py-1 px-6 border border-dashed rounded-full hover:text-black hover:border-yellow-500 hover:bg-yellow-500 ${pathname === "/p/dataspace" ? "border-yellow-500 bg-yellow-500 text-black" : ""}`}>
            <span>Data Space</span>
          </Link>
          <Link href={"/p/webdev"} className={`py-1 px-6 border border-dashed rounded-full hover:text-black hover:border-yellow-500 hover:bg-yellow-500 ${pathname === "/p/webdev" ? "border-yellow-500 bg-yellow-500 text-black" : ""}`}>
            <span>Web Development</span>
          </Link>
          <Link href={"/p/creatives"} className={`py-1 px-6 border border-dashed rounded-full hover:text-black hover:border-yellow-500 hover:bg-yellow-500 ${pathname === "/p/  creatives" ? "border-yellow-500 bg-yellow-500 text-black" : ""}`}>
            <span>Creatives</span>
          </Link>
          <div className="py-1 px-6 border border-dashed rounded-full border-gray-400 text-gray-400">
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
      { children }
    </section>
  )
}
