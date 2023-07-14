import React from "react";

/** Components */
import Hero from "@/components/layouts/Hero/Hero";
import RecentWorks from "@/components/layouts/Works/RecentWorks";
import ConnectWithMe from "@/components/layouts/CTA/ConnectWithMe";

export default function Home() {
  return (
    <>
      <main className="mt-24 lg:mt-48 mb-12 lg:mb-24 max-w-screen-sm mx-auto text-white">
        <div className="p-4 flex flex-col items-center">
          <Hero />
          <RecentWorks />
          <ConnectWithMe />
        </div>
      </main>
    </>
  )
};