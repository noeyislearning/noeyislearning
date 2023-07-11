import React from "react";

/** Components */
import Hero from "@/components/layouts/Hero/Hero";
import RecentWorks from "@/components/layouts/Works/RecentWorks";

export default function Home() {
  return (
    <>
      <main className="mt-48 max-w-screen-sm mx-auto text-white justify-center">
        <div className="flex flex-col items-center">
          <Hero />
          <RecentWorks />
        </div>
      </main>
    </>
  )
};