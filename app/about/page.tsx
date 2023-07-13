"use client";
import React from "react";

/** Components */
import IntroductionText from "@/components/common/Texts/IntroductionText";
import ExperienceTimelineText from "@/components/common/Texts/ExperienceTimelineText";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function AboutPage() {

  // Use useSelector to extract the experiences array from the state
  const exps = useSelector((state: RootState) => state.exp.exps);

  return (
    <>
      <main className="mt-48 mb-24 max-w-screen-sm mx-auto text-white">
        <div className="flex flex-col">
          <IntroductionText />
          <div className="mt-8 flex flex-col">
            <div className="mb-4 text-xl font-bold">Experiences</div>
            {exps.map((exp, index) => (
              <ExperienceTimelineText key={exp.id} exp={exp} last={index === exps.length - 1}/>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
