"use client";
import React from "react";

/** Components */
import WorkCard from "@/components/common/Cards/WorkCard";

/** Redux related */
import type { Work } from "@/redux/works/reducer";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Works() {

  // Get works from redux store
  const works = useSelector<RootState, Work[]>(state => state.work.works);

  return (
    <div className="pt-8 pb-24 flex flex-row w-full max-w-5xl justify-between items-center">
      <div className="grid grid-cols-1 gap-6 w-full h-full md:grid-cols-2 lg:grid-cols-3">
        {works.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </div>
  )
}