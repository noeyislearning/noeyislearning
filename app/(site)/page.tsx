import React from "react";

/** Components */
import Hero from "@/components/layouts/Hero/Hero";
import RecentWorks from "@/components/layouts/Works/RecentWorks";
import ConnectWithMe from "@/components/layouts/CTA/ConnectWithMe";

export default function Home() {
  return (
    <>
      <main className="mt-48 mb-24 max-w-screen-sm mx-auto text-white justify-center">
        <div className="flex flex-col items-center">
          <Hero />
          <RecentWorks />
          <ConnectWithMe />
        </div>
      </main>
    </>
  )
};