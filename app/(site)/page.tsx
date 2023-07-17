import React from "react";

/** Components */
import Hero from "@/components/layouts/Hero/Hero";
import RecentWorks from "@/components/layouts/Works/RecentWorks";
import ConnectWithMe from "@/components/layouts/CTA/ConnectWithMe";

export default function Home() {
  return (
    <>
      <main className="mx-auto mb-12 mt-24 max-w-screen-sm text-white lg:mb-24 lg:mt-48">
        <div className="flex flex-col items-center p-4">
          <Hero />
          <RecentWorks />
          <ConnectWithMe />
        </div>
      </main>
    </>
  );
}
