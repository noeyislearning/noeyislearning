import React from "react";

/** --- Components --- */
import SectionTitleTexts from "@/components/common/Texts/SectionTitleTexts";
import ProjectCard from "@/components/common/Cards/ProjectCard";

export default function IncomingWorks() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-36 pt-12 pb-24 border-b border-black">
        <div className="flex flex-col gap-2">
          <div className="pb-12">
            <SectionTitleTexts title={"Incoming Works"}/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
};
