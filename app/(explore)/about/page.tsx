"use client";
import React from "react";


/** Components */
import IntroductionText from "@/components/common/Texts/IntroductionText";
import ExperienceTimelineText from "@/components/common/Texts/ExperienceTimelineText";
import ToolCard from "@/components/common/Cards/ToolCard";
import CertificateCard from "@/components/common/Cards/CertificateCard";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function AboutPage() {

  const exps = useSelector((state: RootState) => state.exp.exps);
  const tools = useSelector((state: RootState) => state.tool.tools);
  const certs = useSelector((state: RootState) => state.cert.certs);

  return (
    <>
      <main className="mt-24 lg:mt-48 mb-12 lg:mb-24 w-full max-w-screen-sm mx-auto text-white">
        <div className="p-4 flex flex-col">
          <IntroductionText />
          <div className="mt-8 flex flex-col">
            <div className="mb-4 text-xl font-bold">Experiences</div>
            {exps.map((exp, index) => (
              <ExperienceTimelineText key={exp.id} exp={exp} last={index === exps.length - 1}/>
            ))}
          </div>
          <div className="mt-8 h-auto w-full flex flex-col">
            <div className="mb-4 text-xl font-bold">Certificates</div>
            <div className="flex flex-col gap-4 w-full">
              {certs.map((cert) => (
                <CertificateCard key={cert.id} cert={cert}/>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="mb-4 text-xl font-bold">Beloved Technologies & Tools</div>
            <div className="flex flex-row flex-wrap lg:grid lg:grid-cols-2 gap-4">
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
