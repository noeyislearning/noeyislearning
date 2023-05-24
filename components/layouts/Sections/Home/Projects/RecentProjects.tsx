import React from "react";

/** --- Components --- */
import ProjectCard from "@/components/common/Cards/ProjectCard";

export default function RecentProjects() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-36 pt-12 pb-24 border-b border-black">
        <div className="flex flex-col gap-2">
          <div className="pb-12">
            <div className="text-2xl font-base">Recent Projects</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
};
