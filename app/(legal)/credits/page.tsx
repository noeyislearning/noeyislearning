import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <main className="mt-24 lg:mt-48 mb-12 lg:mb-24 max-w-screen-sm mx-auto text-white">
        <div className="p-4 flex flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="mb-4 text-3xl lg:text-4xl font-bold">Credits</h1>
            <div className="flex flex-col gap-4 ">
              <h2 className="mt-4 text-lg lg:text-xl font-medium">
                Technology Stack Used
              </h2>
              <h3 className="text-sm lg:text-base">
                This website was built with <Link href={"https://nextjs.org/"} className="text-blue-500">NextJS</Link>, <Link href={"https://tailwindcss.com/"} className="text-blue-500">TailwindCSS</Link>, <Link href={"https://redux.js.org/"} className="text-blue-500">Redux</Link>, <Link href={"https://headlessui.com/"} className="text-blue-500">Headless UI</Link>, <Link href={"https://www.notion.so/"} className="text-blue-500">Notion</Link>, and more. It is hosted on <Link href={"https://vercel.com/"} className="text-blue-500">Vercel</Link>.
              </h3>
              <h2 className="mt-4 text-lg lg:text-xl font-medium">
                Website Inspo
              </h2>
              <h3 className="text-sm lg:text-base">
                A huge thanks to <Link href={"https://www.antonstallboerger.com/"} target={"_blank"} className="text-blue-500">Anton Stallbörger</Link> for the inspiration for this website.
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
