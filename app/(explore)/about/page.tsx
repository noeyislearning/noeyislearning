"use client";
import React from "react";


/** Components */
import IntroductionText from "@/components/common/Texts/IntroductionText";
import ExperienceTimelineText from "@/components/common/Texts/ExperienceTimelineText";
import ToolCard from "@/components/common/Cards/ToolCard";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function AboutPage() {

  const exps = useSelector((state: RootState) => state.exp.exps);
  const tools = useSelector((state: RootState) => state.tool.tools);

  return (
    <>
      <main className="mt-24 lg:mt-48 mb-12 lg:mb-24 max-w-screen-sm mx-auto text-white">
        <div className="p-4 flex flex-col">
          <IntroductionText />
          <div className="mt-8 flex flex-col">
            <div className="mb-4 text-xl font-bold">Experiences</div>
            {exps.map((exp, index) => (
              <ExperienceTimelineText key={exp.id} exp={exp} last={index === exps.length - 1}/>
            ))}
          </div>
          <div className="mt-8 flex flex-col">
            <div className="mb-4 text-xl font-bold">Beloved Technologies & Tools</div>
            <div className="flex flex-row flex-wrap gap-4">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool}/>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
