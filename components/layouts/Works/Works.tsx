import React from "react";

import WorkCard from "@/components/common/Cards/WorkCard";

export default function Works() {
  return (
    <div className="pt-8 pb-24 flex flex-row w-full max-w-5xl justify-between items-center">
      <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  )
}
