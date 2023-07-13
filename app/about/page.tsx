import React from "react";

/** Components */
import IntroductionText from "@/components/common/Texts/IntroductionText";
import TimelineText from "@/components/common/Texts/TimelineText";

export default function AboutPage() {
  return (
    <>
      <main className="mt-48 mb-24 max-w-screen-sm mx-auto text-white">
        <div className="flex flex-col">
          <IntroductionText />
          <div className="mt-8 flex">
            <TimelineText />
          </div>
        </div>
      </main>
    </>
  )
}
