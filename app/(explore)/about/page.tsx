"use client";
import React from "react";

/** Components */
import IntroductionText from "@/components/common/Texts/IntroductionText";
import ExperienceTimelineText from "@/components/common/Texts/ExperienceTimelineText";
import ToolCard from "@/components/common/Cards/ToolCard";
import CertificateCard from "@/components/common/Cards/CertificateCard";
import EducationTimelineText from "@/components/common/Texts/EducationTimelineText";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function AboutPage() {
  const exps = useSelector((state: RootState) => state.exp.exps);
  const tools = useSelector((state: RootState) => state.tool.tools);
  const certs = useSelector((state: RootState) => state.cert.certs);
  const educs = useSelector((state: RootState) => state.educ.educs);

  return (
    <>
      <main className="mx-auto mb-12 mt-24 w-full max-w-screen-sm text-white lg:mb-24 lg:mt-48">
        <div className="flex flex-col p-4">
          <IntroductionText />
          <div className="mt-8 flex flex-col">
            <div className="mb-4 text-xl font-bold lg:text-2xl">
              Experiences
            </div>
            { exps.map((exp, index) => (
              <ExperienceTimelineText
                key={exp.id}
                exp={exp}
                last={index === exps.length - 1}
              />
            ))}
          </div>
          <div className="mt-8 flex flex-col ">
            <div className="mb-4 text-xl font-bold lg:text-2xl">Educations</div>
            { educs.map((educ, index) => (
              <EducationTimelineText
                key={educ.id}
                educ={educ}
                last={index === educs.length - 1}
              />
            ))}
          </div>
          <div className="mt-8 flex h-auto w-full flex-col">
            <div className="mb-4 text-xl font-bold lg:text-2xl">
              Certificates
            </div>
            <div className="flex w-full flex-col gap-4">
              { certs.map((cert) => (
                <CertificateCard key={cert.id} cert={cert} />
              ))}
            </div>
          </div>
          <div className="mt-8 flex h-auto w-full flex-col">
            <div className="mb-4 text-xl font-bold lg:text-2xl">
              Beloved Technologies & Tools
            </div>
            <div className="flex w-full flex-row flex-wrap gap-4 lg:grid lg:grid-cols-2">
              { tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
